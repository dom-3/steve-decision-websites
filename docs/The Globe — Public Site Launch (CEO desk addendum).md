# The Globe — Public Site Launch · CEO desk addendum

*Sits alongside Tech Guy's launch write-up. For the Master/Jarvis desk and leadership.*

Tech Guy's separation of the public site from the internal system is the right call and cleanly done — customers can no longer reach the work log, finances or decisions, and each system now has its own domain, repo and hosting. The points below are what I'd add for oversight.

## 1. Verified live — compliance signed off ✅

A brand-new repo is exactly where cleared content can silently revert to an old copy, so I checked the live site (`theglobe.wales`) against the wording Karen ruled on. It carried across intact:

- **Bakery page** — no "organic" anywhere; approved H1 ("Bread baked in Laugharne, every morning") and meta; the full **allergen block** (wheat/gluten, cross-contamination, "ask staff"); correct per-product ingredients (sourdough no yeast; **sulphites on the two Crunch loaves only**); all prices showing; "Matthews Cotswold Flour" with **no "stoneground"**; real logo.
- **Menu page** — **Anchovy & Burrata correctly GF, not (V)** (the mislabel we caught held); dietary key present; spelling fixes in.
- **Homepage** — "veg from C&M Organics" (the corrected supplier phrasing, not "organic veg"); Resos booking wired; www canonical set.

**Net: the live public site is compliant.** That's the headline reassurance the migration needed.

## 2. The one rule to lock now — single source of truth across TWO repos

We now have **two repos**: `theglobe-website` (public, live) and `steve-decision-websites` (internal). The public pages — bakery, menu, homepage, brand assets, images — now exist in *both*. This is the "no diverging / no duplicates" rule from the internal fork problem, in a new form.

**The rule to ratify:** `theglobe-website` / `theglobe.wales` is now the **single source of truth for anything customer-facing**. Every future public edit (menu changes, prices, images, new pages) goes **there and only there**. The public pages left in the internal repo should be **retired or redirected** so nobody edits the wrong copy and wonders why the live site didn't change — which is precisely the confusion we've already had once.

## 3. Publish authority for the new repo

The single-publisher discipline must extend to the new repo. Tech Guy's pipeline is clean (save → `git push` → auto-deploy, no CLI) — good. What leadership should confirm: **who is the single publisher for `theglobe-website`?** One route, one hand, same as we learned internally. Don't let two desks push to the public repo.

## 4. Open question for Tech Guy — the staff photo-upload tool

The content-engine staff upload page (`globe-content.html` + `api/content.js`) was built into the *internal* repo and writes to Airtable. With the split, we need to confirm **where it now lives** — it's a staff tool, not customer-facing, so it should sit on the internal/staff side, **not** on the public `theglobe.wales` marketing site. Please confirm.

## 5. Minor content flags (not blocking)

- **`wheat-field.jpg`** on the bakery page (flour section) — confirm it's a licensed image and not implying we grow our own wheat; it's decorative in a provenance section, which is fine, but worth a glance.
- **Flour naming** — the spec panel says "Matthews Cotswold Flour" but the prose below says "flour from Cotswold Flour." Align both to "Matthews Cotswold Flour."

## 6. Now that it's live — marketing hooks

- Point the **Google Business Profile** at `theglobe.wales`, and set it as the website across Instagram/Facebook.
- Confirm the **favicon** is the real logo site-wide (we fixed the placeholder "G").
- The **content engine's auto-posting** is still gated on Tech Guy's Cloudinary public-delivery fix + the Make.com scenario — the intake and approval end works; publishing doesn't yet.

## 7. Parked (acknowledged, not blocking)

`globewinebar.co.uk` redirect · Stripe card payments when ready · bakery hero-image check — **that last one I've now done: the bakery images are the correct, current, varied set** (oven / scoring / baskets, real photography), so it can come off the list.

---
*Addendum by the Globe CEO desk. Saved to `docs/`; for the publisher to commit and log in Docs — Index.*
