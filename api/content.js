// Content Engine — staff photo capture endpoint.
// The staff upload page (globe-content.html) POSTs a photo + a few fields here;
// this function writes a row to the "Content Engine — Daily Posts" table and
// uploads the photo as an Airtable attachment. The Airtable token lives ONLY in
// a Vercel Environment Variable (AIRTABLE_TOKEN), never in the public page.
//
// Two-step, because an attachment can't be created inline with the record:
//   1. create the record with the text fields
//   2. upload the photo bytes to the "Photo (upload)" field via Airtable's
//      content-upload endpoint (base64, no public URL needed — reliable today)
//
// CLOUDINARY HOOK (future, preferred by Make.com): when Tech Guy confirms
// Cloudinary serves publicly, the pipeline will put a public URL in the body as
// `imageUrl`; we write it straight to "Image URL (public)". Nothing else here
// changes. Until then the Airtable attachment is the working route.

const BASE_ID   = process.env.AIRTABLE_BASE || "appnt9vSQKrKyaKiZ"; // Steve Kirkwood — Build Projects (THE single register; NOT the retired fork appxcYrYaYy1kwB0m)
const TABLE_ID  = "tblBMEnp6exQsN0sg";        // Content Engine — Daily Posts
const PHOTO_FLD = "fldNRQO2Kxf2PdVDa";        // Photo (upload)  (multipleAttachments)

// Exact single-select option strings (must match Airtable verbatim).
const VENUES  = ["The Globe", "The Globe Bakery"];
const CONSENT = ["No people", "Staff only — agreed", "Customers — consent obtained", "Customers — NO consent"];

function todayISODate() {
  // Date field wants YYYY-MM-DD, in the venue's local day (Europe/London).
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(new Date());
  const g = t => parts.find(p => p.type === t).value;
  return `${g("year")}-${g("month")}-${g("day")}`;
}

function prettyDate() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London", day: "numeric", month: "short"
  }).format(new Date());
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  if (req.method !== "POST") { res.status(405).json({ ok: false, error: "method_not_allowed" }); return; }

  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    res.status(503).json({ ok: false, error: "not_configured",
      message: "AIRTABLE_TOKEN is not set in Vercel yet." });
    return;
  }

  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};

  const clean = (v, n) => (v == null ? "" : String(v)).slice(0, n || 4000).trim();

  // --- validate the two things that actually gate the pipeline ---
  const venue   = clean(b.venue, 60);
  const consent = clean(b.consent, 60);
  if (VENUES.indexOf(venue) === -1) {
    res.status(400).json({ ok: false, error: "bad_venue" }); return;
  }
  if (CONSENT.indexOf(consent) === -1) {
    res.status(400).json({ ok: false, error: "consent_required",
      message: "The consent question must be answered." }); return;
  }

  const note     = clean(b.note, 500);
  const uploader = clean(b.uploader, 80);
  const title    = clean(b.title, 120) ||
    (venue + " — " + (note ? note.slice(0, 40) : "photo") + ", " + prettyDate());

  // --- 1. create the record (text fields only) ---
  const fields = {
    "Title": title,
    "Venue": venue,
    "Guests in shot?": consent,
    "Status": "New",
    "Uploaded": todayISODate(),
  };
  if (note)     fields["Staff note"]  = note;
  if (uploader) fields["Uploaded by"] = uploader;
  // Cloudinary hook — only present once the public pipeline is live.
  const imageUrl = clean(b.imageUrl, 2000);
  if (imageUrl) fields["Image URL (public)"] = imageUrl;

  try {
    const createUrl = "https://api.airtable.com/v0/" + BASE_ID + "/" + TABLE_ID;
    const cr = await fetch(createUrl, {
      method: "POST",
      headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify({ records: [{ fields }], typecast: true })
    });
    const cd = await cr.json().catch(() => ({}));
    if (!cr.ok) {
      res.status(cr.status === 403 ? 403 : 502).json({ ok: false, error: "airtable_error", status: cr.status, detail: cd });
      return;
    }
    const recId = cd.records && cd.records[0] && cd.records[0].id;

    // --- 2. upload the photo bytes to the attachment field ---
    let photoOk = false, photoError = null;
    const dataUrl = clean(b.photo, 12_000_000);
    if (recId && dataUrl) {
      const m = /^data:([^;,]+)?(?:;base64)?,(.*)$/s.exec(dataUrl);
      if (m) {
        const contentType = m[1] || "image/jpeg";
        const base64      = m[2];
        const filename    = clean(b.filename, 120) ||
          (venue.replace(/\W+/g, "-").toLowerCase() + "-" + todayISODate() + ".jpg");
        const upUrl = "https://content.airtable.com/v0/" + BASE_ID + "/" + recId + "/" + PHOTO_FLD + "/uploadAttachment";
        const ur = await fetch(upUrl, {
          method: "POST",
          headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
          body: JSON.stringify({ contentType, filename, file: base64 })
        });
        if (ur.ok) { photoOk = true; }
        else { photoError = await ur.json().catch(() => ({ status: ur.status })); }
      } else {
        photoError = "unrecognised_photo_format";
      }
    }

    // The row exists either way; report the photo state honestly.
    res.status(200).json({ ok: true, id: recId || null, photo: photoOk, photoError });
  } catch (err) {
    res.status(500).json({ ok: false, error: "server_error", message: String((err && err.message) || err) });
  }
}
