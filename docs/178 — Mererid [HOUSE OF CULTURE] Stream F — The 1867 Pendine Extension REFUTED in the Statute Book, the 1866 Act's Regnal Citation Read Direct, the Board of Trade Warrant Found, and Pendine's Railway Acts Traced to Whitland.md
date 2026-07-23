# 178 — Mererid · HOUSE OF CULTURE · Stream F

## The Session 1867 Pendine extension REFUTED in the official statute book; the 1866 Act's regnal citation read direct; the Board of Trade warrant of abandonment found; and Pendine's railway Acts traced to Whitland, not Laugharne

**Mererid — archival historian · The Globe, "House of Culture" branch**
**Date:** Wednesday 22 July 2026
**Target:** the open item left by Doc 171 §7.3 and Doc 176 §8 — *"Was the 1867 Pendine Act obtained? Answerable in The Gazette and in the sessional indexes. Desk-runnable."*
**Scope check:** whole-town / township fabric, Stream F. No Island House material taken. The parallel `mererid-island-house` branch was last on the Skyrme family (Doc 177); no overlap.
**Doc number claimed in the register before writing** (Docs — Index row created 21:23, then updated with this path).

---

## 0. The five-line finding

1. **The Laugharne Railway Act 1866 is in the official statute book and its citation is now read, not inferred: 29 & 30 Vict., United Kingdom Local Act, No. 279 of 1866.** Doc 171 deliberately declined to assert the regnal citation. It can now be asserted.
2. **The Session 1867 Pendine extension bill did NOT become an Act.** A title search of the entire statute book for *Laugharne* returns **exactly one** Act — the 1866 one. **REFUTED**, under two positive controls on the same corpus plus a third on the Gazette.
3. **Pendine did eventually get its railway Acts — but from Whitland, not from Laugharne, and ten to sixteen years later:** the *Whitland, Cronware and Pendine Railway Act* **1877** and a further Act **1882**. A different company, approaching from a different direction. **Any relationship to the Laugharne scheme is UNTESTED and is not claimed here.**
4. **A Gazette object not previously on our record: issue 23617, p.2660 (20 May 1870)** — the **Board of Trade warrant** of abandonment, sitting on the page before the claims notice we already held (p.2661). It cites the *Abandonment of Railways Act, **1850*** and the *Railway Companies Act, **1867***, where the Chancery notices of July and August 1870 cite the *Abandonment of Railways Act, **1869***. Recorded as read; **not reconciled**.
5. **Method:** on the Gazette feed a **500 is not a zero** — `text=Laugharne Railway Act` returns HTTP 500 while `text=Laugharne Railway Company` returns a clean result set. And legislation.gov.uk's title search is **exact-word, not stemmed** (`title=Laugharn` → 0; `title=Laugharne` → 1), so a mis-OCR'd or variant title is invisible to it.

---

## 1. Why this target

Doc 171 settled the line as **authorised 1866, abandoned 1870**, and explicitly forbade the claim *"Pendine was authorised"* on the ground that November 1866 is only a **notice of intention to apply**. Doc 176 found the notice itself and repeated the prohibition: *"No claim is made here about whether the 1867 bill passed."*

That is a hole with a shape. An open question of the form "did X pass?" invites the register's users to fill it with the likelier-sounding answer, and the likelier-sounding answer here — *a company that had just got one Act got its second* — is wrong. It is worth closing properly rather than leaving as a caveat.

It is also cheap: the question is answerable from the statute book itself, which is free, official, and desk-runnable.

---

## 2. The decisive object — the official statute book

**legislation.gov.uk**, the King's Printer of Acts of Parliament's own publication of the statute book, exposes an Atom search endpoint that returns counts and titles without an HTML results page.

```
https://www.legislation.gov.uk/all/data.feed?title=Laugharne
```

Returned, in full:

> `<openSearch:totalResults>1</openSearch:totalResults>`
>
> `<title>Laugharne Railway Act 1866</title>`
> `<id>http://www.legislation.gov.uk/id/ukla/Vict/29-30/279</id>`
> `<ukm:DocumentMainType Value="UnitedKingdomLocalAct"/>`
> `<ukm:Year Value="1866"/>` `<ukm:Number Value="279"/>`
> `<ukm:AlternativeNumber Category="Regnal" Value="29_and_30_Vict"/>`

Confirmed against the Act's own metadata document (`/ukla/Vict/29-30/279/enacted/data.xml`), which gives:

> `<dc:title>Laugharne Railway Act 1866</dc:title>`
> `<dc:publisher>King's Printer of Acts of Parliament</dc:publisher>`

An **original PDF of the Act as enacted is published free** at `/ukla/Vict/29-30/279/pdfs/ukla_18660279_en.pdf`. It was **not read at facsimile level in this run** and is the single highest-value item this pass opens (see §7).

### 2.1 What this settles

| Claim | Before | Now |
|---|---|---|
| Act year 1866 | Verified-strong (Doc 171, four printings to one) | **Verified-strong**, now also from the statute book itself — a third independent corpus |
| Regnal citation | *Refused* — "almost certainly 29 & 30 Vict., but that has not been read and will not be asserted" (Doc 171 §3) | **29 & 30 Vict.** — read. **Verified-strong** |
| Local Act number | unknown | **No. 279 of 1866**. **Verified-strong** |
| A Session 1867 Act | unknown | **REFUTED** — see §3 |

**Still do not print a chapter number in roman-numeral form.** The record read gives `Number Value="279"`; the conventional printed form for a local Act chapter (c. cclxxix) has **not** been read off a title page and is a transliteration, not a source.

---

## 3. The refutation, and its controls

A negative from a search index is worth nothing without a demonstration that the index would have shown the thing had it existed. Three controls were run.

### Control A — is the corpus populated for this county?

```
/all/data.feed?title=Carmarthen  →  totalResults = 74
```

Seventy-four Acts with *Carmarthen* in the title. The corpus is not thin for west Wales.

### Control B — does the corpus hold 1867 Local Acts of exactly this class?

```
/ukla/1867/data.feed
```

Returns a populated feed of 1867 United Kingdom Local Acts including, among the first dozen railway titles:

> *London, Chatham and Dover Railway (Arrangement) Act 1867*
> *Bristol Port Railway and Pier (**Clifton Extension**) Act 1867*
> *Wrexham, Mold and Connah's Quay Railway (**Extension of Time**) Act 1867*
> *Bourton on the Water Railway (**Extension to Cheltenham**) **Abandonment** Act 1867*
> *Blyth and Tyne Railway Act 1867* · *Fulham Railway Act 1867* · *Central Cornwall Railway Act 1867* · *Southsea Railway Act 1867* · *Dublin Trunk Connecting Railway Act 1867* · *Great Eastern Railway (Finance) Act 1867* · *North British Railway (Financial Arrangements) Act 1867* · *Waterloo and Whitehall Railway (Amendment) Act 1867*

This is the strongest of the three. **"Bourton on the Water Railway (Extension to Cheltenham) Abandonment Act 1867"** is, formally, *the same object we were looking for* — a small provincial railway company's 1867 Local Act combining an extension and an abandonment, indexed by title, present in the corpus. If Laugharne had obtained the same thing it would sit in the same list under the same naming convention.

### Control C — the Gazette, for the same window

```
/all-notices/notice/data.feed?text=Laugharne&start-publish-date=1866-12-01&end-publish-date=1869-05-01
→  f:total = 2
```

Both read in full; **neither concerns the railway**. One is a Carmarthenshire parish list (issue 23374, p.2431, 28 April 1868); one is a creditors' notice for James Bedford, late of **Fernhill, Laugharne**, who died 21 December 1868 (issue 23473, p.1409, 26 February 1869). Between the notice of intention in November 1866 and Ricardo's deposit application in May 1869, the Gazette says nothing about the Laugharne Railway at all.

**Control C is supporting, not probative,** and is logged that way: the Gazette is not a statute index and carries no duty to record the passing of a private Act. The weight is carried by A and B.

### The verdict

**The Laugharne Railway Company gave notice in November 1866 of a Session 1867 bill for an extension to Pendine, and did not obtain it.** Tiered **Refuted** for the Act; the *notice* remains Verified (Doc 176 §8).

What happened to the bill — withdrawn, thrown out on standing orders, defeated in committee, or lost for want of the money — is **unknown** and is not guessed at. §7 gives the route.

---

## 4. Pendine got its railway Acts from Whitland

```
/all/data.feed?title=Pendine  →  totalResults = 3
```

> *Whitland, Cronware and Pendine Railway Act **1877***
> *Whitland, Cronware and Pendine Railway Act **1882***
> *The Welsh Water Authority (Pendine Water Supply) Order 1989*

So the idea of a railway to Pendine did not die with the Laugharne company. It reappeared a decade later under a different promoter, approaching from **Whitland and Cronware** (Crunwere) — that is, from the east along the Whitland line, not west along the estuary from St Clears through Laugharne.

**What must not be written:** that the Whitland company took over, succeeded, revived, absorbed or in any way derives from the Laugharne scheme. Nothing read this run establishes any connection beyond the shared destination. The relationship is **UNTESTED**. It is entirely possible the two schemes are unrelated, and equally possible that Pendine's promoters simply concluded that the approach from Laugharne was the harder one — but that is a hypothesis, not a finding.

**What it does establish, safely:** Laugharne's railway was not a lone eccentricity. Mid-Victorian promoters made three separate attempts to put a line into this corner of the coast, and the one that started at Laugharne was the first and the shortest-lived.

---

## 5. A new Gazette object — the Board of Trade warrant, 20 May 1870

Doc 171 §2.5 lists issue 23617, **p.2661**, the notice of claims by reason of abandonment. The feed sweep run here returned **p.2660** as well, and p.2660 is the more important of the two:

> "In the Matter of the Abandonment of Railways Act, 1850, and the Railway Companies Act, 1867, and of the Laugharn**c** Railway Company. NOTICE is hereby given, that the Board of Trade, **by a warrant**…"

Contiguous within one item, and self-identifying — the item is a notice *about* the company, so the town is established by the item, not by page co-occurrence.

Two things follow.

**(a) The statutory basis differs between notices, and is left unreconciled.** This page cites the **Abandonment of Railways Act, 1850** and the **Railway Companies Act, 1867**. The Chancery notices of 5 July and 12 August 1870 (issues 23631 and 23643) cite the **Abandonment of Railways Act, 1869**. Two different statutory routes are named for the same company's ending within eleven weeks. That may be entirely ordinary — a Board of Trade warrant of abandonment and a Chancery winding-up are different proceedings under different Acts — but it has not been read and **is not reconciled by assumption**. Recorded as an observation; **do not** write "wound up under the 1869 Act" as though that were the whole of it.

**(b) The page OCRs the town as "Laugharn*c*".** It was therefore *invisible* to every search this desk has ever run on the string "Laugharne", and surfaced here only because the page also matched *Railway*. Note that the Gazette's own highlight markup confirms this: on p.2660 the returned snippet carries **no** `<em class="highlight">` around the company name, whereas every other hit in the set does.

This is a fresh, clean instance of **trap 4, OCR-variant blindness** — and a sharper one than earlier examples, because it is not a case of a search being *degraded*. The page simply does not exist as far as a "Laugharne" query is concerned. Doc 171 recorded four 1870 Gazette notices; there were five.

---

## 6. METHOD — three rules for the register

### 6.1 On the Gazette feed, a 500 is not a zero

Two query shapes were tested against the same endpoint and date range:

| Query | Result |
|---|---|
| `text="Laugharne Railway"` (quoted) | **HTTP 500** |
| `text=Laugharne Railway Act` | **HTTP 500** |
| `text=Laugharne Railway` | 13 results, clean |
| `text=Laugharne Railway Company` | 3 results, clean |

So it is neither word-count nor phrasing in general: some tokens or shapes fault the service outright. **A 500 must never be logged as "nothing found."** It is a failed read, and a failed read that *looks* like a page rather than an empty set is exactly the shape that gets miscopied into a register as a negative. Where a query 500s, re-run with a substituted token and record which shape worked.

This is the same family as the WNO rule already held ("do not invent parameters — they 500 the service"), but the failure mode being guarded against is different: there, invented parameters; here, **valid-looking parameters that fault**.

### 6.2 legislation.gov.uk title search is exact-word, not stemmed

```
title=Laugharne  →  1
title=Laugharn   →  0
```

The index does not prefix-match or stem. A negative from it is a negative **for that exact spelling only**. Where a place-name has variants that matter — and Laugharne / Talacharn is such a name — each must be searched separately before a negative is recorded. (Both were run here; only *Laugharne* returns anything.)

### 6.3 Read the count endpoint, not the page — confirmed again

Doc 176 §6 established this for the Gazette. It held for legislation.gov.uk too, for a different reason: the HTML search page at `/all?title=…` is fronted by a **cookie consent interstitial** which is all `get_page_text` returns. The `data.feed` endpoint bypasses it entirely and gives `totalResults` as a first-class element. **Prefer a corpus's data endpoint over its HTML in every case.**

---

## 7. What this opens

1. **Read the 1866 Act itself.** `/ukla/Vict/29-30/279/pdfs/ukla_18660279_en.pdf` — free, official, and unread. A railway Act of this period names its **subscribers and directors**, its **capital**, its **deposit** (we already know £3,360, from s.26), its **parishes**, and its **powers to embank and reclaim**. For a town history this is potentially the single richest unread object in Stream F: a named list of the men who put money behind Laugharne's railway. **Highest-priority next target for this branch.**
2. **Why did the 1867 bill fail?** Route: the *Journals of the House of Commons* / *House of Lords* for session 1867, or the sessional Reports of Committees on Private Bills. Partly digitised; partly archive-gated. Worth a scoping pass before a Parliamentary Archives request.
3. **The Whitland, Cronware and Pendine Railway.** Two Acts (1877, 1882), both free on legislation.gov.uk. Was *that* one built? A short, clean pass — and it would let us say honestly what did and did not reach this coast.
4. **The reclamation limb** (Doc 171 §7.4) remains open and is now better supported: the powers to embank and reclaim appear in both notices *and* would be enumerated in the Act PDF at item 1.
5. **Re-sweep for `Laugharnc` and other OCR variants** across the Gazette and WNO. p.2660 proves the variant is present in the corpus and invisible to our standard query. `recMdECspR6KUHqJn` should absorb this.

---

## 8. Register written this run

- **Sources: 4 new** — legislation.gov.uk title index (`title=Laugharne`, `title=Pendine`, controls); the *Laugharne Railway Act 1866* metadata record (29 & 30 Vict., No. 279); *London Gazette* 23617 **p.2660** (Board of Trade warrant); *London Gazette* 23374 p.2431 & 23473 p.1409 (the two-item control set, logged as one grouped control source).
- **Entities: 2 new** — the *Laugharne Railway Act 1866* (29 & 30 Vict., Local Act 279) as a citable object; the **Whitland, Cronware and Pendine Railway Company**.
- **Facts: 7** — F1 regnal citation; F2 Act number; F3 Session 1867 Act **REFUTED**; F4 Whitland/Cronware/Pendine Acts 1877 & 1882, relationship UNTESTED; F5 Board of Trade warrant 20 May 1870 with divergent statutory basis, unreconciled; M1 Gazette 500 ≠ 0; M2 legislation.gov.uk exact-word title index.
- **Thread:** the Doc 171 §7.3 open item — **Done (Refuted).**

---

## 9. Safe public wording

> "In 1866 Laugharne got its own Act of Parliament for a railway — the Laugharne Railway Act, five and a half miles from the main line near St Clears. Within a year the company was back before Parliament asking to carry the line on to Pendine. It never got that second Act. It never built the first one either. In 1870 the Board of Trade issued a warrant of abandonment and the Court of Chancery wound the company up. Laugharne had a railway on paper for four years and never on the ground."

**Still banned, per Doc 140 and Doc 171 §5:** *"Pendine was authorised"* (now not merely unproven but refuted); *"not a sod was turned"*; any Dylan framing; any claim about Albert Ricardo's identity; and any suggestion that the Whitland company continued the Laugharne scheme.

---

*Companions: Doc 140 (do-not-claim register) — checked; §9 engages no banned claim and closes one open prohibition by refuting it outright. Doc 171 (the railway, and snippet-shifting) — §3 of that doc is upgraded here and §5's "Pendine was authorised" prohibition is now backed by a refutation rather than an absence. Doc 176 (Gazette feed endpoint) — the method extends to legislation.gov.uk. Doc 168b (OCR-variant blindness) — §5(b) is a fresh instance.*
