# docs/ — the document store for the Globe Operating System

This folder is where research write-ups and briefs live. **Airtable base `appnt9vSQKrKyaKiZ` is the register; this folder is the document store.** The register (`Docs — Index`, table `tblk4jRBUX6bnHTiD`) points at every doc here.

## The numbering convention
- **One shared sequence.** Docs are numbered in a single running sequence (…170, 171, 172…), regardless of which desk or branch wrote them. This is deliberate: Docs 132–175 are already cited as plain numbers across the Research Facts, Threads and Handover records, and forking into per-branch prefixes mid-stream would break those citations.
- **The author is named in the index, not the number.** In `Docs — Index`, the Doc field reads e.g. "Doc 172 (Mererid IH — …)" or "Doc 174 (Mererid HoC — …)". The filename carries the same `[ISLAND HOUSE]` / `[HOUSE OF CULTURE]` tag.
- **Historical collisions carry a/b/c suffixes.** On 22 July, before the claim-first rule existed, the two branches allocated the same number simultaneously — so 158, 159, 163, 164, 165, 166, 167, 168 and 169 each exist as a/b/c variants. Those suffixes are permanent; do not reuse a bare number that has suffixed variants.

## Claim the number BEFORE you write (this is what prevents collisions)
The register allocates numbers, not the folder. Before writing a document:
1. Read `Docs — Index` and find the highest number in use.
2. **Immediately create your `Docs — Index` row** to claim the next number, with "Where it lives" = "CLAIMING — write in progress".
3. Only then write the file, and update the row with the real repo path.

Two runs cannot take the same number because the claim is recorded first. If your intended number is already claimed when you go to write it, take the next free one.

## Do NOT commit from an unattended run
The Mererid branches **write files here but never commit.** Committing is done once a day by the Jarvis 21:00 end-of-day run, which stages `docs/` only (`git add -- docs/`, never `git add -A`) and pushes in one clean commit. Reason: two branches committing every 30 minutes contend for the git index/HEAD locks — against each other and against anyone working in the repo — and each push needlessly redeploys the live site. Write the file; leave it uncommitted; Jarvis ships the day's batch.

## Where things live (canonical — see WHERE-WORK-LIVES.md at the repo root)
- **Register / state:** Airtable `appnt9vSQKrKyaKiZ`.
- **Documents:** here, in the git repo (local, versioned, backed up to GitHub).
- **Google Drive:** only for documents someone *outside* this system needs to open. Not the default, not the home.
- **Retired, never write to:** base `appxcYrYaYy1kwB0m` (a fork), `~/Documents/steve-site/`, any session `outputs/` folder. A wrong base ID does not always fail — the fork's tables share identical IDs — so assert the base, never rely on a 404.
