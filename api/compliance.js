// Compliance endpoint — GET returns Karen's compliance register (+ optional
// audit-trail log) from the SEPARATE "The Globe — Compliance Register" Airtable
// base, so management sees it inside the operating dashboard.
//
// Same env pattern as api/worklog.js: base id from an env var with a hard-coded
// fallback. Set COMPLIANCE_BASE in Vercel to override without a code change.
// Token lives only in Vercel env (AIRTABLE_TOKEN) and needs data.records:read.
//
// Shape returned (the operating dashboard is built to this):
//   { ok:true, source:"live", generatedAt, register:[ Obligation ], log:[ Check ] }
//   Obligation = { id, obligation, category, evidence, cadence, owner,
//                  legalRisk, status, nextDue, notes }
//   Check      = { id, date, obligation, action, by, result, notes }
// When AIRTABLE_TOKEN isn't set the endpoint returns 503 {ok:false,
// error:"not_configured"} and the dashboard falls back to its embedded sample
// (tile shows "live once connected").

const BASE_ID   = process.env.COMPLIANCE_BASE       || "app6BCc0DiiitHadM";
const TABLE     = process.env.COMPLIANCE_TABLE      || "Compliance Register";
const LOG_TABLE = process.env.COMPLIANCE_LOG_TABLE  || "Check Log";

const F = { // field names in Karen's register (rename here if the base changes)
  obligation: "Obligation",
  category:   "Category",
  evidence:   "Evidence required",
  cadence:    "Cadence",
  owner:      "Owner",
  legalRisk:  "Legal risk",
  status:     "Status",
  nextDue:    "Next due",
  notes:      "Provider / Notes",
};

function val(v) {                       // Airtable REST returns single-selects as
  if (v == null) return "";             // strings already; guard objects/arrays too
  if (Array.isArray(v)) return v.map(val).filter(Boolean).join(", ");
  if (typeof v === "object") return v.name || v.text || "";
  return String(v);
}

async function fetchTable(table, token, query) {
  const url = "https://api.airtable.com/v0/" + BASE_ID + "/" + encodeURIComponent(table) + (query || "");
  const r = await fetch(url, { headers: { Authorization: "Bearer " + token } });
  const data = await r.json().catch(() => ({}));
  return { ok: r.ok, status: r.status, data };
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  if (req.method !== "GET")     { res.status(405).json({ ok: false, error: "method_not_allowed" }); return; }

  const token = process.env.AIRTABLE_TOKEN;
  if (!token) { res.status(503).json({ ok: false, error: "not_configured" }); return; }

  try {
    // Register — sort by Next due ascending so "what's due next" is ready to read
    const q = "?pageSize=100&sort%5B0%5D%5Bfield%5D=" + encodeURIComponent(F.nextDue) + "&sort%5B0%5D%5Bdirection%5D=asc";
    const reg = await fetchTable(TABLE, token, q);
    if (!reg.ok) { res.status(reg.status === 403 ? 403 : 502).json({ ok: false, error: "airtable_error", status: reg.status, detail: reg.data }); return; }

    const register = (reg.data.records || []).map(function (rec) {
      const f = rec.fields || {};
      return {
        id:        rec.id,
        obligation: val(f[F.obligation]),
        category:   val(f[F.category]),
        evidence:   val(f[F.evidence]),
        cadence:    val(f[F.cadence]),
        owner:      val(f[F.owner]),
        legalRisk:  val(f[F.legalRisk]),
        status:     val(f[F.status]),
        nextDue:    val(f[F.nextDue]),
        notes:      val(f[F.notes]),
      };
    });

    // Audit trail — optional table; absent today, so failures degrade to []
    let log = [];
    try {
      const lg = await fetchTable(LOG_TABLE, token, "?pageSize=100");
      if (lg.ok) {
        log = (lg.data.records || []).map(function (rec) {
          const f = rec.fields || {};
          const pick = (keys) => { for (const k of keys) if (f[k] != null) return val(f[k]); return ""; };
          return {
            id:         rec.id,
            date:       pick(["Date", "When", "Checked on"]),
            obligation: pick(["Obligation", "Item", "Check"]),
            action:     pick(["Action", "Check", "What was done", "Detail"]),
            by:         pick(["By", "Who", "Checked by", "Owner"]),
            result:     pick(["Result", "Outcome", "Status"]),
            notes:      pick(["Notes", "Note", "Comment"]),
          };
        });
      }
    } catch (e) { /* no log table yet — leave empty */ }

    res.status(200).json({ ok: true, source: "live", generatedAt: new Date().toISOString(), register, log });
  } catch (err) {
    res.status(500).json({ ok: false, error: "server_error", message: String((err && err.message) || err) });
  }
}
