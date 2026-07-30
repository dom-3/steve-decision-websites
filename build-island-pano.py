#!/usr/bin/env python3
"""
build-island-pano.py
Turns the Island House 360 photos into an immersive in-the-room web viewer
(island-house-room.html) with step-through navigation + a position strip.

Downscales each equirectangular 360 JPG for the web with macOS's built-in
`sips` (no installs), into ./island-house-pano/, then writes the viewer page.

Usage:
    python3 build-island-pano.py                 # full run: downscale + build page
    python3 build-island-pano.py html            # REBUILD PAGE ONLY (fast, no resizing)
    python3 build-island-pano.py [step] [maxdim] [quality]
        step    : use every Nth photo (default 1 = all)
        maxdim  : longest side in px (default 3072)
        quality : JPEG quality 1-100 (default 80)

Source images (default): ~/Documents/islandhouse-p0/project-hi/images
"""
import os, sys, subprocess, json

SRC = os.path.expanduser("~/Documents/islandhouse-p0/project-hi/images")
HERE = os.path.dirname(os.path.abspath(__file__))
OUTDIR = os.path.join(HERE, "island-house-pano")
HTML = os.path.join(HERE, "island-house-room.html")

def write_page(names):
    manifest = json.dumps(names, separators=(",", ":"))
    open(HTML, "w").write(TEMPLATE.replace("/*__MANIFEST__*/", manifest))

def main():
    args = sys.argv[1:]

    # ---- HTML-ONLY MODE: rebuild the page from the panos already on disk ----
    if args and args[0].lower() in ("html", "--html", "html-only"):
        if not os.path.isdir(OUTDIR):
            print("ERROR: no", OUTDIR, "yet — run a full pass first."); sys.exit(1)
        names = sorted(f for f in os.listdir(OUTDIR) if f.lower().endswith((".jpg", ".jpeg")))
        write_page(names)
        print("rebuilt page only:", HTML, "|", len(names), "panoramas (no images re-processed)")
        return

    # ---- FULL MODE: downscale + build ----
    step    = int(args[0]) if len(args) > 0 else 1
    maxdim  = int(args[1]) if len(args) > 1 else 4608   # higher-res default for sharper zoom (was 3072)
    quality = int(args[2]) if len(args) > 2 else 85

    if not os.path.isdir(SRC):
        print("ERROR: source images not found at", SRC); sys.exit(1)
    imgs = sorted(f for f in os.listdir(SRC) if f.lower().endswith((".jpg", ".jpeg")))
    if not imgs:
        print("ERROR: no JPGs in", SRC); sys.exit(1)
    imgs = imgs[::step]
    os.makedirs(OUTDIR, exist_ok=True)

    made = []
    for i, name in enumerate(imgs, 1):
        subprocess.run(
            ["sips", "-s", "format", "jpeg", "-s", "formatOptions", str(quality),
             "-Z", str(maxdim), os.path.join(SRC, name), "--out", os.path.join(OUTDIR, name)],
            check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        made.append(name); print(f"  [{i}/{len(imgs)}] {name}")

    write_page(made)
    total = sum(os.path.getsize(os.path.join(OUTDIR, n)) for n in made)
    print("\nwrote", HTML)
    print(f"panoramas: {len(made)}  ~{total/1024/1024:.1f} MB total  ({maxdim}px, q{quality})")

TEMPLATE = r"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Island House — step inside (360 rooms) — The Business</title>
<style>
  :root{--green:#1f5c4d;--dark:#153f35;--gold:#b07d2b;--ink:#22302e;--muted:#6a7b76;--line:#dfe6e2;}
  *{box-sizing:border-box;} body{margin:0;background:#eef1ee;color:var(--ink);font-family:"Helvetica Neue",Arial,sans-serif;line-height:1.55;}
  .wrap{max-width:1040px;margin:0 auto;padding:0 22px 60px;}
  header{background:linear-gradient(160deg,var(--green),var(--dark));color:#f4efe6;padding:34px 22px 24px;}
  header .inner{max-width:1040px;margin:0 auto;}
  .kicker{letter-spacing:4px;text-transform:uppercase;font-size:11px;color:#d8c9a8;}
  h1{font-family:Georgia,serif;font-weight:400;font-size:29px;margin:8px 0 6px;}
  header p{max-width:700px;color:#e6dcc8;font-size:14px;margin:0;}
  .back{display:inline-block;margin-top:12px;color:#d8c9a8;text-decoration:none;font-size:12.5px;letter-spacing:1px;}
  .back:hover{color:#fff;}
  h2{font-family:Georgia,serif;color:var(--dark);font-size:19px;margin:24px 0 4px;border-bottom:2px solid var(--gold);padding-bottom:6px;}
  .sub{color:var(--muted);font-size:13px;margin:0 0 12px;}
  #stage{position:relative;width:100%;height:600px;max-height:78vh;background:#0d1614;border-radius:14px;overflow:hidden;
    box-shadow:0 6px 24px rgba(20,50,45,.18);border:1px solid #0a1210;cursor:grab;}
  #stage.grab{cursor:grabbing;}
  #stage canvas{display:block;}
  .hud{position:absolute;left:14px;top:12px;color:#fff;font-size:13px;background:rgba(10,20,18,.6);
    padding:7px 12px;border-radius:8px;pointer-events:none;font-weight:700;}
  .hint{position:absolute;right:14px;top:12px;color:#cfe0d8;font-size:11.5px;background:rgba(10,20,18,.55);padding:6px 10px;border-radius:8px;pointer-events:none;}
  .load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#cfe0d8;font-size:14px;pointer-events:none;}
  /* forward "walk" hotspot */
  .fwd{position:absolute;left:50%;bottom:78px;transform:translateX(-50%);width:58px;height:58px;border-radius:50%;
    background:rgba(240,182,74,.22);border:2px solid rgba(240,182,74,.85);color:#ffe;cursor:pointer;
    display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;backdrop-filter:blur(2px);}
  .fwd:hover{background:rgba(240,182,74,.42);}
  .fwd span{transform:translateY(-2px);}
  /* bottom control bar */
  .bar{position:absolute;left:12px;right:12px;bottom:12px;display:flex;align-items:center;gap:10px;}
  .bar button{background:rgba(10,20,18,.66);color:#fff;border:1px solid rgba(255,255,255,.18);border-radius:9px;
    font-size:13px;font-weight:700;padding:9px 13px;cursor:pointer;font-family:inherit;white-space:nowrap;}
  .bar button:hover{background:rgba(31,92,77,.9);}
  .count{color:#fff;font-size:12.5px;font-weight:700;background:rgba(10,20,18,.6);padding:8px 10px;border-radius:8px;white-space:nowrap;}
  /* position strip = where you are along the walk */
  .strip{flex:1;display:flex;gap:2px;align-items:center;height:26px;background:rgba(10,20,18,.5);border-radius:8px;padding:0 6px;}
  .seg{flex:1;height:9px;border-radius:3px;background:rgba(255,255,255,.22);cursor:pointer;transition:background .1s,height .1s;}
  .seg:hover{background:rgba(255,255,255,.5);}
  .seg.on{background:var(--gold);height:16px;}
  .note{font-size:12.5px;color:var(--muted);margin-top:10px;}
  @media(max-width:640px){ .count{display:none;} .fwd{bottom:70px;} }
</style></head><body>
<header><div class="inner">
  <div class="kicker">Private &middot; Island House · 360 walk-through</div>
  <h1>Island House — step inside</h1>
  <p>The real 360 photos, so you can stand in each spot and look all the way around. <b>Drag</b> to look · <b>scroll</b> to zoom · <b>arrow keys</b> or the gold <b>↑</b> to walk forward · the strip along the bottom shows where you are and lets you jump anywhere.</p>
  <a class="back" href="index.html">← Back to the Business Operating System</a>
</div></header>
<div class="wrap">

  <h2>Walk the building</h2>
  <p class="sub">Drag to look around · ← → (or ↑ ↓) to move · click the gold arrow to step forward · click the strip to jump to any spot.</p>

  <div id="stage">
    <div class="hud" id="hud">Loading…</div>
    <div class="hint">drag · scroll · arrow keys</div>
    <div class="load" id="load">Loading the first room…</div>
    <div class="fwd" id="fwd" title="Walk forward (↑ or →)"><span>&#8593;</span></div>
    <div class="bar">
      <button id="prev">‹ Back</button>
      <span class="count" id="count">–</span>
      <div class="strip" id="strip"></div>
      <button id="next">Forward ›</button>
    </div>
  </div>
  <p class="note">Stations are the raw capture spots (~2–3m apart), so moves are jumps rather than a smooth glide. The re-shoot at ~1–1.5m — and a 3D model built from it — is what turns this into continuous free-roam. Each panorama is a true, full view of that spot.</p>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
var PANOS = /*__MANIFEST__*/;
var DIR = "island-house-pano/";

var stage=document.getElementById('stage');
var W=stage.clientWidth,H=stage.clientHeight;
var renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(W,H); stage.appendChild(renderer.domElement);
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(75,W/H,0.1,1100);

var geo=new THREE.SphereGeometry(500,60,40); geo.scale(-1,1,1);
var sphere=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0x222222})); scene.add(sphere);

var lon=0, lat=0, fov=75, idx=0;
var loader=new THREE.TextureLoader();
var cache={}; // idx -> texture

// position strip
var strip=document.getElementById('strip');
PANOS.forEach(function(_,i){
  var s=document.createElement('div'); s.className='seg';
  s.title='Station '+(i+1); s.onclick=function(){show(i);}; strip.appendChild(s);
});
function markStrip(){ strip.querySelectorAll('.seg').forEach(function(s,i){ s.classList.toggle('on', i===idx); }); }

function preload(i){
  i=(i+PANOS.length)%PANOS.length;
  if(cache[i]) return;
  loader.load(DIR+PANOS[i], function(t){ t.minFilter=THREE.LinearFilter; cache[i]=t; });
}

function apply(tex){
  if(sphere.material.map && sphere.material.map!==tex) {}
  sphere.material=new THREE.MeshBasicMaterial({map:tex});
}

function show(i){
  idx=(i+PANOS.length)%PANOS.length;
  document.getElementById('count').textContent='Station '+(idx+1)+' / '+PANOS.length;
  document.getElementById('hud').textContent='Station '+(idx+1)+' of '+PANOS.length;
  markStrip();
  var ld=document.getElementById('load');
  if(cache[idx]){ apply(cache[idx]); ld.style.display='none'; }
  else {
    ld.style.display='flex'; ld.textContent='Loading station '+(idx+1)+'…';
    loader.load(DIR+PANOS[idx], function(t){ t.minFilter=THREE.LinearFilter; cache[idx]=t; apply(t); ld.style.display='none'; },
      undefined, function(){ ld.textContent='Could not load this image.'; });
  }
  lon=0; lat=0;                 // face forward each time
  preload(idx+1); preload(idx-1); // make the next step instant
}

function update(){
  lat=Math.max(-85,Math.min(85,lat));
  var phi=THREE.MathUtils.degToRad(90-lat), theta=THREE.MathUtils.degToRad(lon);
  camera.lookAt(new THREE.Vector3(Math.sin(phi)*Math.cos(theta),Math.cos(phi),Math.sin(phi)*Math.sin(theta)));
  camera.fov=fov; camera.updateProjectionMatrix();
}

// look controls
var down=false,moved=false,px=0,py=0;
stage.addEventListener('mousedown',function(e){down=true;moved=false;px=e.clientX;py=e.clientY;stage.classList.add('grab');});
window.addEventListener('mouseup',function(){down=false;stage.classList.remove('grab');});
window.addEventListener('mousemove',function(e){
  if(!down)return; moved=true;
  lon-=(e.clientX-px)*0.15; lat+=(e.clientY-py)*0.15; px=e.clientX;py=e.clientY;
});
stage.addEventListener('wheel',function(e){ fov=Math.max(30,Math.min(95,fov+(e.deltaY>0?3:-3))); e.preventDefault(); },{passive:false});
stage.addEventListener('touchstart',function(e){ if(e.touches.length===1){down=true;px=e.touches[0].clientX;py=e.touches[0].clientY;} });
stage.addEventListener('touchend',function(){down=false;});
stage.addEventListener('touchmove',function(e){
  if(!down||e.touches.length!==1)return;
  lon-=(e.touches[0].clientX-px)*0.2; lat+=(e.touches[0].clientY-py)*0.2;
  px=e.touches[0].clientX;py=e.touches[0].clientY; e.preventDefault();
},{passive:false});

document.getElementById('next').onclick=function(){show(idx+1);};
document.getElementById('prev').onclick=function(){show(idx-1);};
document.getElementById('fwd').onclick=function(){show(idx+1);};
window.addEventListener('keydown',function(e){
  if(e.key==='ArrowRight'||e.key==='ArrowUp'){show(idx+1);e.preventDefault();}
  if(e.key==='ArrowLeft'||e.key==='ArrowDown'){show(idx-1);e.preventDefault();}
});

window.addEventListener('resize',function(){
  W=stage.clientWidth;H=stage.clientHeight;renderer.setSize(W,H);camera.aspect=W/H;camera.updateProjectionMatrix();
});

function tick(){ requestAnimationFrame(tick); update(); renderer.render(scene,camera); }
show(0); tick();
</script>
</body></html>
"""

if __name__ == "__main__":
    main()
