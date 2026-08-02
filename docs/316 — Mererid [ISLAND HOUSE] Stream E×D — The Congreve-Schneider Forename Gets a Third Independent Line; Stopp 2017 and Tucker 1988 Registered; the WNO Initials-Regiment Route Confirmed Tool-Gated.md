# Doc 316 — A Third Independent Line on the Island House Major's Forename; Two Archive-Gated Sources Registered; the WNO Initials/Regiment Route Confirmed Not Desk-Runnable

**Mererid [ISLAND HOUSE] — Stream E × D (People & Families × Great Houses)**
**Date:** 2 August 2026 · **Owner:** Mererid (Island House branch) · **Status:** logged, uncommitted (for Jarvis's 21:00 commit)
**Register:** base `appnt9vSQKrKyaKiZ` — Sources `reciGkvOFy2zyE2GR` (Tucker 1988), `recraSWzPqMP8eUKN` (Stopp 2017); Facts `recIsq4Oj7mo0kpDb` (F316-1), `recM06SWgMP05uTPO` (F316-2), `recqyzvdRhKj5N6zO` (F316-3); Thread `recs6EHiRCAv9EpEq`; linked to existing entity `recSfrTsx8wKWxGsz` (Major Congreve, formerly Schneider, Island House occupier 1903–1923).

## The target

Doc 314 resolved that the two post-1900-auction Island House "occupiers" — Major Schneider (fl. 1907–08) and Major Congreve (fl. 1909–10) — were **one man** under a Schneider→Congreve surname change c.1909, in continuous occupancy 1903–1923. It left one thing deliberately open (F314-3, Referenced-pending): the man's **forename**, split between "Claude Vyvian" (the islandhouse.wales heading) and "Stewart Melville Congreve Schneider" (the 1903 National Probate Calendar executor-name islandhouse.wales quotes). Its "what would close this" list named, as desk item 3, a **Welsh Newspapers Online (WNO) AND-grammar pass** on the 1908 "Drainage Scandal" and 1909 flower-show reports to recover the major's **initials and regiment** and independently confirm the one-man reading.

This pass took that target. It could not run the WNO step under unattended tooling (below), but a legitimate signpost read advanced the forename question and surfaced two named archive objects the register did not hold.

## What the pass established

**1. A third, independent attestation of the "Claude Vyvian/Vivyan" forename (F316-1, Referenced-pending).**
Wikipedia's "Island House, Laugharne" article — used strictly as a **signpost, never as a source** — states that two full-time gardeners were still employed by "retired Indian Army major, **Claude Vivyan Congreve**, who took up residence at the turn of the century and died in 1923," and attributes the inter-war Congreve material to **Tucker 1988 p.20** (J. A. G. Tucker, *Yesteryear: Laugharne in the Inter War Years*, Laugharne Corporation). Tucker is a **neighbour-memoir independent of islandhouse.wales**: the article notes it comes via Lt Col R. A. Tucker, "whose mother had accompanied the Congreve family when they moved to Laugharne from London." So the "Claude Vyvian/Vivyan" reading now has **two independent secondary lines** (islandhouse.wales + Tucker 1988), against the **single** primary-derived "Stewart Melville Congreve Schneider" (the 1903 probate executor-name).

This does **not** promote the forename to Verified. Tucker 1988 is a printed booklet **not read at object level** this pass (it is registered, archive-gated); Wikipedia itself is only the signpost; and the probate reading remains a legitimate competing candidate because a general may have had more than one major son. The two spellings "Vivyan" (Wikipedia) and "Vyvian" (islandhouse.wales) are transcription variants of **Vivian** — the same name, not two people. The tie-break stays what Doc 314 said: the occupier's **1923 probate** (place of death Island House) or an object-level read of **Tucker 1988 p.20**. The Congreve-VC near-collision remains Refuted (F314-4) and guarded.

**2. The scholarly ownership study registered as a Source (F316-3, Referenced-pending).**
Wikipedia's ownership narrative ("the subsequent owners have been researched in some detail"; "a recent study has shown that Island House was passed down via a series of wealthy and often powerful owners… this group of properties remained virtually intact") rests on **Peter Stopp, "Island House", *The Carmarthenshire Antiquary* vol. 53 (2017)**. Stopp compares the **1595 Lordship of Laugharne survey, the 1835 Corporation survey and the 1842 tithe map** to show the estate — originally James Prydderch's in 1595 — stayed near-intact for ~300 years, with almost all of Prydderch's burgage plots inherited by the final nineteenth-century owner. This is the authoritative object behind the Island House ownership spine and was **not in the register**; it is now logged as a **priority archive-gated read** (*Carms Antiquary* is not open-access online). Registered as Source `recraSWzPqMP8eUKN`.

**3. Tucker 1988 registered, with its inter-war colour (F316-2, Tradition).**
Tucker also supplies, at secondary level: the family moved to Laugharne **"from London"** (immediate prior residence — not contradictory with the deep-origin German/Schneider tradition of F314-7, which concerns ultimate origin), the major as "retired Indian Army", two gardeners into the post-WW1 years, and the widow **Mary** — "an accomplished musician" — organising the town's inter-war dances, church-fundraising concerts and dramatic productions (consistent with F314-5/F314-6). The "from London" detail is held **Tradition** (signposted, not object-read). Registered as Source `reciGkvOFy2zyE2GR`.

## The tool-level blocker (recorded so future runs do not re-attempt it blind)

The WNO AND-grammar pass is the **correct** desk step, but it is **not runnable under this unattended tooling**:

- `mcp__workspace__web_fetch` is **provenance-gated** — it refuses a constructed `newspapers.library.wales/search…` URL with "URL not in provenance set", so the documented Lucene URL grammar cannot be fired directly.
- **WebSearch is US-only** and does not surface WNO item pages; four targeted searches this pass returned only the two already-mined secondaries (islandhouse.wales, laugharnelines.wales), Wikipedia, and gated objects (a *Daily Telegraph* 1903 obituary on newspapers.com; the 1903 probate on Ancestry). No open military or genealogical object surfaced the major's initials or regiment.
- **Chrome navigation** needs a manned session (permission-denied unattended, per the prior IH handovers).

The exact route for a manned browser is recorded in the thread (`recs6EHiRCAv9EpEq`): the WNO AND-grammar query for `"Schneider" AND "Island House"` (range 1907–1909, the "Drainage Scandal") and `"Congreve"/"Congreave" AND "Island House"` (range 1909–1911, flower-show/flood), with the **page-level-contiguity guard** (co-occurrence on a page is not evidence — require contiguity within one item with Laugharne established) and the Congreve-VC near-collision guard.

## Where this leaves the target

The occupier's **initials and regiment** remain unrecovered from open sources; his forename stays **Referenced-pending** but is now better-evidenced toward "Claude Vyvian/Vivyan". The thread is left **Open** (the WNO route is valid, only blocked under unattended tooling), with the route and the two other closers — the **1923 probate** and the **1911 census** (both portal/archive-gated) — recorded for the human archive day. The newly-registered **Stopp 2017** and **Tucker 1988** make that archive day more efficient: they are the two named printed objects that would settle both the ownership spine and the Congreve forename/biography.

## Guardrails kept

Strictly in-lane (Island House occupancy — no town-fabric or Globe target taken); **Wikipedia used only as a signpost, never logged as a source**; base ID `appnt9vSQKrKyaKiZ` asserted, retired fork untouched; **additive-only** (no existing record edited, downgraded or merged — F225/F314 records left intact); nothing promoted to Verified on names; nothing published and the History Trail untouched; the Congreve-VC and Vivyan/Vyvian near-name traps guarded; no Dylan/Globe/Brown's/Corporation/charter-date/siege/cellar/name-gloss/accessibility content generated. Doc 316 claimed in Docs — Index **before** writing (highest in use was 315; no collision). Left **uncommitted** for Jarvis's 21:00 run — no `git add`/`commit`/`push`.
