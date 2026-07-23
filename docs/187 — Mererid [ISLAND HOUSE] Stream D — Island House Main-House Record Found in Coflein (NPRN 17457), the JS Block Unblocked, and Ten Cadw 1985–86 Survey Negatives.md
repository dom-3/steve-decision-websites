# Doc 187 — Mererid [ISLAND HOUSE] · Stream D (method)

**The Island House main-house record found in Coflein at last (NPRN 17457), read via a JS-capable browser; a bare index stub with ten Cadw 1985–86 survey negatives, and the Coflein JavaScript block (A154-7) unblocked.**

Gatherer: Mererid (Island House branch). Unattended scheduled pass, 23 July 2026. One target, run to completion. Gather-only, additive-only; nothing existing edited, downgraded or deleted; nothing published to the public History Trail; nothing promoted to court-grade (gatherer and reader are the same hand, so an independent checker is still required).

Doc number 187 claimed in Docs — Index **before** writing (186 highest in use at claim). Left **UNCOMMITTED** for Jarvis's 21:00 path-scoped commit — no `git add`, `git commit` or `git push` performed.

---

## Why this target

Doc 185 (the previous Island House pass) closed with its main open item recorded twice over: *"Coflein main-house record confirmed unreached"* in the title, and, in its Next Target, *"run the Coflein/RCAHMW MAIN-HOUSE independence test with a JS-capable browser (Chrome MCP)… establish whether any Coflein building record for the main house exists distinct from the curtilage NPRNs (31614/23035/266112) and whether it is independent of Cadw 9671."*

That item had been blocked for the whole doc series by a **tooling** limit, logged as **A154-7**: `coflein.gov.uk/en/sites/<nprn>` pages are JavaScript-rendered and returned no body text to web-fetch. This is a **method thread that unblocks other threads** (Doc 153's Ranked Thread 2, the two blocked Hurst Coflein objects, and every future Coflein read), so under the "method threads first" rule it takes precedence over the next occupancy-spine surname.

The main-house listing itself (Cadw 9671) was already read direct at **Doc 158b**; this pass is about the **RCAHMW / Coflein** record of the house, which is a separate object.

## Method — the JS block cleared

Read via the JS-capable browser (Chrome MCP), not web-fetch:

1. `coflein.gov.uk/en/search?term=Island%20House%20Laugharne` renders a normal results list once JavaScript runs.
2. `coflein.gov.uk/en/sites/<NPRN>` renders the **Details** and **Related Archives** text into the DOM; the **Related Sites** and **Images** tabs must be **activated by click** to load (they route to `/related`, `/archives`, `/images`).
3. Guessed plain URL suffixes such as `/related-sites` return `{"error":"No matching clause"}` (HTTP 400) — do **not** fabricate tab URLs; click the tab.

**F187-7 (Verified, METHOD):** Coflein site records are readable via a JS-capable browser; A154-7 is a tooling limit, not a record gap. This unblocks the programme's stalled Coflein reads.

## The finding

The search returns **four** Island House site records, confirming a distinct **main-house** record alongside the three curtilage ones already held from Doc 159:

| NPRN | Title | Type | Note |
|---|---|---|---|
| **17457** | **Island House** | **HOUSE** | the main house — *this pass* |
| 23035 | Island House Gazebo | FOLLY | curtilage (Doc 159) |
| 31614 | Island House: Garage and Boundary | OUTBUILDING | curtilage (Doc 159) |
| 266112 | Island House, Garden, Llaugharne | COUNTRY HOUSE GARDEN | curtilage (Doc 159) |

**NPRN 17457 read at object level:**

- **Details** — NPRN 17457; Type HOUSE; Post Medieval; Community Laugharne Township; Old County / Unitary Authority Carmarthenshire; Map Reference **SN31SW**; **Grid Reference SN3012010750** (SN 30120 10750). Description field: **"No description available."**
- **Related Sites** — **"No related sites available."** The main house is **not** internally cross-linked in Coflein to its own curtilage records (23035 / 31614 / 266112); the four Island House records are joined only by a name search, not by the database.
- **Images** — **"No images available"** online.
- **Related Archives** — **ten** items, all in the **Cadw Listed Buildings 35mm Colour Negative Collection (CLBN)**, colour negatives of Island House produced by **William R. Hughes** for **Cadw, December 1985 – January 1986** (archive nos. 6545132, 6545207, 6545208, 6545209, 6545211, 6545212, 6545221, 6545213, 6545248, 6545225).

### Five-line finding

1. The main-house Coflein record **exists and is now read** — **NPRN 17457, Type HOUSE**, distinct from the three curtilage NPRNs. Doc 185's "confirmed unreached" is resolved (**F187-1, Verified-strong**).
2. It carries **no description text and no related-sites links** — a bare index stub. So the RCAHMW record is **neither a Cadw-derivative narrative nor independent descriptive corroboration** of listing 9671; the Doc 141/156/159 independence test returns a **null for text** here (**F187-3, Verified**).
3. Its one substantive payload is **ten Cadw listing-survey negatives** (W. R. Hughes, 1985–86), taken ~8 months before the **25 Sep 1986** statutory listing, and **not digitised online** — an archive-day order target, not a desk read (**F187-4, Verified**).
4. The negative captions **corroborate the Wogan Street address** independently of Cadw Open Doors (Doc 185); a stray **"Logan Street"** caption is a **W→L transcription variant**, logged as an anomaly, **not** a real street (**F187-5, Verified**). One caption, *"Laugharne Castle from Island House,"* independently confirms the direct castle sightline (**F187-6, Verified**).
5. It supplies an **independent locational datum**: NGR **SN3012010750**, sheet SN31SW (**F187-2, Verified-strong**).

## New records (additive-only)

**Entity (1, new):** *Island House (RCAHMW/Coflein NPRN 17457)* — Building, Researched, Stream D. Core entity *Island House, Laugharne* and *Wogan Street, Laugharne* linked by fact only, **not edited**.

**Sources (2, new):**
- *Coflein / RCAHMW National Monuments Record — Island House, NPRN 17457 (HOUSE)* — T2 · National monuments record · **Read** direct via JS browser.
- *Cadw Listed Buildings 35mm Colour Negative Collection (CLBN) — Island House (10 negatives)*, W. R. Hughes for Cadw, 1985–86 — T2 · Archive file · **Partial** (catalogue read; negatives offline).

**Facts (7, F187-1…7):** two Verified-strong (existence/identity; NGR), five Verified (bare-stub independence null; the ten CLBN negatives; Wogan Street corroboration + Logan-Street anomaly; the castle sightline; the JS-browser method). Nothing promoted to court-grade.

## Guardrails observed

No Dylan/Globe claim; Island House is not a Dylan site. The castle-sightline fact is a durable topographic relationship, not an access or tide claim, and carries no accessibility promise. "Logan Street" was **not** promoted to a street (near-collision / OCR-variant discipline). The 1644 siege, charter date and name-meaning were not touched. Cadw 9671's own text was read separately at Doc 158b and is not restated here.

## Anomalies logged

- **A187-1** — the four Island House NPRNs are not database-linked to each other; a researcher relying on Coflein's own "Related Sites" would miss three of the four. Discoverability depends on the name search.
- **A187-2** — "Logan Street" (neg 020_29) vs "Wogan Street" (negs 021_07/08): a caption variant inside one collection, one photographer, one month. Treated as a W→L slip, not evidence of a former street name.
- **A187-3** — the ten negatives are offline; the on-object "Images" count of 10 refers to the archive items, not to online images (Images tab is empty).

## Next target (ranked)

1. **Spend the unblocked method now:** re-read the two blocked Hurst Coflein objects (NPRN 301182 Hurst Farm Garden, NPRN 31613 Hurst Farm Outbuildings — Doc 153 Ranked Thread 2) and any other Coflein NPRN the series left "blocked by tooling," via the JS-browser route proven here.
2. The next un-done **occupancy-spine surname** with a readable open-source object (White / Prydderch / Rees / Walters / Thomas).
3. Archive-day: order the ten CLBN negatives of Island House from RCAHMW (Contact & Order) — Cadw's own 1985–86 survey photographs of the house.

**Queue:** Island House desk-runnable queue **not** exhausted — the newly-unblocked Coflein route re-opens a class of previously-blocked objects.
