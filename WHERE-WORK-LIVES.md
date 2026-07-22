# WHERE WORK LIVES — canonical, read this before writing anything

*Last corrected: Wed 22 July 2026. If you are a CEO desk, a persona, or a scheduled run, this file overrides any older instruction you are carrying.*

---

## The one-line version

**Register:** Airtable base `appnt9vSQKrKyaKiZ` — *Steve Kirkwood — Build Projects*
**Websites:** the git repo at `~/Documents/steve-decision-websites`
**Docs:** Google Drive — *My Drive > Globe Winebar/Bakery > Globe — House of Culture* (folder `11q9k5njOuRI7ZrUzVVohWOsBZVjlNrT3`), indexed in `Docs — Index` (`tblk4jRBUX6bnHTiD`)

Everything else is retired. Write to the three places above and nowhere else.

---

## RETIRED — do not read, do not write, do not merge

| Retired thing | Was mistaken for | Use instead |
|---|---|---|
| Airtable base `appxcYrYaYy1kwB0m` | the research register | `appnt9vSQKrKyaKiZ` |
| `CEO-Globe/site-build/` | the live website files | `~/Documents/steve-decision-websites` |
| `CEO-Globe/site-build-BACKUP-2026-07-22/` | a working copy | — (read-only history) |
| `~/Documents/steve-site/` | the live website files | `~/Documents/steve-decision-websites` |
| Any session `outputs/` folder | a place to leave a doc | Google Drive, at the moment of writing |

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

1. **Cook Book — Recipe Library (`tblDyNXhcE7PmoLV6`) is the exception.** The **fork holds 36 dishes; the live base holds 1**. The Globe/kitchen desk has been writing the recipe library into the fork. This table has deliberately **not** been renamed, so that desk keeps working — but the 36 recipes must be migrated to the live base and the fork table then retired. Until that is done, the Cook Book is the one place where the fork is authoritative.

2. **Sancler Enquiries (`tblBrgAp7qeA6aTxi`).** A record appeared in the fork at 12:51 on 22 July with every field empty. There is no enquiry endpoint in the `steve-decision-websites` repo, so the Sancler form is deployed from somewhere else and its Airtable target is unconfirmed. This table has **not** been renamed, because breaking it could silently lose a real customer enquiry. Find the Sancler form's base ID and repoint it.

3. **The fork still exists and is still writable.** Renaming the base itself needs the Airtable UI — rename `appxcYrYaYy1kwB0m` to `RETIRED — do not use` so it is unmissable in the base picker.

---

## Standing rules

- **Write to Drive at the moment of writing**, never at the end of a run. Session output folders are invisible to every other persona — that is how Doc 135 disappeared.
- **Log the doc in `Docs — Index` immediately**, with a direct URL in *Where it lives* — a link, never a path description.
- **Never back-fill a register from folder docs** without diffing record IDs first.
- **If a number looks wrong, check the pointer before you check the data.**
