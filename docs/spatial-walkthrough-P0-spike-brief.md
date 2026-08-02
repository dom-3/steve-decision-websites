# P0 SPIKE — go/no-go: can OpenSfM auto-align our real 360 shots?

**Owner:** Island House desk · **Date:** 29 Jul 2026 · **Status:** spike brief, run this before any build
**Question this answers (the only one):** run OpenSfM on the **existing 53-shot 23-July folder** and see whether it registers them into ONE clean, correctly-oriented reconstruction. If yes → the DIY auto-align engine is viable, scope P1. If no → interiors are too textureless for pure-360 SfM; fall back to Kuula-by-hand. Near-zero cost, real data, no new capture.

## 0. Inputs — the data
The 53 already-lens-stitched equirectangular 8K JPGs from the 23 Jul shoot: `IMG_20260723_100347_00_188.jpg` … `_240.jpg` (on the "Untitled" camera drive `DCIM/Camera01/`, or copy them from wherever they now live). Put them in `project/images/`. **They must be the stitched JPGs, not the raw `.insp`.**

## 1. Environment (CPU is fine — no GPU needed for this)
OpenSfM uses CPU SIFT; a decent laptop/VM will do (slower, but fine for 53 images). Use Docker for a clean, reproducible run:
```
git clone --recursive https://github.com/mapillary/OpenSfM
cd OpenSfM
docker build -t opensfm .
```
(If the recursive clone misses submodules: `git submodule update --init --recursive`.)

## 2. Dataset layout
```
project/
  images/            <- the 53 JPGs
  camera_models_overrides.json
  config.yaml
```
**`camera_models_overrides.json`** — THE critical setting. Tell OpenSfM these are 360s, or it treats them as normal photos and fails:
```json
{
  "all_cameras": {
    "projection_type": "spherical",
    "width": 7680,
    "height": 3840
  }
}
```
(If your OpenSfM build rejects "spherical", use "equirectangular" — older versions differ.)

**`config.yaml`** — sensible spike settings (downscale from 8K for speed; exhaustive matching is fine at 53 images):
```yaml
processes: 8
feature_process_size: 4096
feature_min_frames: 10000
matcher_type: FLANN
matching_gps_neighbors: 0
align_method: orientation_prior
align_orientation_prior: horizontal
```

## 3. Run it
Mount the project into the container and run the whole pipeline:
```
docker run --rm -v /ABSOLUTE/PATH/project:/data opensfm bin/opensfm_run_all /data
```
(Equivalent step-by-step if you want to watch each stage: `extract_metadata → detect_features → match_features → create_tracks → reconstruct`.)
Then generate the report + a viewable point cloud:
```
docker run --rm -v /ABSOLUTE/PATH/project:/data opensfm bin/opensfm compute_statistics /data
docker run --rm -v /ABSOLUTE/PATH/project:/data opensfm bin/opensfm export_ply /data
```

## 4. What to look at (outputs)
- `project/reconstruction.json` — the camera poses (position + rotation per image) + sparse points.
- `project/stats/report.pdf` (or `stats/stats.json`) — the headline metrics.
- `project/reconstruction.ply` — open in MeshLab / CloudCompare / online PLY viewer to eyeball the shape.

## 5. Success criteria — the go/no-go
- **GO ✅** — one reconstruction containing **~45+ of 53 images**, the camera positions trace a sensible **walk through the building**, the point cloud reads as room shapes, mean reprojection error low. → the auto-align works; scope P1 (viewer + one-wing).
- **MARGINAL ⚠️** — images split into **2–3 components** or ~30–45 registered. → the idea works but capture was too sparse/low-overlap; fixable with a denser reshoot. Worth continuing.
- **NO-GO ❌** — **<half** registered, or scattered into many tiny fragments, or nonsense positions. → interiors too textureless (blank plaster/glass) for pure-360 SfM. Fall back to Kuula-by-hand or add depth/markers. Learned for free.

## 6. Report back (paste into a Handover row)
- Images registered / 53 · number of reconstruction components · mean reprojection error · run time.
- One screenshot of the point cloud / camera path.
- The go/no-go call, and if MARGINAL/NO-GO, the likely cause (sparse capture vs textureless interiors).

## 7. Gotchas
- **The `projection_type` override is make-or-break** — get that right first.
- These are one continuous 10:03–10:22 walk, so there's sequential overlap (good) — but rooms with no line-of-sight between shots may not link (expected; it's part of what P0 tests).
- If it's slow, lower `feature_process_size` to 3000; if under-registering, raise `feature_min_frames` and confirm overlap.
- CPU-only is fine here; save GPU for Tier-2 splatting later.
