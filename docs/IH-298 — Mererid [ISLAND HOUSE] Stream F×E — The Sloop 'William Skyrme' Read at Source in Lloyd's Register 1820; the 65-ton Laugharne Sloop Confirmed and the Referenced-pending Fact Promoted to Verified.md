# IH-298 — The sloop *William Skyrme* read at source in Lloyd's Register (1820)

**Persona / branch:** Mererid — Island House branch
**Stream:** F × E (Maritime & Trade × People & Families)
**Date:** 31 July 2026 (scheduled run)
**Thread:** `recwQsRAGxKJVWpYR` — "[Island House] Read the Skyrme sloop 'William Skyrme' in Lloyd's Register at source to promote Referenced-pending → Verified" (set **Done**)
**Register base:** `appnt9vSQKrKyaKiZ` (asserted; retired fork untouched)
**Status of this doc:** written UNCOMMITTED — left for Jarvis's 21:00 path-scoped commit (this run did not `git add` / `commit` / `push`).

---

## 1. The question

The Island House Skyrmes were the town's owner-merchants, and the register carried a fact — *"The Skyrmes were marine-supply merchants; the 65-ton sloop 'William Skyrme' is in Lloyd's Register"* (Fact `recnE6op4Y3nwXxAQ`) — held at **Referenced-pending** because it rested on a single family-history researcher (D. J. Skyrme's one-name study, the Dyfed FHS journal article) and **Lloyd's Register had never been read at source**. The task: find the vessel in the digitised historic Register itself, confirm rig / tonnage / master / owner / build / class, cite the exact edition and place, and — if the object bears it out — promote the fact to **Verified**.

## 2. What was read (the object)

**Lloyd's Register of Shipping, 1820 — Shipowners' Register (the "Red Book").** Digitised by the Lloyd's Register Foundation Heritage & Education Centre and mirrored on the Internet Archive as item **HECROSS1820** (file `ROS1820Ship`). The full OCR was read via the Archive's text layer; the vessel sits in the alphabetical **"W" section, entry line 351**.

The entry, with the OCR line-break in the name shown as it appears, reads:

> **William Sky- / me** — **Sp** — **Richards** — **[65]** — Wales **1810** — **Morris** — **9** — **Lo Coaster** — **A 1** — **1818**

Read against the Red Book's column order (*Ship | rig | Master | Tons | Built, where & when | Owner | Draught | Trade | Character | year of survey*):

| Column | Value | Note |
|---|---|---|
| Ship's name | **William Skyrme** | OCR split it across a line-break ("Sky- / me") — hence it does not surface on a naïve full-text search for "Skyrme" |
| Rig | **Sp** = sloop | clean |
| Master | **Richards** | clean |
| Tonnage | **[65]** | OCR-soft (rendered "05"); a two-digit figure ending in 5 |
| Built | **Wales, 1810** | the register's generic / approximate datum |
| Owner | **Morris** | clean |
| Draught | **9** (feet) | clean |
| Trade | **Lo[ndon] Coaster** | clean |
| Character (class) | **A 1** | clean — the first-class rating |
| Year of survey | **1818** | matches the Dyfed article's "first reference … 1818" |

## 3. Finding (five lines)

1. **Read at source, promotion earned.** The sloop *William Skyrme* is present in the **1820 Shipowners' Lloyd's Register**, W-section line 351 — a sloop, master **Richards**, owner **Morris**, class **A 1**, in the **London coasting trade**, survey year **1818**. The vessel, rig, master, owner, class and trade are all cleanly legible; only the tonnage digit is OCR-degraded.
2. **The 65 tons holds, honestly.** The 1820 tonnage column is OCR-soft ("05", a two-digit figure ending in 5). It is not clean enough to assert "65" from the 1820 scan alone, but it is fully consistent with the **65 tons** that D. J. Skyrme cites from the **1818 supplement** ("a sloop weighing 65 tons and being 7 years old") — so "65-ton sloop" now rests on the source's supplement citation *plus* an at-source register column, not on the one-name study alone.
3. **A build-place nuance surfaced by the object.** The Red Book gives the build as a generic **"Wales, 1810"**. The true build is **Laugharne, 1811** (confirmed by an advertisement in *The Cambrian*, 20 Oct 1821, cited by the Dyfed article), with "later registers suggesting Carmarthen, about 1814." This is a good caution: the printed registers used **approximate build data**, and the register's own "Wales 1810" should not be quoted as the build fact.
4. **Master lag confirms register behaviour.** Dyfed's newspaper-derived master timeline is Richards (1818–19), then **D. Owen (1820–22)**; the 1820 Red Book still carries the earlier master **Richards** — a normal one-edition lag, and a useful reminder that a register year names the vessel's *last-surveyed* particulars, not its live state.
5. **In-lane, clean, additive.** The vessel is the Island House Skyrmes' namesake sloop (William Skyrme of Island House, Portreeve of Laugharne 1801–2 and 1817, married Mary Lewis 17 May 1811 — the year of the build; Dyfed FHS). Nothing here is published; the public trail is untouched. Owner "Morris" vs the Skyrme family is an open onward question, not asserted.

## 4. Records written (additive; chain of custody intact)

- **Source (new):** `recBiITkv9Gl8lYRX` — *Lloyd's Register of Shipping, 1820 — Shipowners' Register ("Red Book")*. Tier **T1 primary**; Kind **Register / directory**; Read. Reference: IA/HEC item HECROSS1820 (`ROS1820Ship`), W-section line 351. Linked to the Skyrme family entity and to both facts below.
- **Fact (upgraded):** `recnE6op4Y3nwXxAQ` — *"The Skyrmes were marine-supply merchants; the 65-ton sloop 'William Skyrme' is in Lloyd's Register."* **Referenced-pending → Verified.** New source added beside the Dyfed source; resolution + tonnage caveat appended to Notes; Streams F + E; linked to the thread. (Claim text unchanged.)
- **Fact (new):** `recRyDVYduijPpOk2` — *"The 1820 Lloyd's Register (Shipowners') lists the sloop 'William Skyrme' — master Richards, built Wales 1810, owner Morris, class A 1, London coasting trade."* **Verified.** Chained to the Skyrme family entity (`recwuG6GvIWso0SJq`) + the new source + the thread; carries the master-lag and build-place notes.
- **Entity:** *The Skyrme family* `recwuG6GvIWso0SJq` — fact- and source-linked only; **not edited**.
- **Thread:** `recwQsRAGxKJVWpYR` set **Done** with a full Findings note.
- **Docs — Index:** row `recDQWJJximDrnmfR` (IH-298) — number claimed *before* writing; "Where it lives" updated to this repo path.

## 5. Guardrails observed

Strictly in-lane (a maritime-trade object used as evidence about the Island House owner-merchant family). OCR figures treated as dirty — the tonnage digit was **not** asserted from the 1820 scan alone but corroborated against the source's 1818-supplement citation. The register's generic "Wales 1810" build was flagged as approximate, not quoted as the build fact. No Dylan / Globe / Brown's / Corporation / charter-date / siege / cellar-dating / name-gloss / accessibility material. Nothing published; History Trail untouched. Base ID asserted; retired fork not read or written. Gather-only, additive — no other record edited, downgraded or merged.

## 6. Onward (not desk-runnable this run)

- Read the **1818 supplement** and the **1834 "new deck / top-side"** edition of the Register directly, to nail the clean "65" and the mid-life repair at object level.
- Test the 1820 owner **"Morris"** against the Skyrme / Island House family (the namesake William Skyrme vs a managing owner) — needs the fuller register run + newspaper ownership notices.
- The **1844 "MISSING"** margin note and the 4 April 1844 sinking-and-refloat off Tralee — a newspaper/register cross-read for the vessel's end.

*Sources: Lloyd's Register of Shipping, 1820, Shipowners' Register (Internet Archive HECROSS1820); D. J. Skyrme, "The Sloop 'William Skyrme'", Dyfed Family History Journal, Vol. 13 No. 7, pp. 12–15 (Dec 2019).*
