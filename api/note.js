// Secure capture endpoint for the Steve Kirkwood decision portal.
// The live site POSTs a website note here; this function writes it to Airtable.
// The Airtable token lives ONLY in a Vercel Environment Variable (AIRTABLE_TOKEN),
// never in the public page. Runs on Vercel's Node runtime (global fetch built in).

const BASE_ID   = process.env.AIRTABLE_BASE  || "appxcYrYaYy1kwB0m";       // Steve Kirkwood — Build Projects
const TABLE     = process.env.AIRTABLE_TABLE || "Website Notes";

export default async function handler(req, res) {
  // Allow simple same-origin POSTs
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    res.status(503).json({ ok: false, error: "not_configured",
      message: "AIRTABLE_TOKEN is not set in Vercel yet." });
    return;
  }

  // Vercel parses JSON bodies automatically; guard just in case.
  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};

  const clean = (v, n) => (v == null ? "" : String(v)).slice(0, n || 100000).trim();

  // Only include fields that have a value (empty single-selects would be rejected).
  const fields = {};
  const website = clean(b.website, 200);
  if (!website) { res.status(400).json({ ok: false, error: "missing_website" }); return; }
  fields["Website"] = website;

  if (clean(b.business))  fields["Business"]              = clean(b.business, 60);
  if (clean(b.verdict))   fields["Verdict"]               = clean(b.verdict, 40);
  if (clean(b.good))      fields["What's good"]           = clean(b.good, 8000);
  if (clean(b.borrow))    fields["Use / Borrow"]          = clean(b.borrow, 8000);
  if (clean(b.change))    fields["Would change / avoid"]  = clean(b.change, 8000);
  if (clean(b.notes))     fields["Notes"]                 = clean(b.notes, 8000);
  if (clean(b.reviewer))  fields["Reviewer"]              = clean(b.reviewer, 40);
  fields["Logged at"] = new Date().toISOString();

  try {
    const url = "https://api.airtable.com/v0/" + BASE_ID + "/" + encodeURIComponent(TABLE);
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ records: [{ fields }], typecast: true })
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      res.status(502).json({ ok: false, error: "airtable_error",
        status: r.status, detail: data });
      return;
    }
    res.status(200).json({ ok: true, id: (data.records && data.records[0] && data.records[0].id) || null });
  } catch (err) {
    res.status(500).json({ ok: false, error: "server_error", message: String(err && err.message || err) });
  }
}
