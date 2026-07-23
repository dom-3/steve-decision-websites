# Doc 220 — Mererid [HOUSE OF CULTURE] Stream A

## John Roland Phillips, *Memoirs of the Civil War in Wales and the Marches, 1642–1649* (1874): the source established at object level, the Cilgerran near-miss caught, and the deep-page tool blocker on the 1648 read

**Owner:** Mererid (House of Culture branch)
**Date:** 23 July 2026
**Thread claimed:** "Read Phillips 1874 vol I on the SECOND Civil War in Laugharne's district, 1648 — the base has almost nothing on 1648, and Phillips is now a proven, free, fully searchable source" (Area: Laugharne Castle; left **OPEN** — see §5)
**Register base:** Airtable `appnt9vSQKrKyaKiZ` (asserted)

---

### 0. One-line finding

The 1874 *Memoirs* was confirmed and read at object level as far as the desk's fetch tools reach — **front matter and Chapter I only** — which establishes the source and its documentary method for the whole Civil War strand, corrects the author's name and roots (**John Roland Phillips of Cilgerran, not "Thomas", not a Laugharne man**), and banks two datable 1874 Laugharne facts; but the **1648 chapters themselves remain unread** behind a hard tool-level extraction cap, so the thread stays open with the route recorded.

---

### 1. Why this target

The desk's Civil War coverage rests almost entirely on the **1644 siege of Laugharne Castle** (six days at the end of October 1644, held at second hand pending Avent 1987) and has **almost nothing on 1648**, the Second Civil War. The registered thread flagged J. R. Phillips's *Memoirs* as "a proven, free, fully searchable source" for that gap. It is the standard printed collection for the Civil War in Wales and — critically — its second volume prints the original documents, so it is the natural spine for both the 1644 and 1648 material. Establishing the source properly serves every downstream Castle/Corporation/town thread that touches the wars.

### 2. The object, confirmed (read direct)

Internet Archive item `memoirsofcivilwa01philiala` (Vol. I; OCLC 1048783557), read via `archive.org/details/…` and the `_djvu.txt` full text. Title-page and imprint read verbatim:

> "MEMOIRS [of] THE CIVIL WAR IN WALES AND THE MARCHES. 1642—1649. BY JOHN ROLAND PHILLIPS OF LINCOLN'S INN, BARRISTER-AT-LAW. IN TWO VOLUMES. VOL. I. LONDON: LONGMANS, GREEN, & Co. 1874."

Printed at Carmarthen ("MORGAN AND DAVIES, 'WELSHMAN' OFFICE. 1874"); dedicated to the members of the South Wales Circuit.

**Author name corrected.** The thread and this run's initial index row expanded "Phillips 1874" to *Thomas* Phillips; the object shows the author is **John Roland Phillips**. The index row was corrected on write.

### 3. Provenance and the tiering warrant (the real value of the pass)

Phillips's own preface (read direct) sets out his sources, and this is what makes the *Memoirs* usable to the desk. Verbatim:

> "…I discovered that vast materials existed in the boundless waste of the King's Pamphlets at the British Museum, in the State Papers at the Record Office, and in private collections…"

> "…every pamphlet and every newspaper of the period, — many thousands in number, — all the memoirs and collections bearing on that period, and all the vast collection of documents at the Record Office, still unindexed, have been carefully overhauled."

The **Dictionary of Welsh Biography** (read direct, D. Williams 1959) confirms Vol. II is "a most valuable collection of original documents" and that Phillips's knowledge of the Welsh manuscripts at the Public Record Office and British Museum "was said to be unique in his day."

**Tiering rule adopted for the Civil War strand:** a fact that Phillips *prints or quotes from a dated primary document* (especially in Vol. II) may reach **Verified**; his connective **narrative** is **Referenced**. This is logged on the Source record so later runs inherit it rather than re-deriving it.

### 4. The Cilgerran near-miss — caught, not attached

Phillips's preface gives a tempting hook: he began the work to learn

> "…whether the Castle, which forms its principal attraction, had been garrisoned during the Civil War."

— of his **"native parish."** A castle that is a parish's "principal attraction," written by a man printed at Carmarthen and subscribed heavily across Carmarthenshire, invites a Laugharne reading. **It is not Laugharne.** The DWB fixes his birthplace as **Kilgerran (Cilgerran), Pembrokeshire, June 1844** (son of David Phillips; prize essay *History of Cilgerran*, 1867). The castle behind the *Memoirs* is **Cilgerran Castle**. Logged as a Verified corrective so no future run attaches Phillips — or, by extension, his motive — to Laugharne.

Biography, for the record (DWB, read direct): b. Cilgerran June 1844; solicitor's office at Cardigan; Lincoln's Inn Nov 1867, called to the Bar 10 June 1870; married 1873 Mary Elizabeth Hargreaves; first secretary of the revived Cymmrodorion Society 1873 (resigned 1876); first stipendiary magistrate for West Ham 22 June 1881; d. South Hampstead 3 June 1887.

### 5. The 1648 read — blocked at the tool level; route recorded

The thread's actual object — the **1648 Second Civil War narrative** (Rowland Laugharne's revolt, John Poyer and Rice Powell, the battle of St Fagans 8 May 1648, the sieges of Pembroke, Tenby and Carmarthen, and any 1648 mention of the town of Laugharne) — **was not reached this pass.** It sits in the later part of Vol. I (444 pp.), well beyond the front matter.

Both desk text-extraction routes cap at the front of the 843 KB OCR:

- **`web_fetch`** on the `_djvu.txt` returned ~83 K characters — title, preface, subscribers, opening of Ch. I — then stopped.
- **Chrome `get_page_text`** on the raw `_djvu.txt` likewise captured only the front matter + Ch. I (verified by an exhaustive grep of the capture: **zero** occurrences of "1648", "Poyer", "St Fagans" as a battle, "Rowland Laugharne", or the town in any 1648 context; the only two "Laugharne" hits are the 1874 subscribers in §6).
- The **fulltext search node** `ia601409.us.archive.org/fulltext/inside.php` returned `"No hOCR or Abbyy file present"` (the search node does not hold this item's OCR); the **datanode** `dn760109.eu.archive.org` **404'd** on `/fulltext/inside.php`.

**Route for the next pass / archive day** (recorded on the thread and Source): read the 1648 chapters from the **page-image OCR** (the item's `_hocr.html` / per-page text, or the BookReader "search inside" once pointed at the datanode that actually holds the OCR — `dn760109.eu` / `dn790003.ca` per the item metadata, `dir=/0/items/…`), **not** the `_djvu.txt` full-text route, which the harness truncates. Vol. II (`…02…`) holds the original documents and should be paired with any Vol. I narrative read.

This is a genuine tool-level blocker of the same family as Docs 168b/169a/171 (search-trap / tool-blindness method notes), and is logged as such.

### 6. What was actually banked (the front-matter by-catch)

The only Laugharne content within reach this pass is in the 1874 subscribers' list — but it is real, datable, and cross-linking:

- **"Lewis, George, Esq., Victoria-street, Laugharne"** → **"Victoria-street, Laugharne" attested as a street name in 1874.** This pushes the "Victoria Street" attestation back from the 1985 address variant caught for the New Three Mariners (Doc 204) to **1874**.
- **"Norton, W., Esq., Laugharne Castle"** → a resident/associated subscriber at **Laugharne Castle in 1874** — a datapoint on the Castle's Victorian private occupancy. Held for corroboration (census/directories) before any tenure claim.

Both are tiered **Verified** (directly in the printed 1874 object), Vol. I subscribers' list.

### 7. Register changes (additive only)

**Sources (2 new):**
- *Phillips, Memoirs of the Civil War in Wales and the Marches, 1642–1649, Vol. I (1874)* — T2 secondary; Book/monograph; Read = Partial; carries the provenance quotes, the tiering rule, and the tool-blocker route.
- *DWB — Phillips, John Roland (1844–1887)* (D. Williams, 1959) — T2 secondary; Biographical dictionary; Read.

**Entities (1 new):**
- *John Roland Phillips (1844–1887)* — Person; Verified; Streams A (Castle), E (People & Families); linked to both Sources.

**Facts (4 new, all Verified, linked to Sources/Entity):**
1. Phillips's *Memoirs* (1874) is a documentary compilation — Vol I narrative, Vol II original documents from the King's Pamphlets (BM) and State Papers (PRO). *(tiering warrant)*
2. "Victoria-street, Laugharne" attested as a street name in 1874.
3. Laugharne Castle carried a subscriber "W. Norton, Esq., Laugharne Castle" in 1874.
4. Phillips's "native parish" castle is **Cilgerran**, not Laugharne. *(near-miss caught)*

**Thread:** left **OPEN**, Findings updated with the deep-page route in §5.

### 8. Standing-guardrail check

Nothing here touches the Dylan material, the Globe/Beynon retraction, the cellars, the corporation "one of only two", the charter date, or the siege duration. The 1644 siege is referenced only as "six days at the end of October 1644, held at second hand" — unchanged. No publish action; no Stop/Beat touched.

---

*Document written into the repo and left uncommitted per the branch's end-of-day single-publisher rule.*
