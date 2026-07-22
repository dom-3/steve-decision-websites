# The Globe — Site Consolidation Report
_21 Jul 2026 · single source of truth = `~/Documents/steve-site`_

## The core bug (fixed)
`globe.html` meant two different pages depending on the folder:
- **Documents** `globe.html` → *The Globe — Homepage Directions* (customer page)
- **Downloads** `globe.html` → *The Globe — Operating Dashboard* (CEO dashboard)

Because both folders were linked to the **same** Vercel project
(`prj_ICZM6C1cPT2CIhgzQxgoSVHoEdKF` / steve-decision-websites), whichever was
pushed last overwrote the other — so pages appeared and disappeared.

## What I renamed
| From | To | Why |
|------|----|-----|
| `Downloads/globe.html` (Operating Dashboard) | `Documents/globe-operating.html` | Removes the collision; customer homepage keeps `globe.html` |

## What I brought into Documents (no overwrites of richer content)
- `globe-operating.html` — the Operating Dashboard (from Downloads)
- `api/` — the backend Documents was missing (`decision.js`, `worklog.js`, `note.js`, `business.js`); the portal + pages call `/api/*`
- 22 supporting pages the Documents portal linked to but only existed in the Downloads snapshot: bakery-architecture, bakery-concepts, bakery-plan, bakery-prototype, bakery, business, commercials, direction, globe-plan, island-house-architecture, island-house-field, island-house-plan, island-house-story, island-house, meeting-notes, photo-drop, roadmap, sancler-architecture, sancler-plan, sancler, timelines, worklog

Documents’ richer/newer files were **kept as-is** (index.html portal, globe.html,
globe-directions.html, globe-winebar.html, the-globe-bar.html, bakery-preorder.html,
globe-customers.html, island-house-history.html).

## What I relinked
- Portal `index.html` "🌙 Operating dashboard" button: `globe.html` → **`globe-operating.html`**
- Portal `index.html` "Latest" pulse (CEO Operating Dashboard "Open →"): `globe.html` → **`globe-operating.html`**
- Portal Globe card: added **🏠 Customer homepage** (`globe.html`) and **👥 Customer profiles** (`globe-customers.html`) so neither is orphaned
- `globe-customers.html` back-link "← Back to the operating dashboard": `globe.html` → **`globe-operating.html`**
- `globe-operating.html` §4 (Reputation & reach — marketing): added **👥 See the four customer profiles →** (`globe-customers.html`)

## Retired the Downloads deploy source
- Renamed `Downloads/steve-site/.vercel` → `.vercel-STALE-DO-NOT-DEPLOY` (unlinks it — `vercel --prod` there can no longer publish to the project)
- Added `Downloads/steve-site/DO-NOT-DEPLOY-STALE.txt`
- Documents `.vercel` link left intact and pointing at steve-decision-websites

## Verification (link check across Documents)
- **31 HTML pages · 0 broken links · 0 orphan pages** ✅
- **Folded "The Globe" card** present in `index.html` — all its links resolve
- **No filename collision** — `globe.html` (customer) and `globe-operating.html` (dashboard) are now distinct files

### Dead buttons removed (no content yet)
Three targets existed in neither folder; per your steer I removed the buttons rather than leave them broken. 10 anchors stripped:
| Removed target | Was in | Buttons removed |
|---|---|---|
| `globe-winebar-menu.html` | globe.html, globe-directions.html | "View the menu", "Cocktails & wine" |
| `bakery-v3-globe-locked.html` | globe.html, globe-directions.html | "Bakery" (nav) |
| `globe-bakery.html` | globe-winebar.html | "Bakery", "Visit the bakery →" |

When the menu / bakery pages exist, re-add these links.

- Minor: `globe.html` and `globe-directions.html` share the same `<title>` (both "Homepage Directions"). Different files, not a collision — cosmetic only.

## To publish
```
cd ~/Documents/steve-site && vercel --prod
```
