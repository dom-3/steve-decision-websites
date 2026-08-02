# Island House Walk-through — Free Movement Upgrade
**Spec + build process for the Digital Twin CEO · hand this to the persona chat**
Builds directly on the existing page `island-house-walkthrough/index.html` (Three.js photosphere + arrow-key stepping + on-screen design plan). Reports to Jarvis (publisher). No LiDAR, no 3D reconstruction required for this update.

---

## 1. The vision (Dominic's, in his words)
A **character that moves freely** through the building inside the 360 imagery — not just hopping between fixed points, but walking around like a game.

## 2. The honest physics — why this is a ladder, not a switch
A 360 photo is captured from **one point in space**. You can look in any direction from that point, but the image holds **no information** about what the scene looks like from a *different* position. So true "walk anywhere" cannot come from stills alone. Free movement comes in levels, each adding a bit more freedom:

| Level | What the character can do | New data needed | Status |
|---|---|---|---|
| **L1** | Step/teleport between capture points | none | **DONE** (current page) |
| **L2** | Smooth blended motion forward/back along the walked path | none | next update |
| **L3** | Continuous glide along the path at any speed, with momentum; look decoupled | none | next update |
| **L4** | **Step around each point with real parallax** (near vs far shift) — genuine local free movement | AI depth per frame | **the "free movement" win** |
| **L5** | Walk anywhere, off the path entirely | 3D geometry (splat/mesh) | later choice — proven per-room by the salvage islands |

**Recommended for this update: L2 + L3 now, pilot L4 on one bright segment. Not L5/LiDAR this round.**

## 3. Build process — L2/L3 (continuous path movement)
Edits to `island-house-walkthrough/index.html`:
1. Make position a **float along the path** (`t` from 0–279), not an integer index. Forward = increase `t`.
2. **Momentum controls:** holding ↑ accelerates to a walking speed, releasing decelerates (ease-out). Speed capped so it reads as a walk, not a fast-forward.
3. **Blend between the two nearest spheres** as `t` moves — cross-fade / dolly so the transition is continuous, never a hard cut. Preload a window of ±4 frames.
4. Keep **look (drag / ← →) fully decoupled** from movement, so the character can look one way while walking another.
5. Plan marker follows `t` continuously (already interpolates between route points).

**Acceptance:** forward motion feels continuous, not teleporting; speed varies with how long ↑ is held; looking around doesn't interrupt walking.

## 4. Build process — L4 (local free movement with real parallax)
This is the level that delivers "move freely." It uses **monocular 360 depth estimation** — an AI model infers depth from each equirectangular frame. No laser, no multi-view reconstruction.
1. **Depth pass:** run a 360-aware monocular depth model (open-source, e.g. Depth-Anything / MiDaS-family with equirectangular handling) over each walk frame → one **equirectangular depth map per viewpoint**. Runs offline once per capture, cached. Add as a `depth` verb in `pipeline.sh`.
2. **Displaced sphere per viewpoint:** instead of a plain sphere, displace the sphere mesh vertices by the depth map → a rough 3D **shell of the room from that point**.
3. **Allow small camera translation** (a limited radius, ~0.5–1 m) around the capture point. Because the shell has depth, near objects move more than far ones → **genuine parallax = the feeling of moving freely** in the space.
4. **Blend the two nearest viewpoints' shells** when the character is between them (view-dependent blend) so movement stays continuous as they roam.
5. **Constrain + degrade gracefully:** movement radius limited to where depth is reliable; fade / soft-wall at the edge rather than tearing. Dark/unreliable frames stay L1/L2 (step only) — never block the experience.

**Acceptance (pilot on seg_02, the bright 100%-locked stretch):** the character can step ~0.5–1 m in any direction from a point and see real parallax; the view blends smoothly between at least two neighbouring points.

## 5. How it fits what exists
- **L2/L3** = edits to `island-house-walkthrough/index.html` only.
- **L4** = a new `depth` stage in `pipeline.sh` (produces cached depth maps) + a mesh-render mode in the same page. Falls back to L2 where depth is weak.
- **Data/compute:** the depth pass is the cost — runs locally on the Mac/GPU, open-source models, **no cloud** (fits the ownership ethos). Log its runtime into the compute-spec (§11 of the capture protocol) — this is real input to the GPU-box decision.
- **Separate from the LiDAR track:** LiDAR is for *accurate geometry/measurement*; this is the *experiential* layer built on existing 360. Keep them distinct.

## 6. Guardrails
- Don't promise off-path movement beyond what depth supports — graceful fade at limits, never a torn view.
- Keep the plan-on-screen and arrow-key model from L1; this **extends** the current page, doesn't replace it.
- Own systems, local models, no cloud. Review-before-publish through Jarvis; Dominic runs git.

## 7. Open items to resolve
1. **Pick the 360 depth model** (dev team) — must handle equirectangular; quality + local-run feasibility.
2. **Compute budget** for the depth pass over ~280 frames — feeds the compute-spec.
3. After the L4 pilot, decide whether **L4 is enough** or whether full free-roam (**L5 splat**, per-room, already proven) is worth pursuing for flagship rooms.

## 8. First actions for the CEO
1. Ship **L2/L3** as a fast win on the existing page (no new data).
2. Stand up the **`depth` pass** and pilot **L4 on seg_02** to prove local free movement.
3. Bring back the depth-pass runtime + a one-screen demo, and a recommendation on L4-vs-L5 for the flagship rooms.
