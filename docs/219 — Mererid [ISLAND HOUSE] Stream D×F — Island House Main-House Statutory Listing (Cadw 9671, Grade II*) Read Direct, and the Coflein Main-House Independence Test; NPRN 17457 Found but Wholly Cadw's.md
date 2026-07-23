# Doc 219 — Mererid [ISLAND HOUSE] Stream D×F

## The Island House main-house statutory listing (Cadw 9671, Grade II\*) read direct, and the Coflein/RCAHMW main-house independence test run with a JS-capable browser

**Persona:** Mererid (archival historian — Island House branch)
**Date:** 23 July 2026 (scheduled, unattended run)
**Register base:** `appnt9vSQKrKyaKiZ` (asserted against the table list; retired fork base never touched)
**Thread:** `reca2FzWPsKJpGowJ` (created, Claimed → Done)
**Target provenance:** Doc 185 ranked next-target #1 — "run the Coflein/RCAHMW MAIN-HOUSE independence test with a JS-capable browser… establish whether any Coflein building record for the main house exists distinct from the curtilage NPRNs (31614/23035/266112) and whether it is independent of Cadw." Doc 185 could not run it because Coflein site pages were JavaScript-rendered and returned no body to web-fetch.

---

## 1. Why this target

Doc 185 read three second-hand or semi-primary objects for the house's fabric (Cadw *Open Doors*, SPAB casework, SAVE *Building of the Month*) and Pevsner at one remove, and carried the resulting fabric facts (Grade, date, plan, "crenellated Gothic gatehouse") at **Referenced-pending**. It also left two divergences open: SPAB's "Roman baths" and SAVE's "cannon fire by Cromwell's troops." The one object it had **not** read was the house's own **statutory listing** (Cadw 9671) and the RCAHMW/Coflein main-house record. Both are open-source and, as this run shows, both are now readable at object level. This pass reads them, upgrades the fabric facts from second-hand to primary, resolves the two divergences to their true source, and answers the standing method question about Coflein.

## 2. The statutory listing read at object level (Cadw 9671)

Read via the British Listed Buildings verbatim mirror of the Cadw *Cof Cymru* full report (`britishlistedbuildings.co.uk/300009671`; the primary `cadwpublic-api.azurewebsites.net…FullReport?id=9671` route is logged but was outside the fetch-provenance set this pass).

- **Designation.** Grade **II\***; Cadw ref **9671**; **listed 25 September 1986**. Building class Domestic; also known as *Island House, Wogan Street*. Located "in the lower part of the town, below and west of the castle, on the SE side of the street, close to the River Coran"; grid SN301107. The present description reflects a **2007 re-inspection** — a "pyramidal conservatory in angle recorded in 1986 list description" was "not seen in 2007." So there are two Cadw texts in play (1986 original, 2007 revision); the live one is 2007. *(Fact F219-1, Verified.)*
- **Build sequence.** "A substantial house with C16-C17 origins, and a complex sequence of addition and remodelling especially in the early C19." Two parallel ranges aligned with the street plus a large rear wing. The street range is C16-C17 with a probably-contemporary storeyed porch to the right and a further NE bay added soon after; the **large rear wing (an original kitchen) may even pre-date the front range**; the parallel rear range is early-C19; a grand staircase was inserted early-C19 (in the position of an earlier gable-end chimney) **re-using elements of an original C17 stair**; service wings are mid-C19. *(F219-2, Verified.)*
- **Reason for listing.** II\* "as the substantial remains of an important **sub-medieval** building on an early settlement site close to the castle," with high-quality detail, particularly internally, from the early-C19 remodelling. *(F219-3, Verified.)* The authoritative framing is therefore **sub-medieval / C16-C17 — not "medieval" and not "13th-century."** Guardrail-consistent.
- **The gatehouse.** "Early C19 Picturesque Gothic gateway with crenellated parapet over arched doorway, and low flanking tower, also with crenellated parapet and narrow gothic windows," adjoining the house to the NE and linking it to the separately-listed garage. This puts Doc 185's second-hand "crenellated Gothic gatehouse" on the primary record, and dates it **early C19** — i.e. a Picturesque-Gothic conceit, not a medieval survival. *(F219-4, Verified.)*
- **Dating anchors.** The listing cites an **1830 view of the castle by Ince** (reproduced in Lloyd's *History of Carmarthenshire*) and an **1856 sketch** (reproduced in Mary Curtis' volume on the antiquities of Laugharne) as showing the house in approximately its present form; and a **date of 1658 over the yard door** at the front. *(F219-5, Verified.)*

## 3. The two divergences resolved to their true source — **Mary Curtis**

The listing itself names the origin of both stories Doc 185 held open, and it is a **single source**: Mary Curtis.

- **Roman baths (SPAB's divergence).** The Cadw text: Mary Curtis "is the only source also for the tradition that Roman remains including baths were discovered here in **1818**." So the Roman-baths claim is (a) single-sourced to Curtis, (b) dated 1818, and (c) carried by the statutory record explicitly as a *tradition*, not fact. Logged **Tradition** (F219-6), refining Doc 185's SPAB Referenced-pending; **not** promoted to any "Roman Laugharne" fact.
- **"Cromwell's cannon" (SAVE's divergence).** The authoritative listing names **neither Cromwell nor cannon**. It records only Curtis' *suggestion* that the house "once extended beyond the storeyed porch in a longer front range, destroyed in the siege of the castle during the Civil War." SAVE's "damaged by cannon fire by Cromwell's troops … 1644" is therefore unsupported by the statutory record and is logged **Refuted** (F219-7). Guardrails held: the siege was a week at the end of October 1644; the besieger was **Rowland Laugharne**, not Cromwell; and even the lost-front-range idea is Curtis' conjecture, not established fact.

Mary Curtis is registered as a new entity (`recTHwC2LjyiiwWQo`) precisely because she is the provenance root that must be named whenever either story is told.

## 4. The Coflein main-house independence test — the method question answered

Doc 185's block no longer holds. **Coflein site-record pages render server-side** and are readable at object level, both by direct web-fetch (the garden record) and via a JS-capable browser (the search index and the house record). This is a method finding that **unblocks all future Coflein reads across the programme** (F219-11, Verified).

A Coflein site search for *Island House Laugharne* returns **exactly four** site records — the full RCAHMW NPRN family:

| NPRN | Title | Type | Period |
|------|-------|------|--------|
| **17457** | **Island House** | **HOUSE** | Post Medieval |
| 23035 | Island House Gazebo | FOLLY | Post Medieval |
| 31614 | Island House: Garage and Boundary | OUTBUILDING | Post Medieval |
| 266112 | Island House, Garden | COUNTRY HOUSE GARDEN | Post Medieval |

**Part 1 — a main-house record exists.** Docs 159/185 held only 31614/23035/266112 and called them "curtilage"; they had **not** identified the main-house record. It exists: **NPRN 17457, "Island House," type HOUSE, Post Medieval, grid SN3012010750** (F219-8, Verified). (31614 pairs with Cadw 9673 garage + 9672 boundary wall; 23035 is the garden gazebo; 266112 is the garden.)

**Part 2 — but it is not independent of Cadw.** NPRN 17457's description field reads **"No description available,"** and its Related Archives tab holds **exactly ten items, all from the CLBN (Cadw Listed Buildings 35mm Colour Negative Collection), produced by William R. Hughes, Cadw, in December 1985–January 1986** — the photographic survey made for the 1986 listing (front, rear and "Laugharne Castle from Island House" views; one negative mislabelled "Logan Street" for Wogan Street). The Coflein main-house record therefore corroborates Cadw 9671 only as to identity, type and location; it is an **index/archive stub dependent on the Cadw listing**, not an independent RCAHMW assessment (F219-9, Verified). William R. Hughes is registered (`rec0aJqQEcsxZpKtv`).

**The only substantive RCAHMW description** in the whole NPRN family is on the **garden** record (266112): the garden as depicted on the 2nd-edition OS 25-inch map (Carms XLV.14, 1906) — kitchen garden, summerhouse, woodland and orchard — recorded by C. S. Briggs, 13 July 2005 (F219-10, Verified).

## 5. What this settles, and what it does not

**Settled.** The house's Grade, listing date, build sequence, sub-medieval framing, gatehouse date and dating anchors now rest on the statutory record, not on Pevsner/SAVE at one remove. The Roman-baths and "Cromwell's cannon" stories are traced to a single antiquarian source (Mary Curtis) and tiered honestly. The Coflein main-house record is located (17457) and shown to be Cadw-dependent. The Coflein-JS block is lifted.

**Not settled (archive-day / future runs).** The 1986 *original* Cadw list description (vs. the 2007 revision); the exact title and date of Mary Curtis' volume and the primary text of her Roman-baths and siege passages; the digitised CLBN negatives themselves (not yet ordered — cf. the standing CLBN order, Docs 187/189); and the primary Cadw *Cof Cymru* API report (route logged, provenance-blocked this pass).

## 6. Guardrails observed

Strictly in-lane (the house's own fabric and records). No town-fabric, Globe, Corporation or Castle target. No Dylan content — Island House is not a Dylan site. No charter date, no siege-day figure beyond the corrected "a week at the end of October 1644," no name-meaning, no cellar dating, no accessibility claim. "Sub-medieval / C16-C17" used, never "13th-century." Base ID asserted; retired fork untouched; the public History Trail untouched. Nothing tiered here is court-grade.

---

### Chain of custody (base `appnt9vSQKrKyaKiZ`, additive-only)

- **Sources (4, all Read, T1 primary):** Cadw 9671 statutory listing `rec510JTUIfp7sA4u`; Coflein NPRN 17457 main-house record `rec76ckRAXwQoCO21`; Coflein NPRN 266112 garden record `recLX0wutxhe7m7mP`; Coflein site-search enumeration (the 4-record family) `recQezOB1YsUxVZVa`.
- **Entities (2 new):** Mary Curtis, antiquary of Laugharne `recTHwC2LjyiiwWQo`; William R. Hughes, Cadw listing photographer `rec0aJqQEcsxZpKtv`. Existing Island House entity `recB7YRBotexm0rSr` fact-linked only, not edited.
- **Facts F219-1…11:** `recGSeU7SWywWSohP`, `rechpuOVbEHxjzgSK`, `recHjgQFKRjaeUwT0`, `recsPgEGf11yjAFSJ`, `reckHTgS8qrKjpuMi`, `recao171fsLFQrhF1`, `recwK9U4RBCG6iWqY`, `recpJNEbFilTLNAuA`, `rec6l8yyofDiXYNPB`, `recA53F9AiMqMjjMO`, `recajoi9WbbjCeCj5` — 8 Verified, 1 Tradition (Roman baths), 1 Refuted (SAVE Cromwell's-cannon), plus the method finding.
- **Docs — Index row:** `recsNWfE2HfxWP73D` (claimed before writing; updated with this path).

**DO NOT COMMIT / DO NOT PUSH.** Written to the repo and left **uncommitted** for Jarvis's 21:00 path-scoped commit. No `git add` / `git commit` / `git push` performed.
