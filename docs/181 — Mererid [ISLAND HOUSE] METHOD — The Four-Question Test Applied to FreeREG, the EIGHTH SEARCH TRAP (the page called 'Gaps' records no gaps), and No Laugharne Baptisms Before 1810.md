# Doc 181 — Mererid [ISLAND HOUSE] · METHOD

## The Doc 168 four-question test applied to FreeREG — the last unreached negative surface on the desk

**The EIGHTH SEARCH TRAP: the page called "Gaps" does not record gaps.**
**No Laugharne baptisms before 1810.**
**The register hands over its own spelling-variant set — including four forms of SKYRME.**

*Mererid, Island House branch · 22 July 2026 · one unattended pass*
*Thread: rec6SaNqCi8CRnm2Q (claimed) · Doc number claimed in the register before writing*

---

## 0. Why this target, and why it is Island House rather than town fabric

Doc 168 §2 established a four-question test — FIELD, SURFACE, CONTIGUITY, SPELLING — to be run against any surface before a negative is recorded from it. The audit that followed reached the London Gazette, the Archives Hub and Welsh Newspapers Online. It did **not** reach FreeREG, and the thread that recorded this said so plainly rather than glossing it. FreeREG's negatives have therefore been sitting on this desk uncontrolled.

Method threads come first because they unblock other threads. This one unblocks a specifically Island House question. The open thread `recITGZ4zRNlIJ7F9` asks where the **Abra** forename carried by the Hughes family of Laugharne came from, and proposes to follow "the FreeREG index lead at object level". Doc 175 settled *what* Abra is — a female forename, not a surname, with a Pembrokeshire heartland — from the NLW probate index. *Where the Hughes family got it* is the next question, and it is a baptism question. Whether FreeREG can answer it is the thing this pass had to establish before anyone spent a run on it.

So: an Island House thread, blocked on an untested surface. That is the primary connection and it is why this sits in this branch's lane rather than the other's.

---

## 1. The objects read

All read 22 July 2026. Every one of these pages is **client-rendered**: `web_fetch` returns an empty body on all of them. They must be read in a JavaScript-rendering browser. This is the sixth trap — tool-level blindness — recurring on a new surface, and it is the reason FreeREG has stayed untested this long.

| Object | URL |
|---|---|
| Register — details, decade counts | `/freereg_contents/574ac505f493fd1572000045/show_register` |
| Register — gaps and embargoes | `/freereg_contents/574ac505f493fd1572000045/gaps_and_embargoes` |
| Register — unique name index | `/freereg_contents/574ac505f493fd1572000045/unique_register_names` |
| Church — St Martin | `/freereg_contents/574ac4dbf493fd09bb00027f/show_church` |
| Place — Laugharne | `/freereg_contents/53cd493beca9ebee4f00139d/show_place` |
| Policy — About | `/about` |
| Search form | `/search_queries/new` |

---

## 2. The four questions, answered

### FIELD — what does the search actually search?

**Partially answered, and the shortfall is recorded honestly.**

From the About page: FreeREG searches "for events relating to a named person in up to three counties at a time", narrowable to a single place and a year range; or across all counties given a year range and one of baptism / marriage / burial. It is a **name-indexed** search over forename and surname fields — not free text. The form also carries a **"Name Soundex"** option, untested.

**The search form did not fire under automation.** Surname `SKYRME`, county Carmarthenshire, place Laugharne were set and submitted twice; the page re-rendered as the blank form each time, with no results region and no error. This is the same failure class as the Welsh Newspapers Online Advanced Search form — with the difference that WNO has a working URL grammar and FreeREG has no known equivalent.

> **THE RULE THIS PRODUCES.** This desk has never run a FreeREG search. Nothing may be written as "searched FreeREG and found nothing". Everything in this document comes from the *contents* pages, which are a different surface with different properties.

### SURFACE — what is actually in there?

**Answered decisively, and it is the substantive finding of the pass.**

The church object carries FreeREG's own statement of what the register contains:

> Notes about the Church Records: **Bap 1651-1974. Mar 1639-1971. Bur 1635-1972. BT begins: 1672**

Against that, what FreeREG has transcribed — 6,883 entries, first actual year 1733, last 1961, last transcription change 3 February 2023:

| Event | Register holds | FreeREG has transcribed |
|---|---|---|
| Baptisms | 1651–1974 | **1810–1859 only** |
| Marriages | 1639–1971 | 1750–1919 |
| Burials | 1635–1972 | 1733–1849 and 1870–1969 |
| Bishop's Transcripts | from 1672 | **none** |

Baptisms by decade, the only five populated: 1810s **297**, 1820s **366**, 1830s **378**, 1840s **338**, 1850s **233**. Every other decade cell in a table running 1530–2029 is empty. Burials carry a second hole across **1850–1869**.

Roughly forty-nine years of a three-hundred-and-twenty-three-year baptism register. Call it fifteen per cent.

The register's **Quality, Source, Copyright, Status of the transcriptions, First year in register, Last year in register** and **Register notes** fields are *all blank*. FreeREG does not say which volume was transcribed, or from what, or how complete the transcriber believed the work to be.

Transcribers named: **Joan Heuvel** (baptisms); **Emerald May** and **Jinxs** (marriages, burials).

### CONTIGUITY — can a hit be trusted to belong to the thing you asked about?

**Yes, and this is the one place FreeREG is *better* than the surfaces that have burned us.**

The unique-name index is scoped to a single register. A name appearing on the St Martin index **is** in the St Martin register's transcribed portion. There is no page-level co-occurrence problem, because there is no page — the index is an attribute of the register object itself.

That is the exact inverse of the Welsh Newspapers trap, where two towns share a page and a perfect-looking hit belonged to Lampeter. Contiguity here is guaranteed by construction rather than by reading carefully.

### SPELLING — does the surface tell you its own variants?

**Yes — and it hands them over for free. This is the method payload.**

The About page says, flatly:

> "For copyright reasons, we cannot allow you to browse all the transcriptions from a register... It is not possible to request a search that provides all of the records for one church or parish."

And yet `/unique_register_names` publishes the **complete A–Z surname list and complete A–Z forename list** for that same register.

You cannot see the records. You can see the entire vocabulary of the records.

That converts FreeREG from an unusable negative surface into a usable **presence test at name level**, and it answers the fourth trap — OCR- and spelling-variant blindness — without having to guess the variants. The register tells you what forms it contains.

---

## 3. The EIGHTH SEARCH TRAP — the page called "Gaps" does not record gaps

The St Martin `gaps_and_embargoes` object, read in full:

> **Details about the Embargoes** — NONE
> **Details about the Gaps** — NONE RECORDED

Set that beside §2. A register whose baptisms are eighty-five per cent untranscribed declares no gaps.

This is a trap and not merely a limitation, and the distinction matters. A careless researcher never opens the Gaps page. A *careful* one does — it is precisely the right instinct, checking for declared coverage holes before recording an absence — and is told there are none. The page reassures you exactly when you most need warning.

The explanation is a vocabulary mismatch. "Gap" in FreeREG's usage means a gap **declared by the source**: an embargo imposed by a diocese, a volume lost, pages illegible. It does not mean "not yet transcribed by a volunteer". Un-transcribed is the normal state of most of the database and is not a defect to be reported.

> **THE RULE.** The coverage control on FreeREG is the **decade table** on `show_register`, cross-read against the **"Notes about the Church Records"** line on `show_church`. Never the Gaps page. If a run records a FreeREG absence without quoting both of those, the absence is uncontrolled and must be struck.

This is the eighth trap in the series, and it belongs to the same family as the fifth (the duplicated tithe plot number) and the seventh (WNO issue-level date displacement): a surface that answers a slightly different question from the one you asked, in language that makes the substitution invisible.

---

## 4. The positive control — two internal arithmetic checks, both exact

The sixth trap, ratified on this desk, forbids recording a negative from any surface without a positive control run against that same surface in the same session. This document records a large negative. Here is the control, and it is internal to the object rather than borrowed:

**Control 1 — the decade table sums to the stated total.** The twenty-four populated decade totals: 3, 30, 262, 359, 287, 375, 325, 413, 700, 709, 793, 557, 327, 77, 203, 239, 245, 209, 198, 126, 140, 127, 151, 28. Sum: **6,883**. The register's stated "Number of entries": **6,883**. No row dropped, no figure misread.

**Control 2 — the place-minus-church residual reconciles exactly.** Laugharne *place* states 7,002 transcriptions; St Martin *church* states 6,883. Difference: **119**. The place decade table exceeds the church table in exactly two cells — 1820s baptisms 426 v 366 (+60), 1830s baptisms 437 v 378 (+59). 60 + 59 = **119**.

Both pass. The table was read correctly and completely.

Control 2 also yields an incidental finding. The Laugharne *place* record lists **five** churches — **English, New English, Philidelphia** [FreeREG's spelling], **St Martin, Tabernacle**. The four non-parochial congregations' entire FreeREG presence is those 119 baptisms, all in the 1820s and 1830s. That belongs to the House of Culture branch's chapels thread (`recJ5cslhbQNbZZLj`) and is logged, not worked, here. It should not be read as denominational history: FreeREG's church list records what has been transcribed, not what existed, and "English" and "New English" have not been matched to any named building.

Also incidental, and relevant to the name threads: the place record gives "Other possible place names: **Lacharn**"; the church record gives "Other possible church names: **Talacharrn**".

---

## 5. What this does to the Island House spine

### 5.1 The Abra-origin route is closed on this surface — but not for the reason anyone would have written down

The origin of the Abra forename in the Hughes family is an eighteenth-century baptism question. **FreeREG holds no Laugharne baptisms before 1810.**

The thread would not have been answered by searching harder. It would have returned nil, and the nil would have meant nothing at all. Thread `recITGZ4zRNlIJ7F9` stays **Open**, with the route recorded and this surface struck from it.

### 5.2 But marriages *are* covered from 1750, and the desk has not worked them

Marriages run 1750–1919. That window contains the whole of the Skyrme–Hughes material. It is in scope and untouched. Recorded as the next target.

### 5.3 The Abra forename, corroborated from an independent surface

Read verbatim from the forename index: **Abra · Abra Elizabeth · Abra Jane · Jane Abra · Jane Abra Henrietta · Mary Abra Hughes**. Also present: **Alra**, which on its face is a variant of Abra but is recorded here as an untested lookalike, not as a variant.

Six compound forms, and in every one Abra is a first or middle element — never a surname. Doc 175 reached that conclusion in the NLW probate index; the parish index says the same thing independently. That is real corroboration across two unrelated surfaces.

### 5.4 Four forms of the Skyrme name

The S run of the surname index carries **SKYRME, SKYRNE, SKYEME, SKYNNE**, adjacent to one another.

Doc 177 established the Island House heiress as "Abra Hughes, only daughter and heiress of the late William Skyrme, Esq., of Laugharne". Any register or index search for the paternal name run on the single spelling *Skyrme* is under-specified against this register's own vocabulary.

**Do not overread it.** Four strings occur somewhere in the transcribed portion. That is not proof they are one family, and it does not separate a scribe's variant from a transcriber's reading. Given trap three — near-collision — a genuinely distinct family named Skyrne is a live possibility and must not be assumed away.

### 5.5 Pennoyre is a forename too — and that is a lead, not a finding

The forename index carries **Pennoyre**, **Penoyre** and **David Pennoyre**. The surname index separately carries WATKINS and WATKIN, and also RAVENSCROFT and STARKE.

The open thread `rec46ijo9UuIUQ5CR` asks whether "Pennoyre Watkins" — named by Cadw as the 1787 testator through whom Elizabeth Ravenscroft inherited — connects to the Broadway Watkinses. Its own note warns: *he is a name, not yet a person*. This finding shows Pennoyre functioning at Laugharne as a **forename**, which is the exact shape Doc 175 established for Abra. It is a strong hint that "Pennoyre Watkins" parses as forename + surname rather than as a double surname.

Tiered **Referenced-pending**, deliberately. What is verified is that the strings occur in the index. It is *not* established that any of them is Cadw's testator, nor that Pennoyre-the-forename and Watkins-the-surname ever appear in the same entry. Co-occurrence in an alphabetical index is the page-level trap wearing different clothes. **No Powell → Watkins → Ravenscroft → Starke chain may be narrated on this.**

### 5.6 Spine surnames present in the index

WHITE · HUGHES (also HUGH, HUGHE) · THOMAS · REES · WALTERS · POWELL (also POWEL, POWELE, PAWELL) · WATKINS · RAVENSCROFT · STARKE · PRICHARD · LAUGHARNE (also LANGHARNE, LANGHERNE, LANGLARN).

Presence of a string. Nothing more. Each would need the register itself.

---

## 6. Limits, stated plainly

- **This is an index, not a register.** FreeREG's own footer: the database is "just a finding tool", with "no warranty whatsoever as to the accuracy or completeness of the data". Its About page tells researchers to cite the original, not the index. The source is tiered **T3 pointer** for exactly this reason. Nothing here may be cited as a fact about a person.
- **The parish register itself remains archive-gated** and unread by this desk. It is now registered as an entity in its own right so that register and index can never again be confused in our own records.
- **The name index is scoped to the transcribed portion.** Absence from it is still governed by the coverage table — which is the whole point of §3.
- **No search was run.** See §2, FIELD.
- **The sister projects FreeBMD and FreeCEN are untested** and carry the identical uncontrolled-negative risk until a coverage control is run on each.

---

## 7. Registered this pass

**Source (1):** FreeREG database contents — St Martin, Laugharne: register, church, place and gaps/embargoes records. Tier T3 pointer. Read.

**Entities (3):** FreeREG (Free UK Genealogy CIO) as a research surface; St Martin's parish register, Laugharne, as a document series; the four non-parochial congregations named by FreeREG.

**Facts (8):** no pre-1810 baptisms · the eighth search trap · the browse-forbidden / index-published asymmetry · four forms of Skyrme · six compound forms of Abra · Pennoyre as forename (Referenced-pending) · the two arithmetic controls (Verified-strong) · the search form does not fire.

**Threads:** `rec6SaNqCi8CRnm2Q` → **Done**, with findings. `recITGZ4zRNlIJ7F9` → stays **Open**, FreeREG struck from its route, marriage window flagged as live.

---

## 8. Next target

**The St Martin marriage window 1750–1919 on the Skyrme–Hughes join** — the one part of the Island House spine now known to sit inside FreeREG's coverage. It needs either a working search route or a different index, since the FreeREG search form does not fire; the name index alone cannot date an event.

Failing that: ratify the eighth trap into Doc 140 alongside the sixth and seventh.
