# IH-291 — The Caleb Rees Household at Island House (1943–70)

**Branch:** Island House (Mererid) · **Stream:** D × E (Great Houses × People & Families)
**Date:** 30 July 2026 · **Author:** Mererid (scheduled, unattended run)
**Base asserted:** `appnt9vSQKrKyaKiZ` (retired fork never touched)
**Thread:** `recor8Q5oXo74kiNh` — "[Island House] Firm up the Caleb Rees household (1943–70): Dr Laura Powell + the Caleb Morris descent"
**Status of doc:** written to repo, **LEFT UNCOMMITTED** for Jarvis's 21:00 path-scoped commit (no `git add`/`commit`/`push` performed).

---

## Target

Caleb Rees (1883–1970), Deputy Chief Inspector of Schools for Wales, occupied Island House, Laugharne, from 1943 until his death in 1970 — one of the best-documented twentieth-century occupants of the house (his whole career was recovered at Doc 78). Two elements of the *household* were asserted in our synthesis but were **not yet sourced Facts** in the register:

1. **Dr Laura Powell**, his wife — described in synthesis as a "Medical Officer, Welsh Board of Health," but with no entity and no sourced fact; and
2. the **Caleb Morris descent** — the claim that the celebrated London preacher Caleb Morris (1800–65) was Caleb Rees's great-grandfather.

Both are testable against a clean, open, rate-limit-independent object: the **Dictionary of Welsh Biography** article on Caleb Rees.

## Object read

**Dictionary of Welsh Biography — REES, CALEB (1883–1970), inspector of schools and author**, by Dr Mary Auronwy James (published 2001), `biography.wales/article/s2-REES-CAL-1883`. Read in full at object level (National Library of Wales, open access). Tier **T2 secondary**, Kind **Biographical dictionary**, Read.

## Five-line finding

1. **LAURA — CLOSED (Verified).** Caleb Rees's wife was **Laura Gertrude Rees (née Powell)**, whom DWB describes as **"medical officer of the Board of Health at Cardiff."** This is her first appearance in the register as a named entity with a sourced fact; previously she was only "Laura" in a note on the Caleb Rees entity. New entity `reckQ0jH67UIdIK6B`; Fact `rec3N5Z1z5GkgUr5K`.

2. **MARRIAGE (Verified).** They married at **City Road chapel (Welsh Methodist), London, on 28 August 1922** (Fact `recdcbTNjtvbabrKQ`).

3. **PRIOR HOME + RETIREMENT (Verified).** Before Island House they made their home at **28 Clytha Park Road, Newport, Monmouth**; Caleb **retired to Island House, Laugharne, in 1943** (Fact `rec6k2Fh2BDHZdg0P`) — a second independent object corroborating the existing residence fact `recIivIcGz8YtFFhg`.

4. **POST-RETIREMENT (Verified).** Though retired in 1943, **three years later (c.1946)** he was recalled to the task of **interviewing young men — many of them ex-servicemen — for entry to the teaching profession** (Fact `recqoN7MEYfV6tp7S`), an activity dated from the Island House years.

5. **MORRIS DESCENT — tested, UNSOURCED at DWB (Verified negative).** The DWB biography names **no great-grandfather**; the only ancestor it mentions is **"his great-uncle who emigrated to America"** (the subject of Rees's 1933 *Y Llenor* story). The tradition that **Caleb Morris (1800–65) was Caleb Rees's great-grandfather** is therefore **not corroborated at DWB object level** (Fact `recsiIl5F7kr6o8uJ`). This does not disprove the descent — it may rest on *Who's Who in Wales* or a family record — but it is not sourced where one would most expect it.

**Death dates confirmed:** Laura died **1 January 1970**; Caleb died **9 January 1970** (eight days later).

## Records added (additive; chain intact; search-before-create done)

- **Source (1 new):** `recFHa8BzmuQ6XGYg` — DWB "REES, CALEB (1883–1970)" (Mary Auronwy James, 2001), T2, Biographical dictionary, Read.
- **Entity (1 new):** `reckQ0jH67UIdIK6B` — **Laura Gertrude Rees (née Powell)**, Person, Verified, Streams D + E, linked to the DWB source and (via facts) to Caleb Rees.
- **Facts (5 new, all Verified):** `rec3N5Z1z5GkgUr5K` (Laura identity/profession/residence); `recdcbTNjtvbabrKQ` (1922 marriage); `rec6k2Fh2BDHZdg0P` (28 Clytha Park Road → 1943 Island House); `recqoN7MEYfV6tp7S` (c.1946 recall to interviewing); `recsiIl5F7kr6o8uJ` (DWB negative on the Morris great-grandfather descent). Each chained to the relevant entity/entities + the DWB source + the thread.
- **Reused, not duplicated:** Caleb Rees entity `recf1JpERHDjJBYdz`; Caleb Morris entity `recMEhveStO0VAvR6`. Existing Caleb Morris great-grandfather fact `recX7Ysirft1smA8S` **left untouched** (additive-only); flagged in the negative fact's note for human review of its Verified-strong tier.
- **Thread `recor8Q5oXo74kiNh`** left **Open** with findings recorded and the new entity + five facts linked.

## Guardrails observed

Strictly in-lane — a house occupant and his household. No Dylan / Brown's / Globe / Corporation / Castle material; no charter date, siege figure, name-gloss, cellar dating, corporation formula or accessibility claim invoked. DWB's phrasing quoted exactly ("medical officer of the Board of Health at Cardiff") rather than the looser synthesis wording ("Welsh Board of Health"). Nothing published; the public History Trail was not touched. Additive-only; no other desk's records edited.

## Next targets / spin-offs

- **Source the Morris great-grandfather descent** via *Who's Who in Wales* (1937) — a DWB-cited source that may be findable — and the census/GRO. Until then the descent stays **unsourced at object level**.
- **Obituaries:** *Cardigan and Tivyside Advertiser*, 16 & 23 January 1970 (Laura and Caleb) — via Welsh Newspapers Online if in range, otherwise an archive-day order.
- **Test Dr Laura Powell's** "medical officer of the Board of Health at Cardiff" appointment against the medical registers / Welsh press for dates and detail.
