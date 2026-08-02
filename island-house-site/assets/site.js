/* Island House showcase — shared shell.
   One source of truth for the nav + footer (so 40 pages never drift), plus the
   provenance-dot engine and the ?edit=1 toggle.
   Every page just needs: <link rel="stylesheet" href="assets/site.css"> and
   <script src="assets/site.js" defer></script>, a <div id="site-header"></div> at
   the top and <div id="site-footer"></div> at the bottom. Use relative paths;
   pass data-root="" on <body> for root pages or data-root="../" for pages in a subfolder.
*/
(function () {
  var ROOT = (document.body && document.body.getAttribute('data-root')) || '';

  // ---- NAV MANIFEST (edit here once; every page updates) ----
  var NAV = [
    { label: 'About', href: 'index.html#about' },
    { label: 'History', href: 'index.html#history' },
    { label: 'Owners & People', href: 'owners.html' },
    { label: 'Exhibition', href: 'exhibition.html', sub: [
      ['The Team','exhibition/the-team.html'],
      ['The History of Island House','exhibition/history-of-island-house.html'],
      ['History & People 1778–2020','exhibition/history-and-people.html'],
      ['The Civil War','exhibition/the-civil-war.html'],
      ['Condition Pre-Purchase','exhibition/condition-pre-purchase.html'],
      ['Condition On Purchase','exhibition/condition-on-purchase.html'],
      ['Clearance','exhibition/clearance.html'],
      ['Archaeology','exhibition/archaeology.html'],
      ['Commencing Repair Works','exhibition/commencing-repair-works.html'],
      ['Repair Works','exhibition/repair-works.html'],
      ['Concept Development','exhibition/concept-development.html'],
      ['Ground Investigation & Reconstruction','exhibition/ground-investigation.html'],
      ['Floor Plans','exhibition/floor-plans.html'],
      ['Elevations','exhibition/elevations.html'],
      ['Sections','exhibition/sections.html'],
      ['3D Visualisations','exhibition/visualisations.html'],
      ['Video — Rob Scourfield','exhibition/video-scourfield.html']
    ]},
    { label: 'Consultants & Reports', href: 'reports.html', sub: [
      ['Ceramic Finds (2020)','reports/ceramic-finds.html'],
      ['Clay Pipe Finds (2020)','reports/clay-pipe-finds.html'],
      ['Ceramic Building Material','reports/ceramic-building-material.html'],
      ['Trench 1 — Table of Fabrics','reports/trench-1-fabrics.html'],
      ['Trench 1 — Phases 1–8','reports/trench-1-phases.html'],
      ['Trench 2 — Table of Pottery','reports/trench-2-pottery.html'],
      ['Trench 1 — Reference Images','reports/trench-1-images.html'],
      ['Trench 2 — Reference Images','reports/trench-2-images.html'],
      ['DAT Interim Reports','reports/dat-interim.html']
    ]},
    { label: 'Updates', href: 'updates.html', sub: [
      ['13 July 2023 — Scaffolding free','updates/2023-07-13.html'],
      ['13 January 2023','updates/2023-01-13.html'],
      ['28 November 2022','updates/2022-11-28.html'],
      ['Chimney Repair Progression','updates/chimney-repair.html'],
      ['Chimney 6 — talk by James Vincent','updates/chimney-6-talk.html'],
      ['Chimneys & Oak Beams','updates/chimneys-oak-beams.html'],
      ['Installation of Oak Beams','updates/oak-beams-installation.html'],
      ['First Delivery of Oak Beams','updates/oak-beams-delivery.html'],
      ['Emergency Repair Works','updates/emergency-repairs.html'],
      ['Archaeological Survey','updates/archaeological-survey.html'],
      ['Buildings & Heritage Video','updates/heritage-video.html'],
      ['Getting the Building Watertight','updates/watertight.html'],
      ['Before & After Images','updates/before-after.html']
    ]},
    { label: 'The Plans', href: 'plans.html' },        // our new branch
    { label: 'The Research', href: 'research.html' },   // our new branch
    { label: 'Contact', href: 'index.html#contact' }
  ];

  function nav() {
    var h = '<header class="site"><div class="bar">' +
      '<a class="brand" href="' + ROOT + 'index.html">ISLAND HOUSE · Laugharne</a>' +
      '<div class="navwrap"><nav class="mainnav">';
    NAV.forEach(function (n) {
      h += '<span class="item"><a href="' + ROOT + n.href + '">' + n.label + '</a>';
      if (n.sub) {
        h += '<span class="sub">';
        n.sub.forEach(function (s) { h += '<a href="' + ROOT + s[1] + '">' + s[0] + '</a>'; });
        h += '</span>';
      }
      h += '</span>';
    });
    h += '</nav></div></div></header>';
    return h;
  }

  function footer() {
    return '<footer class="site"><div class="wrap">' +
      '<div>Island House Restoration Ltd · Company Number 12452655</div>' +
      '<div>Showcase build · content staged RECREATE → EDIT → REFLOW · images are placeholders pending media export</div>' +
      '</div></footer>';
  }

  // ---- provenance dots ----
  function provenance() {
    document.querySelectorAll('[data-prov]').forEach(function (el) {
      if (el.querySelector(':scope > .prov-dot')) return;
      var dot = document.createElement('span');
      dot.className = 'prov-dot';
      dot.setAttribute('data-state', el.getAttribute('data-prov'));
      var cite = el.getAttribute('data-cite');
      dot.title = (el.getAttribute('data-prov') || '').toUpperCase() + (cite ? ' — ' + cite : ' — (no citation yet)');
      el.insertBefore(dot, el.firstChild);
    });
  }

  function editUI() {
    var btn = document.createElement('button');
    btn.id = 'prov-toggle'; btn.textContent = 'Provenance: off';
    var legend = document.createElement('div');
    legend.id = 'prov-legend';
    legend.innerHTML =
      '<div class="row"><span class="d" style="background:var(--prov-original)"></span>Original — their site</div>' +
      '<div class="row"><span class="d" style="background:var(--prov-new)"></span>New — our verified research</div>' +
      '<div class="row"><span class="d" style="background:var(--prov-corrected)"></span>Corrected / removed</div>' +
      '<div class="row"><span class="d" style="background:var(--prov-tradition)"></span>Tradition — labelled legend</div>';
    document.body.appendChild(legend); document.body.appendChild(btn);
    function set(on){ document.body.classList.toggle('edit-mode', on); btn.textContent = 'Provenance: ' + (on ? 'on' : 'off'); try{localStorage.setItem('ih-edit', on?'1':'0');}catch(e){} }
    btn.addEventListener('click', function(){ set(!document.body.classList.contains('edit-mode')); });
    var on = /[?&]edit=1/.test(location.search); try{ if(localStorage.getItem('ih-edit')==='1') on=true; }catch(e){}
    set(on);
  }

  function mount(id, html){ var el=document.getElementById(id); if(el) el.outerHTML = html; }
  document.addEventListener('DOMContentLoaded', function(){
    mount('site-header', nav());
    mount('site-footer', footer());
    provenance();
    editUI();
  });
})();
