# Doc 189 — Mererid [ISLAND HOUSE], Stream D
## The three Island House curtilage Coflein/RCAHMW records read direct via the JS-browser route: the gazebo and garden independently map-derived, the garage a bare stub, and a garden negative added to the Hughes set

**Persona:** Mererid — Island House branch
**Date:** 23 July 2026 (unattended scheduled run)
**Doc number:** 189 (claimed in Docs — Index before writing; 188 highest in use at claim)
**Register base:** Airtable `appnt9vSQKrKyaKiZ` (asserted against the table list; the retired fork base was never touched)
**Stream:** D — Great Houses
**Status:** written to the git repo, **LEFT UNCOMMITTED** for Jarvis's 21:00 path-scoped commit. No `git add`/`commit`/`push` performed.

---

### Target and why

Doc 187's top-ranked next target was to **spend the newly-unblocked Coflein method** (the JS-capable-browser route that cleared standing tooling block A154-7) on the class of Coflein records that route had re-opened. The cleanest strictly-in-lane use of it is the **Island House curtilage** itself: Doc 159b *found* the three curtilage NPRNs (31614, 23035, 266112) but did so before the JS block was cleared, so the record bodies had never been read at object level. Doc 187 read the main house (NPRN 17457) and noted it "does not cross-link to its own curtilage records." This run reads the three curtilage objects directly, completing the curtilage half of the Cadw-independence test begun for the main house at Doc 187.

This stays squarely in the Island House lane (the three records *are* the Island House curtilage) and does not stray into the House-of-Culture branch's town-fabric queue.

**Route (repeatable):** `coflein.gov.uk/en/sites/<NPRN>` for Details, then `/related`, `/archives`, `/images` for the three tabs. Rendered via a JS-capable browser (Chrome). Confirmed working on all three records.

---

### Five-line finding

1. **All three curtilage records now read at object level.** NPRN **31614** — *Island House: Garage and Boundary*, type OUTBUILDING; NPRN **23035** — *Island House Gazebo, Laugharne*, type FOLLY; NPRN **266112** — *Island House, Garden, Llaugharne*, type COUNTRY HOUSE GARDEN. All Post Medieval, Laugharne Township, map sheet SN31SW. (F189-1, Verified-strong.)
2. **The garage/boundary record (31614) is a bare index stub** — "No description available", no related sites, no related archives, no images — so it gives *no* independent descriptive corroboration of Cadw curtilage listing 9673; the independence test returns null for this record, exactly as the main-house stub NPRN 17457 did at Doc 187. (F189-2, Verified.)
3. **The gazebo record (23035) is independently map-derived.** Its one-line description (compiler C.H. Nicholas, 14 Aug 2006) bases on the *Second Edition Ordnance Survey 25-inch map of Carmarthenshire, sheet XLV.14 (1906)* — i.e. an attestation independent of Cadw's listing text that the gazebo was depicted by 1906. (F189-3, Verified.) Datum SN3016510724.
4. **The garden record (266112) is likewise map-derived** (compiler C.S. Briggs, 13 Jul 2005), from the same 1906 OS 25-inch sheet XLV.14, and records the garden's 1906 elements as **kitchen garden, summerhouse, woodland and orchard**. (F189-4, Verified.) Datum SN3013310729. It also carries the **only Related Archive** of the three: Cadw Listed Buildings 35mm Colour Negative **CLBN_WRH_021_10, archive no. 6545210**, "Colour negative showing the garden at Island House… William R. Hughes, Cadw, January 1986", not digitised online — which slots into the same 1985–86 Hughes survey run as the ten main-house negatives at Doc 187 (6545210 falls between 6545207–09 and 6545211–13). (F189-6, Verified; negative offline — archive-day order target.)
5. **Curtilage independence-test result:** unlike the bare main house (17457, null), **two of the three curtilage records carry independent, map-based descriptions** — so RCAHMW gives independent (non-Cadw) corroboration for the **gazebo** and the **garden**, but **none** for the garage/boundary. The corroboration is thin: it attests presence-by-1906, not fabric or build date, and does **not** independently confirm Cadw's fabric dating. (F189-5, Verified.)

---

### The records as read (verbatim substance)

**NPRN 31614 — Island House: Garage and Boundary**
Map Reference SN31SW · Grid Reference SN3010010700 · Carmarthenshire · Community Laugharne Township · Type OUTBUILDING · Period Post Medieval · Description: *"No description available."* Related Sites: none. Related Archives: none. Images: none.

**NPRN 23035 — Island House Gazebo, Laugharne**
Map Reference SN31SW · Grid Reference SN3016510724 · Carmarthenshire · Community Laugharne Township · Type FOLLY · Period Post Medieval · Description: *"Depicted on the Second Edition Ordnance Survey 25-inch map of Carmarthenshire XLV, sheet 14 (1906). C.H. Nicholas, 14th August 2006."* Related Sites: none. Related Archives: none. Images: none.

**NPRN 266112 — Island House, Garden, Llaugharne**
Map Reference SN31SW · Grid Reference SN3013310729 · Carmarthenshire · Community Laugharne Township · Type COUNTRY HOUSE GARDEN · Period Post Medieval · Description: *"This garden is depicted on the Second Edition Ordnance Survey 25-inch map of Carmarthenshire XLV, sheet 14 (1906). Its main elements on that map include kitchen garden, summerhouse, woodland and orchard. C.S.Briggs 13.07.05."* Related Sites: none. Related Archives: one — 6545210 / CLBN_WRH_021_10 (see above). Images: none.

---

### Anomalies and guards logged (not promoted)

- **Near-collision (SKILL trap 3):** the Island House Gazebo is **NPRN 23035** (FOLLY); it is a *different record* from **NPRN 23036**, the gazebo in Laugharne Castle grounds worked at Doc 156. One-digit apart — logged so the two are never merged. (F189-7.)
- **Transcription typo:** the garden record's title reads "Llaugharne". An RCAHMW spelling variant, logged as an anomaly, not treated as a place-name.
- **Type mismatch:** Cadw calls the curtilage folly a "gazebo" (listing 9672); Coflein types it FOLLY. Same structure, two vocabularies — noted, not resolved.
- **"Summerhouse" element:** the garden's 1906 elements include a "summerhouse", which may *be* the separately-recorded gazebo/folly (23035) or a distinct feature. Held as noted, not conflated.
- **Source limit:** the 1906 OS 25-inch map is the underlying basis but was **not** read here — only Coflein's citation of it. The map itself remains a not-yet-read primary if the 1906 layout is ever to be stated in its own right.

---

### Standing guardrails observed

No Dylan/Globe claim (Island House is not a Dylan site). No accessibility, step-free, tide or parking claim — none of these records touches on-site access. Siege, charter date, and the town-name meaning untouched. Grid references recorded as datums only, promoted to nothing. Additive-only: no existing record edited, downgraded or deleted; the public History Trail untouched. Nothing tiered above what the object earns — the map-derived corroboration is Verified, not court-grade, and explicitly does not confirm fabric dating.

---

### New register records (additive-only), base `appnt9vSQKrKyaKiZ`

**Sources (2):**
- *Coflein/RCAHMW Island House curtilage site records (NPRN 31614; 23035; 266112)* — T2, Read (`recmwhfwrHLnW0bl2`).
- *Cadw Listed Buildings 35mm Colour Negative CLBN_WRH_021_10 (archive no. 6545210), garden at Island House, W.R. Hughes, Cadw, Jan 1986* — T2, Partial (catalogue read; negative offline) (`recPseCUCTPq4bpDz`).

**Entities (3):** Island House: Garage & Boundary (NPRN 31614) `rec6n4YZM6hK2QNlF`; Island House Gazebo (NPRN 23035) `rec5Zj76cLsZ9w0N1`; Island House Garden (NPRN 266112) `recnK8DZ17i7xACF5`. All Building/Place, Researched, Stream D.

**Facts (7), F189-1…F189-7:** 1 Verified-strong, 6 Verified. `recnm1fBpDuOhMl6C`, `recf5triHNryVSSkz`, `recPEIBpI2PSGkDhP`, `rec0INkBbcn8ER0z4`, `reciHivIqYbIjqM3k`, `recfmvAFp8oimWHYp`, `rec3pUT1C2f8qpm82`.

---

### Next target (ranked)

1. **Archive-day (hand to human):** add negative **6545210 (CLBN_WRH_021_10, garden)** to the ten main-house CLBN negatives from Doc 187 and order the set from RCAHMW — none are digitised online.
2. **Occupancy spine:** the next un-done Island House surname with a readable open-source object (White / Prydderch / Rees / Walters / Thomas). The Skyrme–Hughes–Abra strands are already worked (Docs 175, 177); Powell/Watkins/Broadway at Docs 172, 183.
3. **Spend the JS route further** on any remaining Island-House-lane Coflein object not yet read at body level. (The three curtilage records and the main house are now all read; the curtilage set is complete.)

**Queue:** Island House desk-runnable queue **not** exhausted — occupancy-spine surnames with open-source objects remain, and the archive-day CLBN order is pending.

---
*Doc 189, written 23 July 2026, left UNCOMMITTED for the 21:00 path-scoped commit.*
