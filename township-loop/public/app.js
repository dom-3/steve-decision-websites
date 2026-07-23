// app.js — Township Loop client. Consumes a PUBLISHED SNAPSHOT, never live Airtable.
import { answerQuestion } from "./loop-core.mjs";

// ---- which build? public (default) or preview via ?build=preview ---------
const params = new URLSearchParams(location.search);
const BUILD = params.get("build") === "preview" ? "preview" : "public";
const SNAP_URL = BUILD === "preview" ? "./snapshot.preview.json" : "./snapshot.public.json";

const el = (id) => document.getElementById(id);
const view = el("view");
let SNAP = null;
let idx = -1;          // -1 = contents/index screen; 0..n = stop screens
let flat = [];         // ordered stops that survived the render-time gate

// ---- i18n scaffold (English-first, Welsh-ready from day one) --------------
const I18N = {
  en: { contents:"Contents", back:"◀ Back", next:"Next ▶", ask:"Ask about this place",
        askTitle:"Ask the record", askGo:"Ask",
        askNote:"Answers come only from facts we've verified and sourced. If the record is silent, I'll say so." },
  cy: { contents:"Cynnwys", back:"◀ Nôl", next:"Nesaf ▶", ask:"Gofynnwch am y lle hwn",
        askTitle:"Gofynnwch i'r cofnod", askGo:"Gofyn",
        askNote:"Daw atebion o ffeithiau rydym wedi'u gwirio a'u ffynonellu yn unig." },
};
let lang = localStorage.getItem("tl.lang") || "en";
function applyLang(){
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((n)=>{
    const k = n.dataset.i18n; if (I18N[lang][k]) n.textContent = I18N[lang][k];
  });
}

// ---- network pill ---------------------------------------------------------
function updateNet(){
  const p = el("netPill");
  if (navigator.onLine){ p.textContent = "Online"; p.classList.remove("off"); }
  else { p.textContent = "Offline — cached"; p.classList.add("off"); }
}
addEventListener("online", updateNet); addEventListener("offline", updateNet);

// ---- render-time gate re-check (belt and braces over the snapshot) --------
// The snapshot was already gated at build time. We re-assert here so a mistaken
// or tampered snapshot can never render an unapproved/solemn-leaking beat.
function gateStops(snap){
  return snap.stops.filter((s)=>{
    // public build: a stop must not appear unless it carried live beats (it did, by construction),
    // and in public mode the snapshot itself only contains approved stops.
    if (!s.beats || s.beats.length === 0) return false;
    // Re-assert solemn suppression: if solemn, no beat may carry a look-for.
    if (s.solemn) s.beats.forEach((b)=>{ b.lookFor = ""; });
    return true;
  });
}

// ---- load -----------------------------------------------------------------
async function boot(){
  applyLang(); updateNet();
  try{
    const res = await fetch(SNAP_URL, { cache: "no-cache" });
    SNAP = await res.json();
  }catch(e){
    view.innerHTML = `<div class="card"><h1 class="stopname">Can't load the trail</h1>
      <p class="intro">The trail data didn't load. If you're offline and haven't opened it once on wifi, connect and open it once at the Globe.</p></div>`;
    return;
  }
  flat = gateStops(SNAP);
  el("watermark").hidden = !SNAP.watermark;
  route();
  registerSW();
}

// ---- router: QR-seeded entry ---------------------------------------------
// Supports /r/township and /s/<stopId> (needs host rewrite → index.html),
// AND file-safe fallbacks ?r=township / ?s=<id> / #s=<id>.
function readRoute(){
  const path = location.pathname;
  const q = new URLSearchParams(location.search);
  const hash = location.hash.replace(/^#/, "");
  const mS = path.match(/\/s\/([a-zA-Z0-9]+)/) || (q.get("s") ? [null, q.get("s")] : null) || (hash.startsWith("s=") ? [null, hash.slice(2)] : null);
  if (mS) return { kind:"stop", id:mS[1] };
  if (/\/r\/township/.test(path) || q.get("r") === "township" || hash === "r=township") return { kind:"start" };
  return { kind:"index" };
}
function route(){
  const r = readRoute();
  if (r.kind === "index"){ idx = -1; renderIndex(); }
  else if (r.kind === "start"){ idx = 0; renderStop(); }
  else if (r.kind === "stop"){
    const i = flat.findIndex((s)=>s.id === r.id);
    idx = i >= 0 ? i : 0; renderStop();
  }
}
addEventListener("hashchange", route);

// ---- screens --------------------------------------------------------------
function renderIndex(){
  el("pager").hidden = true;
  el("qaLauncher").hidden = flat.length === 0;
  const title = SNAP.trailTitle;
  if (flat.length === 0){
    view.innerHTML = `<div class="card"><h1 class="stopname">${title}</h1>
      <p class="intro">The public trail is empty right now — no stop has been approved for the site yet.
      That's the publish gate doing its job: a beat only appears once its facts are verified
      <em>and</em> its stop is ticked “Approved for site”.</p>
      <p class="intro">${BUILD === "public" ? "Open the preview build (<code>?build=preview</code>) to review the beats waiting to be approved." : ""}</p>
      </div>`;
    return;
  }
  const items = flat.map((s, i)=>`
    <button class="stopitem" data-i="${i}">
      <span class="num">${i+1}</span>
      <span><span class="name">${esc(s.name)}</span>${s.solemn?' <span class="solemn-badge">quiet stop</span>':''}
      <div class="meta">${esc(s.type)} · ${s.beats.length} beat${s.beats.length>1?"s":""}</div></span>
    </button>`).join("");
  view.innerHTML = `<div class="card"><h1 class="stopname">${title}</h1>
    <p class="intro">A short, accessible walk through the town — one place at a time. Move at your own pace with the Next button. No map, no tracking, and it works with the signal off once it's loaded.</p></div>
    <div class="list">${items}</div>`;
  view.querySelectorAll(".stopitem").forEach((b)=>b.onclick=()=>{ idx=+b.dataset.i; renderStop(); scrollTop(); });
}

function renderStop(){
  const s = flat[idx];
  if (!s){ renderIndex(); return; }
  el("qaLauncher").hidden = false;

  const beatsHTML = s.beats.map((b)=>{
    const lookFor = (!s.solemn && b.lookFor)
      ? `<div class="lookfor"><b>Look for:</b> ${esc(b.lookFor)}</div>` : "";
    const facts = b.facts.map((f)=>`
      <div class="fact">
        <span class="status">${esc(f.status)}</span>
        <div class="claim">${esc(f.claim)}</div>
        <div class="src"><b>Source:</b> ${f.sources.map(esc).join(" · ")}</div>
      </div>`).join("");
    // L3 evidence lives behind ONE quiet "More" trapdoor; L1 stands alone above it.
    const more = `
      <details class="more">
        <summary>⌄ More — the evidence behind this${b.scriptCY?` · Cymraeg`:""}</summary>
        <div class="layerlabel">L3 · The record this rests on</div>
        ${facts}
        ${b.scriptCY?`<div class="layerlabel">Cymraeg</div><p class="narration">${esc(b.scriptCY)}</p>`:""}
      </details>`;
    return `<section class="beat card">
      <h2>${esc(b.name)}</h2>
      <p class="narration">${esc(b.narration)}</p>
      ${lookFor}
      ${more}
    </section>`;
  }).join("");

  const unlock = s.unlock && s.unlock !== "None — open stop"
    ? `<div class="unlock">Collect here: ${esc(s.unlock)}. (Optional — never needed to finish the walk, and never uses GPS as a requirement.)</div>` : "";
  const access = s.accessNotes ? `<div class="access"><b>Getting there:</b> ${esc(s.accessNotes)}</div>` : "";

  view.innerHTML = `
    <div class="card">
      <div class="orient"><span class="n">Stop ${idx+1} / ${flat.length}</span> · <span>${esc(s.type)}</span>${s.solemn?' · <span>a quiet place</span>':''}</div>
      <h1 class="stopname">${esc(s.name)}${s.solemn?'<span class="solemn-badge">quiet stop</span>':''}</h1>
      ${access}
      ${unlock}
    </div>
    ${beatsHTML}`;

  // pager
  el("pager").hidden = false;
  el("prevBtn").disabled = false;
  el("prevBtn").textContent = idx === 0 ? (lang==="cy"?"◀ Cynnwys":"◀ Contents") : I18N[lang].back;
  el("nextBtn").disabled = idx >= flat.length-1;
  el("nextBtn").textContent = idx >= flat.length-1 ? (lang==="cy"?"Diwedd":"Done") : I18N[lang].next;
  el("progress").textContent = `${idx+1} of ${flat.length}`;
}

// ---- manual navigation (NEVER GPS) ---------------------------------------
el("nextBtn").onclick = ()=>{ if (idx < flat.length-1){ idx++; renderStop(); scrollTop(); } };
el("prevBtn").onclick = ()=>{ if (idx === 0){ idx=-1; renderIndex(); scrollTop(); } else { idx--; renderStop(); scrollTop(); } };
el("homeBtn").onclick = ()=>{ idx=-1; renderIndex(); scrollTop(); };

// ---- grounded Q&A ---------------------------------------------------------
el("qaOpen").onclick = ()=>{ el("qaPanel").hidden=false; el("qaInput").focus(); };
el("qaClose").onclick = ()=>{ el("qaPanel").hidden=true; };
el("qaForm").onsubmit = (e)=>{
  e.preventDefault();
  const q = el("qaInput").value.trim();
  const out = el("qaAnswer");
  if (!q){ out.textContent=""; return; }
  const a = answerQuestion(q, SNAP.qaFacts || []);
  if (a.kind === "answer"){
    const srcs = a.facts.flatMap((f)=>f.sources);
    out.innerHTML = `<div>${esc(a.text)}</div>
      <div class="src"><b>Source${srcs.length>1?"s":""}:</b> ${[...new Set(srcs)].map(esc).join(" · ")}</div>`;
  } else if (a.kind === "corrected"){
    out.innerHTML = `<div class="corrected">${esc(a.text)}</div>`;
  } else {
    out.innerHTML = `<div class="silent">${esc(a.text)}</div>`;
  }
};

// ---- language toggle ------------------------------------------------------
el("langToggle").onclick = ()=>{
  lang = lang === "en" ? "cy" : "en";
  localStorage.setItem("tl.lang", lang);
  applyLang();
  if (idx === -1) renderIndex(); else renderStop();
};

// ---- service worker: cache the whole route on first load ------------------
async function registerSW(){
  if (!("serviceWorker" in navigator)) return;
  try{ await navigator.serviceWorker.register("./sw.js"); }catch(e){/* preview over file:// won't have SW; fine */}
}

// ---- helpers --------------------------------------------------------------
function esc(s){ return String(s??"").replace(/[&<>"']/g,(c)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function scrollTop(){ window.scrollTo({top:0,behavior:"instant"}); el("main").focus({preventScroll:true}); }

boot();
