# Doc 209 — Mererid [ISLAND HOUSE] Stream D×E

**The Welshman and the Carmarthen Journal (both 24 January 1890) read direct on Welsh Newspapers Online; Percy Hughes-Garbett's residence at Island House confirmed at object level (Doc 207 F207-3 upgraded Referenced-pending → Verified-strong), the 1900 break-up auction corroborated, and a page-level co-occurrence trap caught.**

Scheduled unattended run, 23 July 2026. Register base `appnt9vSQKrKyaKiZ` (asserted; retired fork untouched). Left **uncommitted** for Jarvis's 21:00 path-scoped commit — no `git add`/`commit`/`push`.

---

## Why this target

The Island House *historic* queue has been declared exhausted across Docs 199/201/203/205/207, with wind-down of the branch repeatedly recommended. But Doc 207's handover, when it read the islandhouse.wales owner-narrative, named a concrete **desk-runnable upgrade route** rather than an archive-gated one: the residence of Percy Llewellyn Hughes-Garbett at Island House rested on the owner's *transcription* of a press item ("The Welshman, Jan 1890, 'Christmas Tree at Island House'"), and was therefore held only at **Referenced-pending** (F207-3). Welsh Newspapers Online is a readable open-source object and the task carries the WNO URL grammar and its traps. Reading the actual press object is a legitimate back-check that upgrades an existing fact — not invented filler. Claimed as **Doc 209** (208 highest in use at claim); Docs — Index row `recPGoMv0Aoe2qXhu` claimed **before** writing.

This is not a Threads-table claim: no Island House thread exists for it (the surname/occupancy series 191–207 is the closest, and it is closed). It is the Doc-207 upgrade route spent.

## Method — the WNO AND grammar, and the traps respected

Search run with the Lucene-style AND grammar (not the pipe form; the form does not fire under automation):

```
newspapers.library.wales/search?…&alt=(full_text:("Island House") OR title_en:("Island House"))
   AND (full_text:("Garbett") OR title_en:("Garbett"))&range[min]=1885-01-01…&range[max]=1901-12-31…
```

- **OR-matching trap** avoided by using the AND grammar.
- **Near-collision trap** avoided: "Garbett" / "Hughes-Garbett" is a distinctive surname (matching Percy Llewellyn Garbett → Hughes-Garbett of Docs 116/207), so co-occurrence with "Island House" is strong, not a Thomas-Edwards/Thomas-Edmunds-style near-miss.
- **Page-level-matching trap** — this is the one that fired live (see below): a hit was **not** treated as evidence on co-occurrence; each claim rests on **contiguity within one discrete item with the item's town established**. Three items were opened and read at object level in full; the residence-continuity dates rest on item-level search snippets and are tiered accordingly.
- **OCR dirty**: figures in the 1900 lot list are treated as dirty and flagged, not printed as clean values.

## The finding — five lines

1. **Residence confirmed at object level.** Two independent same-day primary papers place the Hughes-Garbetts at Island House, Laugharne in **January 1890** — *The Welshman* (24 Jan 1890, p.5, "LAUGHARNE — TEA AND CHRISTMAS TREE AT ISLAND HOUSE") and the *Carmarthen Journal* (24 Jan 1890, p.3, "OUR LAUGHARNE LETTER", by the correspondent "Abercorran"), the latter naming Island House explicitly as "**Mrs Hughes-Garbett's private residence**." **F207-3 is upgraded Referenced-pending → Verified-strong.**
2. **They were the resident estate landlords**, not merely occupants: Mrs Hughes-Garbett gave a tea and Christmas tree "to the wives and children of all Mr Garbett's tenants" (between fifty and sixty attending) at the house.
3. **The owner's citation was accurate.** The islandhouse.wales owner-narrative (a T3 signpost) cited "The Welshman, Jan 1890, Christmas Tree at Island House"; the object exists exactly as cited — a rare case of an owner-narrative vindicated by the primary object.
4. **The 1900 break-up auction corroborated at object level.** *The Carmarthen Weekly Reporter* (17 Aug 1900, Suppl., p.5) records the sale of "the Laugharne property of Mr Hughes-Garbett, **Bristol**" at Brown's Hotel, Laugharne, by J. Howell Thomas & Son (Carmarthen); 19 lots, 3 unsold, "the whole realised over £25,000" — moving the previously owner-stated ~£25,000 (Docs 116/207) to object level.
5. **Island House's twentieth-century chain begins.** At that auction Island House was bought by **Captain (Thomas) Jones of Llanelly** (last rent £75; ~£1,000 — OCR figures dirty), corroborating Doc 116's "Capt. Jones 1900" as the start of the C20 chain (→ Walters 1964, Doc 61).

## The two 1890 objects (read in full)

*The Welshman*, 24 Jan 1890, p.5 — discrete **LAUGHARNE** item: "On Tuesday last Mrs Hughes-Garbett invited the wives and children of all Mr Garbett's tenants to tea and Christmas tree at Island House. In spite of the inclemency of the weather between fifty and sixty assembled at 6 o'clock… the presents, which were numerous… three hearty cheers were accorded to Mrs Garbett."

*Carmarthen Journal*, 24 Jan 1890, p.3 — within "OUR LAUGHARNE LETTER (By ABERCORRAN)": "MRS. HUGHES-GARBETT'S TREAT TO THE CHILDREN OF THE TENANTS ON THE ESTATE… Mrs Hughes-Garbett, of Island House, Laugharne, will give a tea to the children of the tenants on the estate, as well as to many children in the town… about 60… presents from 'Ye Christmas Tree.' The tea will be given at Island House — **Mrs Hughes-Garbetts' private residence**."

Both are contiguous, single-item, with Laugharne established. Together they carry the residence beyond any owner-transcription dependence.

## The trap that fired — a second "Island House" on the same page

The very Welshman page (p.5) that carries the Laugharne tenants' tea **also** contains, in a *different* article — the Carmarthen "THE STORM" flood report — the sentence: "A certain tenement, known as **Island House**, verified its name, for it was surrounded by water" — a Carmarthen quayside tenement flooded by the Towy, wholly unrelated to Laugharne. This is a textbook page-level co-occurrence: an "Island House" + Carmarthen-context match on the same page as the true Laugharne evidence. It was isolated correctly by reading the discrete LAUGHARNE item rather than trusting page co-occurrence, and is logged (F209-7) so it cannot re-enter the record as a false Laugharne "Island House."

## The 1900 auction object

"There was a very large attendance at the sale of the Laugharne property of Mr Hughes-Garbett, Bristol… conducted at the Brown's Hotel Laugharne, by Mr. W. Vincent Howell Thomas, the vendor's solicitors being Messrs Leslie and Hardy, Bedford-row, London… Of the nineteen lots only three remained unsold, and the whole realised over £25,000." The lot list (OCR dirty) includes "Island House Laugharne last rent paid [£]75… Captain T. Jones, Llanelly, [£]1[,]000" and "Wooford's Farm… Captain Thomas Jones, Llanelly." Brown's Hotel is the **venue only** — no Island House–Brown's link is drawn.

## Residence span (item-level snippets — full reads owed)

Held at **Referenced-pending** (F209-3): P. Ll. Hughes-Garbett "of Island House" appears as vice-president of the Laugharne Annual Regatta (21 Aug 1891), re-elected a vice-president (17 Apr 1891), a subscriber (7 Aug 1891; 25 Apr 1890), noted "will be leaving Laugharne in the course of a few [weeks]" (25 Mar 1892) — yet still chairing a St Clears–Pendine railway meeting at Laugharne (*South Wales Daily News*, 21 May 1892) and on a committee "of Island House" (21 Jul 1893). The intended departure was gradual or deferred; by August 1900 he was "of Bristol." The Wienholt tie of Doc 116 recurs in a funeral report (8 Apr 1892): "Mr Hughes-Garbett, Island House the Misses Wienholt." These dates rest on WNO search snippets, contiguous and town-established, but not full-article reads — the upgrade route is to open each item.

## Chain of custody (base `appnt9vSQKrKyaKiZ`, additive-only)

**Sources (3, all T1 primary / Newspaper / Read):** The Welshman 24 Jan 1890 (`rec3nkjZrRbt2NpzU`); Carmarthen Journal 24 Jan 1890 (`rec7eFusANL0jvSU1`); Carmarthen Weekly Reporter 17 Aug 1900 (`recnY2PKVdq4KXMHG`).

**Entities (1 new):** Captain Thomas Jones, of Llanelly (`recYF4SoHkzHyGFhy`, Verified). Existing entities Percy Ll. Hughes-Garbett (`recdAkXLHYnOqdRZp`) and Caroline née Fyfe (`recQqMm4rny7urUtq`) were **fact-linked only, not edited**.

**Facts (7): F209-1…7** — `receEvCsN416b9WGm`, `recDfp92DMdxk3Ip3`, `recrFwlPCcH1F7TcN`, `recseidvfMEMPAKwm`, `recsstaux3HHQvSX5`, `rec35P0EOtQTNpkEN`, `recP0zosbsMC7YHcs`. Four Verified-strong (residence; tenants' tea; owner-citation vindicated), two Verified (1900 sale; Capt. Jones purchase) plus one Verified method-trap, one Referenced-pending (residence continuity 1890–1893). Stream tags D — Great Houses, E — People & Families.

## Guardrails

Strictly in-lane: Island House, its residents and its ownership spine. No town-fabric/Globe/Corporation/Castle target. Brown's Hotel appears only as the auction **venue** — no Island House–Brown's link asserted, no Dylan content. No charter date, siege, name-meaning, cellars or corporation formulation touched. The islandhouse.wales owner-narrative is treated as a T3 signpost that here happened to be vindicated by the primary object — not promoted to a verifying source in general. Public History Trail untouched. Retired fork untouched; base ID asserted.

## Queue / next target

The Island House desk-runnable historic queue remains effectively exhausted; this pass **spent the Doc-207 upgrade route** and, in doing so, converted the flagship residence fact to Verified-strong, corroborated the 1900 auction at object level, and named the 1900 purchaser (Captain Thomas Jones of Llanelly). Remaining in-lane evidence is archive/portal-gated (HM Land Registry title; Mary Abra's and Frederick Wienholt's will bodies; the 1900 sale catalogue; the DAT/Heneb 2020 report bodies; census returns) or is the named full-article WNO reads behind F209-3. **Wind-down of the Island House branch stays the standing recommendation**; the desk-adjacent tail is these named upgrade routes, not new targets.
