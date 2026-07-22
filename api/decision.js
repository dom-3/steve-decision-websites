// Capture endpoint for the front-page decisions + discussion boxes.
// Accepts { reviewer, items: [{ item, business, type, answer }] } and writes
// one Airtable row per answered item. Token lives only in Vercel env (AIRTABLE_TOKEN).

const BASE_ID = process.env.AIRTABLE_BASE || "appnt9vSQKrKyaKiZ";     // Steve Kirkwood — Build Projects (THE single register. Do NOT point this at appxcYrYaYy1kwB0m — that is a RETIRED fork.)
const TABLE   = process.env.AIRTABLE_DECISIONS_TABLE || "Decisions & Discussion";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  if (req.method !== "POST") { res.status(405).json({ ok: false, error: "Method not allowed" }); return; }

  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    res.status(503).json({ ok: false, error: "not_configured", message: "AIRTABLE_TOKEN is not set in Vercel yet." });
    return;
  }

  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};

  const clean = (v, n) => (v == null ? "" : String(v)).slice(0, n || 100000).trim();
  const reviewer = clean(b.reviewer, 40) || "Steve";
  const stamp = new Date().toISOString();

  const items = Array.isArray(b.items) ? b.items : [];
  const records = [];
  for (const it of items) {
    const answer = clean(it && it.answer, 8000);
    const item = clean(it && it.item, 200);
    if (!answer || !item) continue;              // skip blanks
    const fields = { "Item": item, "Answer / Notes": answer, "Reviewer": reviewer, "Logged at": stamp };
    if (clean(it.business)) fields["Business"] = clean(it.business, 60);
    if (clean(it.type))     fields["Type"]     = clean(it.type, 40);
    records.push({ fields });
  }

  if (!records.length) { res.status(400).json({ ok: false, error: "no_items" }); return; }

  try {
    const url = "https://api.airtable.com/v0/" + BASE_ID + "/" + encodeURIComponent(TABLE);
    // Airtable allows max 10 records per create request.
    let created = 0;
    for (let i = 0; i < records.length; i += 10) {
      const chunk = records.slice(i, i + 10);
      const r = await fetch(url, {
        method: "POST",
        headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
        body: JSON.stringify({ records: chunk, typecast: true })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) { res.status(502).json({ ok: false, error: "airtable_error", status: r.status, detail: data, created }); return; }
      created += (data.records || []).length;
    }
    res.status(200).json({ ok: true, created });
  } catch (err) {
    res.status(500).json({ ok: false, error: "server_error", message: String(err && err.message || err) });
  }
}
