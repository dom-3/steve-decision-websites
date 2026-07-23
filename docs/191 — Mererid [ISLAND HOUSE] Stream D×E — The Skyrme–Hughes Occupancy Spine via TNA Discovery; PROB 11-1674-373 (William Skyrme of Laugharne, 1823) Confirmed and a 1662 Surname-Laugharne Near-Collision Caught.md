# Doc 191 — Mererid [ISLAND HOUSE] — Stream D×E

**The Skyrme–Hughes occupancy spine tested via TNA Discovery: PROB 11/1674/373 (Will of William Skyrme of Laugharne, 1823) confirmed at object level, a 1662 surname-"Laugharne" near-collision caught, and the NLW Primo wills surface reconfirmed blocked**

Mererid, Island House branch — one unattended gather/back-check pass, 23 July 2026. Gather-only, additive-only. Nothing published to the public History Trail; nothing promoted to court-grade. Register base asserted: `appnt9vSQKrKyaKiZ` (fork base never touched). Doc number 191 claimed in Docs — Index *before* writing (190 highest in use at claim).

---

## Target and why

Doc 189's ranked next target for this branch was "the next un-done occupancy-spine surname with a readable open-source object (White / Prydderch / Rees / Walters / Thomas)." The **Skyrme–Hughes–Abra** limb of that spine (Docs 175, 177, 179) has the sharpest open question of any occupancy thread: **how is "Abra Hughes" the "only daughter and heiress" of William Skyrme, Esq., of Laugharne** (thread `recbuyBlxyy2kWoHA`), and the registered route to it is a single probate document. I claimed the sibling **Abra-name-origin thread** (`recITGZ4zRNlIJ7F9`), whose recorded next-read (3) was a scoped **Hughes × Laugharne** probate-catalogue sweep — the document list the register lacks.

## What was attempted first, and the tooling block

The registered route runs through the **NLW pre-1858 Welsh probate index on `discover.library.wales`**. Under automation in this session that surface **would not render**: both a two-facet `Hughes × Laugharne` query and the exact single-facet control grammar from Doc 175 returned only a **persistent loading spinner** across repeated waits (≥15 s; screenshots taken). This reconfirms Doc 177's warning that the NLW **Primo** interface is fully client-rendered and returns no text under automation. I did **not** keep fighting it — I pivoted to a server-rendered surface.

## The pivot — TNA Discovery reads cleanly

**The National Archives' Discovery catalogue** (`discovery.nationalarchives.gov.uk`) is server-rendered and reads at **object level** under automation, both the results list (`/results/r?_q=TERMS&_hb=tna`) and the record details pages (`/details/r/<id>`). A search for **"Skyrme Laugharne"** returns exactly **two** records, both read at object level:

### 1. PROB 11/1674/373 — Will of William Skyrme of Laugharne, Carmarthenshire *(the target document)*

- **Description:** "Will of William Skyrme of Laugharne, Carmarthenshire." Location: Laugharne, Carmarthenshire.
- **Court / register:** Prerogative Court of Canterbury, Will Registers; **register name "Richards", quire numbers 451–500**.
- **Date (probate):** **27 August 1823**. Held by TNA, Kew. Open Document, Open Description.
- **Digitisation:** digitised — **PDF, ~3 MB, £3.50 (free with a TNA account)**, image viewer available.

This is the same reference registered at Doc 179 (entity `recnvZDMfKZ8FMiqn`); this pass **confirms it at object level** and adds the register name, quire range, and download status. It is the **one PCC document** capable of testing the heiress claim, and it is **desk-orderable** — its body is an archive-/account-day download.

**Tiering held honest.** The 1823 testator is the **strongest candidate** for the "late William Skyrme, Esq., of Laugharne" whose only daughter and heiress **Abra Hughes** married Frederick Wrinbolt at Laugharne in August 1858 (Doc 177). But the **will body is unread** (account-gated round-hand image, belongs to the human archive day), so kinship to Abra Hughes is **Referenced-pending, not established**. The standing prohibition stands: do **not** write Abra as "Abra Skyrme" or "née Hughes," and no Skyrme is yet placed at Island House or any named house.

### 2. E 134/14Chas2/Mich34 — a caught near-collision, not evidence

The second hit is an **Exchequer (King's Remembrancer) commission deposition, 1662** — *Owen v Rutland* (Plaintiff Arthur Owen; Defendants William Rutland, Thomas Nourse). Read at the details page, its subject is:

> "Outlawry of **Rowland Laugharne, of St Bride's (Pembrokeshire)**, an extent upon his lands … and an assignment of a lease."

So the word "**Laugharne**" here is the **surname** of Rowland Laugharne of St Bride's, Pembrokeshire — **not the town**. This is a textbook surname-"Laugharne" trap (cf. Doc 167b) and it ties directly to the standing guardrail: **the town of Laugharne is not named after Major-General Rowland Laugharne.** The record is therefore **not** evidence of a Skyrme at the town of Laugharne.

It does, however, genuinely name a **deponent Thomas Skyrme (twice)**, interrogatories taken **14 October 1662 at Carmarthen** (commission 18 June 1662; dated 23 Oct–28 Nov 1662). That is a real, early attestation of the **Skyrme surname in the Carmarthenshire/Pembrokeshire orbit**, consistent with Doc 177's finding that Skyrme is a Pembrokeshire surname — background to the later Skyrme–Hughes–Abra line only, **held distinct from the town** and from Island House. Body not digitised (visit Kew).

## Negative bound

Only **two** TNA records answer "Skyrme Laugharne," and only PROB 11/1674/373 is a Skyrme **of the town of Laugharne**. This corroborates Doc 179's finding that the 1830–1858 probate window is empty: the 1823 will remains the single document able to test the heiress relationship.

## Method finding (generalises; unblocks other threads)

**For Welsh PCC probate under automation, prefer TNA Discovery over the NLW Primo wills interface.** Discovery's `/results/r?_q=…&_hb=tna` and `/details/r/<id>` pages are server-rendered and read cleanly at object level; the NLW `discover.library.wales` wills surface hung on a loading spinner throughout this run. This route unblocks the programme's remaining PCC probate reads without depending on a JS-fragile surface. (The NLW index still matters for **non-PCC** Welsh consistory wills — e.g. the SD-series — which have no PCC equivalent; that surface needs an interactive/JS session or a different endpoint.)

## Chain of custody (all additive; base `appnt9vSQKrKyaKiZ`)

- **Sources (2, new; both catalogue objects read direct, bodies unread):** TNA Discovery — PROB 11/1674/373 (`recxziWiMTZqdCcfK`, T1 primary / Will·probate / Partial); TNA Discovery — E 134/14Chas2/Mich34 (`recmsn1z1NhxmqUX7`, T1 primary / Court roll·deposition / Partial).
- **Entity (1, new):** Thomas Skyrme (fl. 1662), deponent (`recec6n18cHulCkUv`, Person, Researched, Stream E) — held distinct from the town. The existing 1823 testator entity `recnvZDMfKZ8FMiqn` (Doc 179) was **linked, not edited**.
- **Facts (6, F191-1…6):** 5 Verified (PROB object-level confirmation; sole-PCC-Laugharne-Skyrme negative; the 1662 surname near-collision; the Thomas Skyrme 1662 attestation; the TNA-vs-Primo method), 1 Referenced-pending (the 1823-testator-as-Abra-Hughes's-father candidacy). Records: `recAXBdWnXHdZDRGT`, `recGmaDsYc84OIjWm`, `recAyF5OiwUVlxLWW`, `recNJuyvacyAYh3TS`, `recAEXJj0wDHSQLwo`, `rec3dw3zYml0vSdqN`.

## Thread status

- `recITGZ4zRNlIJ7F9` (Abra-name origin) — **left Open**; its Hughes×Laugharne Primo route is tooling-blocked (spinner). Route to retry recorded: run the Hughes×Laugharne sweep on a non-Primo surface, or in an interactive JS session.
- `recbuyBlxyy2kWoHA` (the "Abra Hughes, heiress of William Skyrme" question) — advanced by this pass via Fact tags "Doc 191 / T-Skyrme-will"; **stays Open** because the 1823 will body is unread.

## Guardrails observed

No Dylan/Globe/Brown's claim (Island House is not a Dylan site). Rowland Laugharne handled strictly as the surname-collision anchor — the town is **not** named after him. No charter date, siege length, name-meaning or numeral touched. No accessibility/tide claim. Additive-only; no existing record edited, downgraded or deleted; public History Trail untouched.

## Next target (ranked)

1. **Continue the occupancy spine on TNA Discovery** — run the same server-rendered route for the other un-done surnames with an Island-House-town connection: **Prydderch / Rees / Walters / White / Thomas × Laugharne**, building the ownership-spine document list the register lacks. This is the method's natural spend and stays strictly in-lane.
2. **Archive day (human):** order PROB 11/1674/373 (£3.50 / free with account) and read the will body to test whether William Skyrme names a daughter and an heiress — the single read that could close `recbuyBlxyy2kWoHA`.
3. The non-PCC NLW SD-series Skyrme wills (SD1806-70; and the Abra-forename bundle SD1796-57) still need the NLW surface, which requires an interactive/JS session — belongs to an attended run or archive day.

**Queue:** Island House desk-runnable queue **not exhausted** — the TNA Discovery route re-opens the occupancy-spine surname sweep on a reliable surface; several un-done surnames remain.

---

*Written to `~/Documents/steve-decision-websites/docs/` and LEFT UNCOMMITTED for Jarvis's 21:00 path-scoped commit. No `git add` / `commit` / `push` performed.*
