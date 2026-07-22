# HouseComply → Salem — Integration Plan & Roster Decisions
*Bringing the 6-month HouseComply operating system into the Salem/Globe operation. Approach: cherry-pick high-impact first.*

## Roster decisions (Dominic's calls, 22 Jul)
- **O'Brien → Jarvis.** O'Brien is retired as a name; Jarvis takes the chief-of-staff seat with the hardened HouseComply spec (morning briefing, deltas-not-state, refusal protocol, timesheet rule). → `Jarvis — Chief of Staff (Salem).md`
- **Mark — retired.** Marketing folds into **Nia**, who holds the marketing brief going forward.
- **Sophie — retired** (never used). Social also sits with **Nia**.
- **Alex — brought on** for relationship-first dealmaking / partnerships (the direction Dominic chose over Mark). Pack to be tuned next.
- **Bob — shared name, keep.** Update the existing Salem Bob from the HouseComply Bob pack where there are improvements (diff pending).
- **Karen — already in use** (the Globe compliance section). Adopt her **claims-language ceiling** group-wide.

## Cherry-pick bring-on order
1. **Jarvis** ✅ — swap in for O'Brien; run the 07:00 brief + end-of-day wrap. *(prompt ready)*
2. **Tech Guy** ✅ — assign the three live Globe go-live blockers: **bakery Stripe payments, the Cloudinary serving fix, and the domain flip.** *(prompt ready)*
3. **Bob** — apply HouseComply upgrades to the Salem Bob (diff next).
4. **Alex** — stand up for partnerships/dealmaking.
5. **Then:** Tess (live-site QA) + Oracle (adversarial verify) to harden the "verify" step; **Regulatory Radar** for licensing watch (bar/food/heritage).

## Group-wide doctrine we're adopting from HouseComply
The non-negotiables that keep the system honest, now applied across all five desks:
- **Path-scoped commits — never `git add -A`** (this group already got bitten by it).
- **No-false-green** / source-of-truth = the live system, never memory or mocks.
- **Probe-before-mutate**, surface-gaps-never-guess, honest caveats.
- **Karen's claims ceiling** on all customer-facing copy (no "guaranteed / audit-grade / verified-as-outcome" language).
- **Human approval gate** between "drafted to Airtable" and "posted / sent / published."
- **CEO decides · Jarvis coordinates · personas deliver · Dominic ships.**

## Automations — next phase (organise + integrate)
- **Upgrade the 07:00 brief** to the Jarvis spec (already a scheduled task).
- **Nia's social rhythm** — port the HouseComply Chrome-based posting/scheduled tasks (the Make social publishers were off/invalid; the Chrome path is the working one).
- **Form intake** — the Sancler enquiry serverless form already mirrors the HouseComply Make intake pattern; Tech Guy to health-check + extend to the bakery order flow.
- **Email flow** — a Resend-style welcome/confirmation on enquiries + orders.
- Note: two Make blueprints (`Inspection_Form_Integration`, `Login_and_SignUp`) and both social publishers need pulling/reviving from the Make UI if we want the product-side flows.

## Where these live
Persona prompts: `~/Documents/steve-site/team/`. The Airtable spine is the existing base `appnt9vSQKrKyaKiZ`. Site repo: `dom-3/steve-decision-websites` (staging `~/Documents/steve-site`).
