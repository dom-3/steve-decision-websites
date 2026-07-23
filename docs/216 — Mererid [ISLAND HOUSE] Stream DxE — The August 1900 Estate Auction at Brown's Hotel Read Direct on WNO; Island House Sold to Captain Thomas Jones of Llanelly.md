# Doc 216 — Mererid [ISLAND HOUSE] Stream D×E

## The August 1900 Estate Auction at Brown's Hotel read direct on Welsh Newspapers Online; Island House sold to Captain Thomas Jones of Llanelly for £1,000

**Branch:** Island House · **Date:** 23 July 2026 · **Register base:** `appnt9vSQKrKyaKiZ` (asserted against the table list; retired fork base untouched)
**Thread:** rec52kSk32QWel2Bs — "What became of the Laugharne estate after the Aug 1900 auction at Brown's Hotel? Who bought which lots, and what does the sale catalogue list?" (Families & trades, High) — set **Done**.
**Status:** written to the git repo, **LEFT UNCOMMITTED** for Jarvis's 21:00 path-scoped commit. No `git add` / `git commit` / `git push` run.

---

### Why this target

The occupancy-spine surname sweep (Docs 191–203) and the modern-owner work (Docs 205, 207) had carried Island House's story up to Percy Ll. Hughes-Garbett's residence c.1890–1893 (Docs 209, 212, 214) and forward to Island House Restoration Ltd (Doc 205, 2020). The one large gap in between was the moment the family's ownership ended: the **August 1900 break-up auction of the Laugharne estate at Brown's Hotel**, which existed in the register only as an **owner-narrative** fact (F207-5, Referenced-pending; ~£25,000 owner-stated). The sale notice / press report is the T1 object that would either confirm it or not, and it is a Welsh Newspapers Online (WNO) read — a proven readable open-source surface (Docs 209/212/214). This pass converts the owner-narrative into primary press, and answers the specific question: **was Island House a lot, and who bought it?**

### Method

WNO search, AND-grammar (the Advanced Search form does not fire under automation; the URL grammar does):

```
alt=(full_text:("Island House") OR title_en:("Island House")) AND (full_text:("Laugharne") OR title_en:("Laugharne"))
range[min]=1900-01-01 · range[max]=1901-06-30
```

Exactly **three** results, all August 1900, all the same auction. The fullest — the Carmarthen Weekly Reporter's dedicated headed report — was opened and read in full at contiguous object level; the two metropolitan-Welsh dailies were read at the (contiguous) search-snippet level and used as independent corroboration of the Island House line.

---

### Five-line finding

1. **The auction is real, primary, and matches the owner-narrative.** The Hughes-Garbett Laugharne estate was sold at **Brown's Hotel, Laugharne, on Friday [10] August 1900** by **Messrs J. Howell Thomas & Son, auctioneers, of Carmarthen** (rostrum: Mr W. Vincent Howell Thomas), the vendor's solicitors being **Messrs Leslie & Hardy, Bedford Row, London**. Nineteen lots — "principally of small farms and accommodation lands, with a few houses and building plots in the town itself"; **only three remained unsold; the whole realised over £25,000** in the aggregate (including timber-purchase moneys). The vendor is named in the press as **"Mr Hughes-Garbett, Bristol."** (F216-1, F216-4, Verified.)

2. **Island House was a named lot, and its buyer and price are established across three independent witnesses.** "Island House, Laugharne — last rent paid £75 — Captain Thomas Jones, Llanelly — £1,000." The line is printed identically in the Carmarthen Weekly Reporter (17 Aug), the South Wales Daily News (13 Aug) and the Western Mail (13 Aug). Contiguity within one item, town established, three-witness agreement on buyer and price → **Verified-strong** (F216-2). This is the **first documented event in Island House's twentieth-century ownership chain** (→ Walters, 1964, Doc 61).

3. **The buyer entity already existed and is now confirmed at object level.** Doc 209 created "Captain Thomas Jones, of Llanelly" (recYF4SoHkzHyGFhy) from the compiled ownership chain (Doc 116, "Capt. Jones 1900"). This pass confirms that purchase from the contemporary press itself. He also took **Wooford's Farm** (26a 2r 8p, rent £60) at the same sale for **£1,576** — two Laugharne lots in one day (F216-3, Verified).

4. **£1,000 places Island House as a middling lot.** The sale ranged from £17 (a Clifton-street building plot) to £6,250 (Brixton Farm, with harbour's moor); the estate was dominated by farms, not town houses. Island House at £1,000 sat below Bronwest (£1,870), Eynon's Down (£3,118), Hall Down (£2,372) and Delacorse (£3,405). (F216-5, Verified.)

5. **Guardrail held.** Brown's Hotel appears in the record **only as the auction venue**. No Island House–Brown's institutional association and no Dylan Thomas association is created by the co-occurrence (F216-6). Brown's is Dylan's on-record pub, but that is a separate matter and is not licensed by a saleroom coincidence.

---

### The lot list (Carmarthen Weekly Reporter, 17 Aug 1900)

Prices include the timber-purchase moneys. OCR is dirty; figures below are the reconciled reading, with the Island House and Wooford's figures cross-checked against the two 13 August dailies.

| Lot | Acreage / rent | Buyer | Price |
|---|---|---|---|
| Three houses, Wagon [Wogan] Street | rent £7 | William Richards, butcher, Laugharne | £81 |
| Bronwest Farm | 52a 3r 25p, rent £65 | Daniel Lewis, Eynon['s] Down | £1,870 |
| Hall Down Farm | 9a 0r 29p, rent £80 | George Harries, Penuwch, Mydrim | £2,372 |
| North Waddin holding | 18a 2r, rent £20 | Evan David, Laugharne | £668 |
| Eynon's Down Farm (several fields) | 77a 2r 15p, rent £120 | James Richards, Three Mariners Inn, Laugharne | £3,118 |
| Delacorse Farm | 113a 3r 27p, rent £116 5s | Henry Muscott (the tenant) | £3,405 |
| Brixton Farm, with harbour's moor | 208a 0r 27p, rent £250 | J. R. John (the tenant) | £6,250 |
| Coalpit Park | 11a 1r 30p, rent £14 | T. J. Francis, Laugharne | £350 |
| Tadhill holding | 7a, rent £11 | David Jeremy, Dowlais | £300 |
| **Wooford's Farm** | 26a 2r 8p, rent £60 | **Captain Thomas Jones, Llanelly** | **£1,576** |
| Lower New Parks (two closes of pasture) | 11a 0r 16p, rent £25 | L. Falconer, Laugharne | £1,100 |
| Old corn mill (occ. Owen Williams) | rent £5 5s | John Morse, The Corse, Laugharne | £130 |
| Lower Town Park enclosure | 6a 0r 19p, rent £14 10s | Richards, Three Mariners Inn, Laugharne | £422 |
| Building site, Clifton-street (54ft frontage) | 14p | James Richards, East Hills, Laugharne | £17 |
| **Island House, Laugharne** | last rent £75 | **Captain T. Jones, Llanelly** | **£1,000** |

(Nineteen lots were offered; the Reporter itemises the sold ones. Three were unsold and are not named — an archive-day question for the printed particulars.)

---

### Tiering, honestly

- **Verified-strong:** the Island House sale — buyer (Capt. Thomas Jones, Llanelly) and price (£1,000) — on three independent contiguous reports (F216-2).
- **Verified:** the auction's venue/date/auctioneer/vendor/solicitors and the 19-lots / 3-unsold / >£25,000 aggregate (F216-1); the vendor named "Hughes-Garbett, Bristol" (F216-4); Capt. Jones's second lot, Wooford's Farm £1,576 (F216-3); the price-range context (F216-5); the venue-only scope-guard (F216-6). These rest largely on the single full local report, with the money lines corroborated across the three papers.
- **Not asserted:** that the 1900 buyer "Capt. Thomas Jones of Llanelly" is the same "Capt. Thomas Jones, Llanelly" glimpsed at the 1890 Christmas-tree event (Doc 209). Thomas Jones is an extremely common Welsh name and the two objects do not cross-reference; convergence noted, identity left open.
- **F207-5 upgraded** Referenced-pending → **Verified** (precedent: Doc 212's upgrade of F209-3), its Sources preserved, a Doc 216 note appended.

### Search-trap discipline applied

- **Contiguity, not co-occurrence.** The Island House buyer/price sits inside a single headed auction report with Laugharne established in the headline and opening sentence — not merely on the same page. The two 13 August dailies show the Island House line within the same lot list (Owen Williams's mill, Three Mariners, the Clifton-street plot), so they are the same sale, not a page-level collision.
- **OCR figures treated as dirty.** The Reporter renders "£75" as "275" and "£1,000" as "21.000"; "£1,576" as "21,576". Every money figure was reconciled against at least the two other papers before being written as fact.
- **Near-collision watch.** "Captain T. Jones / Thomas Jones, Llanelly" is onomastically weak on its own; it is carried here only because three papers tie the exact name to the exact lot, and the identity with the 1890 figure is explicitly withheld.

### Guardrails observed (Doc 140 standing register)

No Dylan / Globe / Brown's association drawn (Island House is not a Dylan site; Brown's is venue only). Nothing about the castle charter, siege, corporation, or name-meaning arose. Additive-only: three new Sources, two new Entities, six new Facts; the buyer, vendor and core Island House entities were **fact-linked, not edited**; F207-5 (the fact this thread produced) enriched. The public History Trail was not touched; nothing was published.

### Branch boundary

The other lots (Bronwest, Hall Down, Eynon's Down, Delacorse, Brixton, etc.) and their buyers are **town-fabric** material and belong to the House-of-Culture branch; they are logged in the thread findings as leads but not chased here. Island House is the lot in our lane, and the Island House connection is primary throughout.

---

### Register records created (base `appnt9vSQKrKyaKiZ`)

**Sources (3, T1 primary / Newspaper):**
- Carmarthen Weekly Reporter, 17 Aug 1900 (Suppl.), p.5 — recnOmviR1lYYPrwr (Read; WNO /view/3583503/3583504/7/)
- South Wales Daily News, 13 Aug 1900, p.8 — recsWiGJBZ00RK009 (Partial; /view/3746363/3746371/201/)
- The Western Mail, 13 Aug 1900, p.8 — recw83oEKscj9H7mp (Partial; /view/4341764/4341772/147/)

**Entities (2, new):**
- The 1900 break-up auction of the Hughes-Garbett Laugharne estate (Event) — recIMa6Si4EiIOaDu
- J. Howell Thomas & Son, auctioneers, Carmarthen (Organisation) — recSTDks8QszKQlyo
- (existing, fact-linked only: Island House recB7YRBotexm0rSr; Percy Ll. Hughes-Garbett recdAkXLHYnOqdRZp; Capt. Thomas Jones of Llanelly recYF4SoHkzHyGFhy)

**Facts (6):** F216-1 recDmptJgLS93SzIn · F216-2 recLQL3ago2RhSj4X (Verified-strong) · F216-3 rec4VXted76BlPPe3 · F216-4 recxkaD5gjV8gDqXU · F216-5 rec8n0o2HCP4VWxa4 · F216-6 recJQaXN7Vy9lF8XY. Plus **F207-5** (recPr4T9vGprjVl0g) upgraded Referenced-pending → Verified.

**Thread** rec52kSk32QWel2Bs set **Done** with findings.

### What remains (not desk-runnable now)

- The **printed sale particulars / catalogue** itself (lot plans, tenancy schedules, and the identities of the three unsold lots) — an archive-day order, likely within the Hughes-Garbett solicitors' or estate papers, or a surviving auctioneer's copy.
- Whether the 1900 buyer is the 1890 "Capt. Thomas Jones, Llanelly" — needs a Llanelly directory / obituary read, not settled here.
- What Captain Thomas Jones did with Island House after 1900, and the step from him to the Walters ownership (1964, Doc 61) — the next link in the C20 chain.
