# Connect the portal to Airtable (one-time, ~4 minutes)

Everything Steve does — website notes on the lookbook cards, and the decisions/discussion
on the front page — saves into your Airtable base **"Steve Kirkwood — Build Projects"**
(a fresh base, nothing shared with HouseComply).

The site talks to Airtable through two tiny functions in `/api`. The only secret — your
Airtable token — lives in Vercel's settings, **never in the web page**. You set it once.

Until you do this, nothing breaks: Steve's notes just fall back to a **Copy / Email** button
so nothing is ever lost.

---

## Step 1 — Create an Airtable token (the key)

1. Go to **https://airtable.com/create/tokens** (log in as you).
2. Click **Create new token**.
3. Name: `Steve portal`.
4. **Scopes** → add **`data.records:write`** AND **`data.records:read`**.
   *(Read is needed so the Work Log and Business dashboard pages can display what's saved.)*
5. **Access** → **Add a base** → choose **Steve Kirkwood — Build Projects**.
6. Click **Create token**, then **copy** the token it shows (starts with `pat...`).
   Copy it now — Airtable only shows it once.

## Step 2 — Put the token into Vercel (once)

1. In Vercel, open the **steve-decision-websites** project.
2. **Settings → Environment Variables**.
3. Add one:
   - **Key:** `AIRTABLE_TOKEN`
   - **Value:** *(paste the `pat...` token)*
   - Environments: leave all ticked (Production/Preview/Development).
4. **Save**.

*(The base ID and table names are already baked into the functions, so `AIRTABLE_TOKEN`
is the only variable you need.)*

## Step 3 — Redeploy

Push the updated files (Step 4 below) — Vercel redeploys automatically and picks up the token.
Or in Vercel → **Deployments → … → Redeploy**.

That's it. Test it: open the live site, on a lookbook hit **✎ My notes**, save one — it should
say **"✓ Saved to Airtable"**, and the row appears in the base.

---

## Step 4 — Get these updated files live

These files replace what's in your `steve-decision-websites` folder (keep your hidden `.git`):

- `index.html` — rebuilt front page (the plan + architecture + decisions + discussion boxes)
- `bakery.html`, `sancler.html`, `island-house.html` — now with **✎ My notes** on every card
- `api/note.js`, `api/decision.js` — the secure Airtable writers
- `the-plan.pdf` — linked from the front page

From the folder on your Mac:

```
cd ~/steve-decision-websites          # wherever your folder is
# (copy the new files in, overwriting)
git add -A
git commit -m "Add website-notes + decisions capture to Airtable"
git push
```

Vercel redeploys on push. Done.

---

## What lands in Airtable

**Table "Website Notes"** — one row per website Steve reacts to: Website, Business, Verdict
(Love it / Like it / Mixed / Not for us), What's good, Use / Borrow, Would change / avoid,
Notes, Reviewer, Logged at.

**Table "Decisions & Discussion"** — one row per decision or discussion box from the front
page: Item, Business, Type (Decision / Discussion), Answer / Notes, Reviewer, Logged at.
