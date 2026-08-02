# Weekly Work Report — Jarvis (Chief of Staff)
### Week of Monday 27 → Friday 31 July 2026

*Day-by-day narrative of the work I ran this week. Day boundaries are my best reconstruction from the record — let's correct any that are off, then it goes in the system. Time figures are estimates of active build/coordination time.*

---

## Monday 27 July  · ~5–6 hrs
- Filed the Content Engine "value note" into the Steve decision site as a growing **"Hours Saved by Automation" ledger** (owner-facing), and linked it from the index.
- Kicked off the **Island House 360** work: stood up the OpenSfM photogrammetry pipeline and ran the first reconstruction on the 23 July capture.

## Tuesday 28 July  · ~6 hrs
- Analysed the photogrammetry result and gave a clear **GO/NO-GO verdict**: the model fragmented because the capture was too sparse — recommended a denser re-shoot rather than more processing.
- Built two ways to actually *see* the captured data on the decision site: a **3D fragment viewer** and an **immersive 360 walk-through viewer** (drag-look, arrow-key stepping).

## Wednesday 29 July  · ~6–7 hrs
- Ran a **full AI analysis of all 53 rooms** of the building.
- Designed and built the **weekly building-survey system** — nine professional-lens "personas," a fixed standard/rubric, a hub, and the Week-1 pack — then branded it to Island House and saved it as a reusable skill so it can run every week.

## Thursday 30 July  · ~7 hrs
- Deployed The Globe **Content Engine logo-repoint** and verified the image output was unchanged.
- Built **Alys's Daily Picks page + API** (pick the best 3 of 6, save-for-later backlog, feedback notes, inline caption editing) wired to Airtable; diagnosed why make.com wasn't publishing and wrote the fix brief for Bob.
- Shipped the Globe **SEO + share-card** update and diagnosed the WhatsApp link-preview issue (confirmed the site was correct, issue was WhatsApp-side).
- Started the **Island House exact-copy** migration off WordPress — first push, fixed the blocked-deploy author-email issue, and traced the unstyled-preview root cause.

## Friday 31 July  · ~7 hrs
- **Took Island House live.** Fixed the Simply Static export (the missing Enfold layout CSS), re-exported, promoted to production, and ran the **DNS cut-over on IONOS** — pointed apex + www to Vercel, left all email/MX records untouched, and confirmed the live site renders fully styled over HTTPS.
- Fixed the **Consultants & Reports pages** — replaced the broken PDF viewer with a native embed across all 15 pages (23 reports), verified live.
- Deployed The Globe **staff-PIN fix** so the daily page accepts the PIN.
- Produced the **HouseComply 360 handover** pack and the **Software Studio CEO charter** (Project 1: the AI video editor), set up the **X5 capture protocol** for today's shoot, connected the Island House folder for direct editing, and built this weekly report + the Phil overview.

---

### Week in one line
Took Island House from a WordPress site to a live, self-hosted, fully-styled site on our own stack; built the Globe's daily social-picks tool and content pipeline; stood up the Island House 360 capture-and-survey system; and set the foundations for the new software studio.
