# The Globe — image manifest (drop-in)

**Status: slots are built and live in the pages. The image files are NOT yet in this folder.**

Lowri's shoot is catalogued in Airtable (*Steve Kirkwood — Build Projects → Media Library*),
but every record holds only a **Cloudinary URL** — no file attachment — and Cloudinary is
still not serving publicly (requests return empty). So the bytes aren't reachable from here.

To finish the job: export the files listed below from Cloudinary (or have Lowri send them),
drop them into this `images/` folder using **exactly these filenames**, and they appear.
No code change, no rebuild. Until then each slot shows an on-brand "awaiting file" panel
rather than a broken image.

---

## Required now — the three drone heroes

| File (drop in as this exact name) | Slot | Page | Ratio |
|---|---|---|---|
| `globe-bakery_display-hero_hero-16x9.jpg` | Main bakery hero | `bakery-preorder.html` | 16:9 |
| `globe-bakery_display-courtyard_web-3x2.jpg` | Provenance banner | `globe.html` (after Story) | 3:2 |
| `globe-bakery_display-overhead_social-4x5.jpg` | Vertical feature | `bakery-preorder.html` | 4:5 |

Source folder in Cloudinary:
`https://res.cloudinary.com/fpuv0xud/image/upload/bakery/drone/`

Lowri's full variant set per shot (master is 5000px / 300dpi — **do not** put the master on the web):

- `globe-bakery_display-hero_` → `master` · `hero-16x9` · `web-3x2` · `social-1x1` · `social-4x5` · `social-9x16`
- `globe-bakery_display-courtyard_` → same six
- `globe-bakery_display-overhead_` → same six

## Also useful — bread product shots (8, Airtable "Product")

`https://res.cloudinary.com/fpuv0xud/image/upload/bakery/products/`

`globe-bakery_sourdough_web-square.jpg` · `globe-bakery_white_web-square.jpg` ·
`globe-bakery_lightcrunch_web-square.jpg` · `globe-bakery_darkcrunch_web-square.jpg` ·
`globe-bakery_8grain_web-square.jpg` · `globe-bakery_crunchyroll_web-square.jpg` ·
`globe-bakery_baguette_web-square.jpg` · `globe-bakery_halfbaguette_web-square.jpg`

These are for the product range grid on the bakery page — not yet slotted, pending files.

---

## Web-sizing rules (before dropping in)

The masters are 50MP. Do not ship them. Resize/compress to:

| Slot | Long edge | Target weight | Format |
|---|---|---|---|
| Hero 16:9 | 2000px | ≤ 300 KB | JPEG q78 (or WebP q75) |
| Banner 3:2 | 1600px | ≤ 220 KB | JPEG q78 |
| Vertical 4:5 | 1200px | ≤ 180 KB | JPEG q78 |

One-liner if ImageMagick is to hand:

```bash
magick input.jpg -resize 2000x -quality 78 -strip globe-bakery_display-hero_hero-16x9.jpg
```

The slots use a plain `<img>` pointing at the `.jpg` name above — deliberately, so a
missing WebP can't break the fallback chain. Drop the `.jpg` and you're done.

---

## Still missing from the library (image gaps)

- **Restaurant/wine-bar photography** — there is none. `globe.html` runs entirely on
  base64 placeholder/AI-ish imagery. The evening interior and the secret garden are the
  two shots the restaurant page most needs, and both are still open on the brand pack's
  own "pending" list.
- **Warm evening interior** — open (brand pack).
- **Secret-garden shoot** — open (brand pack). The hero copy sells "escape to our secret
  garden" with no photograph of it.
- **People/staff shots** — none. The provenance voice ("named suppliers, real people")
  has no faces behind it.
- **Favicon / OG share image source** — no master logo file exists, so `favicon.svg` is
  currently a built mark, and `images/og-globe.jpg` is referenced but absent.

## Flagged for Brush — do not improvise

The brand pack calls for the Globe-first lockup on imagery. The slots apply a **CSS text
lockup** (THE GLOBE / branch, gold rule) over a gradient scrim — typographic only, using
the brand type stack. A **designed logo-on-photo treatment** — locked artwork, positioning
rules, clear-space, a light/dark variant — is Brush's piece and has not been attempted here.
Master logo files are still outstanding on the brand pack's pending list.
