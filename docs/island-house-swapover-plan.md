# Island House — full swap-over plan (old WordPress → new system)

**Owner:** Island House desk · **Date:** 29 Jul 2026 · **Status:** plan, uncommitted for the publisher
**Goal:** retire the old islandhouse.wales WordPress site into our new standalone repo — real media in, the before/after + restoration story told, the weekly 3D walkthrough wired, then the domain swapped. The new site already exists (44-page skeleton, hardened, on the shared shell); this fills it and takes it live on the real domain.

---

## The one decision that shapes everything: WHERE THE IMAGES LIVE
Do **NOT** commit ~240+ heavy images (plus the Steve restoration photo list — likely hundreds) into the git repo — it bloats the repo and slows every push. Use **Cloudinary** (already in our stack; the register's Media Library table is Cloudinary-based). Images live on Cloudinary; the site references URLs. This keeps git lean, delivers fast, and gives us resizing/optimisation for free. **Recommended.**

## PHASE 1 — GET THE MEDIA IN (the unblock; Dominic + desk)
1. **Export** the full WordPress Media Library **and** the Steve Island House photo list. Land it in a connected folder (e.g. `CEO - Island House/from-wordpress/`).
2. **Upload to Cloudinary** into an `island-house/` folder (sub-folders: `boards/`, `plans/`, `before-after/`, `progress/`, `aerials/`, `reports/`).
3. **Catalogue in the register's Media Library table** — one row per asset: filename, Cloudinary URL, Category, and for the restoration shots a **Before/After pair** + a **Caption/Story** line. This table becomes the single source the site reads.
4. **Map the 240 manifest filenames → Cloudinary URLs** so every `.ph` placeholder on the 44 pages resolves. (The placeholders already carry the exact source filenames — this is a lookup, not guesswork.)

## PHASE 2 — WIRE MEDIA INTO THE SITE (Bob, to the shell)
5. Swap every `.ph` placeholder for its real image across all 44 pages (from the Media table / Cloudinary).
6. Build the **Before/After component** — a slider/reveal that pairs the December-2020 survey shots with the later ones, with the caption/story beneath. Reusable across the Journal and the Before & After page.
7. Build the **drawings viewer** (floor plans / elevations / sections / 3D visualisations) and the **exhibition-board galleries**; embed the **Vimeo videos** (Rob Scourfield; Buildings & Heritage).

## PHASE 3 — TELL THE STORY (EDIT stage; desk + Karen)
8. **The Restoration / Journal page** — the heart of it: chapter by chapter (Condition on purchase → Clearance → Emergency repairs → Chimneys → Oak beams → Scaffolding-free), each chapter a before/after + progress photos + a short narrative. This is "the process is the attraction."
9. **Fold verified facts + provenance dots** into History / Owners / Research to the `owners.html` pattern (ledger-sourced, tiered).
10. **Karen signs off** the heritage reframes (Cromwell → Rowland Laugharne; Roman baths as tradition, etc.) before any of it is public. Dominic ticks publish.

## PHASE 4 — THE WEEKLY 3D WALKTHROUGH
11. Stand up a **Walkthrough** page with the Kuula 360 tour embedded (needs the photo upload → hotspot linking).
12. Set the **weekly cadence**: each week's new 360 shoot → a new tour version → a fresh Journal chapter. The restoration documents itself. (Ties to the existing 360 shoot pipeline + capture log.)

## PHASE 5 — SWAP THE DOMAIN & RETIRE THE OLD SITE
13. When content is approved: add `islandhouse.wales` to the new site (Vercel), set DNS at the registrar, add redirects from old URLs so nothing 404s / SEO carries over. (Note the old site is HTTP-only with an HTTPS quirk — sort HTTPS at swap.)
14. **Archive/redirect the old WordPress site** — keep a backup, point the domain at the new build.

---

## What's needed from Dominic to start (in order)
1. **Export the WordPress media + the Steve photo list** → drop into a connected folder.
2. **Confirm Cloudinary as the image home** (recommended) + make the account reachable to the publisher for upload.
3. Everything else (cataloguing, wiring, story, walkthrough, domain) the desks + Bob + publisher run from there.

## Owners at a glance
- **Dominic:** the export, Cloudinary confirmation, Karen sign-off, publish ticks, domain go-ahead.
- **Desk (this):** catalogue + before/after pairing + story + provenance, Karen liaison.
- **Bob:** wire media, build the before/after + drawings + gallery components, the Journal page.
- **Publisher:** commits/pushes, Cloudinary upload, the domain swap.
- **Karen:** heritage sign-off before public.
