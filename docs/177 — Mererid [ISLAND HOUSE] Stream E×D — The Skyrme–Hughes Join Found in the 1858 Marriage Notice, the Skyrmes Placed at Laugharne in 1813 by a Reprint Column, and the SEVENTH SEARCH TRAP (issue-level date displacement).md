# Doc 177 — Mererid [ISLAND HOUSE] Stream E×D

## The Skyrme–Hughes join found in the 1858 marriage notice; the Skyrmes placed at Laugharne in 1813 by a reprint column; and the SEVENTH SEARCH TRAP — issue-level date displacement

**Date:** 22 July 2026
**Branch:** `mererid-island-house` (Island House only — the parallel `mererid-house-of-culture` branch covers town fabric and the Globe)
**Thread claimed:** Research — Threads `recyfHrIs294zycSv` — *"Trace the Skyrme family of Laugharne across three generations — William Skyrme I, II and III: dates, offices, marriages and their standing in the town."*
**Number discipline:** 177 was CLAIMED in Docs — Index (`recjNvotmJ51l1Ihp`) BEFORE any writing began. Highest in use at the moment of claim: Doc 176. No collision this run, no suffix needed.
**Commit status:** UNCOMMITTED by design — left for Jarvis's 21:00 path-scoped commit. No `git add`, no `git commit`, no `git push` was run.

---

## 0. Five-line finding

1. **The join exists.** The marriage notice of 19 August 1858 names **"Abra Hughes, only daughter and heiress of the late William Skyrme, Esq., of Laugharne"** — one woman carrying both the Hughes surname and Skyrme descent. Hughes and Skyrme were two separate names on the Island House occupancy spine with nothing connecting them. They are now connected, at Laugharne, in a datable primary item read at object level.
2. **The mechanism is NOT resolved and has not been smoothed over.** A woman surnamed HUGHES is called daughter and heiress of a SKYRME. Three papers print the same construction, so it is the source's wording, not OCR. Why remains open.
3. **The Skyrmes are placed at Laugharne in 1813**, with the town ringing its bells for hours and "a large party of the worthy inhabitants" gathering to drink their health — for a birth that took place at Haverfordwest. Standing at Laugharne, and a Pembrokeshire footing, both evidenced.
4. **The thread's own framing is refuted as framed.** No "William Skyrme I, II and III" sequence exists in any source read. Three unconnected Williams are attested across three contexts and 160 years. The numbering is unsourced and should be dropped.
5. **A seventh search trap is established and demonstrated.** WNO dates items at ISSUE level, so a centenary reprint column carries the reprinting issue's date. An 1813 event is indexed under 1913 — and, worse, is invisible to a correctly-bounded 1810s date filter.

---

## 1. Why this target, and why it is in this lane

The Island House occupancy spine names White, Prydderch, Thomas, Hughes, Skyrme, Abra, Rees, Powell, Walters. Doc 175 settled **Abra** as a female forename with a Pembrokeshire heartland, and found Jane Abra Marken of Laugharne (will 1796). **Skyrme** remained the least-evidenced name on the list — a surname on a spine with no attached person, no date and no source.

This is squarely Island House work: it is the occupancy spine and the people in it. Nothing in this pass is a town-fabric or Globe target. One incidental town-fabric entity surfaced (see §5) and is flagged for the other branch rather than worked here.

---

## 2. The routes, so they can be repeated

### 2.1 NLW Archives and Manuscripts (AtoM) — exact operator

Per the Doc 175 stemming trap (`Marken` → `Mark`, 1 result became 65), the surname was quoted:

```
https://archifau.llyfrgell.cymru/index.php/informationobject/browse?sf0=_all&sq0=%22Skyrme%22&so0=and&topLod=0
```

**Result: exactly ONE record in the entire catalogue**, and it is not Laugharne:

> "Jonathan Llewhellin of the parish of Llanvihangell Penbedow, co. Pembroke, yeoman; 2. Mary Skyrme of the parish of Llawhaden, spinster (daughter of William Skyrme of the same, esq.)" — Morgan Richardson Solicitors Collection, file 2728, 1698/9 Jan. 13.

A second run adding exact `"Laugharne"` returned a single record whose visible text contains **no Skyrme at all** — an Eaton Evans & Williams letter file mentioning the suit *Laugharne v. Ferguson*, where "Laugharne" is a surname. This is the Doc 141 record-level co-occurrence false positive in miniature. **It was discarded and has not been recorded as evidence.**

### 2.2 Welsh Newspapers Online — the Doc 141 AND grammar, exact-quoted

```
https://newspapers.library.wales/search?rows=10&page=1&sort=score&order=desc&query=&alt=(full_text:("Skyrme") OR title_en:("Skyrme")) AND (full_text:(Laugharne) OR title_en:(Laugharne))
```

146 results. The form does not fire under automation; the URL grammar does, exactly as Doc 141 records. No invented parameters.

### 2.3 A route that did NOT work — recorded so it is not retried blind

The NLW Primo discovery interface (`discover.library.wales/discovery/search?...&tab=probate`) is **fully client-rendered and returns no text and no usable accessibility tree under automation** — `get_page_text` returns "No text content found" and `find` reports a generic element with no children. The probate index was therefore NOT reached this pass. The AtoM catalogue at `archifau.llyfrgell.cymru` is server-rendered and IS readable, and is the route to prefer. This is a tool-level blindness of exactly the Doc 171 shape.

---

## 3. THE JOIN — the marriage of 19 August 1858

**Read at object level**, whole Family Notices item, *The Welshman*, 20 August 1858, p.3 — `newspapers.library.wales/view/4350011/4350014/21/`. Verbatim, from the MARRIAGES block:

> "On the 19th instant, at Laugharne, Frederick Wrinbolt, Esq., of London, eldest son of the late J. Birkett Wrinbolt, Esq., the Castle, Laugharne, to Abra Hughes, only daughter onl d aug hter and heiress of the late William Skyrme, Esq., of Laugharne."

`onl d aug hter` is plain OCR dittography of "only daughter".

**The contiguity test passes.** Doc 141's rule is that co-occurrence on a page is not evidence — evidence is contiguity within one item, with the item's town established. Here Laugharne is named **twice inside the notice itself**, once as the place of marriage and once as the bride's father's designation. This is not a page-level artefact.

Two further papers print the same marriage:

| Paper | Date | Page | Wording of the bride |
|---|---|---|---|
| *The Pembrokeshire Herald and General Advertiser* | 20 Aug 1858 | 3 | "to **Abril.** Hughes, only daughter and Heiress of the late William Skyrme, Esq, of Laugharne" |
| *The Cardiff and Merthyr Guardian…* | 28 Aug 1858 | 5 | "WRINBOLT-SKYRME.-Aug. 19, at **Laogharne**… to Abra Hughes' only daughter and heiress of the late William Skyrme" |

**Honest caveat on independence:** these are standard syndicated family-notice copy of the same week and are very likely NOT three independent witnesses. They corroborate the *wording*; they do not triple the *authority*. Both are logged Read = "Not yet read (route logged)" — only the Welshman was opened at object level.

**Two OCR variants harvested for the Doc 168b variant set:** `Abril.` for *Abra*; `Laogharne` for *Laugharne*.

### 3.1 The anomaly — and why it stays open

A woman surnamed **Hughes** is described as **"only daughter and heiress of the late William Skyrme, Esq."** Her surname does not match her stated father's.

Because all three papers print the same construction, this is the source's wording and not a transcription error. Candidate explanations, **none tested and none to be adopted**:

- (a) she was a widow, née Skyrme, whose first husband was a Hughes;
- (b) the Hughes name was assumed under a will or marriage settlement — a common device where an heiress carries an estate;
- (c) she was a stepdaughter, her mother having married Skyrme;
- (d) the notice compresses a longer description.

**Tiered Referenced-pending.** The *fact of the join* is Verified; the *mechanism* is not. **Do not write her as "Abra Skyrme" or as "née Hughes" anywhere, in any copy, until this is settled.**

**Test route for the next run:** the NLW probate index for a will of William Skyrme of Laugharne, proved c.1830–1858. An heiress clause would name her and would very likely name her first husband. Note that the Primo probate interface is not automatable (§2.3) — the AtoM route or a different surface will be needed.

---

## 4. The Skyrmes at Laugharne in 1813 — and the seventh trap

The top-ranked hit in the search is indexed by WNO as *The Carmarthen Journal*, **22 August 1913**, p.7. Its content is unmistakably Georgian. Read at object level (`view/3765082/3765089/71/`), the article **immediately above it on the same page** carries this running head, verbatim:

> `. FROM THE "CARMARTHEN JOURNAL," FRIDAY, AUGCST 20, 1813.`

It is a **centenary reprint column**. The Family Notices block beneath it is the Carmarthen Journal of **20 August 1813**.

The birth entry, verbatim:

> "BIRTH. At Haverfordwest, the-Lady of Wm. SkYrtne, Esq., of a daughter, which interesting event was celebrated there and at Laugharne, with the tnost lively demonstrations of joy. A large party of the worthy inhabitants of the latter place met together on the occasion, and in copious potations, drank the health of Mr. and Mrs. Skyrme, and daughter. The bells rang merrily for several hours, mirth and good humour contributed to heighten the effect of the joyous, scene."

`SkYrtne` is an OCR variant; the item self-corrects lower down, printing "Mr. and Mrs. Skyrme" cleanly. That internal self-correction is what makes the reading safe.

**What this earns.** In August 1813 a Wm. Skyrme, Esq. was a figure of sufficient standing **at Laugharne** that the town gathered publicly and rang its bells for hours over the birth of his daughter — even though the birth itself was at Haverfordwest. That is evidence of standing in the town, and of a Haverfordwest–Laugharne double footing.

**What it does NOT earn.** It does not place any Skyrme in any named house. It does not connect this man to the William Skyrme dead by 1858, however tempting the arithmetic (a daughter born 1813 would be 45 in 1858). That merge is unproven and is not made.

### 4.1 THE SEVENTH SEARCH TRAP — issue-level date displacement

> **WNO assigns date metadata at ISSUE level. A retrospective or centenary reprint column therefore carries the reprinting issue's date, not the event's — displacing an event by up to a century.**

Two failure modes, both live on this desk:

1. **False dating.** An 1813 event enters the record as 1913. Had this pass trusted the metadata, the register would now assert that Laugharne rang its bells for a Skyrme birth on the eve of the First World War.
2. **False negatives — the more dangerous one.** The `range[min]` / `range[max]` filter in our documented URL grammar filters on the **issue** date. A correctly-bounded 1810s search **will not return this item.** Every date-bounded negative previously recorded on this desk is therefore weaker than it looks wherever reprint columns exist.

**The control — cheap and repeatable.** Before accepting any WNO date, read the running heads of the sibling articles on the same page for a `FROM THE "…," [date]` banner. Carmarthen Journal centenary columns are a standing feature; assume the trap is present in any twentieth-century issue of a long-lived title.

The trap set now reads: **1** OR-matching (Doc 139) · **2** page-level matching (141) · **3** near-collision (141) · **4** OCR-variant blindness (168b) · **5** the duplicated tithe plot number (169a) · **6** tool-level blindness (171) · **7** issue-level date displacement (this doc).

---

## 5. Incidental — flagged for the parallel branch, not worked here

The same notices name **J. Birkett Wrinbolt, Esq., "of the Castle, Laugharne"**, dead by August 1858, and his eldest son **Frederick Wrinbolt, Esq., of London**. A named nineteenth-century occupier of the Castle is genuine town-fabric material and belongs to `mererid-house-of-culture`'s queue. Both are registered as Entities so the evidence is not lost, with the branch flag on the record. **No castle work was done in this pass.** Nothing should be inferred about tenure, ownership or which part of the castle site — the notices say only "the Castle, Laugharne".

---

## 6. The thread's framing, refuted as framed

The thread asks for "William Skyrme I, II and III". **No source read this pass supports a three-generation numbered sequence.** What is attested:

| Man | Context | Date |
|---|---|---|
| William Skyrme of Llawhaden, co. Pembroke, esq. | father of Mary Skyrme, spinster | 1698/9 |
| Wm. Skyrme, Esq. | wife delivered of a daughter at Haverfordwest; celebrated at Laugharne | Aug 1813 |
| William Skyrme, Esq., of Laugharne | "the late"; left an only daughter and heiress | dead by Aug 1858 |

The 1813 and pre-1858 men **may** be one man. Unproven. The 1698/9 man is a different county and 150 years distant, and shares only a very common gentry forename. The origin of the "I, II and III" numbering is not recorded in the thread and is supported by nothing.

Per the standing rule — **anchor to dates and offices, never to numerals** — the numbering should be struck from the thread and must never enter copy. This is a correction to our own register, not to a source.

---

## 7. The gap, stated plainly so it cannot be assumed away

**No source read this pass places any Skyrme at Island House, or at any named house in Laugharne.**

The Skyrmes are now evidenced as a Laugharne gentry family with standing in the town by 1813 and an heiress in 1858. Their attachment to **Island House specifically** remains **UNSOURCED** — the same status Doc 173 records for Bridget Bevan. Reporting that gap is the finding, not a failure of the pass.

---

## 8. Chain of custody — base `appnt9vSQKrKyaKiZ`

**Research — Sources (5 new):**
`recBZd4hxZ1SfYlTi` The Welshman, 20 Aug 1858 — **Read, object level** ·
`recSdXBkzDwxq6pk6` Carmarthen Journal, 20 Aug 1813 (reprinted 22 Aug 1913) — **Read, object level** ·
`reccgOyriLXoPavSL` Cardiff and Merthyr Guardian, 28 Aug 1858 — route logged ·
`recFitcGNSmuX8ltL` Pembrokeshire Herald, 20 Aug 1858 — route logged ·
`recfyNkuKOJ5aD92t` NLW AtoM exact-"Skyrme" search — **Read**, negative properly closed.

**Research — Entities (7 new):**
`recSKlYJEM9oE50DF` William Skyrme, Esq., of Laugharne (d. by 1858) ·
`rechBAknLejojr4pE` Wm. Skyrme, Esq. (fl. 1813) ·
`recG316E0YPgIib4R` Abra Hughes, later Wrinbolt ·
`recgTe443U1dKsUf1` Frederick Wrinbolt ·
`recvmDnqlUaH6hi6A` J. Birkett Wrinbolt of the Castle *(flagged for the other branch)* ·
`recjfeq4iMMl4t4Wf` William Skyrme of Llawhaden *(do-not-join)* ·
`recm9hpyvGLiXdIi5` Miss Skyrme of St Clears *(do-not-join)*.

**Research — Facts:** F177-1 to F177-10 — `recEO12ZXuTb11eui`, `recu45GbVSC1L8bg0`, `recPVeG4MXdyCK1l6`, `recUoYvGn6w368wa1`, `recMli1LbAA2CbITn`, `rectlEmMSURFkBPGA`, `reccvyZQrZZhLUDc9`, `recgNM21ET093lz8x`, `recQMJBFX2tpVxL9o`, `recE55ksgwzFc1K2M`.

Tiering: seven Verified, one Referenced-pending (F177-3, the mechanism), one Refuted (F177-8, the thread framing), one Verified method fact (F177-7). Nothing promoted to Verified-strong. Nothing published; nothing on the public trail; no Stop touched.

---

## 9. Next target

**Resolve F177-3 — how a Hughes is heiress of a Skyrme.** The probate route is the one that would settle it, and §2.3 records that the Primo probate interface is not automatable, so the next run should budget for finding a readable surface first. If that proves archive-gated, it belongs to the human archive day and should be marked as such rather than approximated.
