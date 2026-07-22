// Business endpoint — GET lists business items, POST adds one.
// Reads/writes the Airtable "Business" table. Token only in Vercel env (AIRTABLE_TOKEN).
// GET needs the token to have data.records:read scope.

const BASE_ID = process.env.AIRTABLE_BASE || "appnt9vSQKrKyaKiZ";
const TABLE   = process.env.AIRTABLE_BUSINESS_TABLE || "Business";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) { res.status(503).json({ ok: false, error: "not_configured" }); return; }
  const base = "https://api.airtable.com/v0/" + BASE_ID + "/" + encodeURIComponent(TABLE);

  try {
    if (req.method === "GET") {
      const url = base + "?pageSize=100&sort%5B0%5D%5Bfield%5D=Updated&sort%5B0%5D%5Bdirection%5D=desc";
      const r = await fetch(url, { headers: { Authorization: "Bearer " + token } });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) { res.status(r.status === 403 ? 403 : 502).json({ ok: false, error: "airtable_error", status: r.status, detail: data }); return; }
      const items = (data.records || []).map(rec => Object.assign({ id: rec.id }, rec.fields));
      res.status(200).json({ ok: true, items });
      return;
    }
    if (req.method === "POST") {
      let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = {}; } } b = b || {};
      const clean = (v, n) => (v == null ? "" : String(v)).slice(0, n || 8000).trim();
      const fields = {};
      if (clean(b.item))    fields["Item"]    = clean(b.item, 200);
      if (clean(b.type))    fields["Type"]    = clean(b.type, 40);
      if (clean(b.status))  fields["Status"]  = clean(b.status, 40);
      if (clean(b.notes))   fields["Notes"]   = clean(b.notes, 8000);
      if (clean(b.owner))   fields["Owner"]   = clean(b.owner, 40);
      if (clean(b.updated)) fields["Updated"] = clean(b.updated, 30);
      if (!fields["Item"]) { res.status(400).json({ ok: false, error: "missing_item" }); return; }
      const r = await fetch(base, { method: "POST", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, body: JSON.stringify({ records: [{ fields }], typecast: true }) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) { res.status(502).json({ ok: false, error: "airtable_error", detail: data }); return; }
      res.status(200).json({ ok: true, id: (data.records && data.records[0] && data.records[0].id) || null });
      return;
    }
    res.status(405).json({ ok: false, error: "method_not_allowed" });
  } catch (err) {
    res.status(500).json({ ok: false, error: "server_error", message: String(err && err.message || err) });
  }
}
