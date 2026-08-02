# Island House site — full architecture (trunk + every branch)

**Owner:** Island House desk · **Date:** 23 Jul 2026 · **Status:** written uncommitted for the single publisher
**Purpose:** lay out the complete multi-page structure to match the old site, mark what's built vs to-build, note what content we actually hold for each page, and define the provenance-dot system for the edit stage. Stage plan: RECREATE → EDIT (with dots) → REFLOW to our story.

Legend — page status: ✅ built · 🔲 to build (stub) · 🖼️ content is image/PDF only (needs media export before it has substance).
Provenance dots (per block of info, in the editor): ⚪ original · 🟢 new/verified · 🔴 corrected/removed · 🟡 tradition (kept, labelled).

---

## TRUNK
- **Home** — `island-house-site/index.html` — ✅ built (recreation). Hero · intro · Globe promo · Latest Update · Exhibition teaser · Aerial Views · Location · THE HISTORY · Curtis extract · Latest News · Consultants · Contact.

## BRANCH 1 — About / History  (mostly folded into Home)
- **About** — Home #about — ✅ (the intro block).
- **The History** — Home #history + Curtis extract — ✅ text; 🖼️ Curtis sketch image pending. *This is where our verified History Trail eventually plugs in.*

## BRANCH 2 — Owners & People
- **The Owners & People of Island House** — `owners.html` — 🔲 / 🖼️. Their page is a single 1778–2020 timeline graphic. **This is the biggest 🟢 opportunity:** our library replaces a 1778 image with a documented ~800-year named line.

## BRANCH 3 — Exhibition  (18 boards; each board is an image/PDF)
Index page `exhibition.html` 🔲, linking 18 board pages — all 🖼️ (need the media export to have real content):
1. The Team · 2. The History of Island House · 3. The History & People (1778–2020) · 4. The Civil War · 5. Condition Pre-Purchase · 6. Condition On Purchase · 7. Clearance · 8. Archaeology · 9. Commencing Repair Works · 10. Repair Works · 11. Concept Development · 12. Ground Investigation & Environmental Reconstruction · 13. Floor Plans · 14. Elevations · 15. Sections · 16. Illustrative 3D Visualisations · 17. Video — Rob Scourfield · 18. (exhibition intro).

## BRANCH 4 — Consultants & Reports
- Index `reports.html` 🔲 (the consultant roll is already on Home). Dyfed Archaeology (2020 excavations), 8 items, all 🖼️/PDF:
  ceramic finds · clay-pipe finds · ceramic building material · Trench 1 fabrics · Trench 1 phases 1–8 · Trench 2 pottery · Trench 1 reference images · Trench 2 reference images · DAT interim reports.

## BRANCH 5 — Latest Updates  (14 progress posts)
Index (Home #news) + post pages, mostly 🖼️ with short captions (text captured for the 8 we pulled):
13 Jul 2023 (scaffolding-free) · 13 Jan 2023 · 28 Nov 2022 · Chimney Repair Progression · Chimney 6 talk (James Vincent) · Chimneys & Oak Beams · Installation of Oak Beams · First Delivery of Oak Beams · Emergency Repair Works · Archaeological Survey · Buildings & Heritage Consultant video · Getting the Building Watertight · Before & After Images · (DAT interim reports).

## BRANCH 6 — Contact
- **Contact** — Home #contact — ✅ (Globe House address, tel, email). Their live form was reCAPTCHA-broken; we'll wire a working form to our own back-end (like Sancler's) at the edit stage.

## OUR NEW BRANCHES (added, not on their site — the showcase upgrade)
- **The Plans** — floor plans, elevations, sections, 3D visualisations + PJL rev 07a + the 360 walkthrough. 🔲
- **The Research** — the method + the graded register: the credibility page. 🔲
- **(Later) The People** — the owners' piece, when we do it. Held.

---

## THE PROVENANCE SYSTEM — how the dots work (and why data-driven, not hand-placed)

Every content block carries a data attribute, e.g. `data-prov="new" data-fact="F209-3"`. A small CSS/JS layer renders the dot and, on hover, the source citation pulled from the ledger. Four states, mapped straight to the claim ledger buckets:

| Dot | Meaning | Ledger bucket |
|---|---|---|
| ⚪ Original | Straight from their site, unchanged | A (confirmed) shown plain, or untouched |
| 🟢 New / verified | Our research, with a source | D (our additions) |
| 🔴 Corrected / removed | Their claim we've changed or cut | C (refuted) |
| 🟡 Tradition | Kept but labelled as legend | B (tradition) |

**Why tie it to the register, not eyeball it:** hand-placed dots drift the moment content changes. If each block references its fact ID, the dot and the citation are always truthful, and the same data drives (a) the editor's provenance view, (b) the book's footnotes, and (c) — if you want — a public "newly researched" badge that actually *sells* the depth. One source of truth, three outputs.

**Editor toggle:** the dots are an authoring layer — a `?edit=1` toggle shows dots + citations; the public view hides them (or shows a tasteful "researched 2026" marker). This keeps the working view honest without cluttering the visitor's experience.

---

## WHAT'S MISSING / WHAT TO DECIDE (so we don't build 40 pages twice)

1. **A shared template.** 40 hand-built pages = 40 places to fix the nav. We need ONE shared header/footer/nav (a small include or a single CSS/JS shell) so the structure stays consistent. Decide this before mass-building.
2. **Provenance as data, from day one.** Bake `data-prov`/`data-fact` into the stubs now, even empty — retrofitting 40 pages later is painful.
3. **Build order.** Recommend: (a) shared shell, (b) stub ALL pages so the site is fully navigable (no dead links), (c) fill the pages where we have text now, (d) drop in media when you export it, (e) fold in verified research at the edit stage. Structure first, depth as it arrives.
4. **The media dependency is real.** ~30 of the 40 pages are image/PDF boards — they're navigable stubs until the WordPress Media Library export lands. That's fine and expected; it just sets what "done" means per page.
5. **Research isn't final.** Per your steer, nothing publishes as final until the research depth is in — so the edit stage runs behind the register, and Karen gates the heritage reframes.
