/* ============================================================================
   The Globe — family switcher (the strip along the top)
   ----------------------------------------------------------------------------
   ONE place to add a business. To switch a new one on, find it in SITES below,
   set  live: true  and give it an  href . That's the whole job — every page
   that includes this file picks it up.

   Brand pack v1, two tiers:
     Tier 1 — what we sell   : Wine Bar & Restaurant · Bakery · Butchery · Deli/Coffee
     Tier 2 — what we give   : House of Culture (civic, softer endorsement)

   HOW IT WORKS
   Each page carries a real, crawlable fallback in its HTML:
       <div class="rbswap" data-globe-family>
         <a href="globe.html" class="on">Restaurant</a>
         <a href="globe-bakery.html">Bakery</a>
       </div>
   This script re-renders that container from SITES and marks the current page
   active. Without JS the static links still work — nothing is lost.

   The script only writes the <a> tags; each page styles them with its own CSS,
   so the strip sits in the restaurant's gold-on-ink and the bakery's green
   without either having to know about the other.

   USAGE:  <script src="globe-family.js" defer></script>
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------- SITES */
  var SITES = [
    {
      key:   "restaurant",
      label: "Restaurant",
      href:  "globe.html",
      // pages that count as "you are here" for this business
      match: ["", "index", "globe", "book", "globe-menu", "globe-winebar"],
      tier:  1,
      live:  true
    },
    {
      key:   "bakery",
      label: "Bakery",
      href:  "globe-bakery.html",
      match: ["globe-bakery", "bakery-preorder", "bakery", "bakery-prototype"],
      tier:  1,
      live:  true
    },

    /* ---- not open yet. Set live:true and add an href to switch on. ---- */
    {
      key:   "butchery",
      label: "Butchery",
      href:  "",
      match: ["butchery"],
      tier:  1,
      live:  false
    },
    {
      key:   "deli",
      label: "Deli & Coffee",
      href:  "",
      match: ["deli", "coffee"],
      tier:  1,
      live:  false
    },
    {
      key:   "culture",
      label: "House of Culture",
      href:  "",
      match: ["globe-house-of-culture", "culture"],
      tier:  2,
      live:  false
    }
  ];

  /* Show the not-yet-open ones as dimmed, non-clickable labels?
     false = they simply don't appear until they're live. */
  var SHOW_COMING_SOON = false;

  /* ------------------------------------------------------------- helpers */
  function currentKey() {
    var file = (location.pathname.split("/").pop() || "").replace(/\.html?$/i, "").toLowerCase();
    for (var i = 0; i < SITES.length; i++) {
      if (SITES[i].match.indexOf(file) !== -1) return SITES[i].key;
    }
    return null;
  }

  function render(box, active) {
    var frag = document.createDocumentFragment();

    SITES.forEach(function (s) {
      if (!s.live && !SHOW_COMING_SOON) return;

      var isActive = (s.key === active);
      var el;

      if (s.live && s.href && !isActive) {
        el = document.createElement("a");
        el.href = s.href;
      } else if (s.live && isActive) {
        el = document.createElement("a");
        el.href = s.href;
        el.className = "on";
        el.setAttribute("aria-current", "page");
      } else {
        // not open yet — a label, not a link
        el = document.createElement("span");
        el.className = "soon";
        el.setAttribute("aria-disabled", "true");
        el.title = "Opening soon";
      }

      el.textContent = s.label;
      el.setAttribute("data-family", s.key);
      frag.appendChild(el);
    });

    box.textContent = "";       // clear the static fallback
    box.appendChild(frag);
    box.setAttribute("data-globe-family-ready", "");
  }

  function init() {
    var boxes = document.querySelectorAll("[data-globe-family]");
    if (!boxes.length) return;
    var active = currentKey();
    Array.prototype.forEach.call(boxes, function (b) { render(b, active); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  // handy for the console / future use
  window.GlobeFamily = { sites: SITES, refresh: init };
})();
