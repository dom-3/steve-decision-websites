# Doc HoC-299 — The Boat House (Cadw 9627) and Dylan Thomas's tool-shed Study (Cadw 9628), Laugharne

**Persona:** Mererid [HOUSE OF CULTURE] · **Streams:** G — Literary Town × D — Great Houses
**Date:** 31 July 2026 · **Status:** written UNCOMMITTED (for Jarvis's 21:00 path-scoped commit — this run does not `git add`/`commit`/`push`)
**Register:** base `appnt9vSQKrKyaKiZ` — Source `rec0bfDTpXChoh1J1`; Entities `rece417zPCMSfB0ut` (Boat House 9627), `recyxM4obMdtjThy7` (tool-shed Study 9628); Thread `recMJkgROc6pgVORB`; Facts `rec18XfQBCGH4UqEA`, `rechOyiMHKADKAwYV`, `rec1okOHXkLgBCcV6`, `recEOrMSvkBgTb6YU`, `recupmKtozOwsnUd6`, `rec83ZucGGCunCaZc`.

---

## Why this target

The desk has object-read the town's other Dylan-associated listed buildings by anchoring the literary association to the building's **own** statutory record — Brown's Hotel (Doc 194), Castle House and the Gazebo (Doc 210), the Manse and Pelican (Doc 226), Sea View (Doc 280). The one glaring gap was the Boat House itself — the single most-visited heritage building in Laugharne and the obvious central stop of the Literary-Town trail — which had **no** Entity, Source or Fact in the register before this run. This pass fills that gap from the two Cadw listings that cover the site, and it is squarely a House-of-Culture town-fabric target: the primary connection is the building, read from its statutory designation, not any Island-House thread.

## What was read

The statutory listing text for **both** structures, at object level, via the British Listed Buildings mirror of the Cadw record:

- **The Boat House** — Cadw LB **9627**, Grade II, listed **10 July 1968**, Building Class Domestic (`britishlistedbuildings.co.uk/300009627-the-boat-house-laugharne-township`).
- **Dylan Thomas's tool-shed Study** — Cadw LB **9628**, Grade II, listed **10 July 1968**, Building Class Domestic (`britishlistedbuildings.co.uk/300009628-dylan-thomass-tool-shed-study-laugharne-township`).

The authoritative Cadw Cof Cymru text is reachable at the FullReport API (ids 9627 / 9628), linked from each mirror page; it was **not** fetched this run (the URL fell outside the fetch-provenance set) and is logged as the back-check.

## Findings

### 1. Two separate Grade II listings, ~90 m apart
The house and the writing-shed are **two distinct designations**, both listed on 10 July 1968. The Boat House stands at OS grid **SN 306 110** (approx. 51.7722, −4.4561); the tool-shed Study sits on the cliff edge to the south-west at **SN 305 110 / SN 30568 10987** (approx. 51.7719, −4.4571). Treating them as one listing — or as one "stop" — would mis-state the record; for the trail they are a paired but separately-designated house-and-shed.

### 2. The house — fabric and date (Cadw 9627)
Early C19 fabric, **"known to have existed by 1834,"** with alterations in **1889**. A 2-storey, 3-2-window rendered front with plinth; slate roof and brick end chimney stacks; small-pane sash windows with margins flanking a fixed paired-light window over a boarded door; casement windows to a 3-storey rear with an outside staircase and verandah. It stands at right angles to the foreshore, with a revetment wall to the NW end, and is reached by a modern staircase. Also recorded as **"Dylan a'r Boathouse"** and **"The Boat House, Dylan's Walk."**

The **"existed by 1834"** phrase is a useful cross-link: 1834 is the year of the Corporation survey of Laugharne that Cadw cites across the town's listings, and which is itself an open register thread (identifying that survey as a document). The Boat House is therefore one more building the survey is being read to date.

### 3. The shed — the writing study (Cadw 9628)
The tool-shed on the cliff edge SW of the house: single-storey, pitched roof, vertically boarded, with casement windows and double doors to the W end. Its interior is **"retained as Dylan Thomas kept it,"** and the listing records that he called it his **"water and tree room on the cliff."** It was **"originally built as a garage for Laugharne's first car"** — a town-fabric origin recorded in the statutory text (attributed to Cadw; the "first car" detail is the listing's own assertion and is not independently corroborated here).

### 4. The Dylan residence — anchored to the statutory record (Cadw 9627)
The listing records the Boat House as the home of Dylan Thomas **from May 1949 until his death in 1953**, **bought for him by Margaret Taylor for £2,500**, and quotes his description of it as his **"sea-shaken house on a breakneck of rocks"** (a phrase from his own *Author's Prologue*, 1952). This is logged the way Brown's was in Doc 194 — the association carried by the building's own designation, not asserted around it. Unlike Island House, the Boat House genuinely **is** a documented Dylan site.

### 5. Data-integrity: the mirror conflates the two listings
On the British Listed Buildings mirror the descriptive fields of 9627 (house) and 9628 (tool-shed) are **cross-contaminated** — *each* page reproduces *both* buildings' text. The 9628 ("tool-shed Study") page even prints the full house description ("The house, above and at right angles to the foreshore… 2-storey, 3-2window rendered front…") under its Exterior heading before the shed sentence. Anyone quoting a single mirror page as "the listing for the shed" would import the house's fabric by mistake.

Separately, the History field's clause **"Originally a boat building and repair centre from May 1949"** mis-parses the record: the **May 1949** date belongs to the start of Dylan's residence, not to the boat-building/repair use (which predates it). The garbled ordering is a mirror/OCR artefact, not the substance of the designation.

Both structures are cleanly separable by their distinct grid references and by cross-reading the two pages against each other. The exact per-listing field boundaries are flagged **Referenced-pending** until the Cadw FullReport text (ids 9627 / 9628) is read directly.

## Tiering

| Claim | Tier |
|---|---|
| Boat House = Grade II (Cadw 9627), listed 10 Jul 1968 | Verified |
| House Early C19, "existed by 1834," altered 1889; fabric as described | Verified |
| Dylan's home 1949–53; £2,500 Margaret Taylor purchase; "sea-shaken house…" | Verified (as recorded in the T1 listing) |
| Tool-shed Study = separate Grade II listing (Cadw 9628); "water and tree room" | Verified |
| Shed "originally a garage for Laugharne's first car" | Verified as recorded (listing's own assertion; attribute to Cadw) |
| BLB-mirror conflation of 9627/9628 + misplaced "May 1949" clause | Referenced-pending (confirm against Cadw FullReport) |

## Guardrails observed

The Dylan association is anchored to the building's statutory record (the established Doc 194 pattern); no claim is made about his recorded voice, and nothing here touches the grave. The Boat House is treated as what it is — a documented Dylan home — and is kept distinct from Island House, which is **not** a Dylan site.

## Next

1. Read the Cadw Cof Cymru FullReport (ids 9627 / 9628) directly to confirm the exact per-listing field boundaries and promote finding 5 from Referenced-pending.
2. Enter both structures as **Stops** (Literary Town). Tone to be set explicitly by Dominic — a living author's home-museum with a paying operator suggests a lighter tone than a graveside, but tone has no default and is his call.
3. Cross-reference the "existed by 1834" datum into the open 1834-Corporation-survey thread.
