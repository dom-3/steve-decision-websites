# Doc 175 — Mererid [ISLAND HOUSE]

## Stream D × E — The "Abra" name settled at object level: it is a FORENAME, not a surname. Ten bearers across the whole Welsh probate record 1677–1849, seven of them Pembrokeshire, two of them Laugharne — and JANE ABRA MARKEN of Laugharne, will proved 1796, carrying the exact compound forename of the Island House line one generation early. Plus a new search trap on a new surface, and the exact-operator URL grammar for the NLW wills catalogue.

**Owner:** Mererid (Island House branch)
**Date:** 22 July 2026
**Thread claimed:** `recITGZ4zRNlIJ7F9` — "Resolve the origin of the 'Abra' name carried by the Hughes family of Laugharne. Follow the FreeREG index lead at object level and test the marriage/baptism registers." (Area: Families & trades; Priority: Medium)
**Status of thread after this pass:** OPEN — substantially advanced, not closed. See §7.
**Scope note:** This is squarely Island House. "Abra" is carried by **Jane Abra Hughes** (register: Verified, mid-18th c., T6) and **Mary Abra Hughes (Skyrme → Wienholt), 1813–1885** (register: Verified, T2/T3) — both on the Island House occupancy/descent spine. No town-fabric or Globe target has been taken.

---

## 1. What was asked, and why it mattered

The Hughes family of Laugharne carry a middle name, **Abra**, through the generations that matter most to Island House. The register has treated it as unexplained. Two readings were live and had never been tested against a record:

- **(a) Abra as a SURNAME** — an heiress surname absorbed into the Hughes line in the way "Beddoe", "Pennoyre" or "Skyrme" are absorbed, i.e. evidence of a marriage that brought property. If true, "Abra" is a *lead to an estate*.
- **(b) Abra as a FORENAME** — a given name, transmitted maternally or by godparent custom, carrying no property implication at all.

These have very different consequences. Reading (a) would have licensed a hunt for an Abra family and an Abra inheritance. Reading (b) closes that hunt off. The distinction had to be settled on an object before anything was built on it.

The thread's registered route was FreeREG. I did not use it. I used a better one.

---

## 2. The object read

**Source:** National Library of Wales, **Welsh probate index / Wills catalogue** — wills proved in the Welsh ecclesiastical courts before 1858, covering seven dioceses or their equivalents (Bangor 1576–1858; Brecon/Aberhonddu 1543–1858; Caer/Chester 1521–1858; Llandaf 1568–1857; Llanelwy/St Asaph 1548–1858; Penarlâg/Hawarden 1554–1858; Tyddewi/St David's 1556–1858).

**Access route (works, and is now recorded so it can be repeated):**

The public search form at `library.wales/catalogues-searching/catalogues/specialist-catalogues/wills/wills` **does** fire under automation — unlike Welsh Newspapers Online, where only the URL grammar works. It hands off to the Primo discovery layer at `discover.library.wales`. The resulting grammar is:

```
https://discover.library.wales/discovery/search
  ?institution=44WHELF_NLW
  &vid=44WHELF_NLW:44WHELF_NLW_NUI
  &tab=Wills
  &search_scope=Wills
  &mode=advanced
  &bulkSize=50
  &query=any,exact,TERM,AND
  &submit=Search
```

The operator slot (`exact` / `contains`) is load-bearing. See §5.

**Read at:** result-record level in the catalogue — i.e. the indexed entry for each will, which gives name, parish, county, status/occupation, year, and the archive reference. **I did NOT read the will bodies.** That is stated plainly here so nothing downstream mistakes an index read for a document read.

---

## 3. The finding — verbatim

Search: `any,exact,Abra` — scope Wills — **ten results, and only ten, across the entire pre-1858 Welsh probate record.** Reproduced verbatim from the catalogue:

| # | Entry | Year | Index line (verbatim) | Reference |
|---|---|---|---|---|
| 1 | Abra Phillips | 1832 | "Phillips, Abra, Cosheston, Pembroke" | SD1832-63 |
| 2 | **Abra Bowen** | **1677** | **"Bowen, Abra, Laugharne, Carmarthen, Widow"** | **SD1677-50** |
| 3 | Abra Row | 1725 | "Row, Abra, Loveston, Pembroke, Widow" | SD1725-60 |
| 4 | Abra Jones | 1753 | "Jones, Abra, Carew, Pembroke, Widow" | SD1753-13 |
| 5 | Abra Holland | 1692 | "Holland, Abra, St Florence, Pembroke, Widow" | SD1692-202 |
| 6 | Abra Mason | 1749 | "Mason, Abra, Pembroke (St Mary), Pembroke" | SD1749-138 |
| 7 | Abra Eynon | 1849 | "Eynon, Abra, Tenby, Tenby, Pembroke, Spinster" | SD1849-308 |
| 8 | Abra Watkin | 1797 | "Watkin, Abra, Stackpole Elidir, Pembroke, Widow" | SD1797-217 |
| 9 | Abra Philp | 1755 | "Philp, Abra, Carmarthen, Carmarthen, Carmarthen, Spinster" | SD1755-24 |
| 10 | **Jane Abra Marken+** | **1796** | **"Marken, Jane Abra, Laugharne, Carmarthen"** | **SD1796-57** |

### 3.1 Reading (a) is dead

In **every one of the ten**, "Abra" occupies the forename slot and a different word occupies the surname slot. There is **no** will in the entire pre-1858 Welsh probate record of a person surnamed Abra. Where status is recorded, every bearer is female — seven Widow, two Spinster, one unstated (Marken) and one unstated (Phillips).

**"Abra" is a female forename. It is not a surname.** The heiress-surname reading is refuted, and the hunt for an Abra family estate should not be opened.

### 3.2 Where the name lives

Of the ten: **seven Pembrokeshire** (Cosheston, Loveston, Carew, St Florence, Pembroke St Mary, Tenby, Stackpole Elidir), **one Carmarthen town**, **two Laugharne**. Not one from any diocese outside the south-west. This is a name of the Anglicised south-west — the country below the Landsker — with a Pembrokeshire heartland and a Carmarthenshire eastern edge on which Laugharne sits. That is entirely consistent with the linguistic character of Laugharne itself and needs no special explanation.

Date span of the attested bearers: **1677 to 1849**.

### 3.3 The find that matters

**Entry 10: "Marken, Jane Abra, Laugharne, Carmarthen" — will SD1796-57, 1796.**

The Island House line carries **Jane Abra Hughes**, dated in our own register to the **mid-eighteenth century**. Here, in the same town, is a **Jane Abra** — the full compound, not merely the element — whose will was proved in **1796**.

The `+` suffix in the catalogue title ("Jane Abra Marken+") flags an accompanying document in the bundle — on this catalogue's convention, an inventory, bond or administration alongside the will. That means the bundle is likely to name kin and executors.

**What I am NOT saying.** I am not saying Jane Abra Marken is Jane Abra Hughes. I am not saying she is her mother, daughter, aunt or namesake. Those are four different hypotheses and the index cannot separate them. What the object establishes is narrower and still valuable:

> The compound forename "Jane Abra" is independently attested at Laugharne in a probate record of 1796, under the surname Marken.

That is a **Verified** statement about an index entry. Everything beyond it is untested.

### 3.4 The earlier Laugharne bearer

**Abra Bowen, widow, of Laugharne, will 1677 (SD1677-50)** puts the name in the town **at least seventy years before** the Hughes generation that carries it, and in a period when Island House itself is already standing (the 1658 door date, Doc 158b). The name did not arrive with the Hugheses. It was already local.

---

## 4. Controls run — because a negative from an unfamiliar surface is worthless without one

Doc 140 now carries the sixth trap in the form ratified this week: *no negative may be recorded from any surface without a positive control run against that same surface in the same session.* Two controls were run.

**Control 1 — coverage of Laugharne on this surface.**
`any,exact,Laugharne` → **584 results.**
The index is richly populated for Laugharne. Therefore "only two of the ten Abra bearers are at Laugharne" is a **real distributional signal**, not an artefact of thin coverage. Control PASSED.

**Control 2 — operator behaviour.**
`any,contains,Abra` → 10 results. `any,exact,Abra` → the same 10, in the same order. The Abra set is stable under both operators and is therefore clean. Control PASSED.

Both controls were run on the same surface in the same session as the finding.

---

## 5. ⚠️ NEW SEARCH TRAP — the NLW discovery catalogue's `contains` operator stems to shorter tokens

This is the seventh trap and it is a fresh instance of the **near-collision** family that has already contaminated our record once (the Thomas Edwards / Thomas Edmunds affair, Doc 141).

Searching the surname:

- `any,contains,Marken` → **65 results**
- `any,exact,Marken` → **1 result**

The 65 were not Markens. The `contains` operator expanded the token and returned **Mark** — Mark Devereux, Mark Gibbon, Mark Boulton, Mark Cox, Mark Knethell, Mark Thomas, Mark Lloyd, Mark Pierce, and so on down five pages. A researcher paging through that set, seeing a wall of plausible south-west Welsh probate entries, could easily conclude "Marken is a common local surname" — and would be flatly wrong. The true figure is **one Marken in the whole pre-1858 Welsh probate record.**

Note the specific danger: the stemmed set is not obviously wrong. It is the same record type, the same dioceses, the same centuries, the same social register. Nothing about it *looks* like a bad result. That is exactly the shape of a near-collision.

**THE RULE, for ratification into Doc 140:**
> On the NLW discovery/Primo catalogue (`discover.library.wales`), use `query=any,exact,TERM,AND` for any name search. `contains` silently expands to shorter stems and returns near-collisions that are indistinguishable from real hits by eye. Where a count is being recorded as evidence — especially a count used to argue rarity or commonness — the `exact` figure is the only one that may be written down, and the `contains` figure should be recorded alongside it as the control.

Note also the corollary that runs the other way: **`contains` did NOT stem "Abra" to "Abraham".** So the expansion is not symmetrical and cannot be predicted. Do not reason about what the operator will do — test it, per term, per session.

---

## 6. What goes into the register

**Entities (new):**

| Entity | Type | Dates | Status | Note |
|---|---|---|---|---|
| Jane Abra Marken, of Laugharne | Person | will proved 1796 | Verified (as an index entry) | NLW SD1796-57. Compound forename "Jane Abra" at Laugharne. Relationship to the Island House Hugheses UNTESTED. |
| Abra Bowen, widow, of Laugharne | Person | will proved 1677 | Verified (as an index entry) | NLW SD1677-50. Earliest attested Laugharne bearer of the name. |

**Source (new):**

| Source | Kind | Tier | Access route |
|---|---|---|---|
| NLW Welsh probate index (wills proved in the Welsh ecclesiastical courts before 1858), St David's series | Catalogue / index | Tier 2 — institutional index, object-level entries, not the documents themselves | `discover.library.wales`, `tab=Wills`, `query=any,exact,TERM,AND` — grammar recorded in §2 |

**Facts (new):**

| Claim | Tier | Basis |
|---|---|---|
| "Abra" appears in the pre-1858 Welsh probate record exclusively as a female forename; there is no person surnamed Abra in the entire index | **Verified** | Exhaustive `exact` search, n=10, positive control passed |
| The name has a Pembrokeshire heartland: 7 of 10 bearers Pembrokeshire, 1 Carmarthen town, 2 Laugharne; none outside the south-west | **Verified** | Same object |
| Attested span of the name in the Welsh probate record: 1677–1849 | **Verified** | Same object |
| "Abra" is attested at Laugharne from at least 1677 (Abra Bowen, widow) — before the Hughes generations that carry it | **Verified** | NLW SD1677-50 |
| The compound forename "Jane Abra" is attested at Laugharne in 1796, under the surname Marken | **Verified** | NLW SD1796-57 |
| Jane Abra Marken is related to, or identical with, Jane Abra Hughes of the Island House line | **UNTESTED — do not use** | No evidence either way. Recorded as a hypothesis with a named test, §7. |
| The Hughes "Abra" derives from an heiress surname | **REFUTED** | No Abra surname exists in the index |

**Down-tiering required elsewhere:** any existing register note that treats "Abra" as a surname, or that implies an Abra inheritance, should be corrected against this doc. I have not edited other records — per the additive-only constraint, that correction is flagged here for the human pass, not made unilaterally.

---

## 7. Why the thread stays OPEN, and the exact next step

The thread asked for the *origin* of the name in the Hughes family. I have established what kind of name it is, where it lives, how far back it runs in Laugharne, and that the exact compound appears in the town in 1796. I have **not** established the transmission into the Hughes line. So it stays Open, with the route recorded.

**Next target, in order of value:**

1. **Read SD1796-57 — the Jane Abra Marken bundle.** It is flagged `+`, so it should carry an inventory or bond naming kin and executors. 1796 is round hand, not secretary hand, so it is desk-legible and does **not** fall under the archive-gated exclusion. This is the single highest-value next read on this thread. If the bundle names a Hughes, the question is answered; if it names none, the namesake reading strengthens.
2. **Read SD1677-50 — Abra Bowen of Laugharne, 1677.** Secretary hand and therefore archive-gated; flag it for the human archive day rather than attempting it at the desk.
3. **Test whether the Island House Hugheses appear in this index at all.** The surface holds 584 Laugharne wills. A scoped `exact` search on Hughes × Laugharne is a bounded, desk-runnable pass and would likely produce an ownership-spine document list we do not currently have. This is probably worth a run of its own.

**Method dividend.** The `exact` grammar in §2 unblocks more than this thread. Every register question of the form "did X of Laugharne leave a will, and when" is now answerable from the desk in one call — which touches the Skyrme thread (`recyfHrIs294zycSv`), the Pennoyre Watkins 1787 will (`rec46ijo9UuIUQ5CR`, and note **Abra Watkin of Stackpole Elidir, 1797**, sitting one year later in this very result set — a co-occurrence, *not* evidence, and to be treated as such), and the Prosser/Peppler identification. Recorded as a repeatable route.

---

## 8. Standing guardrails observed

No Dylan claim of any kind is made or implied here. No cellar dating. No charter date. No corporation formula. No accessibility claim. Nothing in this doc approaches the public trail: no Stop is prepared, nothing is tiered for publication, and no Beat is created. The two new Entities are register records only.

---

*Written into the repo and left UNCOMMITTED, per the standing rule. Jarvis's 21:00 run commits the day's docs in one path-scoped commit.*
