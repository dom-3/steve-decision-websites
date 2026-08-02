# BRIEF — Image QA & Enhancement Layer (Content Engine)
*Self-contained build spec. Hand to the build system. Turns staff phone shots into on-brand, post-worthy images automatically — the "secondary AI layer" between intake and posting.*

## Where this sits (the pipeline)
Staff drop → **Cloudinary master (full quality)** → Airtable **Content Engine — Daily Posts** (Status `New`) → **[THIS LAYER: Judge → Enhance + Brand → Gate]** → Dominic's **Approved — POST THIS** tick → post.
The staff-input page does NOT edit — it only captures. All editing happens *downstream* on the master; the pristine original is never overwritten (edits are Cloudinary delivery URLs).

## Coordinates
- Airtable base: `appnt9vSQKrKyaKiZ` · table **Content Engine — Daily Posts** `tblBMEnp6exQsN0sg`.
- Cloudinary account: `fpuv0xud`. Add-ons installed: **AI Vision**, **Image Enhancement (Viesus)**, **AI Content Analysis**.
- Existing relevant fields: `Image URL (public)` (the Cloudinary master), `Media type`, `Edited image URL`, `Status`, `Reject reason`, `Guests in shot?`.

## Prerequisites & wiring (for the build system — the bits not obvious from the logic)
- **Cloudinary API credentials (server-side).** AI Vision (the Judge) is an *authenticated* Cloudinary API call (Analysis API / SDK `cloudinary.analyze()`) — **not** the unsigned upload preset. The build needs the `fpuv0xud` **API key + secret** as server-side env vars. (The enhancement delivery URLs in Step 3 are public and need no auth — only the Judge does.)
- **Airtable write token.** Reuse the base-scoped `AIRTABLE_TOKEN` (`data.records:read`+`write` on `appnt9vSQKrKyaKiZ`) to update rows. Server-side only.
- **Trigger.** Run on intake — either an Airtable automation/webhook on "record created, Status = New", or a scheduled poll every 2–3 min for New rows. Make it **idempotent**: skip any row that already has a Judge verdict.
- **Logo overlay asset.** Upload a **transparent-PNG** brand logo to Cloudinary once, public ID `globe_logo_overlay` (the repo has gold/white logo PNGs — confirm one is transparent). Until it exists, skip the overlay step.
- **Cost.** AI Vision and generative transforms are metered — call the Judge **once per image**, store the verdict, and only build enhanced URLs for `Enhance` rows.

## Step 1 — Add these Airtable fields
- **Quality score** — number (1–10)
- **Flags** — multi-select: `blurry` · `low-res` · `no-subject` · `already-has-logo` · `bad-crop` · `too-dark` · `too-bright`
- **Has existing logo** — checkbox
- **Judge verdict** — single-select: `Enhance` · `Reject` · `Needs-human`

## Step 2 — The Judge (Cloudinary AI Vision, per new image)
For each row where Status = `New`, send the master image to **AI Vision** with this question set and parse structured answers:
1. *"Sharpness 1–10: how crisp/in-focus is this? (10 = tack sharp, 1 = blurry)."*
2. *"Is there ONE clear subject (food, drink, room, person, place)? Answer yes/no and name it."*
3. *"Does this image ALREADY contain a visible logo, watermark or text overlay? yes/no."*
4. *"Exposure: good / too dark / too bright?"*
5. *"For an upmarket restaurant's Instagram, is this: premium / good / average / reject? One line why."*

**Write back:** Quality score (from Q1 + Q5), Flags (from Q1–4), Has-existing-logo (Q3), and **Judge verdict:**
- **Reject** → if score < 5, or no clear subject, or "reject" in Q5 → set Status `Screened out`, Reject reason = the one-line why. *Nothing average is posted.*
- **Needs-human** → borderline (score 5–6) → leave for Dominic to eyeball.
- **Enhance** → otherwise → go to Step 3.

## Step 3 — Enhance + Brand (Cloudinary delivery URL)
For `Enhance` rows, build the finished image as a Cloudinary transform on the master. Base recipe (feed portrait 4:5):
```
e_improve,e_sharpen,c_fill,g_auto,ar_4:5,w_1080,q_auto:best,f_auto
```
- **If Flag `low-res`** → prepend `e_upscale` (generative upscale) before `e_improve,e_sharpen`.
- **Logo overlay — ONLY if Has-existing-logo = false** (kills the double-logo):
  `l_globe_logo_overlay,g_south_east,w_0.18,fl_relative,o_90,x_30,y_30`
  (bottom-right, 18% width, 90% opacity, 30px margin. Upload the transparent brand logo once as public ID `globe_logo_overlay`.)
- Generate per channel as needed (square `ar_1:1`, story `ar_9:16,w_1080`).
- Save the URL to **Edited image URL**; set Status `Ready for approval`.

## Step 4 — Gate + post (already built)
Dominic reviews `Ready for approval` rows (master + enhanced + score side by side), ticks **Approved — POST THIS** → the existing publisher path posts the **Edited image URL** + caption. Only sharp, on-brand, enhanced images reach him.

## Guardrails (non-negotiable — Karen's line)
- **Enhance, never fabricate.** Sharpen, upscale, crop, colour-correct = fine. Do **NOT** use generative fill / background-swap / reimagining on the actual food or venue — it misrepresents what the guest gets. Authenticity is the brand.
- **Never overwrite the master.** All output is a derivative delivery URL; the original stays pristine in Cloudinary.
- **Keep the human gate.** Nothing posts without Dominic's tick.
- **Consent already handled at intake** (the "Guests in shot?" gate) — don't re-post anything marked no-consent.

## Tested & confirmed (29 Jul 2026)
Ran on a real bakery photo (`globe/staff-drop/the-globe-bakery/…`): `e_improve,e_sharpen,c_fill,g_auto,ar_4:5,w_1080,q_auto:best,f_auto` works and visibly improves the shot — cleanly 4:5-cropped around the subject, richer and sharper. **Important:** the Viesus add-on transform `e_viesus_correct` ERRORED despite showing installed, so this brief uses Cloudinary's **native `e_improve,e_sharpen`** (no add-on, reliable). If you want Viesus later, confirm it's *activated* (not just installed) in Cloudinary → Add-ons, then swap `e_improve,e_sharpen` → `e_viesus_correct`.

## Phase 2 (later, premium hero shots only)
Route selected shots to a dedicated enhancer API — **Claid.ai** (automated) or **Topaz Gigapixel** (max quality) — when Cloudinary-native isn't enough. Not needed for launch.

---
*Created 29 Jul 2026. The automated arm of Brush + an image "judge". Built on Cloudinary AI Vision + Viesus + AI Content Analysis (all installed on fpuv0xud).*
