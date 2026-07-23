#!/usr/bin/env node
// snapshot.mjs — builds the published snapshots the client will consume.
// Reads the canonical export, asserts the base, applies the ANDed publish gate,
// and writes BOTH the public build and the watermarked preview build.
//
//   node build/snapshot.mjs
//
// In production, swap readRaw() for a live Airtable pull that itself uses PIN.baseId
// and cross-checks the returned base stamp before returning — same assertion, live data.

import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildSnapshot, assertCanonicalBase, PIN } from "./loop-core.mjs";

const __dir = dirname(fileURLToPath(import.meta.url));
const RAW = join(__dir, "data-raw.json");
const OUT = join(__dir, "..", "public");

function readRaw() {
  const raw = JSON.parse(readFileSync(RAW, "utf8"));
  assertCanonicalBase(raw); // refuse a stray base before doing anything else
  return raw;
}

function main() {
  const raw = readRaw();
  mkdirSync(OUT, { recursive: true });

  const publicSnap = buildSnapshot(raw, "public");
  const previewSnap = buildSnapshot(raw, "preview");

  writeFileSync(join(OUT, "snapshot.public.json"), JSON.stringify(publicSnap, null, 2));
  writeFileSync(join(OUT, "snapshot.preview.json"), JSON.stringify(previewSnap, null, 2));
  // Publish a copy of the gate logic INTO the client scope so the app is self-contained
  // and fully cacheable offline (the SW scope is /public/).
  copyFileSync(join(__dir, "loop-core.mjs"), join(OUT, "loop-core.mjs"));

  console.log("Snapshot build complete — base " + PIN.baseId);
  console.log("-".repeat(60));
  report("PUBLIC  (what the world sees)", publicSnap);
  report("PREVIEW (owner review, watermarked)", previewSnap);
  console.log("-".repeat(60));
  console.log(`PUBLIC beats live:  ${publicSnap.beatCount}  ` +
    (publicSnap.beatCount === 0 ? "→ correct: no stop is Approved-for-site yet." : ""));
  console.log(`PREVIEW beats live: ${previewSnap.beatCount}  (Ready + all-facts-verified, awaiting the tick)`);
}

function report(label, snap) {
  console.log(`\n${label}: ${snap.stopCount} stop(s), ${snap.beatCount} beat(s)`);
  for (const s of snap.stops) {
    console.log(`  • ${s.name}${s.solemn ? "  [SOLEMN]" : ""}`);
    for (const b of s.beats) {
      console.log(`      - ${b.name}  (${b.facts.length} fact${b.facts.length === 1 ? "" : "s"}${b.lookFor ? ", look-for" : ", no look-for"})`);
    }
  }
}

main();
