# Island House / Salem — Night-session continuity pack

*Purpose: let a FRESH system (no chat history) pick up the work tonight and re-join cleanly, without setting the project back. The project's memory is the shared REGISTER + the REPOS — not any one chat. Connect to those, follow the rules, and you have full continuity.*

---

## 1. Connect the shared state (this IS the context)
- **Register (source of truth):** Airtable base `appnt9vSQKrKyaKiZ` — "Steve Kirkwood — Build Projects". (Base `appxcYrYaYy1kwB0m` is a RETIRED fork — never touch it.)
- **Repos:**
  - `IslandHouse - Website` — the live standalone Island House site.
  - `steve-decision-websites` — the research + coordination hub (all the docs, personas, WHERE-WORK-LIVES).

## 2. Boot — read these first
- `steve-decision-websites/WHERE-WORK-LIVES.md` — the rules + where everything lives (the master).
- `steve-decision-websites/docs/island-house-site-architecture.md` — the site's full structure.
- `steve-decision-websites/docs/island-house-claim-reference-ledger.md` — every claim, sourced + tiered (the receipts).
- `IslandHouse - Website/owners.html` — the EDIT-stage pattern (verified blocks + provenance dots).
- `IslandHouse - Website/assets/site.js` + `site.css` — the shared shell (nav, footer, provenance engine). Link it; never fork it.
- `team/` — persona/desk prompts (Bob the builder; Mererid the two research lanes; this pack).

## 3. Standing rules — non-negotiable
- **Single register** `appnt9vSQKrKyaKiZ`. Search-before-create; reuse records by ID; never duplicate; chain of custody Source → Fact → Entity.
- **Single publisher.** No desk runs git. Write files **uncommitted**; the Master/Jarvis publisher commits and pushes.
- **Karen gates public heritage claims.** Nothing historical goes live without her sign-off + Dominic's publish tick. Nothing is public-final until the research depth is in.
- **Stages:** RECREATE → EDIT → REFLOW. Provenance = 4 dots (original / new / corrected / tradition), data-driven, tied to the ledger.
- **Guardrails (heritage):** Island House is NOT a Dylan site · "16th century" is superseded (roof timbers 1437) · Roman baths/Etruscan urn = tradition, not fact · "Cromwell's cannon-balls" = Rowland Laugharne, 1644 · Madam Bevan residence unsourced · Skyrme–de Brian marriage / Mansel lordship / Crowe→Russell "sale" refuted · charter date "late 13th c," never 1278/1290/1307 · Llareggub contested.

## 4. State of play (as of end of Fri 24 Jul, research continuing 27–28 Jul)
- **Site:** LIVE (skeleton + hardening deployed; no custom domain yet). 44-page navigable skeleton built by Bob; `index.html` on the shell; favicon/meta/OG/404/sitemap/robots done.
- **Edit stage:** IN PROGRESS. `owners.html` is the finished worked example / pattern. History and Research pages next; the rest follow.
- **Images:** placeholders keyed to `docs/site-capture/media-manifest.csv` — awaiting Dominic's WordPress Media Library export.
- **Research:** Mererid runs two lanes (Island House / House of Culture) into the register; it is mature — Docs to ~240 as of 28 Jul. Four seeded Island House threads + four House-of-Culture threads open.
- **360 tour:** Kuula (paid) — awaiting the photo upload, then hotspot linking.

## 5. TONIGHT'S CREATION GOAL — fill this in before you start
> e.g. "Continue the EDIT stage — build the History page to the owners.html pattern," or "Draft the book's 'Trade & the Port' section from the register," or "…"
Do it to the pattern in owners.html / the ledger. Facts come from the register (search first), tiered honestly; disputed claims reframed per the guardrails; anything public stays behind Karen + the publish tick. Write files uncommitted.

## 6. HAND BACK — so the day system picks up with zero loss
Before you finish:
1. **Log a Handover row** — base `appnt9vSQKrKyaKiZ`, table `tblOJdMmjp5z7przv`, Type "Handover", dated today: what you did, what's in flight, and "FIRST THING NEXT: …".
2. **Log any doc** in Docs — Index (`tblk4jRBUX6bnHTiD`) with its repo path in "Where it lives".
3. **Leave files uncommitted** and add a one-line "AWAITING PUBLISH" note listing exactly which files/changes are ready, so the publisher ships them.
4. Keep the Owner/label fields consistent so it's clear who did what.

That's the whole handshake: shared register + repos + a Handover line = full continuity, no chat history required.
