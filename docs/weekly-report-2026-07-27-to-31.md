# Weekly work report — Mon 27 to Fri 31 July 2026
**Engagement:** Steve Kirkwood (The Globe / Globe Bakery, House of Culture, Island House) · **For:** Steve, and above him Phil

*Source note: Mon–Wed are taken verbatim from the shared Work Log (register); hours there are effort estimates across the automated research/build desks, not one person's clock time. Thu 30 & Fri 31 are not yet in the Work Log and are reported from this desk's direct session record — they still need logging.*

---

## Monday 27 July — House of Culture research (Mererid desk)
**Worked on:** the Corporation-survival and trade-directory research seams for the Laugharne town-history programme.
**Produced/decided:** Docs 227–230 — an object-read of St Clears under the Municipal Corporations Act 1883 (the control case for what Laugharne's corporation escaped); launched the trade-directory sweep from Pigot's 1830 & 1844; audited the 1868 National Gazetteer and logged an 1868 town-decline datapoint.
**Active time:** ~3h (effort estimate).
**Open/waiting:** research seam continued into the rest of the week.

## Tuesday 28 July — Laugharne Town App foundation (Bob build desk)
**Worked on:** standing up the Laugharne Town App and locking its map engine.
**Produced/decided:** the offline-first PWA shell (manifest, service worker, icons, list trail); pivoted onto the live `township-loop` repo as the canonical base; captured the register into `data-raw.json` with coordinates for all 11 stops; built the snapshot build pipeline with the publish gate (a stop only goes live when Approved-for-site AND all its facts are Verified). **Cost decision:** dropped paid Mapbox for free **MapLibre GL JS + MapTiler**.
**Active time:** ~5h (effort estimate).
**Open/waiting:** nothing blocking — fed into Wednesday's build-out.

## Wednesday 29 July — heaviest day, four parallel workstreams
**Mererid (research, ~12h):** finished the Laugharne Lines audit (X–XIX). Refuted two long-standing Dylan Thomas claims ('Do Not Go Gentle' was published 1951, so not prompted by his father's Dec-1952 death; 'In Hazard' traces to the SS Phemius, 1932, not a 1936 storm). Verified the Shrovetide 'Head of John the Baptist' football (Curtis 1880) and the Gwyllgi folklore (Sikes 1880). Deep-past finds: royal Welsh Rolls 1283 + a de Brian bailiff writ 1282; the lordship line de Brian→Perrot 1575. Trade-directory sweep effectively finished (Hunt, Slater, Kelly, Worrall). Cockle-industry evidence (Bulstrode 1911). Docs 254–279.
**Rhiannon (story, ~5h):** took the trail from English-only and thread-less to **bilingual, threaded and publish-gated** — parallel Welsh for all six Ready beats, a new Trail Threads table with four wired threads (the working town, the corporation, the mariners, Dylan), two reconciliation beats staged for Karen, and the Town Hall stub rewritten into a full corporation beat (9 verified facts).
**Bob — Content Engine (~4.5h):** built the **Image QA & Enhancement Layer** for the Globe/Bakery social pipeline — an AI Vision judge that scores/flags each photo, then a Cloudinary auto-enhance step, write-back to the approval gate. 7-file Node/Vercel build, tested live on a real bakery image, packaged with a deploy prompt for Jarvis.
**Bob — Laugharne app v6 (~9h):** the big build-out — Story Map workbook, true parallel EN/CY with a language toggle + Welsh review gate, the narrative thread layer, the explorer map with walk-route + unlock mechanics, the live-register export pipeline, and a Globe hospitality layer (coffee & cake / book-a-table, suppressed at solemn stops). 91 unit assertions + render checks; packaged as the v6 handover.
**Open/waiting:** Karen sign-off on the two reconciliation beats; Jarvis to deploy the Content Engine layer and apply the v6 app change-set.

## Thursday 30 July — Island House website swap-over (this desk) *(not yet in Work Log)*
**Worked on:** getting the Island House site off WordPress and safely into our system.
**Produced/decided:**
- **Full pre-change backup, three ways.** Installed UpdraftPlus, took a complete backup (database + files + 2.4 GB media), then pushed a second complete backup to **Google Drive** — so the live site data is safe in three places before anything was touched.
- **An exact static copy of the whole site** via Simply Static — 65 pages, full Enfold styling, all links preserved — captured into the repo as the editable base and staged on an `exact-copy` branch with a live Vercel preview.
- **Diagnosed and fixed two real faults:** the missing styling (the merged Enfold CSS lived inside the excluded uploads folder) and a large-media export stall (switched to excluding images by file-type).
- **DIY spatial-walkthrough engine — P0 spike:** ran OpenSfM on the existing 53-shot 360 folder via Google Colab; got the engine to compile but hit a runtime crash on the free tier, concluded it needs Docker on a real machine, and wrote the Docker runbook.
**Active time:** heavy day, ~7h (estimate).
**Open/waiting:** Jarvis to push the styled export and promote it to production.

## Friday 31 July — Island House go-live path + media pipeline (this desk) *(not yet in Work Log)*
**Worked on:** the route to launch and the imagery/tracking backbone.
**Produced/decided:**
- **Cloudinary media pipeline live:** installed + connected the official Cloudinary WordPress plugin (auto-sync into an `island-house` folder), which routes the site's images through Cloudinary *and* fixed the images in the static copy. ~1.44 GB already synced; still only 16.6% of the Free tier's credits used.
- **Mapped the full go-live path** and wrote the **IONOS domain-swap runbook** (exact DNS records, automatic HTTPS, rollback). Cleared the forms question — the site has no server-side forms (contact is plain email links), so it's safe to go static. Registrar confirmed = IONOS.
- Confirmed the register's **Media Library** table is ready to catalogue Island House photos, and wrote the push/promote hand-off prompt for Jarvis.
- Began prep for the **3D walkthrough / architect plans** (raw footage arriving today): set up Cloudinary folders and flagged the real constraints (8K 360 panos exceed the Free 25 MP image cap; raw video exceeds the 100 MB cap — so raw stays local, only web-ready outputs go to Cloudinary).
**Active time:** ~4.5h (estimate).
**Open/waiting:** Jarvis's push + promote to production, then the IONOS DNS flip to go live; raw 360 walkthrough footage expected late today; full high-res photo archive migration will need Cloudinary Plus.

---

**Week in one line:** Migrated the Island House website off WordPress onto fast, secure static hosting with its media on Cloudinary — safely backed up three ways and now one push + one DNS flip from live — while the research and build desks made the Laugharne House of Culture trail bilingual, mapped and publish-gated and shipped the Globe/Bakery content-engine image layer.

**Top 3 highest-value things this week:**
1. **Island House site migrated off WordPress** to a styled static copy on Vercel with images on Cloudinary, fully backed up — a straight upgrade to speed, security and HTTPS, now a single promote + DNS change from going live.
2. **Laugharne Town App reached a shippable v6** — bilingual (EN/CY), threaded, mapped, publish-gated, with the Globe hospitality layer woven in.
3. **Content Engine Image QA layer built and handed to deploy** — AI photo judge + auto-enhance for the Globe/Bakery social pipeline.

**Next week (1–3 things I'll pick up):**
1. **Take Island House live** (Jarvis push/promote → IONOS DNS swap → HTTPS), then start the edit phase — folding in the verified history and the before/after restoration story.
2. **Process the 360 walkthrough footage and embed the architect plans**, and get the DIY spatial-engine P0 spike run on a machine with Docker.
3. **Catalogue the Cloudinary media into the register** and scope the full high-res archive migration (likely Cloudinary Plus).
