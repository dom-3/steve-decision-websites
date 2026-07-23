// loop-core.mjs — The Globe, House of Culture · Township Loop
// Single source of truth for the publish gate and the grounded Q&A.
// Imported by BOTH the snapshot generator (build time) and the browser app (render time),
// so the gate is defined once and enforced in both places.

// ---------------------------------------------------------------------------
// 1. PINNED CANONICAL IDS  — a stray or duplicate base must be impossible to read.
// ---------------------------------------------------------------------------
export const PIN = Object.freeze({
  baseId: "appnt9vSQKrKyaKiZ",
  stops:  "tbl95fvlLEk4zQFDG",
  beats:  "tblHERGYqDuAS8RNZ",
  facts:  "tbloFM9ZTeT4LeSVQ",
});

// The ONLY fact statuses that may ever be published (Doc 159 §0.1 mapping,
// awaiting Mererid's formal sign-off but conservative by construction:
// only the two green "Verified" tiers pass; Referenced-pending / Tradition / Refuted do NOT).
export const PUBLISHABLE_FACT_STATUSES = Object.freeze(["Verified", "Verified-strong"]);

// Beat status that means Mererid has cleared it for the site.
export const READY_BEAT_STATUS = "Ready";

// ---------------------------------------------------------------------------
// 2. BUILD-TIME BASE ASSERTION.  Throws — hard — if fed anything but the canonical base.
// ---------------------------------------------------------------------------
export function assertCanonicalBase(raw) {
  if (!raw || typeof raw !== "object") {
    throw new Error("GATE ABORT: no data supplied to the snapshot builder.");
  }
  if (raw.baseId !== PIN.baseId) {
    throw new Error(
      `GATE ABORT: refusing to build from base '${raw.baseId}'. ` +
      `Only the canonical base ${PIN.baseId} may be read. A stray or duplicate base is not permitted.`
    );
  }
  const t = raw.tables || {};
  for (const key of ["stops", "beats", "facts"]) {
    if (t[key] !== PIN[key]) {
      throw new Error(
        `GATE ABORT: table '${key}' is '${t[key]}', expected the pinned ${PIN[key]}. ` +
        `The export does not come from the canonical tables.`
      );
    }
  }
  return true;
}

// ---------------------------------------------------------------------------
// 3. THE PUBLISH GATE.  ANDed. Evaluated identically at build and at render.
// ---------------------------------------------------------------------------
// A beat is CONTENT-READY when: it is Ready AND it has >=1 linked fact
// AND every linked fact is a publishable ("Verified") status.
export function beatContentReady(beat, factsById) {
  if (!beat || beat.status !== READY_BEAT_STATUS) {
    return { ok: false, reason: `beat status is '${beat ? beat.status : "missing"}', not ${READY_BEAT_STATUS}` };
  }
  if (!beat.factIds || beat.factIds.length === 0) {
    return { ok: false, reason: "beat has no linked facts — nothing to stand on" };
  }
  for (const fid of beat.factIds) {
    const f = factsById[fid];
    if (!f) return { ok: false, reason: `linked fact ${fid} is missing from the export` };
    if (!PUBLISHABLE_FACT_STATUSES.includes(f.status)) {
      return { ok: false, reason: `linked fact ${fid} is '${f.status}', not publishable` };
    }
  }
  return { ok: true, reason: "ready and all facts verified" };
}

// The FULL public gate = content-ready AND the stop's human "Approved for site" tick.
// mode "public"  → both conditions required.
// mode "preview" → content-ready only (the tick is what the owner is about to give),
//                  so the owner can review each Ready-but-unticked beat before ticking it.
export function beatPasses(beat, stop, factsById, mode) {
  const content = beatContentReady(beat, factsById);
  if (!content.ok) return { ok: false, reason: content.reason };
  if (mode === "public") {
    if (!stop || stop.approvedForSite !== true) {
      return { ok: false, reason: "stop's 'Approved for site' box is not ticked" };
    }
  }
  return { ok: true, reason: content.reason };
}

// Solemn resolution — MANDATORY, fails safe. Unset tone is treated as Solemn.
export function isSolemn(stop) {
  if (!stop || stop.tone == null || stop.tone === "") return true; // fail safe
  return stop.tone === "Solemn";
}

// ---------------------------------------------------------------------------
// 4. SCRIPT PARSE.  Splits the durable narration from the "LOOK FOR:" prompt,
//    so the prompt (a game-layer element) can be suppressed at solemn stops.
// ---------------------------------------------------------------------------
export function parseScript(scriptEN) {
  if (!scriptEN) return { narration: "", lookFor: "" };
  const marker = /LOOK FOR:/i;
  const m = scriptEN.match(marker);
  if (!m) return { narration: scriptEN.trim(), lookFor: "" };
  const idx = m.index;
  return {
    narration: scriptEN.slice(0, idx).trim(),
    lookFor: scriptEN.slice(idx + m[0].length).trim(),
  };
}

// ---------------------------------------------------------------------------
// 5. SNAPSHOT BUILDER.  Emits the client-facing snapshot for a given mode.
//    The client consumes THIS, never live Airtable.
// ---------------------------------------------------------------------------
export function buildSnapshot(raw, mode) {
  assertCanonicalBase(raw);
  if (mode !== "public" && mode !== "preview") {
    throw new Error(`buildSnapshot: unknown mode '${mode}'`);
  }
  const factsById = Object.fromEntries(raw.facts.map((f) => [f.id, f]));
  const beatsByStop = {};
  for (const b of raw.beats) (beatsByStop[b.stopId] ||= []).push(b);

  const liveFactIds = new Set();
  const stopsOut = [];

  for (const stop of [...raw.stops].sort((a, b) => (a.order || 0) - (b.order || 0))) {
    const solemn = isSolemn(stop);
    const beatsOut = [];
    for (const beat of beatsByStop[stop.id] || []) {
      const gate = beatPasses(beat, stop, factsById, mode);
      if (!gate.ok) continue; // excluded from the snapshot entirely
      const { narration, lookFor } = parseScript(beat.scriptEN);
      const facts = beat.factIds.map((fid) => {
        const f = factsById[fid];
        liveFactIds.add(fid);
        return { id: fid, claim: f.claim, status: f.status, sources: f.sources };
      });
      beatsOut.push({
        id: beat.id,
        name: beat.name,
        layer: beat.layer,
        status: beat.status,
        narration,                                   // L1
        lookFor: solemn ? "" : lookFor,              // suppressed at solemn stops
        scriptCY: beat.scriptCY || "",
        facts,                                        // L3 evidence
      });
    }
    if (beatsOut.length === 0) continue; // no live beats → stop not shown
    stopsOut.push({
      id: stop.id,
      order: stop.order,
      name: stop.name,
      type: stop.type,
      tone: solemn ? "Solemn" : "Open",
      solemn,
      unlock: stop.unlock,
      accessNotes: stop.accessNotes || "",
      beats: beatsOut,
    });
  }

  // Q&A corpus = ONLY the facts that belong to beats that went live in THIS snapshot.
  const qaFacts = raw.facts
    .filter((f) => liveFactIds.has(f.id))
    .map((f) => ({ id: f.id, claim: f.claim, status: f.status, sources: f.sources }));

  return {
    schema: "township-loop/1",
    mode,
    watermark: mode === "preview",
    baseId: raw.baseId,
    generatedAt: new Date().toISOString(),
    trailTitle: "The Township Loop — Laugharne",
    stopCount: stopsOut.length,
    beatCount: stopsOut.reduce((n, s) => n + s.beats.length, 0),
    stops: stopsOut,
    qaFacts,
  };
}

// ---------------------------------------------------------------------------
// 6. DO-NOT-CLAIM (Doc 140).  Hard guardrails the Q&A must honour.
//    Each rule intercepts a banned line of questioning and returns a correction,
//    never a fabricated affirmation.
// ---------------------------------------------------------------------------
export const DO_NOT_CLAIM = [
  {
    id: "beynon",
    test: (q) => /beynon/.test(q) || (/(butcher|under milk wood|character)/.test(q) && /(dylan|beynon|based|inspired|collect)/.test(q)),
    reply: "The record doesn't support a link between the Globe's butcher's shop and Dylan Thomas or Under Milk Wood. Richard Hughes recorded that Dylan didn't use actual Laugharne characters. The butchering past belongs to the Globe's own history — the Gleed family shop, which closed in 1991.",
  },
  {
    id: "dylan-globe",
    test: (q) => /dylan/.test(q) && /globe/.test(q) && /(drink|drank|drunk|pub|pint|bar)/.test(q),
    reply: "The record doesn't place Dylan Thomas drinking at the Globe — his pub was Brown's Hotel, which the Cadw listing confirms he frequented.",
  },
  {
    id: "medieval-cellars",
    test: (q) => /(cellar|vault)/.test(q) && /(medieval|13th|thirteenth|ancient|oldest)/.test(q),
    reply: "The record doesn't date the Globe's cellars to the medieval period. They are described only as atmospheric barrel-vaulted cellars.",
  },
  {
    id: "gazebo-wrote",
    test: (q) => /gazebo/.test(q) && /(wrote|writing|write|poem|dylan)/.test(q),
    reply: "The record doesn't tell us that Dylan Thomas wrote in the Castle House gazebo — no verified source establishes it, so we don't claim it.",
  },
];

// ---------------------------------------------------------------------------
// 7. GROUNDED Q&A.  Retrieval only. It can output nothing that is not a
//    verbatim verified claim from the live snapshot, plus its source.
//    No generative text. If nothing matches, it says so honestly.
// ---------------------------------------------------------------------------
const STOP_WORDS = new Set("the a an of to in on at is was were are and or for with did do does what when where who how why which that this it its his her their they them he she you your our we as by from over near".split(" "));

export function tokenize(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, " ")
    .split(/\s+/)
    .filter((w) => w && w.length > 2 && !STOP_WORDS.has(w));
}

export function answerQuestion(question, qaFacts, opts = {}) {
  const qNorm = (question || "").toLowerCase();
  const threshold = opts.threshold ?? 1;

  // (a) Do-not-claim guardrails run FIRST — they win over any retrieval.
  for (const rule of DO_NOT_CLAIM) {
    if (rule.test(qNorm)) {
      return { kind: "corrected", rule: rule.id, text: rule.reply, facts: [] };
    }
  }

  // (b) Nothing published yet → be honest about it.
  if (!qaFacts || qaFacts.length === 0) {
    return {
      kind: "empty",
      text: "There's nothing on the public trail yet, so I have no verified record to answer from. Once the first stops are approved, I'll answer only from what we can source.",
      facts: [],
    };
  }

  // (c) Retrieval over verified claims only.
  const qTokens = tokenize(question);
  if (qTokens.length === 0) {
    return { kind: "silent", text: "Ask me about a place, a person, or something you can see on the trail, and I'll answer from the record.", facts: [] };
  }
  const scored = qaFacts.map((f) => {
    const fTokens = new Set(tokenize(f.claim));
    let score = 0;
    for (const t of qTokens) if (fTokens.has(t)) score++;
    return { f, score };
  }).sort((a, b) => b.score - a.score);

  const top = scored[0];
  if (!top || top.score < threshold) {
    return {
      kind: "silent",
      text: "The record doesn't tell us. I only answer from claims we've verified and sourced, and I don't have one that covers that.",
      facts: [],
    };
  }
  // Return every fact tied on the top score (so multi-fact answers stay whole), capped.
  const best = scored.filter((s) => s.score === top.score).slice(0, 3).map((s) => s.f);
  return {
    kind: "answer",
    text: best.map((f) => f.claim).join(" "),
    facts: best.map((f) => ({ id: f.id, status: f.status, sources: f.sources })),
  };
}
