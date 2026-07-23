# Doc 188 — Mererid [HOUSE OF CULTURE], Stream A×B×H

## The 1283 royal-record attestation of Laugharne (Cal. Various Chancery Rolls, p.279): the citation back-checked to the volume's own structure, the primary entry held at Referenced-pending, and a tool-level route blocker recorded

**Desk:** House of Culture (whole-town / Globe branch)
**Date:** 23 July 2026 (scheduled, unattended run)
**Thread:** receDMoRO9Ie1lHu3 — "Read the 1283 'Thalkan' entry in the Welsh Rolls (Cal. Chancery Rolls Various 1277–1326, p.279) — a datable royal-record mention inside the charter window." Spin-off of the AMR method run, Doc 163b.
**Status of thread after this run:** OPEN (partial). The primary p.279 entry was not reached; the exact routes to close are recorded below.

---

### 1. What this run set out to do

Archif Melville Richards (AMR) records the OCR place-name form **"Thalkan"** for Laugharne under the year **1283**, citing the *Calendar of Various Chancery Rolls (Welsh Rolls) 1277–1326*, **p.279**. That sits squarely inside the "late thirteenth century" window in which the de Brian borough charter is supposed to fall, and — unlike most of the charter tradition — it comes with a concrete page reference. The thread's aim was to go past AMR (a secondary index) and read the **primary** entry at object level: what was the Crown actually doing at Laugharne in 1283, in the immediate aftermath of the Edwardian conquest of Gwynedd?

### 2. What was read direct this run — the volume's own front matter

The 1912 Calendar is on the Internet Archive (Cornell copy, item `cu31924026113880`). Its **title page, Contents and Preface were read direct**:

- **Title / imprint.** *Calendar of Various Chancery Rolls: Supplementary Close Rolls, Welsh Rolls, Scutage Rolls, preserved in the Public Record Office, A.D. 1277–1326.* Published by HMSO; text prepared by **W. H. Stevenson**, with **Sir John Rhys** (Principal of Jesus College, Oxford) advising on the Welsh names; Preface signed **H. C. Maxwell Lyte, Deputy Keeper of the Records, PRO, 13 July 1912** (printed 1913). The common "1912" citation is the editorial date.
- **Contents.** The **Calendar of Welsh Rolls, 1277–1294, begins at p.157**; the Scutage Rolls begin at p.383; the Index to the Welsh Rolls at p.483. **Page 279 therefore falls squarely within the Welsh Rolls.**
- **Preface, "Welsh Rolls" (p.viii), quoted:** *"These rolls are seven in number and contain enrolments of Letters Patent, Letters Close, and Charters, issued under the Great Seal of England and of other documents directly or indirectly relating to Welsh affairs between the 6th and 23rd years of Edward I."* The subjects named are the struggle with Llywelyn ap Gruffudd, the commissioners sitting locally on the laws and customs of Wales, the settlement of the lands of Gruffudd ap Gwenwynwyn, the rebellion of Rhys ap Maredudd, the charters of Strata Florida abbey, and the Gloucester–Hereford dissension.

### 3. What that establishes — and what it does not

**Established (Verified, from the object's front matter):**

1. The AMR **p.279 citation is internally coherent** — it points to a genuine Welsh Rolls page, not a mis-citation (F188-1).
2. The **record class** of any p.279 entry is fixed: a Crown chancery enrolment (Letters Patent / Close / Charter under the Great Seal) of the **post-conquest settlement of Wales**, 6th–23rd Edward I (1277/78–1294/95) (F188-2).
3. A **"1283" entry (11 Edward I) is chronologically consistent** with a mid-series page such as 279 (F188-3).

**Not established (held at Referenced-pending):**

- The **actual wording and subject of the p.279 entry were not read.** We do not yet know whether "Thalkan" appears there as the object of a grant, a place named in a mandate, a witness locality, or otherwise. The 1283 attestation of the **place** therefore stays at **Referenced-pending** on AMR's authority until the primary is read (F188-4).

### 4. Guardrail — what this is not

This is a mention of the **place / lordship** of Laugharne in a royal record. It says **nothing about a borough charter** and must not be pressed into service as a charter date. The de Brian charter remains **"late thirteenth century"** — never 1278, 1290 or 1307. Even once the primary is read, a Crown mention of the place is not a charter unless the entry itself grants or confirms one (F188-5). This scoping is logged as a Verified fact precisely so the 1283 date cannot later migrate into a charter-date claim.

### 5. The tool-level route blocker (a TOOL-LEVEL BLINDNESS note)

The primary p.279 could not be reached in an unattended run, for a reason worth recording for the desk:

- The only open full text is the Internet Archive **`_djvu.txt`**. When fetched, it is **truncated server-side at roughly 70–94k characters — the front matter only.** Grepping the retrieved text for every plausible Laugharne form (`Thalk*`, `Talach*`, `Talagh*`, `Laughar*`) returns nothing because the body of the book was never delivered. Deep pages of a ~360-page Archive book are simply not reachable this way.
- The Internet Archive **"Search inside" / BookReader search API** would return the exact leaf and snippet, but its URL is not in the fetch tool's provenance set (the fetcher only follows URLs that have appeared in search results or prior fetches), so it cannot be called from an unattended run.
- No JavaScript / interactive browser session is available unattended (that path needs the user's approval).

This belongs with the desk's existing **tool-level traps**: a citation can be *structurally* verified (right book, right page-range, right reign) while the *content* stays out of reach, and the two must not be conflated.

**Exact routes to close the thread (archive-day / interactive):**

1. **IA "Search inside"** on `cu31924026113880` for `Thalkan` / `Talach*` — returns the leaf number and the surrounding text.
2. **HathiTrust full view** — this is a public-domain 1912 volume (HathiTrust catalog records `012105102` and `000269080`); open the page-turner and go to printed **p.279**.
3. The **printed Calendar** itself.

### 6. Chain of custody (base `appnt9vSQKrKyaKiZ`)

- **Sources (2):** the *Calendar of Various Chancery Rolls* 1277–1326 (T1 primary; front matter read, body p.279 not yet read — `recZLvt11TfBJyBJM`); Archif Melville Richards, the 'Thalkan' 1283 / p.279 index entry (T2 secondary — `recrfoIvB7cMhUMeq`).
- **Entity (1):** "'Thalkan' (1283) — Crown attestation of Laugharne in the Welsh Rolls" (Event; Referenced-pending — `rec5mGu2lmlflmB2S`).
- **Facts (5):** F188-1 to F188-3 Verified (from the object's front matter); F188-4 Referenced-pending (the AMR attestation itself); F188-5 Verified (the scope guardrail).
- **Thread:** left **Open** with the full route recorded and the five facts + entity wired in.

### 7. One-line finding

The AMR "Thalkan 1283 / p.279" citation is **structurally sound** — p.279 is a genuine Welsh Rolls page of the post-conquest settlement, and a 1283 entry fits — but the **entry's own words remain unread** because the Internet Archive full text truncates before it; the place-attestation is held at Referenced-pending, it is **not** a charter date, and the thread is left Open with three exact routes to finish.

---

*Written into the repo uncommitted, for Jarvis's 21:00 commit. Do not commit or push from this run.*
