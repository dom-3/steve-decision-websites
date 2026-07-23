# Doc 212 — Mererid [ISLAND HOUSE] Stream D×E

**Percy Ll. Hughes-Garbett's residence "of Island House" back-checked to contiguous object level on Welsh Newspapers Online; F209-3 upgraded Referenced-pending → Verified, the March 1892 departure shown deferred, a burgess enrolment recorded, and a candidate successor (R. W. Pinney) flagged**

*Scheduled, unattended run — Island House branch. Additive-only. Base `appnt9vSQKrKyaKiZ` asserted; retired fork never touched. Written into the repo and LEFT UNCOMMITTED for Jarvis's 21:00 path-scoped commit — no `git add` / `commit` / `push`.*

---

## 0. Why this target

Doc 207 read the owner's own site (islandhouse.wales) and found Percy Ll. Hughes-Garbett as the Island House resident c.1890–1900. Doc 209 back-checked the flagship residence on Welsh Newspapers Online and, in doing so, left one fact deliberately short of the object: **F209-3** (`recrFwlPCcH1F7TcN`), "Percy Ll. Hughes-Garbett 'of Island House' was prominent in Laugharne public life c.1890–1893, with an intended departure noted March 1892," tiered **Referenced-pending** because the supporting dates rested on WNO *search snippets* rather than contiguous, single-item reads. Doc 209's own next-target note named the exact route: "the named full-article WNO reads behind F209-3."

That is the cleanest available in-lane, desk-runnable target — a recorded route to convert a Referenced-pending residence fact on the Island House occupancy spine to object level. This pass spends it.

## 1. Method — the two-term AND-grammar, and why it satisfies the contiguity rule

The residence question was posed to WNO as a **two-term AND** query in the URL grammar (the Advanced Search form does not fire under automation; the URL grammar does):

```
(full_text:("Hughes-Garbett") OR title_en:("Hughes-Garbett"))
  AND (full_text:("Island House") OR title_en:("Island House"))
range 1889-01-01 … 1894-12-31
```

This returned **13 results**, each a discrete newspaper *article*, and — crucially — each returned snippet shows **"Hughes-Garbett" and "Island House" contiguously within one item**, with the town established inside that same item (most are headed "LAUGHARNE" or name Laugharne in the body). This is exactly the standard the register demands: **contiguity within one item, town established** — not page-level co-occurrence. It directly answers, and closes, the trap that bit Doc 209 (F209-7, where a Carmarthen quayside flood tenement "known as Island House" sat on the same *page* as the true Laugharne evidence). Pairing the surname with the house-name in the AND-grammar collapses a residence question to article-level contiguity in a single call. (F212-6, Verified.)

Titles represented: **Carmarthen Journal** (11), **The Welshman** (1), **South Wales Daily News** (1). Reads are at article-snippet level via the JS browser; two conflicting 1893 items (below) have full-page reads owed.

## 2. The residence spine, 1890–1893 (object level)

Laid out in date order, each item a single Laugharne article naming Hughes-Garbett and Island House together:

- **24 Jan 1890** — *Carmarthen Journal* p.3, "Our Laugharne Letter": "Mrs Hughes-Garbett, **of Island House, Laugharne**, will give a tea to the children of the tenants on the estate…"
- **24 Jan 1890** — *The Welshman* p.5, "Christmas Tree at Island House": Mrs Hughes-Garbett invited the wives and children of all Mr Garbett's tenants to tea and a Christmas tree at Island House (this is the Doc 209 F209-1 item, already Verified-strong).
- **25 Apr 1890** — *Carmarthen Journal* p.2, "Laugharne Echoes": "Mrs Hughes-Garbett, **of Island House, Laugharne**, has kindly subscribed a guinea."
- **17 Apr 1891** — *Carmarthen Journal* p.5, "Laugharne": the vice-presidents are "Mr Hughes-Garbett, **Island House**, and the Rev. J. M. Jones."
- **21 Aug 1891** — *Carmarthen Journal* p.5, "Laugharne Annual Regatta": "vice-president Mr P. Ll. Hughes-Garbett, **Island House**."
- **9 Oct 1891** — *Carmarthen Journal* p.5: proposed as a burgess — "Mr P. Ll. Hughes-Garbett (**Island House**)."
- **6 Nov 1891** — *Carmarthen Journal* p.5, "Laugharne. This and That": "At the Corporation Court held in the Town-hall on Monday last, Mr P. Ll. Hughes-Garbett, **of Island House**, was enrolled a burgess of this ancient corporate town."
- **25 Mar 1892** — *Carmarthen Journal* p.5, "Society and Personal": "We are sorry to hear that Mr Hughes-Garbett, **of Island House**, will be leaving Laugharne in the course of a few [weeks]."
- **8 Apr 1892** — *Carmarthen Journal* p.6, funeral of the vicar of Laugharne: wreaths from "Mr Hughes-Garbett, **Island House**[,] the Misses Wienholt…" (the Wienholt tie, Doc 116).
- **21 & 27 May 1892** — *South Wales Daily News* p.6 / *Carmarthen Journal* p.8: the St Clear's–Pendine railway meeting at Laugharne, "chair… occupied by Mr Hughes-Garbett, **Island House**, Laugharne."
- **21 Jul 1893** — *Carmarthen Journal* p.6, "Laugharne": "…the vice-presidents are Mr Hughes-Garbett, **Island House**, and the Rev. J. M. Jones."

That is eleven single-item attestations across three titles and three-and-a-half years. **F209-3 is upgraded Referenced-pending → Verified** on this basis (F212-1). The tier is Verified, not Verified-strong/court-grade: newspaper styling "of Island House" is a residence signal, not a title deed.

## 3. Two findings that fall out of the spine

**The March 1892 departure was deferred, not executed.** The "will be leaving Laugharne" notice of 25 March 1892 is contradicted at object level by the man's own subsequent public life: he took the chair of the St Clear's–Pendine railway meeting on 20 May 1892, was named on the vicar's funeral wreath list in April 1892, and was still styled a regatta vice-president "of Island House" on 21 July 1893. The departure was gradual or repeatedly deferred; by August 1900 he was "of Bristol" (Doc 209 F209-4). (F212-3, Verified.)

**Island House was the seat of a small estate.** The January 1890 tenants' tea was given "to the children of the tenants **on the estate**" — the Hughes-Garbetts held Island House with tenants, not as a bare dwelling. This is consistent with, and helps explain, the 1900 auction of "the Laugharne property of Mr Hughes-Garbett" of nineteen lots realising over £25,000 (Doc 209 F209-4). (F212-4, Verified.)

**A civic anchor.** The enrolment as a burgess of Laugharne at the Corporation Court (early November 1891, following the October proposal) is a formal civic act tying the man to the town. It is recorded here strictly as "enrolled a burgess" — no charter date, no Portreeve, no corporation formulation is asserted (the Doc-140 guardrails are held). (F212-2, Verified.)

## 4. The one caution — R. W. Pinney, and the residence end-date

The same sweep raises a genuine, unresolved question about **when** Hughes-Garbett's Island House residence ended. In the **Carmarthen Journal, 11 Aug 1893, p.3** ("Regatta at Laugharne") the OCR reads: "…vice-president, Mr **R. W. Pinney, Island House**[;] committee, the Portreeve, Captain Harrison, Messrs P. Ll. Hughes-Garbett…" — i.e. a **different** man styled "of Island House," with Hughes-Garbett dropped to the committee. This is **three weeks after** the 21 July 1893 item that still styles Hughes-Garbett himself "of Island House."

The two 1893 items cannot both be read at face value, so no handover is asserted. The R. W. Pinney "Island House" styling also appears to recur in an 1890 Laugharne regatta report — which means it may be an **editorial or OCR pattern** (a regatta office-holder conventionally listed with a house) rather than evidence of a genuine change of resident. Handled under near-collision discipline (Search Trap #3): logged, not adopted. **F212-5, Referenced-pending**; a new entity "R. W. Pinney (candidate resident of Island House, by 1893)" is registered purely as a guard, explicitly not identified as the Island House occupant. Resolving it needs full-page reads of the *Carmarthen Journal* 21 July and 11 August 1893 (p.6 and p.3).

## 5. What went into the register (base `appnt9vSQKrKyaKiZ`, additive-only)

- **Thread (1, new):** `recdkH0eNPYiP8Zvl` — the F209-3 back-check — created additively (no prior discrete thread existed) and set **Done**.
- **Sources (5, new):** the WNO AND-grammar 13-article sweep `recyMPqXzFgowxZr4` (T1/Read); *Carm Jrnl* 6 Nov 1891 burgess `recbOfrAMWo6FlJWd` (T1/Read); *SWDN* 21 May 1892 + *Carm Jrnl* 27 May 1892 railway meeting `rec8QXuenYlEBU7Tn` (T1/Read); *Carm Jrnl* 21 Jul 1893 `recxfUhpBxoT0xcVg` (T1/Read); *Carm Jrnl* 11 Aug 1893 Pinney item `recg5SidgMqoyt5Wb` (T1/Partial). The two 24 Jan 1890 items are already registered at Doc 209.
- **Entity (1, new):** R. W. Pinney, candidate Island House resident by 1893, `recpGQeNZFP5HedAE` (Person, Referenced-pending, near-collision guard). Existing Percy Ll. Hughes-Garbett `recdAkXLHYnOqdRZp` was **fact-linked only, not edited**.
- **Facts (6, F212-1…6):** `recqTacblxbPkCs0m`, `reccqqbniT6i07dFH`, `recdLndk3YZEw5W6p`, `rechSRi7KVbtasSPw`, `recbAB1BLkTcQhlu2`, `recm8Kr6sPg6h7lBN` — five Verified, one Referenced-pending. Nothing court-grade.
- **Enrichment of the record under research:** F209-3 (`recrFwlPCcH1F7TcN`) upgraded **Referenced-pending → Verified**, with the original Doc 209 note preserved beneath the upgrade line. This is enrichment of the fact this thread researches — no other existing record was edited, downgraded or deleted.

## 6. Guardrails observed

Strictly in-lane: Island House, its resident and its occupancy spine. No town-fabric/Globe/Corporation-office/Castle target. Brown's Hotel does not appear here; no Dylan content of any kind (Island House is not a Dylan site). A "Walter Beynon" appears once as a name in an 1891 burgess list — **not** touched: the retracted Globe/Butcher-Beynon material is neither revived nor hedged. No charter date, siege figure, name-meaning, cellar dating, corporation formulation or accessibility claim is made. "Enrolled a burgess" is recorded as the plain civic fact, with no corporation formula attached. Nothing here approaches the public History Trail — no Stop, no Beat, nothing tiered for publication. Additive-only throughout; base ID asserted, fork untouched.

## 7. Queue / next target

The Island House desk-runnable historic queue remains, on Doc 209's standing assessment, **effectively exhausted** — the branch's recommendation to wind down stands. This pass spent the recorded F209-3 upgrade route and converted the residence to Verified. The desk-adjacent tail is now narrow and specific:

1. **Resolve the residence end-date / the Pinney question** — full-page reads of *Carmarthen Journal* 21 Jul 1893 p.6 and 11 Aug 1893 p.3, and a check of the 1890 regatta report, to decide whether "R. W. Pinney, Island House" is a genuine successor or a listing artefact.
2. **Archive/portal-gated** (belongs to the human archive day): HM Land Registry title; the 1900 sale-catalogue particulars; the will bodies (Mary Abra, Frederick Wienholt); census returns for Island House 1891.
3. If (1) yields nothing new and no other in-lane readable open-source object remains, **log the branch exhausted and wind down**, per the standing instruction.

---

*Written into `~/Documents/steve-decision-websites/docs/` and LEFT UNCOMMITTED. Jarvis's 21:00 run commits the day's docs in one path-scoped commit. No `git add` / `git commit` / `git push` performed.*
