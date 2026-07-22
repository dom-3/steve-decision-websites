/* ============================================================================
   The Globe — menu overlay
   ----------------------------------------------------------------------------
   Opens globe-menu.html in an overlay, in an <iframe> that is only given its
   src on first open (lazy — nothing is fetched until someone asks for the menu).

   WHY AN IFRAME, NOT INJECTED MARKUP:
   globe-menu.html styles bare `body`, `header`, `section`, `h2` and also defines
   `.wrap` and `.book` — all of which the host pages define too, differently.
   Injecting its markup would need every one of those selectors rewritten or a
   shadow root; either way the menu's styling could drift from the page people
   reach by QR code. The iframe makes "one source of truth" structural rather
   than a matter of discipline: the overlay renders the real page, byte for byte.

   PROGRESSIVE ENHANCEMENT:
   Triggers are ordinary links — <a href="globe-menu.html" data-menu-modal>.
   This script intercepts the click. Without JS the link just navigates, and
   globe-menu.html stays a real, indexable, shareable, QR-able page.

   USAGE:  <script src="globe-menu-modal.js" defer></script>
   ========================================================================== */
(function () {
  "use strict";

  var MENU_URL = "globe-menu.html";
  var PDF_URL  = "globe-menu-print.pdf";
  var HASH     = "#menu";

  var overlay = null, frame = null, closeBtn = null;
  var lastTrigger = null, loaded = false, open = false;
  var scrollY = 0;

  /* ---------- styles ---------- */
  function injectCSS() {
    var css = [
      '.gm-ov{position:fixed;inset:0;z-index:9999;display:none;',
      '  background:rgba(8,6,4,.72);backdrop-filter:blur(3px);',
      '  opacity:0;transition:opacity .22s ease}',
      '.gm-ov.is-open{display:flex;align-items:center;justify-content:center}',
      '.gm-ov.is-vis{opacity:1}',

      '.gm-dlg{position:relative;display:flex;flex-direction:column;',
      '  width:min(1060px,94vw);height:min(88vh,1000px);',
      '  background:#100d0a;border:1px solid rgba(201,162,75,.28);border-radius:4px;',
      '  box-shadow:0 30px 90px rgba(0,0,0,.6);overflow:hidden;',
      '  transform:translateY(10px) scale(.995);transition:transform .22s ease}',
      '.gm-ov.is-vis .gm-dlg{transform:none}',

      /* top bar */
      '.gm-bar{flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;',
      '  gap:12px;padding:11px 14px 11px 18px;border-bottom:1px solid rgba(201,162,75,.20);',
      '  background:rgba(16,13,10,.96)}',
      '.gm-ttl{font-family:"Poiret One",sans-serif;font-size:11.5px;letter-spacing:.28em;',
      '  text-transform:uppercase;color:#c9a24b}',
      '.gm-x{appearance:none;-webkit-appearance:none;background:transparent;cursor:pointer;',
      '  border:1px solid rgba(201,162,75,.34);border-radius:2px;color:#f4efe4;',
      '  font:400 20px/1 -apple-system,system-ui,sans-serif;',
      '  width:44px;height:44px;display:flex;align-items:center;justify-content:center;',
      '  transition:background .15s,border-color .15s}',
      '.gm-x:hover{background:rgba(201,162,75,.16);border-color:#c9a24b}',
      '.gm-x:focus-visible{outline:2px solid #c9a24b;outline-offset:2px}',

      /* frame */
      '.gm-body{flex:1 1 auto;position:relative;min-height:0;background:#100d0a;',
      '  -webkit-overflow-scrolling:touch}',
      '.gm-frame{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}',
      '.gm-load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;',
      '  font-family:"Poiret One",sans-serif;font-size:11.5px;letter-spacing:.24em;',
      '  text-transform:uppercase;color:#9b9384;pointer-events:none;transition:opacity .2s}',
      '.gm-body.is-ready .gm-load{opacity:0}',

      /* footer */
      '.gm-foot{flex:0 0 auto;display:flex;align-items:center;justify-content:center;gap:8px;',
      '  padding:11px 16px;border-top:1px solid rgba(201,162,75,.20);',
      '  background:rgba(16,13,10,.96)}',
      '.gm-pdf{font-family:-apple-system,system-ui,sans-serif;font-size:11.5px;letter-spacing:.06em;',
      '  color:#9b9384;text-decoration:none;padding:8px 10px;border-radius:2px}',
      '.gm-pdf:hover{color:#c9a24b}',
      '.gm-pdf:focus-visible{outline:2px solid #c9a24b;outline-offset:2px}',

      /* full-screen sheet on a phone — most people read this at the table */
      '@media(max-width:760px){',
      '  .gm-ov.is-open{align-items:stretch;justify-content:stretch}',
      '  .gm-dlg{width:100%;height:100%;max-height:none;border:0;border-radius:0;',
      '    transform:translateY(14px);}',
      '  .gm-bar{padding:9px 10px 9px 16px;padding-top:calc(9px + env(safe-area-inset-top))}',
      '  .gm-foot{padding-bottom:calc(11px + env(safe-area-inset-bottom))}',
      '}',
      '@media(prefers-reduced-motion:reduce){',
      '  .gm-ov,.gm-dlg{transition:none}',
      '}',
      /* host page scroll lock */
      'body.gm-locked{position:fixed;left:0;right:0;width:100%;overflow:hidden}'
    ].join("");
    var s = document.createElement("style");
    s.setAttribute("data-globe-menu-modal", "");
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  /* ---------- build ---------- */
  function build() {
    injectCSS();

    overlay = document.createElement("div");
    overlay.className = "gm-ov";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Menu — The Globe, Bar & Restaurant");
    overlay.hidden = true;

    overlay.innerHTML =
      '<div class="gm-dlg">' +
        '<div class="gm-bar">' +
          '<span class="gm-ttl">The Globe · Menu</span>' +
          '<button type="button" class="gm-x" aria-label="Close the menu">&times;</button>' +
        '</div>' +
        '<div class="gm-body">' +
          '<p class="gm-load">Loading the menu…</p>' +
          '<iframe class="gm-frame" title="The Globe — menu" loading="lazy"></iframe>' +
        '</div>' +
        '<div class="gm-foot">' +
          '<a class="gm-pdf" href="' + PDF_URL + '" target="_blank" rel="noopener">' +
            'Download the menu (PDF)</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    frame    = overlay.querySelector(".gm-frame");
    closeBtn = overlay.querySelector(".gm-x");

    closeBtn.addEventListener("click", function () { close(); });

    // backdrop click (but not clicks inside the dialog)
    overlay.addEventListener("mousedown", function (e) {
      if (e.target === overlay) close();
    });

    frame.addEventListener("load", function () {
      overlay.querySelector(".gm-body").classList.add("is-ready");
    });
  }

  /* ---------- scroll lock (iOS-safe) ---------- */
  function lock() {
    scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.style.top = (-scrollY) + "px";
    document.body.classList.add("gm-locked");
  }
  function unlock() {
    document.body.classList.remove("gm-locked");
    document.body.style.top = "";
    window.scrollTo(0, scrollY);
  }

  /* ---------- focus trap ---------- */
  function focusables() {
    return Array.prototype.filter.call(
      overlay.querySelectorAll('button,[href],iframe,[tabindex]:not([tabindex="-1"])'),
      function (el) { return el.offsetParent !== null || el === frame; }
    );
  }
  function onKey(e) {
    if (!open) return;
    if (e.key === "Escape" || e.key === "Esc") { e.preventDefault(); close(); return; }
    if (e.key !== "Tab") return;
    var f = focusables();
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    // focus may sit inside the iframe; treat that as "not in the chrome"
    if (e.shiftKey && (document.activeElement === first || !overlay.contains(document.activeElement))) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  /* ---------- open / close ---------- */
  function openModal(trigger, pushHistory) {
    if (open) return;
    if (!overlay) build();
    lastTrigger = trigger || null;

    if (!loaded) { frame.src = MENU_URL; loaded = true; }

    overlay.hidden = false;
    overlay.classList.add("is-open");
    lock();
    // next frame so the transition runs
    requestAnimationFrame(function () { overlay.classList.add("is-vis"); });

    open = true;
    document.addEventListener("keydown", onKey, true);
    // move focus into the dialog
    closeBtn.focus();

    if (pushHistory !== false) {
      try {
        if (location.hash !== HASH) {
          history.pushState({ gmMenu: true }, "", HASH);
        }
      } catch (err) { /* history unavailable — not fatal */ }
    }
  }

  function close(fromPop) {
    if (!open) return;
    open = false;
    document.removeEventListener("keydown", onKey, true);
    overlay.classList.remove("is-vis");

    var done = function () {
      overlay.classList.remove("is-open");
      overlay.hidden = true;
      unlock();
      if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
      lastTrigger = null;
    };
    // wait for the fade unless motion is reduced
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches) done();
    else setTimeout(done, 200);

    if (!fromPop) {
      try {
        if (history.state && history.state.gmMenu) history.back();
        else if (location.hash === HASH) {
          history.replaceState(null, "", location.pathname + location.search);
        }
      } catch (err) { /* no-op */ }
    }
  }

  /* ---------- wiring ---------- */
  function onClick(e) {
    var a = e.target.closest ? e.target.closest("a[data-menu-modal]") : null;
    if (!a) return;
    // let modified clicks behave normally (new tab, download, etc.)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openModal(a, true);
  }

  function init() {
    document.addEventListener("click", onClick);

    window.addEventListener("popstate", function () {
      if (location.hash === HASH) openModal(null, false);
      else if (open) close(true);
    });

    // deep link: /globe.html#menu opens the overlay (QR codes, socials, Nia's posts)
    if (location.hash === HASH) {
      // let the page settle first so focus/scroll behave
      setTimeout(function () { openModal(null, false); }, 60);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  // small public handle, in case anything else needs it
  window.GlobeMenu = { open: function () { openModal(null, true); }, close: close };
})();
