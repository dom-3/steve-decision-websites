# For Bob — make.com: publish Alys's daily picks to Instagram + Facebook

*From Jarvis · 30 Jul 2026. Alys now chooses the day's posts on `theglobe.wales/daily`. Her pick sets **Selected** on the **Daily Content Ideas** table. We need a make.com scenario that watches that and posts to the channels. This is a NEW scenario, separate from (and does not replace) the staff-photo scenario on the Daily Posts table.*

## The one-line ask
Build a make.com scenario that: **watch Daily Content Ideas where `Selected` = true AND `Posted` = false → post the Draft Caption + Ready Image URL to the row's channels (Instagram / Facebook) → set `Posted` = true.**

## Base / table
- Base: `appnt9vSQKrKyaKiZ`
- Table: **Daily Content Ideas** — `tblRCua7jlKaRIyid`

## Trigger (Airtable → Watch Records)
Filter to only fire on Alys's live picks that haven't gone out yet:
- **`Selected`** (`fldXpHWuLgSyycsF4`) = **true** — her pick
- **`Posted`** (`fld73K8WOt1WIcKYN`) = **false** — not already published
- (safety) **`Ready Image URL`** not empty and **`Draft Caption`** not empty

## Fields to post
- **Image** → **`Ready Image URL`** (`fldIkGyGDddZO4K8V`) — the finished, watermarked, correctly-sized image.
- **Caption / words** → **`Draft Caption`** (`fldr4d7yQ1ODqAUO4`) — read it **fresh at post time**: Alys can edit the wording on the page and it saves back here, so this field is always the final copy.
- **Channels** → **`Suggested Channel`** (`fld4JQsGIdcQBQhVk`), a multi-select containing `Instagram` and/or `Facebook` — post to each channel listed.
- **Account routing** → **`Venue`** (`fldWy239DccDDn7Mb`) = `The Globe` or `The Globe Bakery` — use it to pick the correct IG/FB account/page if they differ per venue.

## After a successful post
- Set **`Posted`** (`fld73K8WOt1WIcKYN`) = **true** on that row. (This + the trigger filter = nothing is ever posted twice.)

## Do NOT
- Do **not** post the internal fields: `Alys note` (`fldxiME4S6b5nv9dL`) or `Alys day note` (`fldT59SczFtmgadwc`) — those are private feedback for us.
- Do **not** touch `Saved for later` (`fldS7X2c2ASbRjbF9`) rows — those are backlog, not picks.
- Leave the existing **Daily Posts** scenario (`Approved — POST THIS`) alone — that's the separate staff-photo path.

## ⚠️ Before you switch it on
There are already **3 rows sitting with `Selected` = true, `Posted` = false** (Dominic's test picks from today: "Globe's hundred lives", "cheesecake tomorrow", "moules marinière"). The moment the scenario goes live, **those 3 will publish**. So either:
- leave them if you're happy for them to be the first real posts, or
- reset them first (untick `Selected`, or tick `Posted`) so they're skipped.
Confirm with Dominic which, before enabling.

## The test
Tick `Selected` on one row (Posted off) → within the scenario's interval it posts to the listed channels → `Posted` flips to true → it does not post again. That's the whole loop: Alys picks on the site → it's live on IG + FB.
