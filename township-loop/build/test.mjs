#!/usr/bin/env node
// test.mjs — proves the gate, the solemn rule and the Q&A behave as specified.
// Reports the TRUE state. Any failure exits non-zero.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildSnapshot, assertCanonicalBase, answerQuestion, isSolemn, parseScript, beatPasses,
} from "./loop-core.mjs";

const __dir = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(join(__dir, "data-raw.json"), "utf8"));

let pass = 0, fail = 0;
function ok(name, cond, detail = "") {
  if (cond) { pass++; console.log(`  ✓ ${name}`); }
  else { fail++; console.log(`  ✗ ${name}  ${detail}`); }
}

console.log("\n=== 1. BASE ASSERTION (a stray base must be impossible to read) ===");
ok("canonical base is accepted", (() => { try { assertCanonicalBase(raw); return true; } catch { return false; } })());
ok("wrong baseId is refused", (() => {
  try { assertCanonicalBase({ ...raw, baseId: "appDECOYDECOY0001" }); return false; }
  catch (e) { return /GATE ABORT/.test(e.message); }
})());
ok("wrong table id is refused", (() => {
  try { assertCanonicalBase({ ...raw, tables: { ...raw.tables, beats: "tblDECOY000000001" } }); return false; }
  catch (e) { return /GATE ABORT/.test(e.message); }
})());

console.log("\n=== 2. PUBLISH GATE ===");
const pub = buildSnapshot(raw, "public");
const prev = buildSnapshot(raw, "preview");
ok("PUBLIC build is EMPTY (nothing Approved-for-site)", pub.beatCount === 0, `got ${pub.beatCount}`);
ok("PREVIEW build has exactly 6 Ready beats", prev.beatCount === 6, `got ${prev.beatCount}`);
ok("PREVIEW spans 5 stops (Globe carries 2)", prev.stopCount === 5, `got ${prev.stopCount}`);
ok("PREVIEW is watermarked", prev.watermark === true);

const previewBeatNames = prev.stops.flatMap((s) => s.beats.map((b) => b.name)).sort();
const expected = [
  "His favourite pub — Brown's",
  "Laugharne Castle — the 1644 siege",
  "The Cross — at the Grist",
  "The assembly rooms — at the Globe",
  "The butcher's shop — at the Globe",
  "The view that earned a poem — Over Sir John's Hill",
].sort();
ok("PREVIEW contains exactly the expected Ready beats", JSON.stringify(previewBeatNames) === JSON.stringify(expected),
  `\n     got: ${JSON.stringify(previewBeatNames)}`);

// Nothing embargoed/draft/blocked leaked in
const leaked = ["Town Hall", "Island House", "Boathouse", "grave", "Strand", "gazebo"]
  .filter((needle) => previewBeatNames.some((n) => n.toLowerCase().includes(needle.toLowerCase())));
ok("no Draft / Embargoed / Blocked beat leaked into PREVIEW", leaked.length === 0, `leaked: ${leaked}`);

// Every fact in the preview is a Verified tier
const allFactsVerified = prev.stops.every((s) => s.beats.every((b) =>
  b.facts.every((f) => f.status === "Verified" || f.status === "Verified-strong")));
ok("every fact behind a live beat is a Verified tier", allFactsVerified);

console.log("\n=== 3. RENDER-TIME RE-CHECK (belt and braces) ===");
// Simulate a tampered public snapshot that wrongly contains a Ready beat whose stop is unapproved.
const factsById = Object.fromEntries(raw.facts.map((f) => [f.id, f]));
const globeStop = raw.stops.find((s) => s.id === "reczyugvnKkJu4INh");
const butcher = raw.beats.find((b) => b.id === "reckjb0pwQ4jUzRnw");
ok("render gate REJECTS a Ready beat on an unapproved stop in public mode",
  beatPasses(butcher, globeStop, factsById, "public").ok === false);
ok("render gate ACCEPTS the same beat in preview mode",
  beatPasses(butcher, globeStop, factsById, "preview").ok === true);
ok("render gate ACCEPTS it in public mode once the stop is ticked",
  beatPasses(butcher, { ...globeStop, approvedForSite: true }, factsById, "public").ok === true);

console.log("\n=== 4. SOLEMN RULE (fails safe; suppresses look-for) ===");
ok("unset tone is treated as Solemn", isSolemn({ tone: "" }) === true);
ok("null tone is treated as Solemn", isSolemn({}) === true);
ok("the grave stop is Solemn", isSolemn(raw.stops.find((s) => s.name.includes("grave"))) === true);
ok("the Globe stop is Open", isSolemn(raw.stops.find((s) => s.id === "reczyugvnKkJu4INh")) === false);
// Prove suppression on a LIVE beat: flip Brown's (a Ready beat WITH a look-for) to Solemn,
// rebuild, and confirm the look-for is stripped while the narration survives.
const solemnRaw = { ...raw,
  stops: raw.stops.map((s) => s.id === "recxRAz5yMH7ZEYn5" ? { ...s, tone: "Solemn" } : s),
};
const solemnSnap = buildSnapshot(solemnRaw, "preview");
const brownStopOut = solemnSnap.stops.find((s) => s.id === "recxRAz5yMH7ZEYn5");
ok("a solemn stop, when live, carries no look-for prompt",
  brownStopOut && brownStopOut.solemn === true && brownStopOut.beats.every((b) => b.lookFor === ""));
ok("...but the narration still survives at a solemn stop",
  brownStopOut && brownStopOut.beats.every((b) => b.narration.length > 0));
// And a non-solemn beat DOES keep its look-for
const brownParsed = parseScript(raw.beats.find((b) => b.id === "recdgepPMsk84lMdJ").scriptEN);
ok("a non-solemn beat keeps its look-for prompt", brownParsed.lookFor.length > 0);

console.log("\n=== 5. GROUNDED Q&A (only verified facts; cites; honest silence) ===");
const qa = prev.qaFacts;
const a1 = answerQuestion("Who was the butcher at the Globe?", qa);
ok("answers a butcher question from a verified fact", a1.kind === "answer" && /Gleed/.test(a1.text));
ok("that answer carries a citation", a1.facts.length > 0 && a1.facts[0].sources.length > 0);

const a2 = answerQuestion("When did the castle surrender?", qa);
ok("answers the siege question", a2.kind === "answer" && /1644/.test(a2.text));

const a3 = answerQuestion("What is the airspeed velocity of a swallow?", qa);
ok("says the record doesn't tell us when silent", a3.kind === "silent");

console.log("\n=== 6. DO-NOT-CLAIM (Doc 140) ===");
const b1 = answerQuestion("Was Butcher Beynon based on the Globe's butcher?", qa);
ok("intercepts the Beynon claim", b1.kind === "corrected" && b1.rule === "beynon");
const b2 = answerQuestion("Did Dylan drink at the Globe?", qa);
ok("corrects 'Dylan drank at the Globe'", b2.kind === "corrected" && b2.rule === "dylan-globe");
const b3 = answerQuestion("Are the Globe's cellars medieval?", qa);
ok("refuses the medieval cellars claim", b3.kind === "corrected" && b3.rule === "medieval-cellars");
const b4 = answerQuestion("Did Dylan write in the gazebo?", qa);
ok("refuses the gazebo-writing claim", b4.kind === "corrected" && b4.rule === "gazebo-wrote");

console.log("\n=== 7. Q&A ON THE PUBLIC (EMPTY) BUILD ===");
const e1 = answerQuestion("Tell me about Brown's", pub.qaFacts);
ok("empty build answers honestly with nothing published", e1.kind === "empty");

console.log(`\n${"=".repeat(60)}\nRESULT: ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
