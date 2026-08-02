# BRIEF — Caption Accuracy Judge (Content-QA Layer)
*Self-contained build spec. Hand to the build system. Adds a CLAIM-CHECK on the AI-written caption — the missing half of QA. The image Judge proves the picture is good; this proves the words are TRUE. Together they are the Content-QA layer.*

*Bob · 31 Jul 2026. Trigger: the Writer invented a product the Globe doesn't sell ("cheesecake tomorrow"). An image judge can never catch that. Every concrete claim in a caption must be verified against the live base before the row can post.*

**MECHANISM (confirmed):** this judge is an **LLM that reads `Draft Caption` and runs Airtable lookups** against the live base. It is NOT Cloudinary AI Vision — that is the separate *image* judge on the Daily Posts table. Two judges, two tables, two jobs: the image judge proves the picture is good; this one proves the words are true.

## Where this sits (the pipeline)
Daily Content Engine (06:30) writes ideas → **Daily Content Ideas** rows (Draft Caption) → **[THIS LAYER: extract claims → verify each against the base → PASS or HOLD]** → only PASS rows become eligible → Alys picks → make.com publisher posts.
This layer only ever **HOLDS**. It never posts, never edits the caption, never overrides a human. It is the net under the Writer.

## Coordinates
- Base: `appnt9vSQKrKyaKiZ`
- Judged table: **Daily Content Ideas** `tblRCua7jlKaRIyid`
  - reads: `Draft Caption` `fldr4d7yQ1ODqAUO4` · `Format` `fld67nJaKoSg2dJHD` · `Suggested Channel` `fld4JQsGIdcQBQhVk` · link fields `Linked Dish` `fld4PpnQzLSNB7yep`, `Linked Drink` `fldqGqLCLXlxIJmN1`, `Linked Fact` `fldkoK1lt9CAfCq3b`, `Linked Media` `fldNOoSJDrIkZPcdR`
  - writes: **`Accuracy verdict`** `fldG1y832vqNxOnmu` (singleSelect: `PASS` / `Needs-human / accuracy hold`) · **`Accuracy note`** `fld0UQqSBbx5rYmdj` (long text)
- Fact / product sources (all in the same base):
  - **Cook Book — Recipe Library** `tblDyNXhcE7PmoLV6` — dish `fld487lSwly1kEYZK`, Status `fldfnoOt8ewRgra8y`, Selling price `fldFkTdg0iJpRmNQ6`, Menu description `fldotGz9VOwqMtdAh`
  - **Drinks — Recipe Library** `tblgOSEMO7DremfWg` — drink `fldDkDJ6bkL37ivaY`, Status `fldYaSsqJDUeuWhmm`, Menu price `fldY5OxiqhTYPxUfK`
  - **Research — Facts** `tbloFM9ZTeT4LeSVQ` — claim `fldKNCbZvQB6g2qQ9`, Status `fldjx82cAjyR9Nt5W`

## ⚠️ Verified against the live base 31 Jul (do NOT assume — these were wrong in the original ask)
- **Dishes AND drinks use the same live status: `On menu`.** The brief said drinks = "live"; there is no "live" option. The live bar for BOTH tables is Status = **`On menu`** (options are Draft / Tested / On menu / Retired).
- **Facts pass bar = `Verified` OR `Verified-strong`.** (Full options: Verified · Verified-strong · Referenced-pending · Tradition · Refuted.) Anything Referenced-pending / Tradition / Refuted is NOT publishable as fact — matches the table's own rule "nothing marked Tradition is publishable as fact".
- **Daily Content Ideas Status** (`fldwXcddI7wHviYiJ`: New/Shortlisted/Drafted/Used/Discarded) has no accuracy value, so the verdict lives in its **own** field `Accuracy verdict` — same pattern as the image Judge verdict, not overloaded onto Status.

## Idempotency & trigger
- Run per Daily Content Ideas row **before it can be eligible** — either an Airtable automation on record-created / Draft-Caption-set, or a poll every few minutes for rows where `Accuracy verdict` is empty and `Draft Caption` is not empty.
- **Skip any row that already has an `Accuracy verdict`** (empty = unjudged is the idempotency key). Re-judge only if the caption changes.

## Step 1 — Extract every concrete claim
From `Draft Caption` (and any implied by `Format`), pull a structured list. A *concrete claim* is anything a reader could hold us to. Categories:
1. **Named dish** — any specific food item ("our beef shin", "cheesecake").
2. **Named drink** — any specific cocktail / drink.
3. **Price** — any figure presented as a price ("£4.20", "just a fiver").
4. **Offer** — any deal / discount / bundle / "free …" / "2-for-1".
5. **Opening day/time** — any "open …", "every day", "til late", named days/hours.
6. **Awareness-day / date tie-in** — "National Sourdough Day", "this Friday".
7. **Heritage / "did you know" fact** — any historical or factual assertion about the Globe / Laugharne.
8. **Implied asset** — the FORMAT or wording implies a thing must exist: a video/Reel ("watch…", Format = Reel), a review/quote ("our guests say…"), a named offer/link.
Ignore pure mood/adjectives ("cosy", "golden crust") — not checkable, not a claim.

## Step 2 — Verify each claim against the live base
| Claim type | Verify against | PASS condition |
|---|---|---|
| Named dish | Cook Book `tblDyNXhcE7PmoLV6` | a row whose `Dish` matches (fuzzy/singular-plural OK) **AND** `Status` = **On menu** |
| Named drink | Drinks `tblgOSEMO7DremfWg` | a row whose `Drink` matches **AND** `Status` = **On menu** |
| Price | the matched dish/drink row | the number equals that row's `Selling price` / `Menu price` (no invented figures) |
| Offer | a defined offer | must correspond to a real, currently-defined offer. **No offer source table exists yet → treat ALL offer claims as UNVERIFIABLE → HOLD** (until an Offers table is added) |
| Opening day/time | **Venue constants** (below), by Venue | must match the confirmed hours for that venue. Globe: **Tue–Sat**, open from **12**, kitchen from **5**. Bakery: **8:30–2**. FAIL on "every day", any Mon/Sun, "counter opens at eight" (it's 8:30), or any time outside the constant |
| Awareness-day / date | the caption's own date vs claim | the named day must be real and match the row's `Date`; a "this Friday" must resolve to the correct date. If it can't be confirmed → HOLD |
| Heritage / "did you know" | Research — Facts `tbloFM9ZTeT4LeSVQ` | a `Claim` that supports it with `Status` = **Verified** or **Verified-strong** |
| Implied asset | the row itself | the asset must exist: Reel/video ⇒ `Ready Image URL`/`Linked Media` is actually a video, not a stock photo; a quoted review ⇒ a real source; a link/offer ⇒ it resolves. Can't confirm ⇒ HOLD |

**Every claim is checked on its own.** A caption with five heritage facts needs five Verified matches; a single `Linked Fact` covering some of them does NOT clear the others. Extract all, verify each, HOLD if any one fails. (The "hundred lives" caption carries ~5 heritage claims — hotel, coach station, butcher's + abattoir, auction room, bank — each must land.)

Matching notes: prefer the row's existing `Linked Dish` / `Linked Drink` / `Linked Fact` links when present (the Writer may have set them) but STILL confirm the linked row's Status. Never pass a dish/drink that is Draft, Tested or Retired. Case- and plural-insensitive name match; if genuinely ambiguous, HOLD rather than guess.

## Step 3 — Verdict + write-back (idempotent)
- **All claims verified** → `Accuracy verdict` = **PASS**. Leave `Accuracy note` blank.
- **ANY claim unverifiable** → `Accuracy verdict` = **Needs-human / accuracy hold**, and write `Accuracy note` with the offending claim(s) and why, one per line, e.g.
  `HOLD: "cheesecake" — no Cook Book dish 'cheesecake' with Status On menu.`
  `HOLD: "open every day" — hours are Tue–Sat only.`
- A HOLD row is **never auto-eligible**. It sits for a human to fix the caption (which clears the verdict and re-runs) or to override deliberately.

## The judge (LLM) prompt — structured, one call per row
Give the model the Draft Caption + the row Date + a compact list of {on-menu dishes, on-menu drinks, verified facts, the fixed opening hours} pulled from the base, and require JSON back:
```
System: You are a fact-checker for a Welsh wine bar & bakery. You verify ONLY what is
provable from the DATA provided. You never assume a claim is fine because it "sounds
plausible". If a concrete claim is not supported by the DATA, it FAILS. Adjectives and
mood are not claims.
Return JSON: { "claims": [ { "text": "...", "type": "dish|drink|price|offer|hours|
awareness_day|heritage|asset", "supported": true|false, "evidence": "row/id or reason" } ],
"verdict": "PASS" | "HOLD", "note": "one line per failed claim, else empty" }
Rule: verdict = PASS only if every claim.supported = true. Otherwise HOLD.
```
Do the actual table lookups in code (exact Status match) and let the LLM handle extraction + fuzzy name matching — but the FINAL supported/unsupported for dishes, drinks, prices and facts is decided by the code's Status check, not the model's opinion. The model proposes; the base disposes.

## Guardrails (non-negotiable)
- **Hold, never post; hold, never edit.** This layer only sets a verdict. It does not rewrite captions and it cannot make a row post.
- **Unknown = HOLD, not PASS.** Any claim we can't positively verify (no source table, ambiguous match, can't resolve a date) holds. Fail safe.
- **The human gate stays.** PASS makes a row *eligible*; Alys still picks, and the publisher still needs Selected/Approved. Nothing about this bypasses a person.
- **Don't touch** `Alys note`/`Alys day note`, and don't flip `Posted` or `Selected`.

## Wiring into the publisher (see make-daily-content-ideas-scenario.md)
Add `Accuracy verdict` (`fldG1y832vqNxOnmu`) = **PASS** to the publisher's eligibility filter, AND-ed with the existing conditions (Posted=false, Selected OR Approved-for-future, image+caption present, within Post-on/Post-by window). A row with no verdict or a HOLD verdict can never be picked up by the 3×/day publisher.

## Venue constants (the non-table facts the judge checks days/times/address against)
Days/times/address aren't in a lookup table — feed them to the judge as fixed constants:
- **The Globe:** open **Tue–Sat**; front open from **12**; kitchen from **5**. Closed Mon & Sun. (Address to confirm — the moules caption says "Duncan Street"; add the confirmed street here so address claims can be checked.)
- **The Globe Bakery:** **8:30–2**. (So "counter opens at eight" is WRONG — fail it.)
Keep these in one place (a config row or the scenario) so a change is one edit, not a code hunt.

## Live-base state at build (31 Jul) — two real gaps that currently force HOLD (fail-safe, but know them)
1. **No drink is Status "On menu" yet** — the Drinks table returned **0** On-menu rows. So *every* drink/price claim HOLDs today, including a correct "cocktails £8.50", because there's no On-menu record to check against. Promote the live cocktails to `On menu` and this clears.
2. **No Offers source exists** — "2 for £12 Cocktail Hour" has nowhere to verify, so all offer claims HOLD. Add a small Offers list (name · price · valid from/to) to fix.
Both are the judge working correctly (unknown = HOLD), not bugs — but they mean drink/price/offer posts won't pass until the sources exist.

## Decisions for Dominic
1. **Draft "coming soon" tease** — a dish/drink at Status `Draft` (e.g. the Towy sewin special) currently HOLDs. Do you want to ALLOW a clearly-worded "coming soon / on soon" tease of a Draft item, or ALWAYS HOLD until it's `On menu`? (Default as built = always HOLD.)
2. **Offers + drink prices** — add an Offers list and set live cocktails to `On menu` so price/offer posts can pass (see gaps above).
3. **Confirm the Globe's street** for the address constant.

## PROOF — 5 cases run against the live base (31 Jul), before switch-on
| # | Row / caption | Claims checked | Result | Expected |
|---|---|---|---|---|
| 1 | `recIcqn7had6I0oIc` "Cheesecake tomorrow… Counter opens at eight." | dish **cheesecake** → 0 Cook Book matches (invented); time **"opens at eight"** → bakery is 8:30 | **HOLD** (two flags) | HOLD ✓ |
| 2 | `recbZ6KnkO1gjuA2S` "Mussels… Duncan Street, from 5." | dish **Moules Marinière** (`recMitoMP3osgC7ky`) = **On menu** ✓; **"from 5"** = Globe kitchen-from-5 ✓ (address "Duncan St" → add to constants) | **PASS** | PASS ✓ |
| 3 | `recG0eGhMP1gzsa4O` "hundred lives — hotel, coach station, butcher's+abattoir, auction room, bank" | all 5 heritage claims covered by Verified fact `recc8wPztm8hNMy4Q` (Status **Verified**) | **PASS** | PASS ✓ |
| 4 | Draft-special tease "on tonight: whole Towy sewin…" | dish **sewin** (`recVh8c1Ew5adYrNH`) = **Draft**, not On-menu | **HOLD** | HOLD ✓ |
| 5 | Invented price "all cocktails £5 tonight" | price claim → no On-menu drink / no offers source validates it | **HOLD** | HOLD ✓ |

**All five land as expected — the judge is solid.** Note cases 4 & 5 also confirm the two gaps above: Draft items and any price/offer HOLD until their sources are made live.
