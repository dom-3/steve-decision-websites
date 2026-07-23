# BRIEF — Tech Guy — production is frozen; get main live, then make it deploy itself
*Issued 22 July 2026. This is the master blocker: the six-area→five-branch dashboard, the repointed APIs, the rename and the Globe hub are all in the repo but NOT live.*

## Diagnosis (confirmed from the repo)
- Production was only ever published via `vercel --prod` CLI from `~/Downloads/steve-site`. That source was **retired 21 July** (`.vercel` → `.vercel-STALE-DO-NOT-DEPLOY`), per `CONSOLIDATION-REPORT.md`. So production has had **no new deploy since**, and every git push since has updated GitHub only.
- The pages 404 live but are present in `origin/main` (e.g. `worklog.html`, `business.html` committed 14 Jul). Therefore: **the Vercel project is not auto-deploying from the GitHub repo.** Git integration is either not connected or not set to deploy `main` to production.

## The facts you need (from `.vercel/repo.json` + git)
- Vercel org (team): `team_a7trF9LXXAbZh9k32kFqFT9F`
- Vercel project: `prj_ICZM6C1cPT2CIhgzQxgoSVHoEdKF` — name `steve-decision-websites`
- GitHub repo: `github.com/dom-3/steve-decision-websites`, production branch: `main`
- Root directory: `.` · it's a static site + `api/*.js` serverless functions · no build step
- Note: `.vercel/project.json` is MISSING locally (only `repo.json` exists) — a CLI deploy from the repo will need `vercel link` first.

## Step 1 — get current `main` live tonight (pick one)
**A. CLI from the repo (fastest, if the Vercel CLI is installed + logged in):**
```
cd ~/Documents/steve-decision-websites
vercel link      # select the existing steve-decision-websites project
vercel --prod    # publishes the current working tree to production
```
**B. Dashboard:** Vercel → the `steve-decision-websites` project → Deployments → redeploy latest `main`, or Settings → Git → connect the GitHub repo, then push.

Either way, confirm the deployment reaches **READY**.

## Step 2 — make it permanent (so production never freezes again)
In the Vercel project → Settings → Git:
- Connect the GitHub repo `dom-3/steve-decision-websites` if not already connected.
- Set **Production Branch = `main`**.
- Confirm a push to `main` now triggers a production deployment automatically.
This ends the CLI-only publishing that caused the freeze. From then on, "commit + push to main" = live.

## Step 3 — the new domain (Dominic is registering it today)
Once it's registered: Vercel project → Settings → Domains → add the domain → set the DNS record it shows you at the registrar. Point it at production. This hides both the `.vercel.app` URL and the repo name behind the new brand (Business Operating System).

## Step 4 — the token, while you're in there
Confirm `AIRTABLE_TOKEN` is set in the project's Environment Variables with **`data.records:read`** scope (as well as write). The live pages (`worklog.html`, `business.html`) read from Airtable via `/api/*`; without the read scope they show a 403 state even once deployed.

## Verify (all four, after deploy)
1. The dashboard loads and reads **Business Operating System** with five head branches.
2. Clicking **Work log & hours** loads real rows (not a 403 or 404).
3. **Enter the Globe →** opens `globe-hub.html` with its five branches.
4. The new domain resolves to the same site.

## Known dead link to fix separately
`food-production.html` is linked from the Globe hub but is not in the repo — that desk owes the file. Until it lands, that one link 404s; everything else resolves.
