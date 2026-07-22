# The Globe — release pack

**Status: staged. Nothing published.** Everything below is ready to run when you approve.
Built to brand pack v1 (`globe-brand-pack.html` / `globe-brand-tokens.md`).

---

## ⛔ Read this first — one blocker before any domain cutover

This Vercel project (`steve-decision-websites`) currently serves **the internal build
dashboard at `/`**, alongside the public pages. If `globewinebar.co.uk` is pointed at it
as-is, the following all become publicly reachable, and the domain root shows Steve's
dashboard instead of the restaurant homepage:

| Path | What it is |
|---|---|
| `/` (`index.html`) | Steve Kirkwood — internal build dashboard |
| `/globe-operating.html` | CEO operating dashboard — **finances + compliance register** |
| `/commercials.html` | The money framework — rates, retainer |
| `/business.html`, `/worklog.html`, `/meeting-notes.html`, `/roadmap.html` | Internal |
| `/api/worklog`, `/api/decision`, `/api/note`, `/api/business`, `/api/compliance` | Live endpoints |

> **Decision taken 22 Jul: push now, protect after.** The follow-up is to turn on
> Vercel → Project → Settings → **Deployment Protection** as soon as the push is done.
> Until that's on, `globe-operating.html` (finances + compliance register) is reachable
> by anyone with the deployment URL. ⬅ **outstanding**

**Recommended fix — split into two Vercel projects** (cleanest, ~15 min):

1. Make `site-public/` containing only: `globe.html`, `book.html`, `bakery-preorder.html`,
   `globe-winebar.html`, `globe-directions.html`, `images/`, `favicon.svg`,
   `apple-touch-icon.png`, `vercel.json`.
2. New Vercel project from that folder → point `globewinebar.co.uk` at it.
3. Leave the current project on its `*.vercel.app` URL for internal use, and add Vercel
   password protection to it (Project → Settings → Deployment Protection).
4. In the public project, add a rewrite so `/` serves the homepage:

```json
{ "rewrites": [{ "source": "/", "destination": "/globe.html" }] }
```

I have **not** made this change — it alters routing for the dashboard Steve uses daily,
so it's your call. Everything else below assumes it's resolved.

---

## 1. Staging preview

Local (fastest — no deploy, no auth):

```bash
cd ~/Documents/steve-site
python3 -m http.server 8080
# then open http://localhost:8080/globe.html
```

Key pages to look at:

- `http://localhost:8080/globe.html` — restaurant homepage (booking section at `#book`)
- `http://localhost:8080/book.html` — dedicated booking page
- `http://localhost:8080/bakery-preorder.html` — bakery (drone hero slot at top)

Vercel preview deploy (a **preview** URL, not production — safe):

```bash
cd ~/Documents/steve-site
vercel            # no --prod: creates a preview URL only
```

⚠️ The Resos widget calls `globewinebar.resos.com`. It will work from `localhost` and from
a `*.vercel.app` preview, but **if Resos has domain allow-listing enabled on the account**
the widget may refuse to render off the live domain. If it shows only the gold button and
the "slow to load?" line appears, that's what's happening — the direct link still works, and
it will come good on the real domain. I have not touched the Resos account, as instructed.

---

## 2. Deploy commands

```bash
cd ~/Documents/steve-site

vercel                 # preview  — safe, shareable URL
vercel --prod          # PRODUCTION — only after sign-off
```

Roll back if anything looks wrong:

```bash
vercel rollback        # or promote a previous deployment in the Vercel dashboard
```

---

## 3. DNS / domain cutover

Registrar: **IONOS** (access was still an open blocker — get this first).
Target domain: `globewinebar.co.uk`.

### 3a. Main site

In Vercel → Project → Settings → Domains, add both `globewinebar.co.uk` and
`www.globewinebar.co.uk`. Vercel will give you the exact values; they are normally:

| Record | Host | Value | TTL |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | 3600 |
| `CNAME` | `www` | `cname.vercel-dns.com` | 3600 |

Set one as primary and let the other redirect (recommend `www` → apex, or the reverse —
just be consistent, and make the canonical tags match; they currently say
`https://www.globewinebar.co.uk`).

### 3b. Resos booking subdomain

Booking currently lives on Resos' own domain: `https://globewinebar.resos.com/booking`.
That keeps working and needs no DNS. Only do this if you want `book.globewinebar.co.uk`:

1. **Ask Resos support to provision the custom domain** on the account and confirm the
   target hostname they want you to point at. Do not attempt it from the dashboard alone —
   and per your instruction I have not touched the Resos account.
2. Once they confirm, add:

| Record | Host | Value | TTL |
|---|---|---|---|
| `CNAME` | `book` | *(hostname Resos gives you — typically `globewinebar.resos.com`)* | 3600 |

3. Wait for Resos to issue the TLS cert for `book.globewinebar.co.uk`.
4. Only then, swap the fallback links. They're in exactly two files:
   `globe.html` and `book.html` — search for `globewinebar.resos.com/booking`.
   **Do not swap before the cert is live**, or every fallback link breaks.

### 3c. After cutover

- Update the Google Business Profile booking link.
- Update the Instagram bio link (`@globebarlaugharne`).
- Re-check `og:image` renders: paste the URL into
  [opengraph.xyz](https://www.opengraph.xyz) or Facebook's sharing debugger.

---

## 4. Phone smoke test

Do this on a real phone, on 4G/5G **with wifi off** — that's how customers arrive.

**Booking — the money path**
- [ ] `globe.html` — "Book a table" is visible without scrolling
- [ ] Sticky bottom bar shows **Book a table | Call** and doesn't cover content at the page foot
- [ ] Tap Book a table → jumps to the booking section, widget loads
- [ ] Complete a real test booking end-to-end → confirmation email arrives
- [ ] **Cancel the test booking in Resos afterwards**
- [ ] Turn on airplane mode briefly / use a blocker: widget fails → gold button still links to `globewinebar.resos.com/booking`
- [ ] `book.html` loads directly and books
- [ ] Tap the phone number → dialler opens with `01994 427546`

**Family switcher**
- [ ] Restaurant page: "Bakery" in the top strip → bakery page
- [ ] Bakery page: "Restaurant" in the top strip → restaurant homepage
- [ ] Current site shows as the filled/active pill on each
- [ ] Strip doesn't wrap awkwardly or cause sideways scroll on a phone

**Menu overlay**
- [ ] Tap "Menu" in the nav → overlay opens as a full-screen sheet, scrolls smoothly
- [ ] Dish text is selectable/zoomable (it's real text, not an image)
- [ ] X, Esc and tapping the backdrop all close it; page returns to where you were
- [ ] "Book a table" inside the menu escapes the overlay and reaches Resos
- [ ] "Download the menu (PDF)" opens `globe-menu-print.pdf`
- [ ] Open `globe.html#menu` directly → overlay auto-opens (this is the QR-code path)
- [ ] Android back button closes the overlay rather than leaving the site
- [ ] `globe-menu.html` opens on its own as a normal page (Google / socials / QR)

**Layout**
- [ ] No horizontal scroll on any page (portrait and landscape)
- [ ] Booking panel doesn't overflow its box; widget iframe fits the screen
- [ ] Text readable without pinch-zoom
- [ ] Tap targets not cramped — buttons ≥44px

**Content**
- [ ] Opening hours correct: Mon 12–5 · Tue–Sat 12–late · Sun 12–5 · happy hour 3–5 daily
- [ ] Address correct: Duncan Street, Laugharne, SA33 4SA
- [ ] Directions button opens Maps at the right pin
- [ ] Favicon shows on the tab / when saved to home screen
- [ ] Share the URL in WhatsApp → title, description and image preview all appear

**Speed**
- [ ] Homepage feels instant on 4G (HTML is now 23KB)
- [ ] Images fade in without the layout jumping

**Should NOT be there**
- [ ] No "✍ Note" button anywhere on customer pages
- [ ] No internal dashboard reachable from the public domain (see blocker above)

---

## 5. What changed in this pass

**Resos booking**
- New `book.html` — dedicated booking page, restaurant palette, widget embedded.
- New `#book` section on `globe.html` with the widget.
- Nav + hero + visit CTAs on `globe.html` now point at `#book`; nav button relabelled
  "Book a table".
- Sticky mobile Book/Call bar on `globe.html` and `book.html`.
- `globe-winebar.html` had **three dead Book buttons** (`href="#"` / `#visit`) — now wired
  to `book.html`.
- Loader is defensive: async, `try`/`catch`, `onerror` + 6s timeout. The widget markup is an
  anchor, so any failure degrades to the direct Resos link rather than a dead panel.
- `https://globewinebar.resos.com/booking` retained everywhere as the fallback and for
  socials/Google.

**Menu overlay**
- `globe-menu.html` is unchanged as the single source of the dish list — the overlay
  loads *that page* in a lazy `<iframe>` (src set on first open only). No second copy.
- New shared `globe-menu-modal.js` — one file, used by every page.
- Triggers are real links (`<a href="globe-menu.html" data-menu-modal>`): nav, hero,
  the previously-empty menu-band CTA, the footer, and the `book.html` nav. Without JS
  they simply navigate to the menu page.
- The on-page teaser section's id changed `#menu` → `#menuband`, freeing `#menu` as the
  deep link that auto-opens the overlay (QR codes, Nia's posts).
- Print PDF renamed `The Globe — Menu (print A4).pdf` → **`globe-menu-print.pdf`**
  (no spaces or em dashes in the URL), linked discreetly in the overlay footer.
- Hidden **Seasonal Specials** block added to the top of `globe-menu.html` for Emyr —
  styled to match, `hidden` by default, with a fill-in template. No dishes invented.

**Family switcher (cross-site integration)**
- New shared `globe-family.js` — **one `SITES` array is the only place a business
  is defined.** To switch the next one on: set `live: true` and add an `href`. Two lines,
  and it appears in the strip on every page that includes the file.
- The `Restaurant | Bakery` toggle on `globe.html` existed but **the Bakery slot was
  empty** — the restaurant site linked to the bakery **zero times**. Now wired both ways.
- Matching strip added to the bakery nav in its own green, so the two sites cross-link.
- Butchery, Deli & Coffee and House of Culture are pre-written in the array, `live:false`,
  so they don't render until they're real.
- Each page carries the real links as static HTML; the script re-renders and marks the
  current site active. Without JS the links still work and stay crawlable.

**Photography** — slots built, files still missing (see `images/MANIFEST.md`).

**QA**
- Internal "✍ Note" widget removed from `globe.html` and `bakery-preorder.html`.
- Added to all customer pages: description, canonical, OG/Twitter cards, favicon,
  apple-touch-icon, theme-color.
- Phone numbers are now `tel:+441994427546` links across all four customer pages.
- Generated `favicon.svg`, `apple-touch-icon.png`, `images/og-globe.jpg` — **interim marks**,
  since no master logo exists yet (Brush).
- `vercel.json` added: 1-year immutable caching on `/images/*`, plus `nosniff`,
  `Referrer-Policy`, `X-Frame-Options`. No routing changes.

**Speed** — the big one:

| Page | Before | After |
|---|---|---|
| `globe.html` | 3,518 KB | **23 KB** (−99.3%) |
| `bakery-preorder.html` | 1,483 KB | **39 KB** (−97.3%) |

28 base64 images were inlined into the HTML (99.3% of `globe.html` was image data, which
also blocks first paint and can't be cached). All extracted to `images/site/` and
`images/bakery/`, resized to display size and recompressed (JPEG q80 progressive).
Total image payload 2.4 MB → now external, cacheable and loaded after first paint.
