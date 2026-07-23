# Island House (islandhouse.wales) — Site Capture Index

Captured from **http://islandhouse.wales** (HTTP only; HTTPS errors). WordPress + Enfold theme.

## Folder contents
- `media-manifest.csv` — full-resolution asset URL manifest (id, title, mime_type, full_source_url)
- `media-summary.md` — media counts by type and date range
- `pages/` — captured page/post content as HTML (content.rendered, with <h1> title)
- `capture-index.md` — this file

## Pages & posts captured (9 HTML files in pages/)

Published Page (1) + Posts (8):
- `pages/812-2.html` — [post] DAT Interim Reports — http://islandhouse.wales/812-2/
- `pages/826-2.html` — [post] Chimney Repair (Chimney 6) - Talk By James Vincent — http://islandhouse.wales/826-2/
- `pages/buildings-heritage-consultant-video.html` — [post] Buildings & Heritage Consultant Video — http://islandhouse.wales/buildings-heritage-consultant-video/
- `pages/chimney-repair-progression.html` — [post] Chimney Repair Progression — http://islandhouse.wales/chimney-repair-progression/
- `pages/home.html` — [page] Home — http://islandhouse.wales/home/
- `pages/island-house-13th-january-2023.html` — [post] Island House 13th January 2023 — http://islandhouse.wales/island-house-13th-january-2023/
- `pages/island-house-28th-november-2022.html` — [post] Island House 28th November 2022 — http://islandhouse.wales/island-house-28th-november-2022/
- `pages/island-house-scaffolding-free.html` — [post] Island House 13 July 2023 — http://islandhouse.wales/island-house-scaffolding-free/
- `pages/the-owners-and-people-of-island-house-1778-2020.html` — [post] The Owners And People Of Island House | 1778-2020 — http://islandhouse.wales/the-owners-and-people-of-island-house-1778-2020/

## ppt_viewer document-viewer items (23) — NOT individually saved
These custom-post-type entries embed a corresponding PDF (all PDFs are in media-manifest.csv). Listed here for completeness:
- The Civil War — http://islandhouse.wales/ppt_viewer/the-civil-war/
- History Of Island House 2 — http://islandhouse.wales/ppt_viewer/history-of-island-house-2/
- History Of Island House 1 — http://islandhouse.wales/ppt_viewer/team-members-2/
- Team Members — http://islandhouse.wales/ppt_viewer/team-members/
- The Owners Of Island House 1902 - 1778 — http://islandhouse.wales/ppt_viewer/the-owners-of-island-house-1902-1778/
- The Owners Of Island House 1902 - 2020 — http://islandhouse.wales/ppt_viewer/people-and-history-page-1/
- Archaeology — http://islandhouse.wales/ppt_viewer/archaeology/
- Trench 1 Phase 1-8 | 26 Jan 2021 — http://islandhouse.wales/ppt_viewer/trench-1-phase-1-8-26-jan-2021/
- Trench 1 Phase 8 — http://islandhouse.wales/ppt_viewer/trench-1-phase-8/
- Trench 1 Phase 7 - Clay Floor — http://islandhouse.wales/ppt_viewer/trench-1-phase-7-clay-floor/
- Trench 1 Phase 6 — http://islandhouse.wales/ppt_viewer/trench-1-phase-6/
- Trench 1 Phase 5 — http://islandhouse.wales/ppt_viewer/trench-1-phase-5/
- Trench 1 Phase 4 - Stony Interior — http://islandhouse.wales/ppt_viewer/trench-1-phase-4-stony-interior/
- Trench 1 Phase 3 - Stepping Stones — http://islandhouse.wales/ppt_viewer/trench-1-phase-3-stepping-stones/
- Trench 1 Phase 2 — http://islandhouse.wales/ppt_viewer/trench-1-phase-2/
- Trench 1 Phase 1 — http://islandhouse.wales/ppt_viewer/trench-1-phase-1/
- References For Island House Pottery Report — http://islandhouse.wales/ppt_viewer/references-for-island-house-pottery-report/
- Trenches 1 & 2: Pottery Sherds And Weight — http://islandhouse.wales/ppt_viewer/trenches-1-2-total-number-of-pottery-sherds-and-weight/
- Trench 2: Pottery Sherds And Weight — http://islandhouse.wales/ppt_viewer/island-house-laugharne-trench-2-total-number-of-pottery-sherds-and-weight/
- Trench 1: Pottery Sherds And Weight — http://islandhouse.wales/ppt_viewer/island-house-laugharne-trench-1-total-number-of-pottery-sherds-and-weight/
- Clay Pipe Report — http://islandhouse.wales/ppt_viewer/the-ceramic-finds-the-2020-excavations-at-island-house-laugharne/
- Ceramic Building Material Report — http://islandhouse.wales/ppt_viewer/island-house-ceramic-building-material-report/
- Ceramic Building Material Finds - The 2020 Excavations — http://islandhouse.wales/ppt_viewer/603/

## Media totals
- Total media captured: **240** (WordPress reports ~273 attachments)
  - image/jpeg: 159
  - application/pdf: 44
  - image/png: 29
  - application/vnd.openxmlformats-officedocument.wordprocessingml.document: 6
  - image/heic: 1
  - application/msword: 1

## Known gaps / failures
- Media: ~240 of ~273 attachments captured (~88%). The site's REST API strips `_fields`, forces full objects, and the fetch tool truncates responses at ~80KB, so full coverage required many overlapping paginated requests; a handful of mid-library attachments (mostly 2020-2021 images) were not recovered before the server began rate-limiting (returning empty pages). IDs are sparse because they are shared across all post types, so ID gaps do not all indicate missing media.
- Custom post type `portfolio` exists but is EMPTY (0 items).
- `ppt_viewer` items (23) were enumerated (slug/title/link above) but their individual rendered content was not saved — each is a viewer for a PDF already listed in the media manifest.
- No video files in the media library; two posts embed Vimeo videos (IDs 506214624 and 502197315).
- NOTE: `pages/home.html` content.rendered was ~81KB and hit the ~80KB fetch cap, so the very end of the Home page HTML is truncated (the bulk of the content is present).
