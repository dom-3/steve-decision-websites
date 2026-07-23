# Doc 211 — Mererid [ISLAND HOUSE]

## Stream D × E — The Hughes-of-Laugharne wills enumerated at object level in the NLW pre-1858 Welsh probate index. Exactly three exist in the entire record — John Hughes Esq (1729), David Hughes Esq (1817), John Hughes Shopkeeper (1838) — and this is the ownership/occupancy-spine document list Doc 175 said the register lacked. Plus the two-term AND grammar for the NLW discovery catalogue, and a fresh surname-vs-parish caution on the "584 Laugharne" figure.

**Owner:** Mererid (Island House branch)
**Date:** 23 July 2026
**Thread claimed:** `recITGZ4zRNlIJ7F9` — "Resolve the origin of the 'Abra' name carried by the Hughes family of Laugharne." (Area: Families & trades; Priority: Medium)
**Status of thread after this pass:** OPEN — advanced by one concrete step (the ownership-spine document list now exists); the will bodies remain to be read. See §6.
**Scope note:** Squarely Island House. "Hughes" is the family on the Island House occupancy/descent spine (Jane Abra Hughes, mid-C18; Mary Abra Hughes → Skyrme → Wienholt, 1813–1885; and see the Skyrme–Hughes join, Docs 177/179/191). No town-fabric or Globe target has been taken.

---

## 1. What was asked, and why it mattered

Doc 175 settled that "Abra" is a **forename**, not an heiress surname, and closed the hunt for an Abra estate. It left three named next reads. The third was this:

> "Test whether the Island House Hugheses appear in this index at all. The surface holds 584 Laugharne wills. A scoped `exact` search on Hughes × Laugharne is a bounded, desk-runnable pass and would likely produce an ownership-spine document list we do not currently have." (Doc 175 §7, read 3)

The register has never held a list of the actual probate documents left by Hugheses of Laugharne. Without that list, every claim about who the Island House Hugheses were, and what they held, rests on secondary genealogy rather than on documents that can be ordered and read. This pass builds the list. It does **not** read the wills — that is deliberately the next pass, and the boundary is stated plainly so nothing downstream mistakes an index read for a document read.

The NLW pre-1858 probate index is a **different corpus** from TNA Discovery / PROB 11 (the Prerogative Court of Canterbury), which Docs 191/193/195/199/201/203 worked. This index covers the Welsh consistory courts — for Laugharne, the **St David's (SD) series**. It therefore surfaces local wills that never went to Canterbury. That is exactly where a resident gentry family's ordinary probate would sit.

---

## 2. The object read

**Source:** National Library of Wales, Welsh probate index — wills proved in the Welsh ecclesiastical courts before 1858, St David's series (Tyddewi 1556–1858). Accessed at the Primo discovery layer, `discover.library.wales`, 23 July 2026.

**Read at:** result-record (catalogue index) level — name, parish, county, status/occupation, year, archive reference. **The will bodies were NOT read.**

**Access route — the two-term AND grammar (new this pass).** Doc 175 §2 recorded the single-term grammar. A scoped surname × parish question needs two terms combined. The NLW discovery catalogue takes this as **repeated `query` parameters**, each with its own `,AND` operator suffix:

```
https://discover.library.wales/discovery/search
  ?institution=44WHELF_NLW
  &vid=44WHELF_NLW:44WHELF_NLW_NUI
  &tab=Wills
  &search_scope=Wills
  &mode=advanced
  &bulkSize=50
  &query=any,exact,Hughes,AND
  &query=any,exact,Laugharne,AND
  &submit=Search
```

This fires under automation and returns the intersection. It is repeatable for **any surname × parish** question on this surface, and is recorded as a method dividend (F211-5).

---

## 3. The finding — verbatim

Search: `any,exact,Hughes` **AND** `any,exact,Laugharne` — scope Wills — **three results, and only three, across the entire pre-1858 Welsh probate record.** Reproduced verbatim from the catalogue:

| # | Index line (verbatim) | Year | Reference | Holding |
|---|---|---|---|---|
| 1 | "Hughes, John, Laugharne, Laugharne, Carmarthen, **Shopkeeper**" | 1838 | **SD1838-117** | NLW North Archives — *View online* |
| 2 | "Hughes, David, Laugharne, Laugharne, Carmarthen, **Esq**" | 1817 | **SD1817-64** | NLW North Archives — *View online* |
| 3 | "Hughes, John, Laugharne, Carmarthen, **Esq**" | 1729 | **SD1729-86** | NLW North Archives — *View online* |

### 3.1 What the list establishes

- **Exactly three** Hughes wills at Laugharne in the whole pre-1858 Welsh probate record. This is the ownership/occupancy-spine document list the register lacked. It is short, complete, and orderable.
- **Two of the three are "Esq"** — John Hughes (1729) and David Hughes (1817). "Esq" is the style of resident gentry, and it is the two gentry testators who are the natural candidates for the Island House ownership spine. The third, John Hughes (1838), is a **"Shopkeeper"** — trade, not gentry; included so the enumeration is exhaustive.
- **All three are flagged "View online"** — the will images are digitised and freely viewable. So the bodies are a **desk-runnable next pass**, not an archive-day item, with one caveat on hand (§6): 1817 and 1838 are round hand and desk-legible; 1729 is secretary hand and slower.

### 3.2 What the list does NOT establish — the discipline line

The Island House line carries **Jane Abra Hughes** (mid-C18), **Mary Abra Hughes** (1813–1885), and a **David Hughes**. Here, in the same town, is a **David Hughes Esq** whose will was proved in **1817**, and a **John Hughes Esq** of **1729** sitting close to the mid-C18 Jane Abra Hughes generation. The temptation to identify them is exactly the trap this desk has fallen into before (Thomas Edwards / Thomas Edmunds, Doc 141; the forename traps of Docs 175 and 199).

> **I am not saying any of these three IS an Island House Hughes.** Same surname, same town, plausible period is a *lead*, not an identification. Nothing separates "the ownership-spine Hughes" from "another Hughes of the same common surname" until the will body is read and names kin, property or the house. That read is the named next step (F211-4), logged **Referenced-pending — do not use as fact.**

---

## 4. Controls run — a negative or a distributional claim from any surface is worthless without one

Per the ratified rule (Doc 140 / Doc 175 §4), no count used as evidence may be written down without a positive control on the same surface in the same session. Three checks were run.

**Control 1 — positive coverage.** `any,exact,Laugharne` → **584 results.** This reproduces Doc 175's control exactly. The index is richly populated for Laugharne, so "only three Hughes wills" is a **real distributional signal**, not thin coverage. **PASSED.**

**Control 2 — operator behaviour (the stemming check).** `any,contains,Hughes` × `any,exact,Laugharne` → **the same 3**, identical set. Unlike the Marken case in Doc 175 — where `contains` silently stemmed to "Mark" and inflated 1 → 65 — the Hughes set is **stable under both operators**. The figure of 3 is clean. **PASSED.**

**Control 3 — scale, to prove the AND is genuinely filtering.** `any,exact,Hughes` alone (whole index) → **4,033 results**, heavily North-Walian (the top hits are Anglesey, Flint and Denbigh, from the Bangor and St Asaph courts). The AND with Laugharne filters 4,033 → 3. So the AND grammar is doing real work, and Hughes — one of the commonest surnames in Wales — is **rare at Laugharne**. It is not a native spine surname of the town in the way its other occupancy surnames are. **PASSED.**

---

## 5. ⚠️ Caution logged — the "584 Laugharne" figure is a mixed surname+parish set

A methodological correction worth recording. The `any,exact,Laugharne` control returns 584, but the top results are **people surnamed Laugharne** — "Laugharne, John, Laugharne, Laugharne, Carmarthen, Gent"; "Laugharne, Hester … Widow"; "Laugharne, William … Gent". The `any` field search matches the token "Laugharne" wherever it sits, so the 584 **conflates the surname Laugharne with the parish Laugharne.**

This does not touch the Hughes finding — those three records each show "Hughes" in the surname slot and "Laugharne" in the parish slot, and the AND fixes the parish. But it means:

> A raw "Laugharne = 584" count is **not** a count of Laugharne-parish wills. For a parish enumeration, pair "Laugharne" with a surname (as here) and verify the parish field in each hit. The 584 remains valid as a *coverage control* (it proves the surface is richly populated) but must never be quoted as "584 wills of Laugharne people." (F211-6)

---

## 6. Why the thread stays OPEN, and the exact next step

The thread asked for the *origin of the Abra name in the Hughes family*. This pass did not answer that directly; it built the **document scaffold** on which the answer will hang — the complete, short, orderable list of Hughes-of-Laugharne wills. That is real progress and it unblocks the reading pass. The thread stays **Open**, with the route recorded.

**Next reads, in order of value (all desk-runnable — the images are digitised):**

1. **SD1817-64 — David Hughes, Esq, of Laugharne, 1817.** Gentry, round hand, highest value. Does the will name kin (an Abra forename? a Skyrme? a daughter carrying property?), name the house, or name Island House?
2. **SD1838-117 — John Hughes, Shopkeeper, of Laugharne, 1838.** Round hand; lower prior probability of the spine but cheap to read and completes the picture.
3. **SD1729-86 — John Hughes, Esq, of Laugharne, 1729.** Secretary hand — slower, but the earliest and closest to the mid-C18 Jane Abra Hughes generation.

A single read that names an "Abra" or ties a Hughes to Island House would move the spine from candidate to evidenced. A set of reads that names none weakens the identification and strengthens the "common surname, coincidental" reading — an honest negative, and still a result.

**Method dividend.** The two-term AND grammar (§2) makes every "did the [surname]s of Laugharne leave wills, and when" question answerable from the desk in one call. It is immediately reusable for any remaining spine surname whose NLW-court (as opposed to Canterbury) probate has not been checked.

---

## 7. What went into the register

- **Source (1, new):** NLW Welsh probate index (St David's series) — Hughes × Laugharne exact sweep, `discover.library.wales`. Tier T2 (institutional index, object-level entries, not the documents). `recB7eogw1cN85BPy`.
- **Entities (3, new):** John Hughes Esq of Laugharne (1729) `recq2p150tvsi5K2P`; David Hughes Esq of Laugharne (1817) `recilAsmVruYvKUg7`; John Hughes Shopkeeper of Laugharne (1838) `rec0H0V2M4m5VLIDl`. All Status "Registered" (catalogue-attested candidates; Island House tie untested).
- **Facts (7, F211-1 … F211-7):** the enumeration; the Esq/Shopkeeper split; the distributional signal; the UNTESTED identification (Referenced-pending, do-not-use); the two-term AND method; the surname-vs-parish caution; the controls. `receJXTyWlonwLAyB`, `recBM6z8FzFMxjH4r`, `recFr9L4yVM9Lqlru`, `recPpQiuD39q7a1Fz`, `rec6C6NDrlNjC0q6z`, `rec6A52n7Paxdl6LU`, `rec3flagBGy1UnTRA`.

---

## 8. Standing guardrails observed

No Dylan claim of any kind. No Globe or Beynon content. No cellar dating, charter date, corporation formula, siege figure, or accessibility claim. Nothing here approaches the public trail: no Stop prepared, nothing tiered for publication, no Beat created. The three new Entities are register records only, explicitly not identified with any Island House person. Additive-only: no existing record was edited, downgraded or deleted; the thread I claimed is the one I am researching, and it is returned to Open.

---

*Written into the repo and left UNCOMMITTED, per the standing rule. Jarvis's 21:00 run commits the day's docs in one path-scoped commit. No `git add` / `git commit` / `git push`.*
