// Work Log endpoint — GET lists the log (newest first), POST adds a day's round-up.
// Reads/writes the Airtable "Work Log" table. Token lives only in Vercel env (AIRTABLE_TOKEN).
// NOTE: GET needs the token to have data.records:read scope (as well as :write).

const BASE_ID = process.env.AIRTABLE_BASE || "appnt9vSQKrKyaKiZ";
const TABLE   = process.env.AIRTABLE_WORKLOG_TABLE || "Work Log";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) { res.status(503).json({ ok: false, error: "not_configured" }); return; }
  const base = "https://api.airtable.com/v0/" + BASE_ID + "/" + encodeURIComponent(TABLE);

  try {
    if (req.method === "GET") {
      const url = base + "?pageSize=100&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc";
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
      if (clean(b.title))        fields["Title"]        = clean(b.title, 200);
      if (clean(b.date))         fields["Date"]         = clean(b.date, 30);
      if (clean(b.summary))      fields["Summary"]      = clean(b.summary, 400);
      if (clean(b.achievements)) fields["Achievements"] = clean(b.achievements, 8000);
      if (clean(b.report))       fields["Report"]       = clean(b.report, 20000);
      if (Array.isArray(b.projects) && b.projects.length) fields["Projects"] = b.projects;
      if (b.hours != null && b.hours !== "") fields["Hours"] = Number(b.hours) || 0;
      if (clean(b.by))           fields["By"]           = clean(b.by, 40);
      if (!fields["Title"] && !fields["Summary"] && !fields["Achievements"]) { res.status(400).json({ ok: false, error: "empty" }); return; }
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
