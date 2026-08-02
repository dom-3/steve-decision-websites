# Digital Twin & Spatial Capture — Handover & Current State
*Give this to the new CEO alongside the charter. It's the full record: where we are, everything we have, everything we tried, what failed and why, what worked, and the lessons. So nothing is re-learned the hard way.*

---

## 1. Where we are right now
- **Island House website: LIVE** on our own stack (off WordPress, on Vercel, media on Cloudinary) — `islandhouse.wales`.
- **360 walk-through tour: BUILT and published** — step through the site. Reliable. *(Works.)*
- **Plan-referenced navigator: BUILT and published** — the walk pinned to the architect floor plan, "you are here." Pin placement is currently **manual** (see §3) pending automatic alignment.
- **3D photogrammetry: partial** — proven end-to-end but only ~28% locked; not usable as a model yet.
- **Gaussian splat: attempted, blocked** (see §3).
- **9-lens AI survey system: BUILT.**
- **Architect drawings + verified history archive: available.**

## 2. Assets we already have (with locations)
- **The pipeline:** `CEO - Island House/360-pipeline/` — `pipeline.sh`, `_generators/build_walkthrough.py`, `_generators/build_3d.py`, `opensfm/` config, `SPLAT-SETUP.md`, and `out/walk`, `out/3d`, `out/splat`.
- **Master video (equirectangular):** `~/Desktop/VID_20260731_141926_00_001.mp4` (5760×2880, from Insta360 Studio).
- **Raw 25 GB `.insv`:** on the Insta360 X5 card.
- **Walk-through (live):** `steve-decision-websites/island-house-walk-2026-07-31/` (838 full-res frames; 280 web frames).
- **Plan-navigator (live):** `steve-decision-websites/island-house-map/` (+ `plans/ground.jpg`, `plans/upper.jpg`).
- **Architect drawings (PDF):** `…/site-exact-copy/wp-content/uploads/2022/02/` — `THE-PROPOSALS-FLOOR-PLANS-1/2`, `ELEVATIONS`, `SECTIONS`, `VISUALS-01/02/03`, `DESIGN-DEVELOPMENT`.
- **Partial 3D:** `360-pipeline/out/3d/` — `reconstruction.json`, `viewer/`.
- **Survey system:** the 9-persona weekly survey (skill + decision-site pages).
- **History archive:** the Island House research/exhibition record (archaeology, owners & people 1778–2020, condition/repair, etc.).

## 3. Everything we tried — and what happened (don't repeat these)

**A. OpenSfM photogrammetry (poses + sparse cloud).**
- First run failed two ways: the camera was auto-detected as **perspective**, but 360 frames are **spherical**; and feature detection **crashed** (~1005/1118) under heavy settings.
- Fixes that worked: the `camera_models_overrides.json` key **must match the auto-detected key exactly** (`v2 unknown unknown 5760 2880 perspective 0.0` → set `projection_type: spherical`); lighten the config (`processes: 2`, `feature_process_size: 1024`, `feature_min_frames: 4000`) so it completes.
- Result: completed but **partial — 154 of 559 cameras, ~4,300 points**, one coherent section. Outlier points needed filtering for the viewer.
- **Lesson:** spherical override is mandatory; heavy settings crash on the M4/Docker; light settings finish but thin; the fast/dark walk only locked ~28%.

**B. OpenSplat (owned splat, built from source on the M4).**
- Installed Xcode CLT, `cmake/opencv/colmap`, libtorch 2.5.1, cloned OpenSplat. **cmake configured cleanly** (Metal + Torch + OpenCV all found).
- **`make` failed:** (1) the **`metal` compiler is missing** — it ships only with **full Xcode**, not the Command Line Tools; (2) **libtorch 2.5.1 won't compile against AppleClang 21** (the `is_arithmetic` specialization error — the Mac is on bleeding-edge macOS 26 Tahoe).
- **Lesson:** an owned source-build splat on this OS needs **full Xcode** + a **much newer libtorch**; it's fragile on bleeding-edge macOS.

**C. RadianceKit (native Mac splat app — the pragmatic route).**
- Installed (App Store, £7.99, local Metal, imports 360 natively). Settings: 360 frame budget 250 (its max), sampling density ~1.5 fps, culled ~1,500 blurry frames of ~6,000.
- **Alignment failed twice** — "Structure from Motion Failed," `CoreOC Photogrammetry Session Error 6`.
- **Lesson:** RadianceKit's Simple-Mode aligner is **Apple Object Capture**, built for photographing an *object*, and it **can't align a walk *through* a whole building**. It supports importing an external **COLMAP workspace**, which is the escape hatch if we ever generate poses ourselves.

## 4. What actually WORKED (keep these)
- **360 walk-through:** ffmpeg dual-fisheye stitch (`v360=dfisheye:e`, `ih/iv_fov=194`), the low-res `.lrv` proxy for fast frame pulls, and a Three.js photosphere viewer. Reliable and repeatable.
- **Insta360 Studio export:** 360 Video, equirectangular, 5760×2880 → a clean `master.mp4`.
- **Plan-navigator:** architect plan + 360 + clickable pins (`island-house-map`). Works; pinning is the only manual part.
- **The 9-lens survey system.**

## 5. The core lesson (the one that matters most)
**Capture quality is everything.** The automatic alignment that would auto-place the pins *and* build the model needs **slow, lit, overlapping, sharp** capture. **Dark + fast + blurry = every tool fails at the same step.** So:
- **LiDAR for interiors** — measures geometry with a laser, works in the dark, aligns every time.
- **Drone orbit for the exterior** — bright and textured; the *easy* case for a real 3D/splat.
- **Disciplined 360** for the tour.
- **Degrade gracefully:** a dark or inaccessible area becomes "area unavailable" — it never blocks the whole output.

## 6. Open items / next steps
1. Lock the capture protocol (LiDAR interior + drone exterior + disciplined 360).
2. LiDAR trial next week (iPhone/iPad Pro or a scanner).
3. Drone the exterior → external 3D.
4. With the Software Studio dev team, build the owned pipeline as one command.
5. Once alignment succeeds, **pins auto-place from the poses** — the manual step disappears.
