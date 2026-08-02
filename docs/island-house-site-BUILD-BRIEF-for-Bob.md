# BUILD BRIEF — Island House showcase skeleton (for Bob)

**From:** Island House desk · **Date:** 23 Jul 2026
**Job:** generate the remaining stub pages for the Island House showcase, to the EXISTING template. This is a structural build — make the whole site navigable with zero dead links. Do NOT write history content or place provenance verdicts; that's the edit stage, register-driven and Karen-gated.

## Where everything is
- Folder: `~/Documents/steve-decision-websites/island-house-site/`
- Shared shell (DO NOT fork — every page links to these): `assets/site.css`, `assets/site.js`
- Reference pages already built: `index.html` (home) and `owners.html` (exemplar stub — copy its pattern exactly).
- The full page list + statuses: `docs/island-house-site-architecture.md`
- The captured source content to drop in where it exists: `docs/island-house-site-capture/pages/` and `media-manifest.csv` (use exact filenames in placeholder `data-src`).

## The template (copy owners.html)
Every page must:
1. Link the shared shell: `<link rel="stylesheet" href="assets/site.css">` and `<script src="assets/site.js" defer></script>`. Use `data-root=""` for root-level pages and `data-root="../"` for pages inside `exhibition/`, `reports/`, `updates/`.
2. Have `<div id="site-header"></div>` at top and `<div id="site-footer"></div>` at bottom (site.js injects the shared nav + footer — never hand-write nav).
3. Have a `.hero short` with the page title, a breadcrumb (`.crumb`), and one content section.
4. Use `.ph` placeholder boxes for every image, each with `data-src="<exact manifest filename>"` so media drops in 1:1 later.
5. Wrap each block of substantive info in `data-prov="original"` for now (it's their content) with `data-cite="islandhouse.wales — <page>"`. Leave new/corrected/tradition for the edit stage.
6. Carry a `<div class="badge">Stub — content pending media export</div>` where the page is image/PDF-only.

## Pages to create (match the nav manifest in site.js exactly, same file paths)
**Root:** `exhibition.html`, `reports.html`, `updates.html`, `plans.html`, `research.html` (index/landing pages, each linking its children as a `.grid3` of cards).
**`exhibition/`** (18): the-team · history-of-island-house · history-and-people · the-civil-war · condition-pre-purchase · condition-on-purchase · clearance · archaeology · commencing-repair-works · repair-works · concept-development · ground-investigation · floor-plans · elevations · sections · visualisations · video-scourfield.
**`reports/`** (9): ceramic-finds · clay-pipe-finds · ceramic-building-material · trench-1-fabrics · trench-1-phases · trench-2-pottery · trench-1-images · trench-2-images · dat-interim.
**`updates/`** (13): 2023-07-13 · 2023-01-13 · 2022-11-28 · chimney-repair · chimney-6-talk · chimneys-oak-beams · oak-beams-installation · oak-beams-delivery · emergency-repairs · archaeological-survey · heritage-video · watertight · before-after.
For the 8 update pages we already captured text (in `docs/island-house-site-capture/pages/`), drop that text in; the rest are titled stubs.
`plans.html` and `research.html` are OUR new branches — build them as titled landing stubs with a one-line purpose and a "coming as research/media lands" badge.

## Hard rules
- **Do not touch git.** Write files uncommitted; the Master/Jarvis desk is the only publisher.
- **Do not invent history or citations.** Stubs carry their captured text only, marked `data-prov="original"`. All verification/reframing happens later, behind the register, past Karen.
- **Consistency over cleverness:** identical structure to `owners.html`. If the nav needs a change, change it once in `site.js`, never per-page.
- When done, report: pages created, any missing captured-text, and hand the list to the publisher.
