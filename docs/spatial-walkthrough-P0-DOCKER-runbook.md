# P0 SPIKE — Docker runbook (run in the sandbox, not Colab)

**Owner:** Island House desk · **Date:** 29 Jul 2026 · **Status:** ready to run
**Why this doc:** we tried the P0 spike on free Colab by compiling OpenSfM from source. It compiled and loaded, but the compiled engine **crashed at runtime (signal -6 / abort)** — a library-version clash with Colab's pre-installed packages. The fix is not to compile by hand on a mismatched box, but to run OpenSfM the way it's designed: **its official Docker image**, which pins compatible library versions so that crash can't happen. Run this on any machine/VM with Docker (a Mac with Docker Desktop, a Linux box, or the build sandbox). CPU is fine — no GPU needed.

## What we already confirmed tonight (don't re-test)
- The engine builds and imports (all 8 C++ modules compile).
- The shots are the correct format: **50 stitched equirectangular JPGs, 7680×3840 (8K)**.
- The spherical camera config is valid and accepted.
So the only open question is the original one: **do the poses come out as one clean, correctly-oriented reconstruction?**

## 0. Get the images onto the machine
The 50 (ideally all 53) stitched 8K JPGs from the 23 Jul shoot — `IMG_20260723_..._188.jpg … _240.jpg`. They currently live in the Google Drive folder `island-house-360` (and originally on the "Untitled" camera USB, `DCIM/Camera01/`). Copy them into `project/images/`. **Stitched JPGs, not raw `.insp`.**

## 1. Build OpenSfM via Docker (the reliable route)
```bash
git clone --recursive https://github.com/mapillary/OpenSfM
cd OpenSfM
docker build -t opensfm -f Dockerfile.ubuntu20 .
```
(If the recursive clone misses submodules: `git submodule update --init --recursive`.)
Building inside the image is what avoids the Colab `-6` crash — the image ships matching OpenCV / Ceres / Eigen / gflags, so no runtime library clash.

## 2. Project layout
```
project/
  images/                        <- the 50–53 JPGs
  camera_models_overrides.json
  config.yaml
```
**`camera_models_overrides.json`** — the make-or-break setting (validated tonight):
```json
{ "all_cameras": { "projection_type": "spherical", "width": 7680, "height": 3840 } }
```
**`config.yaml`** — spike settings (downscale from 8K for speed):
```yaml
processes: 4
feature_process_size: 4096
feature_min_frames: 10000
matcher_type: FLANN
```

## 3. Run it
```bash
docker run --rm -v /ABSOLUTE/PATH/project:/data opensfm bin/opensfm_run_all /data
docker run --rm -v /ABSOLUTE/PATH/project:/data opensfm bin/opensfm export_ply /data
```
This churns for ~10–30 min on CPU. Then `reconstruction.json` and `reconstruction.ply` appear in `project/`.

## 4. Read the result (go/no-go)
Open `project/reconstruction.json` (or eyeball `reconstruction.ply` in an online PLY viewer / MeshLab):
- **GO ✅** — one reconstruction with **~45+ of 53 images**, camera positions trace a sensible walk, cloud reads as room shapes. → auto-align works; scope P1 (viewer + one wing).
- **MARGINAL ⚠️** — splits into 2–3 pieces, or ~30–45 registered. → works, but capture was sparse; denser reshoot fixes it. Worth continuing.
- **NO-GO ❌** — <half registered, or scattered fragments. → interiors too textureless for pure-360 SfM; fall back to Kuula-by-hand or add markers/depth.

## 5. Report back (paste into a Handover row)
Images registered / total · number of reconstruction pieces · the verdict · one screenshot of the point cloud. If GO, we scope P1.

## Notes / gotchas
- Use `Dockerfile.ubuntu20` specifically — it's the known-good build.
- The `projection_type: spherical` override is the one setting that must be right; it is (confirmed).
- One continuous 10:03–10:22 walk = good sequential overlap; rooms with no line-of-sight between shots may not link (expected — part of what P0 tests).
- CPU-only is fine here. Save GPU for Tier-2 splatting later.
