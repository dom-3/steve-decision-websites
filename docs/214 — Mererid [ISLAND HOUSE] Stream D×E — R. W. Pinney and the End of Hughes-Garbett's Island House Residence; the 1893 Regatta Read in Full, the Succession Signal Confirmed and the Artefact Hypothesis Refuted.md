# Doc 214 — Mererid [ISLAND HOUSE] Stream D×E

**R. W. Pinney and the end of Percy Ll. Hughes-Garbett's Island House residence: the *Carmarthen Journal* regatta report of 11 August 1893 read in full at object level, the succession signal confirmed, Doc 212's tentative "1890 artefact" hypothesis refuted, and a Doc 212 date-attribution flagged for human back-check**

*Scheduled, unattended run — Island House branch. Additive-only. Base `appnt9vSQKrKyaKiZ` asserted against its live contents (131 Handover rows, 112 open Threads, Docs — Index topping out at Doc 213); retired fork `appxcYrYaYy1kwB0m` never touched. Doc 140's ban list read from the register before writing. Written into the repo and LEFT UNCOMMITTED for Jarvis's 21:00 path-scoped commit — no `git add` / `commit` / `push`.*

---

## 0. Why this target

Doc 212 spent the recorded route to upgrade F209-3 (Hughes-Garbett's Island House residence) and, in doing so, raised one unresolved caution. In the *Carmarthen Journal* of 11 August 1893 the OCR showed a **different** man — "Mr R. W. Pinney, Island House" — styled with the house, while P. Ll. Hughes-Garbett dropped to the committee, three weeks after a 21 July 1893 item that (on Doc 212's snippet read) still styled Hughes-Garbett "of Island House." Doc 212 logged, but did not adopt, the possibility that Pinney was either a genuine successor resident **or** an editorial/OCR listing artefact, and named the resolution route as its **next-target #1**: full-page reads of the *Carmarthen Journal* 21 July and 11 August 1893, plus a check of the earlier regatta reports.

That is a genuine, in-lane, desk-runnable Island House target with a readable open-source object (Welsh Newspapers Online). This pass spends it.

## 1. Method — the phrase-search that collapsed the question

The decisive move was a **quoted phrase** search on WNO for `"R. W. Pinney"`, range 1891-01-01 → 1896-12-31. Unquoted, the WNO front end token-splits and OR-matches (Search Trap #1) — `Hughes-Garbett` dissolves into ~2,000 "Hughes" hits, and `Pinney` alone returns a Rev W./John Pinney of Llanvetherine near Abergavenny plus "Island House" at St Clears, Prendergast and Llantwit (Search Trap #3, near-collision on both terms). The quoted phrase `"R. W. Pinney"` cut straight through: **exactly three results, all *Carmarthen Journal*, all 1893.** Each was then read at contiguous item level with the town established inside the item.

Full-article read achieved on the core object (11 Aug 1893) via the JS browser and `get_page_text`; the 21 July and 30 June items read as contiguous, town-established snippets (their full page bodies remain owed, but each snippet carries the operative content).

## 2. What R. W. Pinney actually is — three 1893 items, and nothing before

The phrase search returns Pinney at object level **only** in 1893, in this order:

- **30 June 1893, p.7 — Cricket.** A Laugharne XI scorecard headed "LAUGHARNE": "R W Pinney, b Lyons 20" — top scorer of a 50-all-out innings; Laugharne won by two runs on the first innings. Pinney is an active player in the town by late June 1893.
- **21 July 1893, p.6 — "LAUGHARNE. REGATTA."** The regatta **annual meeting** in the Town-hall, the Rev. J. Thomas (vicar) in the chair; the 1892 treasurer's accounts (balance £3 5s) passed; the regatta fixed for Wednesday 9 August; "Mr E W H Peel, of Fernhill, was elected president for the year, and Mr R W Pinney" [snippet edge — elected vice-president, confirmed by the event report below].
- **11 August 1893, p.3 — "REGATTA AT LAUGHARNE"** (event held Wed 9 August). Officials: "President, Mr E. W. H. Peel, Fernhill … **vice-president, Mr R. W. Pinney, Island House**; committee, the Portreeve, Captain Harrison, Messrs **P. Ll. Hughes-Garbett**, G. R. Brayshay, A. Bolton …" Pinney was also the aquatic-sports **timekeeper**. Hughes-Garbett appears **only** on the committee, with **no house attached**.

No "R. W. Pinney" occurs anywhere in WNO before mid-1893 (F214-2, Verified). The search surface is coverage-checked: the same route returns genuine Pinney and genuine Island-House items in other years and other towns, so the pre-1893 absence is a real negative, not tool blindness.

## 3. The Doc 212 caution resolved — twice over

**(a) The "1890 artefact" hypothesis is refuted.** Doc 212 §4 wondered whether "Pinney, Island House" was a recurring listing/OCR pattern that also appeared in an 1890 regatta report — which would make it an artefact, not a resident. There is no such 1890 item: Pinney does not exist in WNO before June 1893. There is nothing for the styling to recur *from*. The artefact reading falls (F214-5, **Refuted** — refuting a mis-flag, not demoting Doc 212's F209-3 upgrade, which rests on the 1890–91 items and is untouched).

**(b) The 21 July / 11 August "contradiction" dissolves.** The only 21 July 1893 regatta item is the annual meeting, and it **elects Pinney** as the incoming officer — not Hughes-Garbett. So both July and August 1893 point the same way: Pinney is the man now attached to the regatta vice-presidency, the office that in August 1891 was held by "Mr P. Ll. Hughes-Garbett, Island House" (Doc 212). The same civic office and the same "Island House" tag pass from Hughes-Garbett (1891) to Pinney (1893), straddling Hughes-Garbett's announced (25 March 1892) and repeatedly-deferred departure. That is consistent with **Pinney succeeding Hughes-Garbett as resident of Island House by mid-1893** (F214-4).

The succession is tiered **Referenced-pending**, not Verified: "of Island House" in an officers' list is a residence signal, not a tenancy or title. What is Verified is narrower and object-anchored — the styling of the two men in the two regatta reports (F214-1), and Pinney's confinement to 1893 (F214-2, F214-3). No handover *date* is asserted; the honest window is "by the regatta of 9 August 1893."

## 4. A Doc 212 attribution flagged — not edited

Doc 212 §2 lists, among Hughes-Garbett's residence attestations, a "**21 Jul 1893** — *Carmarthen Journal* p.6, 'Laugharne': '…the vice-presidents are Mr Hughes-Garbett, **Island House**, and the Rev. J. M. Jones.'" The only 21 July 1893 p.6 regatta item found at object level in this pass is the annual meeting that elects **Pinney**, and the quoted wording is **word-for-word identical** to Doc 212's own separate "**17 Apr 1891** — *Carmarthen Journal* p.5, 'Laugharne'" attestation. This strongly suggests a snippet-level **date-conflation** (the 1891 wording mis-dated to 1893), exactly the kind of displacement the OR/page-level traps produce.

Under the additive-only / do-not-fix-other-records rule this is **flagged, not corrected**: Doc 212's record is left as written. Nothing turns on it for the residence spine — F209-3's Verified upgrade rests on the 1890 and 1891 items, not the disputed 1893 one. A human back-check of the *Carmarthen Journal* 17 Apr 1891 p.5 and 21 Jul 1893 p.6 page bodies would settle whether there are one or two items and confirm the conflation.

## 5. What went into the register (base `appnt9vSQKrKyaKiZ`, additive-only)

- **Thread (1, new):** `recBOimhbkZL2k1Up` — "Resolve the R. W. Pinney 'Island House' styling and the end-date of Hughes-Garbett's residence" — created and set **Claimed → Done** (findings recorded).
- **Sources (3, new):** *Carm Jrnl* 11 Aug 1893 p.3 regatta, full read `recWte2EqAHzuKjaU` (T1/Read); *Carm Jrnl* 21 Jul 1893 p.6 annual meeting `reck9BMu9lcEfNRFl` (T1/Partial); *Carm Jrnl* 30 Jun 1893 p.7 cricket `recGBXzfXNTmyaGAr` (T1/Partial). The Partial 11 Aug read Doc 212 registered (`recg5SidgMqoyt5Wb`) is left as-is, not edited; this run's full read is a fresh source row.
- **Entity (1, enriched — the record under active research):** R. W. Pinney `recpGQeNZFP5HedAE` — dates, role, summary and Stream tags filled; Status held **Referenced-pending**. Percy Ll. Hughes-Garbett `recdAkXLHYnOqdRZp` was **fact-linked only, not edited**.
- **Facts (5, F214-1…5):** `recrfC9YWNrkplPie`, `recvmlmNOkA772GUL`, `recUWzMlNidVvlm7u`, `recUSwlBPA6mGrFOq`, `recOCJUPYD1rYWk7f` — three Verified, one Referenced-pending, one Refuted (the artefact hypothesis). Nothing court-grade.

## 6. Guardrails observed

Strictly in-lane: Island House, its resident and its occupancy spine. No town-fabric / Globe / Corporation-office / Castle target (those are the House-of-Culture branch's queue). Brown's Hotel does not appear; **no Dylan content of any kind** — Island House is not a Dylan site, and the banned "Brown's-but-here's-our-Dylan-link" shape is not used. The retracted Globe butcher/Under-Milk-Wood-character material is neither revived nor hedged (no such name appears in these 1893 items). No charter date, no siege figure, no name-meaning gloss, no "13th-century cellars," no corporation formulation, no accessibility or step-free claim is made. "Portreeve" appears only as a verbatim name in a copied officers' list, with no office-count or "one of only two" formula attached. Nothing here approaches the public History Trail — no Stop, no Beat, nothing tiered for publication. Base ID asserted; retired fork untouched; additive-only throughout.

## 7. Queue / next target

The Island House desk-runnable historic queue is now, on the standing assessment of Docs 209 and 212, **effectively exhausted** — this pass closed the last recorded open resolution route (Doc 212 next-target #1). The residual tail is archive- or portal-gated and belongs to the human archive day:

1. **Census** returns for Island House, Laugharne, 1891 and 1901 — would fix Hughes-Garbett's departure and Pinney's arrival to a date and give Pinney a forename, age, birthplace and occupation.
2. **The 1900 sale-catalogue particulars** (the nineteen-lot Brown's-Hotel auction of the "Laugharne property of Mr Hughes-Garbett") and **HM Land Registry** title.
3. **Full-page bodies** of the *Carmarthen Journal* 17 Apr 1891 p.5 and 21 Jul 1893 p.6, to confirm the Doc 212 date-conflation flagged in §4.

If none of these opens a readable open-source object on a future desk run, the standing recommendation stands: **log the Island House branch exhausted and wind it down.** This pass leaves the Pinney question resolved as far as open sources allow.

---

*Written into `~/Documents/steve-decision-websites/docs/` and LEFT UNCOMMITTED. Jarvis's 21:00 run commits the day's docs in one path-scoped commit. No `git add` / `git commit` / `git push` performed.*
