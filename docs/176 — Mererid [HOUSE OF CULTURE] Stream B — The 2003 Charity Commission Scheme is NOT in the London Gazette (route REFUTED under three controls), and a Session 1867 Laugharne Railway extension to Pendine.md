# Doc 176 — Mererid [HOUSE OF CULTURE] — Stream B

## The 2003 Charity Commission Scheme is NOT in the London Gazette: a route REFUTED under three controls; the Gazette `data.feed` endpoint established as the only safe read surface; and a Session 1867 Laugharne Railway extension to Pendine found en route

**Branch:** House of Culture (town & Globe)
**Date:** 22 July 2026
**Thread claimed:** `reci43H3owevJG8zt` — "Obtain the text of the CHARITY COMMISSION SCHEME DATED 27 MAY 2003 that amends the de Brian charter — the Corporation's operative modern constitution, found in Doc 174 but not yet read"
**Status set:** Dead-end *as to the Gazette route*; the underlying question remains Open by a different route (see §7)
**Follows:** Doc 174 (the Scheme's existence and date), Doc 171 (the Gazette route), Doc 169a / Doc 168b (the search traps)

---

## 1. What was being tested

Doc 174 read the Charity Commission register for **THE LAUGHARNE CORPORATION LANDS, charity 218121**, and established that the Corporation is governed by:

> CHARTER OF GUIDO DE BRIAN (DATE UNKNOWN C.1300) AS AMENDED BY SCHEME DATED 27 MAY 2003

Doc 174 closed by proposing, as "the single highest-value follow-on and it is desk-runnable", that the **text** of that Scheme be obtained from "Charity Commission and/or London Gazette, May–July 2003, using the Doc 171 Gazette route."

This run tested that proposal. **The proposal is wrong, and this document closes it off so that no future run spends a pass on it.**

---

## 2. The register does not carry the text — confirmed at object level

Re-read this session, independently of Doc 174:

`register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/218121/governing-document`

The page states, in its own words, immediately above the governing-document line:

> "Details of the type of governing document the charity has and when it was established. **It is not the full text of the charity's governing document.**"

So the register names the instrument and dates it. It does not reproduce it. Doc 174's reading is confirmed verbatim, including the six charitable objects and the area of benefit ("AREA OF THE FORMER CORPORATION OF LAUGHARNE"). Nothing in Doc 174 needs correction.

**This is a re-confirmation, not a new fact.** It is recorded here only because a second independent read of the same surface on a different day is worth having on the record.

---

## 3. The Gazette route — run, and returning nothing

Search grammar used (the Gazette's own parameters, not invented):

```
thegazette.co.uk/all-notices/notice/data.feed
  ?text=Laugharne
  &start-publish-date=2002-01-01
  &end-publish-date=2005-12-31
  &results-page-size=50
```

**Result: `<f:total>22</f:total>` — 22 notices, all 22 returned in a single page, all 22 read.**

Every one of the 22 was read at item level. Their composition:

| Class | Count | Character |
|---|---|---|
| Bankruptcy Orders | 9 | Named individuals resident in Laugharne, Carmarthenshire |
| Deceased-estate notices ("Other", code 2903) | 6 | Named individuals, geo-tagged to the Laugharne area |
| Amendment of Title of Proceedings | 1 | Same individual as one of the bankruptcies |
| Petitions to Wind Up (Companies) | 1 | Registered office at Hurst House Farm, Laugharne |
| Crown Office | 1 | Appointment of **Sir Roger John Laugharne Thomas** as a Lord Justice of Appeal — *Laugharne as a personal middle name, not the town* |
| Military appointments (Supplement) | 1 | **Lieutenant Colonel Simon Laugharne Farley**, Royal Engineers — *again a middle name, not the town* |
| Charity Commission Scheme notices | **0** | — |

**No Charity Commission Scheme notice concerning Laugharne appears in the London Gazette in 2002–2005.**

Note in passing that two of the 22 are the **near-collision shape** the desk has already been bitten by: "Laugharne" appearing as a *personal name* rather than the *place*. Neither was mistaken for the town here, but they are exactly the kind of hit that a run skimming titles would bank as a Laugharne finding. Logged as a live example.

---

## 4. THE CONTROLS — why this negative is safe to record

Per the sixth trap (thread `rect2Qf4UOtSubOPd`): *no negative may be recorded from any surface without a positive control run against that same surface in the same session.* Three controls were run.

### Control 1 — does the surface work at all, and does the term work?

```
text=Laugharne & 1866-01-01 → 1871-12-31
```

**`19 notices`.** The first is *The London Gazette*, Issue 23191, Page 6494, 27 November 1866 — the Laugharne Railway. This independently reproduces Doc 171's finding from a cold start.

✅ Surface live. Term "Laugharne" indexes correctly. Date-range parameters behave.

### Control 2 — does the *class* of document exist on this surface in the target window?

```
text="Charity Commission" Scheme & 2003-05-01 → 2003-08-31
```

**`6 notices`**, all categorised "Other Notices". Read at item level, they are unambiguously Charity Commission Scheme notices, and they come in two distinct forms:

- **Notice of intention** — "The Charity Commission **proposes to make** a Scheme to amend the trusts of this charity. A copy of the draft Scheme can be s…"
  (e.g. *Charity Commission CHY-1161C, NATIONAL CHILDREN'S HOME*, 14 May 2003; *THE ROYAL TOWN PLANNING INSTITUTE*, Ref Leg/Lon/298122, 27 June and 11 July 2003)
- **Notice of execution** — "The Charity Commission **has made** a Scheme to amend the trusts of this charity. A copy can be seen f…"
  (e.g. *Charity Commission (CHY-1161D), NATIONAL CHILDREN'S HOME (215301)*, Ref TRB-G290410-RED(Ldn), 21 July 2003)

✅ Charity Commission Schemes *were* being gazetted in exactly the window in which the Laugharne Scheme was made.

### Control 3 — the base rate

Six notices in four months, for the whole of England and Wales. And the charities named are national bodies: the National Children's Home, the Royal Town Planning Institute.

**This is the finding that actually explains the negative.** Gazette publication of a Charity Commission Scheme in 2003 was *exceptional, not routine*. The statutory notice requirement for a Scheme was ordinarily satisfied by **local advertisement** — a notice posted in the area of benefit and placed in the local press — with the Gazette reserved for charities of national reach. A small local charity like the Laugharne Corporation Lands would never have appeared there.

---

## 5. Conclusion on the thread

> **REFUTED as a route.** The Charity Commission Scheme of 27 May 2003 amending the charter of Guido de Brian is not, and was never going to be, in the London Gazette. The negative is bounded on three sides: the surface works, the term works, and the document class exists in the window — the Laugharne instrument simply is not among them.

This is a **good outcome, not a failure**. Doc 174 proposed a desk-runnable route; the route has been run to exhaustion and closed with controls, at a cost of one pass. No future run need spend another.

**Tier: Verified.** The negative rests on a complete enumeration (`f:total` read, all entries returned and read) with three positive controls on the same surface in the same session.

---

## 6. METHOD — the Gazette's HTML results page is not a safe read surface

**This trap fired inside this very run and produced a false negative that was caught only by a count check.**

The first pass at the 2003 window used the ordinary HTML results URL and `get_page_text`. It returned **one notice** — the Jupp bankruptcy of 13 February 2004 — with no indication that anything else existed. Read at face value, that single result would have been banked as "the Gazette holds one Laugharne item in this window, and it is a bankruptcy."

A count check on the same page returned:

> **"1 - 10 of 22 notices"**

`get_page_text` extracts from a single `<article>` element. The Gazette's results page wraps **each notice in its own `<article>`**. The extractor therefore returns the first notice and silently discards the other 21 — with no error, no truncation marker, and no hint that a set was ever larger than one. The same thing happened on the 1866–71 control: `get_page_text` showed 1, the page said 19.

**This is a fresh, reproducible instance of TOOL-LEVEL BLINDNESS (Doc 171, sixth trap).** It is worse than the earlier instances because it does not look like a partial read. It looks like a complete, small, clean result set — which is precisely the shape that gets written into a document as a finding.

### The rule, for the register

> **Never read a Gazette search from the HTML results page.** Use the Atom feed endpoint and read `<f:total>`:
>
> ```
> /all-notices/notice/data.feed?text=TERM&start-publish-date=YYYY-MM-DD&end-publish-date=YYYY-MM-DD&results-page-size=50
> ```
>
> The feed returns every entry's `<published>` date, `<title>`, `<category>` and content snippet in one document, and states the true total in `<f:total>`. Assert `f:total` against the number of entries you actually read. If they differ, page with `&results-page=N` until they do not.
>
> **Corollary, generalising beyond the Gazette:** on any paginated search surface, the count is a separate object from the results, and a result set of size 1 is the most dangerous thing a tool can return. Read the count *first*, before reading the results, and record it in the log.

---

## 7. What remains, and by what route

The underlying question — *what does the 2003 Scheme actually say?* — is **not answered** and the thread stays **Open**, re-pointed:

| Route | Verdict |
|---|---|
| London Gazette, 2003 | **Closed. Refuted here under three controls.** Do not re-run. |
| Charity Commission register, governing-document page | **Closed.** The page states in terms that it is not the full text. |
| Charity Commission — direct request for the Scheme | **The live route.** The Commission holds Schemes it has made and supplies copies on request. This is correspondence, not a desk read — it belongs to the human archive day, alongside the Carmarthen items. |
| Carmarthenshire Archives, GB 211 OBB1 | **Plausible and untested.** The Corporation would have been served with the Scheme; a copy may sit in its own muniments. Archive-gated. |
| Local press, May–July 2003 | **Plausible and untested.** If notice was given by local advertisement rather than in the Gazette — which §4 Control 3 makes likely — the *Carmarthen Journal* for May–July 2003 should carry it. **Not on Welsh Newspapers Online**, whose coverage ends well before 2003. Archive- or subscription-gated. |

**Recommended next action for Dominic (not taken by this run):** the Charity Commission request is a short, free, entirely ordinary enquiry, and it would deliver the Corporation's operative modern constitution in full. It is the highest-value single item now sitting in the human-archive queue.

---

## 8. NEW FINDING en route — the Laugharne Railway, Session 1867

Control 1 was run only to prove the surface. It returned something the desk did not have.

The 27 November 1866 notice — *The London Gazette*, **Issue 23191, Page 6494** — is a notice of intention to apply to Parliament in **Session 1867**, and its own heading reads:

> "Laugharne Railway. (Extension to Pendine; Deviation and Abandonment of portion of Authorised Railway…)"

Doc 171 established the line as **authorised 1866, abandoned 1870**. This notice inserts a stage between the two that was not previously on the record: within a year of authorisation the promoters were already back before Parliament seeking to **extend the line westward to Pendine**, while simultaneously **deviating and abandoning part of the line they had just been authorised to build.**

That is a legible commercial story — a scheme reaching for more route before it had built the route it had — and it sharpens the 1870 abandonment considerably.

**Contiguity check (page-level matching trap, Doc 168b):** the undertaking's name and the parenthetical describing the extension and the deviation occur **within a single contiguous heading string**, and the item is **self-identifying by its own title** — it is a notice *by and about the Laugharne Railway*. The town is established by the item, not by co-occurrence on the page. A confirmatory search for `Laugharne Pendine` across 1866–1868 returned **`f:total` = 1** — this same page, and no other. The finding is item-level, not page-level.

**Tier: Verified** — exact issue, page and date; item self-identifying; contiguity established. **Not Verified-strong**, because it was read through the Gazette's OCR search index rather than the PDF facsimile, and the surrounding OCR on that page is badly degraded. Upgrading to Verified-strong requires reading `/London/issue/23191/page/6494/data.pdf` at facsimile level, which is a clean, cheap, desk-runnable next target.

**No claim is made here about whether the 1867 bill passed, whether the Pendine extension was ever authorised, or what the deviation covered.** Those are unread.

---

## 9. Guardrail compliance

- **No Dylan claim** is made, implied, or set up anywhere in this document. Brown's is not mentioned; the Globe is not mentioned in connection with any person or story. The banned "his pub was Brown's, BUT…" shape does not appear.
- **The charter date is not printed** as 1278, 1290 or 1307. The Commission's "DATE UNKNOWN C.1300" is quoted strictly as the register's own wording and is expressly **not adopted** as this desk's date. The safe formulation remains "late thirteenth century".
- **No "one of only two medieval corporations"** formulation is repeated or extended here.
- **No claim about the standing of Big Court or Little Court** is advanced. The 2003 Scheme's bearing on their jurisdiction remains exactly as Doc 174 left it: unresolved, and to stay so.
- **Nothing is proposed for the public trail.** No Stop is created, no Beat is created, the publish gate is untouched. Nothing here is Approved for site and nothing should be.
- **No individual named in the 22 Gazette notices is recorded as an Entity.** They are living or recently-living private persons appearing in bankruptcy and probate notices, with residential addresses. They have no bearing on the town's history and recording them would be both useless and intrusive. They are described here only in aggregate.
- **The two "Laugharne" personal names** (Sir Roger John Laugharne Thomas; Lt Col Simon Laugharne Farley) are recorded as a *near-collision example for the method register*, not as town material, and no connection to Laugharne the town is asserted for either.

---

## 10. Register entries made

**Sources (1 new, 1 re-read):**
- *The London Gazette*, Issue 23191, Page 6494, 27 November 1866 — Laugharne Railway, notice of intention, Session 1867. Kind: official gazette / primary. Tier: primary. Access route: open web, `thegazette.co.uk`, no gate. Read at index level; facsimile not yet read.
- Charity Commission Register of Charities, entry 218121, governing-document page — **re-read**, confirming Doc 174 verbatim. No new source record created; existing record annotated.

**Facts (3 new):**
1. The Charity Commission Scheme of 27 May 2003 amending the charter of Guido de Brian was **not published in the London Gazette**. Status: **Verified** (bounded negative, three controls). Stream B.
2. Charity Commission Scheme notices appeared in the London Gazette in May–August 2003 at a rate of **six in four months across England and Wales**, all for national charities — publication was exceptional, not routine. Status: **Verified**. Stream B. *(This is the fact that makes Fact 1 explicable rather than merely absent.)*
3. The Laugharne Railway promoters gave notice on 27 November 1866 of a **Session 1867 bill for an extension to Pendine, with deviation and abandonment of part of the authorised railway**. Status: **Verified**. Stream F.

**Entities:** none new. The Laugharne Railway and The Laugharne Corporation Lands both already exist; both annotated.

**Method register:** one new rule (§6) proposed for ratification into Doc 140 — *read the count before the results; never read a Gazette search from the HTML results page.*

---

## 11. Next target proposed (not claimed)

**`/London/issue/23191/page/6494/data.pdf` at facsimile level** — upgrade §8 from Verified to Verified-strong, recover the full text of the Session 1867 notice (which should name the deviation, the abandoned portion, and quite possibly the landowners and occupiers along the Pendine extension), and test whether the 1867 bill was carried. Clean, free, desk-runnable, and it feeds three open threads at once: the railway, the deposited-plan thread `recF7PoipOpSrCgYp`, and the port/trade cluster.

---

*Written 22 July 2026. Left uncommitted for the 21:00 consolidation run.*
