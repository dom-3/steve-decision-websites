# WHERE WORK LIVES — canonical, read this before writing anything

*Last corrected: Wed 22 July 2026. If you are a CEO desk, a persona, or a scheduled run, this file overrides any older instruction you are carrying.*

---

## The one-line version

**Register:** Airtable base `appnt9vSQKrKyaKiZ` — *Steve Kirkwood — Build Projects*
**Websites:** the git repo at `~/Documents/steve-decision-websites`
**Docs:** the same git repo — `docs/` for research and write-ups, `team/` for persona and CEO-desk operating prompts — indexed in `Docs — Index` (`tblk4jRBUX6bnHTiD`)

Everything else is retired. Write to the places above and nowhere else.

### Publishing rule — ratified 23 July 2026 (SINGLE PUBLISHER)

**No CEO desk or persona runs `git` against this repo. Ever.** All commits and pushes to the website repo go through **one publisher: the Master / Jarvis desk.** This ends the lock contention and clobbering that comes from several desks committing to the same folder at once (the cause of the `HEAD.lock` / `index.lock` errors on 22–23 July, and the same class of problem as the base fork).

How work reaches the site now:
- **A desk that has a website or doc change** either writes the file into the repo working tree and **leaves it uncommitted**, or hands the change to the Master desk to make. It does **not** `git add`, `git commit` or `git push`.
- **The Master / Jarvis desk is the only committer.** It reviews staged changes, commits path-scoped (`git add -- <exact paths>`, never `git add -A`), and pushes — either on demand (website changes, which go live) or via the Jarvis 21:00 run (the day's `docs/` batch).
- **Going live = a deliberate act by the one publisher**, not a side effect of a desk saving a file.

If you are a desk and you think something needs to go live, say so in your Handover line and let the publisher take it. Do not touch git.

### Docs rule — ratified 22 July 2026 (supersedes the earlier "docs live in Drive" rule)

Documents live **in the git repo**, on Dominic's own machine, version-controlled and backed up to GitHub. Airtable stays the **register** — state, decisions, hours, and the `Docs — Index` pointing at each doc.

- **Structured state** (tasks, hours, decisions, enquiries, the doc index) → **Airtable**. It is queryable and the portal APIs already read it.
- **Long documents** (research, briefs, persona prompts) → **the repo**. Airtable long-text caps at 100k characters, cannot be diffed or versioned, and is the wrong tool for prose.
- **Google Drive** → only for documents someone *outside* this system needs to open. Not the default, not the home.

Why the repo and not a loose local folder: a plain folder is invisible to other desks and forks silently — that is how Doc 135 disappeared and how `steve-site` diverged. The repo is local **and** shared **and** versioned, which removes both failure modes. Commit path-scoped (`git add -- <paths>`), never `git add -A`.

---

## RETIRED — do not read, do not write, do not merge

| Retired thing | Was mistaken for | Use instead |
|---|---|---|
| Airtable base `appxcYrYaYy1kwB0m` | the research register | `appnt9vSQKrKyaKiZ` |
| `CEO-Globe/site-build/` | the live website files | `~/Documents/steve-decision-websites` |
| `CEO-Globe/site-build-BACKUP-2026-07-22/` | a working copy | — (read-only history) |
| `~/Documents/steve-site/` | the live website files | `~/Documents/steve-decision-websites` |
| Any session `outputs/` folder | a place to leave a doc | the git repo, at the moment of writing |

The retired folders have been renamed with a `RETIRED —` prefix. The retired base has had its tables renamed `RETIRED — do not use — …` so that anything still pointed at it **fails loudly instead of writing silently into a dead fork**. That is deliberate. If you hit a 404 on a table name, you are pointed at the wrong base — fix the pointer, do not work around it.

---

## What went wrong, so it isn't repeated

`appxcYrYaYy1kwB0m` was a **fork** of the live base, not a separate subject. Two things then diverged into it without anyone noticing:

1. **The desk read the fork.** On 22 July this desk looked in the fork for Mererid's Docs 130–142, didn't find them, and wrongly concluded her automation had stopped. It hadn't — she had been logging to the live base all along. The "back-fill" that followed re-created roughly **86 entities, 39 facts and 16 sources that already existed** in the live base under different record IDs. That is why the fork must never be merged wholesale.

2. **The live website wrote to the fork.** `api/worklog.js`, `api/note.js`, `api/decision.js` and `api/business.js` all had `appxcYrYaYy1kwB0m` hard-coded as their fallback base. Every note, decision and work-log row submitted through the decision portal was landing in the fork. Repointed 22 July.

The same split had happened to the website folders and was fixed the same day.

**The pattern to watch for:** a copy gets made for a good reason, both copies stay writable, and the split is invisible until someone notices a number looks too small. If you ever find yourself thinking *"that's odd, there should be more here"* — check you are in the right base before you conclude data is missing, and **never** back-fill from a folder into a register without first diffing record IDs.

**Two research streams, one register.** Island House and the Laugharne township / House of Culture work are two streams of one programme. They share `appnt9vSQKrKyaKiZ`. They do not get separate bases.

---

## Carried across from the fork before retirement

Only genuinely unique work was moved. Everything else was a duplicate.

- Mansel shrievalty corrected **1728–29 → 1729** (county sheriff roll: 1728 = Thomas Lloyd of Derwydd; 1729 = "Sir Edward Vaughan of Trimsaran")
- D.J. Thomas death year corrected **1953 → 16 Dec 1952**
- The Pelican **1948-vs-1949** genuine source split logged (Cadw = 1948, Dylan-heritage = May 1949 — do not assert one year publicly)
- Work Log row *"Tue 21 Jul 2026 — Mererid full-day research (Docs 120–142)"* — the only Work Log row that existed solely in the fork

Verified identical in both bases at retirement, so nothing to move: Decisions & Discussion (11), Business (6), Rooms — Island House (80), Website Notes (0). Live base held the superset for Media Library (39 vs 27) and Drinks (12 vs 3).

---

## OPEN — not yet resolved

1. ~~**Cook Book — Recipe Library.**~~ **CLOSED 22 July.** The fork held 36 dishes to the live base's 1, and the two schemas had diverged — the fork carried six fields the live table did not have at all (Code, Ease 1-3, Pre-book, Vegetarian, Menu description, and a finer-grained season). Those six fields were built in the live table first, then all 36 dishes migrated with every field intact. Verified: 36 records carrying a complete unique code set, F1-S1 → F4-D3, four fortnights × 3 starters / 3 mains / 3 desserts, no gaps or duplicates. The fork's table is renamed `RETIRED — do not use — Cook Book (migrated 22 Jul)`. Not carried across, as exact duplicates: "Status 2", "Notes 2", "Volume".

   *Allergen caution now living in that table:* the Vegetarian flag means "as written". Three dishes carry non-obvious catches — the honey & thyme buttermilk pudding and the honey & lavender pannacotta both contain **gelatine**, and the Welsh rarebit needs **vegetarian Worcestershire** (standard contains anchovy). Do not let menu copy go out calling them vegetarian without the swap.

2. **Sancler Enquiries (`tblBrgAp7qeA6aTxi`) — premise corrected 22 July, and the real hazard is worse than the one we went looking for.**

   **The 12:51 blank record was not a form submission.** `recOFT1vq6rNjFMMR` has `cellValuesByFieldId: {}` — not one field set. Bob's `api/enquiry.js` always writes `Status: 'New'`, `Received` and `Source` server-side, so even an entirely blank form submission arrives with those three populated. It cannot produce an empty record. The fork base's last-viewed timestamp is 12:54:59 — three and a half minutes after the row appeared. That is a human clicking "+" in the Airtable grid, not a webhook.

   **No enquiry form is deployed anywhere.** `api/enquiry.js` exists only locally in `CEO - Sancler Property/site/api/` — never pushed, never deployed, no `AIRTABLE_TOKEN` set. So nothing is currently capturing Sancler enquiries, and **no customer enquiry has been lost, because nothing is listening yet.**

   **⚠️ THE SYSTEMIC HAZARD — read this before deploying anything.** The fork is a base *copy*, so **its tables carry IDENTICAL table IDs**. `Sancler Enquiries` is `tblBrgAp7qeA6aTxi` in *both* bases. **Any endpoint with the correct table ID and a stale base ID writes silently to the dead fork and looks completely successful.** That is exactly how `worklog.js`, `note.js`, `decision.js` and `business.js` wrote to the fork. The fork remains writable, and its copy of this table is a stale snapshot carrying only the original 12 fields (no Chain position, Timescale, Bedrooms wanted or Plot size preference) — it would accept writes without complaint.

   **This qualifies the "404 means a bad pointer" rule.** A 404 only protects you where a table *was* renamed. Where it was not — Sancler Enquiries, and Cook Book before its migration — a wrong base ID does not fail at all. **Never rely on failure to tell you your pointer is wrong. Assert the base ID explicitly.**

   **The job is therefore to deploy safely first time, not to repoint.** Deploy `api/enquiry.js` pinned to base `appnt9vSQKrKyaKiZ` and table `tblBrgAp7qeA6aTxi`. Add a **startup assertion that refuses to run if the base is anything other than `appnt9vSQKrKyaKiZ`**, and log the resolved base on every write. Then submit a dummy enquiry and confirm it lands in the live base with `Status: New` and a `Received` timestamp. Owner: Tech Guy.

   The blank fork row has deliberately been left in place rather than deleted — it is provably empty and sits in a retired base.

3. **The fork still exists and is still writable.** Renaming the base itself needs the Airtable UI — rename `appxcYrYaYy1kwB0m` to `RETIRED — do not use` so it is unmissable in the base picker.

---

## Standing rules

- **Write into the repo at the moment of writing**, never at the end of a run. Session output folders are invisible to every other persona — that is how Doc 135 disappeared.
- **Log the doc in `Docs — Index` immediately**, with its repo path (and GitHub URL) in *Where it lives* — a precise location, never a vague description.
- **Never run `git` against this repo.** Write your file and leave it uncommitted, or hand the change to the Master / Jarvis desk — the single publisher (see the Publishing rule above). Only the publisher commits and pushes. Say in your Handover line that something is waiting to go live.
- **Never back-fill a register from folder docs** without diffing record IDs first.
- **If a number looks wrong, check the pointer before you check the data.**
