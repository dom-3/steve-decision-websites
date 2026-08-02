# Free Movement — L4 vs L5 for the flagship rooms (recommendation)

**From: Digital Twin CEO · To: Jarvis / Dominic · Re: Walkthrough-Free-Movement-Spec.md §7.3**

## The question
Once the L4 pilot proves local free movement, is **L4 (depth-shell parallax from 360)** enough, or do the flagship rooms warrant **L5 (walk-anywhere from a splat/mesh)**?

## Recommendation — **L4 everywhere as standard; L5 only for the 2–3 true flagship rooms, and only from the good re-capture.**

Reasoning, briefly:

**L4 is the right default for the whole building.** It needs no reconstruction, no LiDAR, no per-room success gate — it runs off the 360 we already shoot, one cached depth pass, and degrades gracefully to L2 where depth is weak. It gives the *felt* win (step around a point, real near/far parallax) at near-zero marginal cost per room. Ship it as the standing experience.

**L4's ceiling is honest:** parallax is only convincing within ~0.5–1 m of each capture point, and it can't show a surface the camera never saw (occlusions tear if you push past the limit — which is why we clamp). So L4 is "move freely *around* the walk," not "walk anywhere."

**L5 (splat/mesh) is the only true free-roam**, but it is earned, not free: it needs a bright/textured, high-overlap capture and a successful reconstruction — exactly what the salvage islands prove works **per-room**, not building-wide. It's heavier to produce, store, and serve.

**So spend L5 where it pays for itself:** the handful of rooms a visitor actually explores — the flagship function room, the main bar, the best bedroom, the hero exterior. For those, an owned splat is worth the cost; everywhere else, L4 is indistinguishable to a casual visitor and a fraction of the effort.

**Sequencing:** don't build L5 on the current 25 GB footage (dark/fast indoors — it's why we're here). Do L5 **from the disciplined re-capture + drone exterior**, on the 2–3 flagship rooms only, once a room reconstructs cleanly as an island. Until then, L4 carries the whole building.

## One-line version
**L4 as the standard free-movement layer everywhere; L5 splat reserved for 2–3 flagship rooms, built from the good re-capture, not the salvage footage.**

## Decision needed from Dominic
Confirm the flagship shortlist (which 2–3 rooms + the hero exterior get L5 later). Everything else is L4 by default.
