#!/usr/bin/env python3
"""
build-island-pano.py
Turns the Island House 360 photos into an immersive in-the-room web viewer.

It downscales each equirectangular (360) JPG for the web using macOS's built-in
`sips` (no installs), drops them in ./island-house-pano/, and writes
island-house-room.html — a photosphere you can look around inside, stepping
station-to-station through the walk.

Usage:
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

step = int(sys.argv[1]) if len(sys.argv) > 1 else 1
maxdim = int(sys.argv[2]) if len(sys.argv) > 2 else 3072
quality = int(sys.argv[3]) if len(sys.argv) > 3 else 80

def main():
    if not os.path.isdir(SRC):
        print("ERROR: source images not found at", SRC)
        print("Pass the right folder by editing SRC at the top, or check the path.")
        sys.exit(1)
    imgs = sorted(f for f in os.listdir(SRC) if f.lower().endswith((".jpg", ".jpeg")))
    if not imgs:
        print("ERROR: no JPGs in", SRC); sys.exit(1)
    imgs = imgs[::step]
    os.makedirs(OUTDIR, exist_ok=True)

    made = []
    for i, name in enumerate(imgs, 1):
        src = os.path.join(SRC, name)
        out = os.path.join(OUTDIR, name)
        subprocess.run(
            ["sips", "-s", "format", "jpeg", "-s", "formatOptions", str(quality),
             "-Z", str(maxdim), src, "--out", out],
            check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        made.append(name)
        print(f"  [{i}/{len(imgs)}] {name}")

    # rough total size
    total = sum(os.path.getsize(os.path.join(OUTDIR, n)) for n in made)
    manifest = json.dumps(made, separators=(",", ":"))
    open(HTML, "w").write(TEMPLATE.replace("/*__MANIFEST__*/", manifest))
    print("\nwrote", HTML)
    print(f"panoramas: {len(made)}  ~{total/1024/1024:.1f} MB total  ({maxdim}px, q{quality})")
    print("folder:", OUTDIR)

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
  header p{max-width:680px;color:#e6dcc8;font-size:14px;margin:0;}
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
  .load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#cfe0d8;font-size:14px;}
  .nav{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center;gap:8px;align-items:center;}
  .nav button{background:rgba(10,20,18,.62);color:#fff;border:1px solid rgba(255,255,255,.18);border-radius:9px;
    font-size:13px;font-weight:700;padding:9px 15px;cursor:pointer;font-family:inherit;}
  .nav button:hover{background:rgba(31,92,77,.85);}
  .nav .count{color:#cfe0d8;font-size:12.5px;background:rgba(10,20,18,.55);padding:8px 12px;border-radius:8px;min-width:110px;text-align:center;}
  .hint{position:absolute;right:14px;top:12px;color:#cfe0d8;font-size:11.5px;background:rgba(10,20,18,.55);padding:6px 10px;border-radius:8px;pointer-events:none;}
  .note{font-size:12.5px;color:var(--muted);margin-top:10px;}
</style></head><body>
<header><div class="inner">
  <div class="kicker">Private &middot; Island House · 360 walk-through</div>
  <h1>Island House — step inside</h1>
  <p>The real 360 photos, shown so you can stand in each spot and look all the way around — walls, ceiling, floor. Drag to look, scroll to zoom, and use <b>Next / Prev</b> to move through the building station by station.</p>
  <a class="back" href="index.html">← Back to the Business Operating System</a>
</div></header>
<div class="wrap">

  <h2>Look around the room</h2>
  <p class="sub">Drag inside the window to look · scroll to zoom · Next/Prev (or ← → keys) to move to the next spot.</p>

  <div id="stage">
    <div class="hud" id="hud">Loading…</div>
    <div class="hint">drag to look · scroll to zoom</div>
    <div class="load" id="load">Loading the first room…</div>
    <div class="nav">
      <button id="prev">‹ Prev</button>
      <span class="count" id="count">–</span>
      <button id="next">Next ›</button>
    </div>
  </div>
  <p class="note">These are the raw capture positions (~2–3m apart), so the jumps are large — the re-shoot at ~1–1.5m will make the walk feel continuous. But each panorama is a true, full view of that spot.</p>

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
var mat=new THREE.MeshBasicMaterial({color:0x222222});
var sphere=new THREE.Mesh(geo,mat); scene.add(sphere);

var lon=0, lat=0, fov=75, idx=0;
var loader=new THREE.TextureLoader();

function show(i){
  idx=(i+PANOS.length)%PANOS.length;
  document.getElementById('count').textContent='Station '+(idx+1)+' of '+PANOS.length;
  document.getElementById('hud').textContent='Loading station '+(idx+1)+'…';
  var ld=document.getElementById('load'); ld.style.display='flex';
  loader.load(DIR+PANOS[idx], function(tex){
    tex.minFilter=THREE.LinearFilter;
    if(sphere.material.map) sphere.material.map.dispose();
    sphere.material=new THREE.MeshBasicMaterial({map:tex});
    ld.style.display='none';
    document.getElementById('hud').textContent='Station '+(idx+1)+' of '+PANOS.length;
    lon=0; lat=0; // face forward on each new room
  }, undefined, function(){ ld.textContent='Could not load this image.'; });
}

function update(){
  lat=Math.max(-85,Math.min(85,lat));
  var phi=THREE.MathUtils.degToRad(90-lat), theta=THREE.MathUtils.degToRad(lon);
  var t=new THREE.Vector3(Math.sin(phi)*Math.cos(theta),Math.cos(phi),Math.sin(phi)*Math.sin(theta));
  camera.lookAt(t);
  camera.fov=fov; camera.updateProjectionMatrix();
}

// drag look
var down=false,px=0,py=0;
stage.addEventListener('mousedown',function(e){down=true;px=e.clientX;py=e.clientY;stage.classList.add('grab');});
window.addEventListener('mouseup',function(){down=false;stage.classList.remove('grab');});
window.addEventListener('mousemove',function(e){
  if(!down)return;
  lon-=(e.clientX-px)*0.15; lat+=(e.clientY-py)*0.15; px=e.clientX;py=e.clientY;
});
stage.addEventListener('wheel',function(e){ fov=Math.max(30,Math.min(95,fov+(e.deltaY>0?3:-3))); e.preventDefault(); },{passive:false});
// touch
stage.addEventListener('touchstart',function(e){ if(e.touches.length===1){down=true;px=e.touches[0].clientX;py=e.touches[0].clientY;} });
stage.addEventListener('touchend',function(){down=false;});
stage.addEventListener('touchmove',function(e){
  if(!down||e.touches.length!==1)return;
  lon-=(e.touches[0].clientX-px)*0.2; lat+=(e.touches[0].clientY-py)*0.2;
  px=e.touches[0].clientX;py=e.touches[0].clientY; e.preventDefault();
},{passive:false});

document.getElementById('next').onclick=function(){show(idx+1);};
document.getElementById('prev').onclick=function(){show(idx-1);};
window.addEventListener('keydown',function(e){ if(e.key==='ArrowRight')show(idx+1); if(e.key==='ArrowLeft')show(idx-1); });

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
