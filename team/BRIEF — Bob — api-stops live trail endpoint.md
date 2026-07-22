# BRIEF — Bob — `/api/stops`: make the History Trail live-fed
*Issued 22 July 2026. Ratified approach: the trail renders from Airtable, not from baked HTML.*

## The problem
`island-house-history.html` is **147KB of hand-baked HTML** with all ~30 trail stops embedded in the file. It calls `/api/decision` only (the notes widget). Every research update therefore means hand-editing a 147KB file — which is why the trail had to be pushed live three times in one day. Meanwhile the research already lives structured in Airtable.

## The fix
Same pattern the site already proves with `worklog.html` → `/api/worklog`. Add `/api/stops`, render the trail from the register, and the publishing step disappears.

## Prerequisite — the data isn't there yet (do this first)
The **Stops table (`tbl95fvlLEk4zQFDG`) currently holds ONE record.** The ~30 stops are still only in the HTML. So step one is a **one-off extraction**: parse the stops out of `island-house-history.html` and create one Stops row each, preserving title, body/anchors, type, status, and any do-not-claim notes already written into the copy.

Do this as a scripted, reviewable migration — not by hand — and **diff before writing**: if a stop already exists in the table, enrich it, don't duplicate it. (Record-ID diffing is now standing doctrine after the fork incident.)

## The endpoint
`api/stops.js`, modelled on the existing `api/worklog.js`:
- Base `appnt9vSQKrKyaKiZ`, table `tbl95fvlLEk4zQFDG`.
- **Filter is load-bearing:** return a stop ONLY where it is tiered **Verified** AND **`Approved for site` (`fldRoICPflkORS8l4`) is ticked.** That checkbox is Dominic's publish gate — nothing reaches Steve's site without it.
- Return only the fields the page renders. Do not leak the do-not-claim register, internal notes or unapproved rows to the client.
- Read-only. No writes from the public site.

## The page
Rewrite `island-house-history.html` to fetch `/api/stops` on load and render Timeline / People / Places from the response, keeping the existing look and the verified-fact vs labelled-legend distinction. The 147KB of embedded stop data comes out; the shell stays.

## Discipline
- **Base pointer:** `appnt9vSQKrKyaKiZ` only. The fork `appxcYrYaYy1kwB0m` is retired and will fail loudly — if you 404, fix the pointer, don't work around it.
- **Path-scoped commits** — `git add -- api/stops.js island-house-history.html`, never `git add -A`.
- **Push ≠ deploy.** Confirm the Vercel deployment reaches READY before treating it live.
- Ship the migration and the endpoint as separate commits so the data move can be verified before the page switches over.

## Done looks like
Mererid tiers a stop Verified → Dominic ticks *Approved for site* → the stop appears on the public trail on next page load, with **no commit, no push, no hand-editing**. Then the same pattern extends to House of Culture beats and the Globe dashboard.
