# Doc 201 — Mererid [ISLAND HOUSE] Stream D×E
## The 'Thomas' Occupancy-Spine Surname Tested via TNA Discovery (PROB 11 & Chancery); the Last Un-Done Spine Surname, and the Surname Series Exhausted

**Date:** 23 July 2026
**Branch:** Mererid — Island House (scheduled, unattended run)
**Thread:** "Test the Thomas occupancy-spine surname for a documented Island House connection — TNA Discovery sweep restricted to PROB/C/E, pre-1900" (Airtable `recf1iauLF818LrOi`), claimed at the start of the run, set **Done** at the end.
**Method lineage:** Docs 191 (Skyrme–Hughes), 193 (Prydderch), 195 (White), 197 (Walters/Waters), 199 (Rees/Rice/Rhys) — the same server-rendered TNA Discovery catalogue read at object level via the JS browser.

---

### Why this target

'Thomas' was the single occupancy-spine surname the sweep had deliberately deferred, because it is the noisiest name in the Welsh record: a first name, a very common surname, and — with the Dylan Thomas flood over Laugharne — a magnet for false positives. Doc 199's handover set it as the next target with an explicit qualifier: *do not* run bare "Thomas Laugharne" across all holdings; restrict to the will and Chancery series and pre-1900 dates. This run followed that instruction.

### Five-line finding

1. **PROB 11 (Prerogative Court of Canterbury wills) = 8 hits for "Thomas Laugharne"**, of which only **three are genuine surname-Thomas of Laugharne**: William Howell Thomas (will proved 20 May 1828, PROB 11/1741/161); Philip Thomas, HEIC captain, styled "Gentleman of Laugharne" (7 Oct 1828, PROB 11/1747/129); and Thomas Rees Thomas, Major RM (16 May 1857, PROB 11/2252/153). All three were read at object level on their own detail pages.
2. **Chancery (department C) = 40 hits**, of which two are genuine surname-Thomas litigants *of the town*: Zacharias Thomas, plaintiff in *Thomas v Davies*, "property in Laugharne", 1671 (C 10/158/168); and Evan & Zachary Thomas, plaintiffs in *Thomas v Booth*, "property in Laugharne", 1659 (C 10/55/167).
3. **BOUNDED NEGATIVE — the occupancy-spine 'Thomas → Island House' link is UNSOURCED from TNA Discovery.** Not one of the five genuine records names a house; the wills give residence only as "of Laugharne" and the Chancery suits give subject only as "property in Laugharne". The direct combined query "Thomas Laugharne Island House" in Chancery returns **zero**. This is the same honest outcome reached for White (193), Prydderch (195/193), Walters (197) and Rees (199).
4. **The 'Thomas' noise is uniquely three-sided.** The 8 PROB hits split cleanly: three genuine surname-Thomas (above); three *forename*-Thomas of other surnames (Thomas Palmer 1828, Thomas Philipps *Vicar* of Laugharne 1749, Thomas Foster/Forster *mariner* 1764); and two *surname-Laugharne* men whose forename is Thomas (Thomas Laugharne, gentleman "of Laugharne", 1731, PROB 11/643/123 — the Doc-141 trap-3 at full strength; and Thomas Laugharne, Lieutenant RN, 1797, PROB 11/1291/97, of the naval Laugharne family). Chancery repeats the pattern with the whole Laugharne-of-Pembrokeshire naval/banking dynasty (*Powell v Laugharne*, *Laugharne v Coningsbye*, *Tucker v Laugharne*, *Estate of William Laugharne late of Laugharne*).
5. **COMPLETION — Thomas was the last un-done occupancy-spine surname.** With it swept, the desk-runnable TNA-Discovery occupancy-spine surname series is **exhausted**: Skyrme–Hughes (191), Prydderch (193), White (195), Walters/Waters (197), Rees/Rice/Rhys (199), Thomas (201). Every one produced genuine surname-holders of the *town* and, in every case, a bounded negative to the *house*.

### The genuine surname-Thomas people of Laugharne (none tied to the house)

| Person | Record | Reference | Note |
|---|---|---|---|
| Philip Thomas, "Gentleman of Laugharne" (Capt., HEIC Bengal Est.) | PCC will proved 7 Oct 1828 | PROB 11/1747/129 | Object-read (D198534); body paywalled |
| William Howell Thomas of Laugharne | PCC will proved 20 May 1828 | PROB 11/1741/161 | Object-read (D171861); no occupation given |
| Thomas Rees Thomas, Major RM, of Laugharne | PCC will proved 16 May 1857 | PROB 11/2252/153 | Object-read (D21841); see cross-ref below |
| Zacharias Thomas of Laugharne | *Thomas v Davies*, property in Laugharne, 1671 | C 10/158/168 | Catalogue-level; body undigitised |
| Evan & Zachary Thomas of Laugharne | *Thomas v Booth*, property in Laugharne, 1659 | C 10/55/167 | Catalogue-level; body undigitised |

**Cross-reference caught:** "Thomas Rees Thomas RM" was flagged in the Doc 199 Rees sweep as a *middle-name* collision (a 'Rees' that is not the surname Rees). This run confirms he is a genuine *surname*-Thomas of Laugharne — the same man, correctly placed under two different surname tests. A tidy demonstration that the spine sweeps triangulate each other.

### Tier discipline

Everything here is **catalogue-level**, tiered **Verified** but explicitly **not court-grade**: the three will bodies are undigitised paywalled PDFs at Kew (£3.50 each) and the two Chancery pleadings are undigitised. The catalogue entry reliably establishes *that the record exists* and *the stated residence* ("of Laugharne"); it cannot establish what house, if any, the will body names. Nothing here is promoted beyond that. The bounded negative and the two method facts are also tiered Verified.

### Method note (for repeat)

TNA Discovery is server-rendered and reads cleanly at object level through the JS browser. The working qualifier for a high-noise surname is the department filter `&_cr=` — `PROB 11` for wills (where residence is declared) and `C` for Chancery (where "property in Laugharne" is the subject line). Adding `Island House` to the query string as a fourth AND-term is a fast, honest way to test the house link directly; here it returned zero. The trap to name for the file: with the forename 'Thomas', the Doc-141 trap-3 ("Laugharne" as a personal name/surname) is at its strongest, because "Thomas Laugharne" reads equally as *forename Thomas + surname Laugharne* and as *surname Thomas + place Laugharne*. The department filter is what separates them.

### Records logged this pass (Airtable base `appnt9vSQKrKyaKiZ`)

- **6 Sources** (all T1 primary): PROB 11/1747/129, PROB 11/1741/161, PROB 11/2252/153 (all Read at object level); C 10/158/168, C 10/55/167 (catalogue-level / Partial); and the TNA Discovery search surface (the negative-bounding source).
- **5 Entities** (all Person, Verified catalogue-level, none tied to Island House): Philip Thomas; William Howell Thomas; Thomas Rees Thomas RM; Zacharias Thomas; Evan & Zachary Thomas.
- **8 Facts** F201-1 … F201-8 — five person-facts (Verified), one bounded negative (F201-6), one completion/exhaustion fact (F201-7), one method fact (F201-8), each linked to its Entity and Source and to the Thomas thread.
- **Thread** `recf1iauLF818LrOi` set **Done** with full Findings and linked Facts/Entities.

### Lane discipline

This is squarely Island House lane (the occupancy-spine surname test). No town-fabric or Globe target was touched. The forename-Thomas and surname-Laugharne collisions were logged as collisions, not adopted. The naval Laugharne family and the Philipps-Laugharne banking dynasty are noted only as noise sources and handed no further.

### Doc 140 note

Doc 140 (the central DO-NOT-CLAIM / banned-formulations register) is **not present in this repo's `docs/` folder** (which currently holds Docs 170–201 only); its banned-formulations content is reproduced in the standing guardrails carried by the scheduled task, which this run followed. Flagged so the register's absence from the repo is on record.

### Next target

The occupancy-spine **surname** series is exhausted on the TNA-Discovery route. The remaining spine work is of a different kind and is **archive-gated**: placing any of these surname-holders *at* Island House means reading the will and suit **bodies** (order the digitised/undigitised items at Kew) — the human archive day, not a desk run. The highest-leverage desk-runnable Island-House-primary items still open are: (1) the St Martin **marriage window 1750–1919** on the Skyrme–Hughes join (Doc 181's flagged live sub-set, needs a working search route into FreeREG or an alternative index); (2) the origin of each "unsourced" spine claim — the document that *first* placed a White / Prydderch / Rees / Walters / Thomas at the house (a historiographic, not archival, question). If neither is desk-runnable next pass, the recommendation of Doc 181/199 stands: the Island House desk-runnable queue is close to exhaustion and the branch is a candidate for winding down.

---

*Written into the repo and LEFT UNCOMMITTED for Jarvis's 21:00 path-scoped commit. This branch ran no `git add`, `git commit` or `git push`. Doc number 201 was claimed in Docs — Index before writing (highest previously in use: 200).*
