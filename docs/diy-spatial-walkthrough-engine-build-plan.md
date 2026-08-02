# DIY spatial walkthrough engine — build plan ("our own Cupix")

**Owner:** Island House / House of Culture desk · **Date:** 29 Jul 2026 · **Status:** build plan, uncommitted for the publisher
**The want (Dominic):** upload a folder of 360 shots → software auto-aligns them into one correctly-oriented, walkable model of the whole building (the Matterport "dollhouse" feel), refreshed weekly. Internal use, not a product to sell. We have an Insta360, Kuula, coding skill, time.

---

## First, the honest anatomy — Cupix/Matterport is FOUR layers, and you only build two
1. **Lens-stitch** (two fisheyes → one 360 sphere). **Already solved, free — Insta360 Studio.** Do NOT rebuild.
2. **The viewer** — a WebGL page that shows a 360, lets you look around, jumps room-to-room, with a floor-plan you-are-here dot. **BUILD THIS. Days-to-weeks. Open-source.**
3. **Auto-alignment (poses)** — computing WHERE each shot sits and WHICH WAY it faces, automatically. **BUILD THIS. This is the exact thing Kuula didn't do for you.** A real but achievable computer-vision pipeline.
4. **Dense 3D + certified measurement** — the photoreal "dollhouse" mesh and survey-grade measuring. **Matterport's moat. Hardest. Mostly skip; do a Tier-2 experiment only if you want the dollhouse look.**

**Key insight:** your actual pain (shots not facing the right way, not linked across the map) is **Layer 3**, and Layer 3 + Layer 2 give you ~90% of the Matterport experience. The dollhouse mesh (Layer 4) is a separate, much harder thing — nice-to-have, not the point.

## The pipeline (all open-source, self-hostable)
`upload folder of 360 JPGs → [pose engine] → poses.json → [web viewer] → walkable, aligned tour`
1. **Ingest** — the lens-stitched 360 JPGs from Insta360 Studio.
2. **Pose estimation (Layer 3, the alignment):** run **OpenSfM** (Mapillary's open-source Structure-from-Motion — it natively supports the spherical/equirectangular camera model) or **COLMAP** (also has a spherical model). Output: each shot's position + orientation + a sparse point cloud + a rough floor plan.
3. **Serve:** a small **FastAPI** service takes the folder, runs the pose engine, and returns `poses.json` (position, heading per shot) + the panorama URLs.
4. **Viewer (Layer 2):** **Photo Sphere Viewer** (MIT) with its **Map plugin** (floor-plan + you-are-here + clickable markers) and **virtual-tour plugin** (room-to-room). It reads `poses.json`, so every panorama is auto-placed and auto-oriented — no hand-placed hotspots. That is the fix.

## Three tiers of ambition — do Tier 1 first
- **TIER 1 — the auto-aligned linked tour (weeks, very doable).** OpenSfM computes poses → Photo Sphere Viewer auto-places/orients the 360s with a floor-plan dot and room-to-room nav. **Solves the Kuula problem, is genuinely ours, needs no mesh.** This is the target.
- **TIER 2 — the "dollhouse" 3D model (weeks-to-months, GPU).** Reconstruct geometry from the 360s via **3D Gaussian Splatting** (nerfstudio / gsplat ecosystem — now handles 360 input) or photogrammetry (**COLMAP dense → Meshroom/AliceVision** mesh). This is the image you shared. Open-source exists, but see the honest limits below.
- **TIER 3 — certified measurement.** Skip. A heritage walk doesn't need survey-grade mm.

## The honest hard bits (so we don't over-promise)
- **Interior 360 photogrammetry is genuinely hard.** Blank plastered walls, glass, mirrors, tight rooms and low texture are the classic failure cases — feature-matching struggles exactly where old houses are featureless. This is *why* Matterport ships depth-sensor cameras: a pure-360 camera has no depth, so geometry must be inferred. Expect the dollhouse (Tier 2) to be fiddly and quality-variable; the aligned *tour* (Tier 1) is far more robust.
- **Capture discipline matters more than code.** Dense, overlapping shots (~every 1.5–2.5m, line-of-sight between them, consistent height) make or break the alignment. Good capture = good poses. This is the field-pack discipline we already wrote.
- **Compute:** Tier 1 SfM runs on a decent CPU (slow) or GPU (fast); Tier 2 splatting/photogrammetry needs a GPU. Budget a GPU box or a cloud GPU per weekly run.
- **Selling it is the hard part — and you already said so.** Internal weekly use sidesteps the product problems (support, edge cases, certification). Keep it internal; don't slip into building a SaaS.

## Our unique advantage over Matterport (worth designing in from day 1)
Matterport gives you a pretty model with no story. **Ours plugs into the register.** Each pose/room links to the Stops/Beats/Facts — so walking into a room surfaces its *verified, sourced* history and the grounded-guide narration. That fact-grounded layer is the thing no off-the-shelf tool has, and it's the reason to own the stack (the Doc 35 principle).

## Recommended path
1. **Tier-1 prototype on ONE wing/floor** first — 15–25 shots, run OpenSfM, wire Photo Sphere Viewer with the floor-plan map. Prove the auto-alignment end to end before scaling to the whole house.
2. If the aligned tour lands, set the **weekly cadence**: each week's folder → pipeline → new tour version → a Journal chapter.
3. Only then trial **Tier 2 (Gaussian Splatting)** on the same wing to see if the dollhouse is worth the GPU + effort.
4. Keep Insta360 Studio for lens-stitch; keep Kuula around as a fallback/quick-share.

## Stack, in one line
Insta360 Studio (stitch) → **OpenSfM/COLMAP** (poses, the alignment) → **FastAPI** (the "upload folder, get tour" API) → **Photo Sphere Viewer** + Map plugin (the walkable viewer) → optional **Gaussian Splatting** (the dollhouse) → linked to the **register** (the stories). All open-source, all ours.
