# The Township Loop — working build

The first real construction for The Globe, House of Culture. A free, offline-capable,
accessible web trail through Laugharne. English-first, Welsh-ready. No app, no account, no GPS dependency.

**Files are left uncommitted for the single publisher (Dominic).** Nothing here is wired to a live
deploy. Review, then publish.

---

## How to open the PREVIEW (owner review)

The preview shows every beat that is **Ready with all facts verified** — the six beats waiting for
your tick — with a red PREVIEW watermark. It must be served over http (a service worker and ES
modules don't run from a double-clicked `file://` page).

From this folder:

```
cd township-loop/public
python3 -m http.server 8099
```

Then open, on the same machine:

- **Preview (what you review):** http://localhost:8099/index.html?build=preview
- **Public (proves the gate — currently empty):** http://localhost:8099/index.html?build=public

Flip between the two: the public build is deliberately **empty** because no stop is ticked
`Approved for site` yet. The moment you tick a stop, that stop's Ready beats appear in the public build.

QR-seeded entry (works once deployed with path rewrites, and via query fallback locally):
- `/r/township` → start of the trail  (fallback `?r=township`)
- `/s/<stopId>` → jump to one stop      (fallback `?s=<stopId>`)

---

## The review loop (how a beat goes live)

1. Open the preview, read each beat and its **⌄ More** evidence (the verified facts + sources).
2. If a beat is right, tick **Approved for site** on its **Stop** in Airtable
   (base `appnt9vSQKrKyaKiZ`, Stops table).
3. Re-run the build: `node build/snapshot.mjs`.
4. That stop's Ready beats now appear in the **public** build. Deploy `public/`.

The gate is **ANDed and enforced twice**: a beat is public only when it is `Ready` **and** every
linked fact is a Verified tier **and** its Stop is `Approved for site`. Checked at snapshot-build
*and* re-checked in the browser at render.

---

## What's in the box

```
build/
  data-raw.json     Captured canonical export (carries base + table stamps)
  loop-core.mjs     THE GATE + the grounded Q&A. Single source of truth.
  snapshot.mjs      Generator → writes public/snapshot.{public,preview}.json + publishes core
  test.mjs          29 assertions. Run: node build/test.mjs
public/             The deployable client (this is what goes to Vercel)
  index.html app.js styles.css sw.js manifest.webmanifest
  loop-core.mjs                 (published copy, self-contained for offline)
  snapshot.public.json          0 beats  ← correct until you tick stops
  snapshot.preview.json         6 beats  ← your review queue
```

Rebuild + verify anytime:

```
node build/snapshot.mjs && node build/test.mjs
```

---

## Guarantees this build actually enforces

- **Canonical base only.** `loop-core.mjs` pins the base + table IDs and *throws* on any other base.
  A stray or duplicate base is structurally unreadable. (Tested.)
- **Empty by default.** Nothing is approved, so the public trail is empty. No accidental go-live.
- **Solemn stops.** Tone is mandatory and *fails safe*: unset → treated as Solemn. Solemn stops carry
  no "look for" prompt and (by design) no game/collection layer or prompts. The grave is Solemn.
- **Grounded Q&A.** Answers are assembled only from verified facts linked to live beats, always with a
  source. If the record is silent it says so. The Doc 140 do-not-claim set (Beynon→Dylan, "Dylan drank
  at the Globe", medieval cellars, gazebo-writing) is intercepted and corrected, never affirmed.
- **Offline.** The service worker caches the whole route on first load (do it once on the Globe's wifi);
  it then works in airplane mode. Navigation is a manual **Next** button — never GPS.

---

## Scope boundary — the thin hand-off (NOT built here, by design)

Our lines: the trail, the heritage centre, the gallery, take-home story objects. The coffee/download
point and table booking belong to the Globe's operating desks. The interface between them is deliberately
thin — one outbound link, no coupling:

- **Collection / download point** at the counter: the trail exposes an `unlock` method per stop
  (NFC / code at the counter / wifi / on-device geofence). The counter desk owns issuing codes; the trail
  only *reads* one. No food, no till, no booking logic lives in this app.
- **Table booking:** a single outbound link/slot the Globe's booking system fills. The trail never takes
  a booking or a payment.

These are declared as a boundary, not implemented. Food and booking stay with the Globe's desks.
