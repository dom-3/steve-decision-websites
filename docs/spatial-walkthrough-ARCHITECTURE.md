# Spatial Walkthrough Engine — Architecture & Project Plan ("our own Cupix")

**Owner:** Island House / House of Culture desk · **Date:** 29 Jul 2026 · **Status:** architecture doc, uncommitted for the publisher
**Companion to:** `diy-spatial-walkthrough-engine-build-plan.md` (the overview). This is the deep plan — the thing we align to before writing code.

---

## 1. Vision & scope
Build an in-house engine that takes a folder of 360 photos and produces one **auto-aligned, correctly-oriented, walkable tour** of a building, tied to a floor plan and to our verified research — refreshed **weekly**. Internal tool, not a product.

**In scope (MVP = Tier 1):** ingest → auto-align (poses) → walkable web tour with floor-plan → linked to the register's stories → repeatable weekly.
**Later (Tier 2):** the photoreal "dollhouse" 3D model.
**Out of scope:** certified/survey-grade measurement (Matterport's moat); a sellable SaaS; rebuilding lens-stitch (Insta360 Studio already does it, free).

## 2. Requirements
**Functional**
- F1 Ingest a folder of equirectangular 360 JPGs (already lens-stitched by Insta360 Studio).
- F2 Auto-compute each shot's position + orientation (no hand-placed hotspots).
- F3 Produce a 2D floor-plan / top-down map from the reconstruction.
- F4 Render a web walkthrough: look around, move room-to-room, you-are-here dot, correctly oriented.
- F5 Attach each scene to the register (Stops/Beats/Facts) so rooms carry verified stories + grounded-guide narration; respect the publish gate (verified + approved only).
- F6 Re-run weekly from a new folder → a new versioned tour → a Journal chapter.
- F7 (Tier 2) Optional 3D model / dollhouse view.
**Non-functional**
- Open-source, self-hosted, ours (Doc 35 principle). Reproducible (Docker). Bilingual EN/CY. Accessible (works as a simple guided mode too). Cost-controlled (GPU only when running). Private until Karen/publish-gated.

## 3. Architecture — components & data flow
```
[Insta360 X5] --stitch--> [Insta360 Studio]  (Layer 1: lens-stitch, FREE, keep)
        |
        v  folder of equirectangular 360 JPGs
[Ingest + Storage]  (Cloudinary for panos; object store for job artifacts)
        |
        v
[POSE ENGINE — SfM]  OpenSfM / COLMAP / GLOMAP   (Layer 3: auto-align)
        |  outputs: camera poses (x,y,z + heading) + sparse point cloud
        v
[tour.json builder]  (FastAPI service: folder in -> tour.json out)
        |            + floor-plan (top-down projection of the cloud)
        |            + register join (Stops/Beats/Facts by room)
        v
[WEB VIEWER]  Photo Sphere Viewer + Map plugin  (Layer 2: the walk)  <-- reads tour.json
        |
        +--(optional Tier 2)--> [3D Gaussian Splatting / photogrammetry] --> [splat/mesh viewer]
```

## 4. The open-source stack (specifics, licences, why, gotchas)
- **Lens-stitch:** Insta360 Studio (free, proprietary but free with camera). *Keep — don't rebuild.*
- **Pose engine / SfM (the core build):**
  - **OpenSfM** (BSD, Python, Mapillary) — **primary.** Native spherical/equirectangular camera model; designed for street-level 360. Best fit.
  - **COLMAP** (BSD) — mature alternative; has panoramic/refractive support; huge community.
  - **GLOMAP** (2024, on top of COLMAP) — newer global SfM, much faster on big sets; worth benchmarking.
  - *Gotcha:* feature-matching distorts near the poles of an equirect image; OpenSfM handles it, but capture overlap is what saves you.
- **Viewer (the walk):**
  - **Photo Sphere Viewer** (MIT) + **Map plugin** (floor-plan + you-are-here) + **Virtual Tour plugin** (room-to-room transitions) — **primary.** Reads our poses directly.
  - **Marzipano** / **Pannellum** — lighter fallbacks.
  - **Three.js** — go here instead if/when we want the Tier-2 splat in the same viewer.
- **API / orchestration:** **FastAPI** (Python) "upload folder → job → tour.json"; a job queue (RQ/Celery) for the long SfM runs; **Docker** for a reproducible pipeline.
- **Tier 2 (dollhouse), optional:** **3D Gaussian Splatting** via **Nerfstudio** / **gsplat** / **Brush**; or photogrammetry **COLMAP dense → OpenMVS / Meshroom (AliceVision)** for a mesh; web splat viewer (e.g. GaussianSplats3D / Three.js).
- **Register integration:** Airtable API → attach Stops/Beats/Facts to scenes; publish gate applies.
- **Hosting:** the viewer is static (Vercel/Cloudinary); the pipeline runs on a GPU (local RTX or a cloud GPU spun up per weekly run).

## 5. Interfaces / data model
- **`tour.json`** (the contract between pipeline and viewer): `{ building, version, date, floorplan_url, scenes:[ { id, panorama_url, position:[x,y,z], heading, neighbours:[ids], room_code, stop_id } ] }`.
- **Register join:** `room_code`/`stop_id` → Stops → Beats (Ready + Approved only) → Script EN/CY + Facts. The viewer requests the room's beats at runtime (like the app), so the walk carries the verified story.
- **Weekly versioning:** each run writes `tour-YYYY-MM-DD.json`; the site pins "latest" and keeps history for the Journal.

## 6. Skill set needed (and where AI-assist covers it)
- **Computer vision / Python (SfM):** run/tune OpenSfM/COLMAP, read poses, debug alignment. *The deepest skill — but you RUN these engines, you don't write SfM from scratch.*
- **Front-end WebGL/JS:** Photo Sphere Viewer / Three.js, the map + tour UX, bilingual/accessible modes.
- **Backend / DevOps:** FastAPI, Docker, a GPU box or cloud GPU, job orchestration, storage.
- **Data integration:** Airtable API + our register schema (already documented).
- **Capture / photography discipline:** the shoot SOP (spacing, height, overlap) — the biggest lever on quality.
- **(Tier 2 only)** 3DGS/NeRF familiarity.
*Realistically: one strong full-stack dev + AI assistance covers Tiers 1; the CV part is "operate mature tools," not "invent."*

## 7. Phases & milestones
- **P0 — SPIKE (days, ~free):** run OpenSfM on the **existing 53-shot 23-July folder we already have**. Do the poses come out clean? This validates the whole idea on real Island House data with zero new capture. Cheapest possible go/no-go.
- **P1 — one-wing prototype (weeks):** full pipeline + Photo Sphere Viewer + floor-plan, auto-aligned, on one wing.
- **P2 — whole building:** scale the capture + run.
- **P3 — register-linked stories:** rooms surface verified beats + grounded-guide narration; publish gate applied.
- **P4 — weekly automation:** Dockerised one-command run; versioned tours feeding the Journal.
- **P5 — (optional) Tier-2 dollhouse:** trial Gaussian Splatting on one wing; keep only if quality earns it.

## 8. Focus points (critical success factors)
1. **Capture discipline > code.** Dense, overlapping shots (~every 1.5–2.5m, line-of-sight, consistent ~1.5m height). This determines alignment quality more than anything.
2. **Nail the equirectangular SfM config** (the panoramic camera model) early — it's the make-or-break technical detail.
3. **Ship Tier 1; quarantine Tier 2.** The aligned tour is the win; don't let the dollhouse block it.
4. **The register link is the differentiator** — design `stop_id` into `tour.json` from day one.
5. **Reproducibility** (Docker) so the weekly run is one command, not a ritual.
6. **Stay internal** — the moment it feels like a product, stop; that's a different, much bigger commitment (you said it: selling is the hard part).

## 9. Risks & mitigations
- **Interior 360 photogrammetry is hard** (blank walls, glass, tight rooms) → Tier 1 (tour) is robust; treat Tier 2 (mesh) as experimental; improve with capture density, and don't promise the dollhouse until P5 proves it.
- **Compute cost** → cloud GPU per weekly run; viewer is static/cheap.
- **Scope creep to SaaS** → hard boundary: internal only.
- **Maintenance** → Docker + a short runbook so any desk can run it.
- **Capture inconsistency week to week** → a fixed shoot SOP + the capture log we already have.

## 10. Decisions needed from Dominic
1. **Infra:** a local GPU machine, or spin up a cloud GPU per run?
2. **Who builds it:** the other build system + AI, or bring in a CV-savvy dev for the SfM spike?
3. **Tier-2 ambition:** commit to the dollhouse now, or Tier-1-only until it proves out?
4. **Green light P0** — run OpenSfM on the existing 53-shot folder as the go/no-go? (Cheapest, fastest proof.)
