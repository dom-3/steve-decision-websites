#!/usr/bin/env python3
"""
build-island-3d.py
Reads an OpenSfM reconstruction.json and writes a self-contained web viewer
(island-house-3d.html) into this same folder — no external data files, no
plugins. Each reconstruction fragment is shown on its own (they don't share a
coordinate frame), with its sparse point cloud + the camera sweep path.

Usage:
    python3 build-island-3d.py [path/to/reconstruction.json]

Default path: ~/Documents/islandhouse-p0/project-hi/reconstruction.json
"""
import json, os, sys, math

DEFAULT = os.path.expanduser("~/Documents/islandhouse-p0/project-hi/reconstruction.json")
SRC = sys.argv[1] if len(sys.argv) > 1 else DEFAULT
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "island-house-3d.html")

def rot_matrix(v):
    """Rodrigues: angle-axis 3-vector -> 3x3 rotation matrix."""
    rx, ry, rz = v
    th = math.sqrt(rx*rx + ry*ry + rz*rz)
    if th < 1e-9:
        return [[1,0,0],[0,1,0],[0,0,1]]
    kx, ky, kz = rx/th, ry/th, rz/th
    c, s = math.cos(th), math.sin(th)
    C = 1 - c
    return [
        [c + kx*kx*C,      kx*ky*C - kz*s,  kx*kz*C + ky*s],
        [ky*kx*C + kz*s,   c + ky*ky*C,     ky*kz*C - kx*s],
        [kz*kx*C - ky*s,   kz*ky*C + kx*s,  c + kz*kz*C],
    ]

def cam_center(rotation, translation):
    """C = -R^T t"""
    R = rot_matrix(rotation)
    t = translation
    return [
        -(R[0][0]*t[0] + R[1][0]*t[1] + R[2][0]*t[2]),
        -(R[0][1]*t[0] + R[1][1]*t[1] + R[2][1]*t[2]),
        -(R[0][2]*t[0] + R[1][2]*t[1] + R[2][2]*t[2]),
    ]

def main():
    if not os.path.exists(SRC):
        print("ERROR: could not find", SRC)
        print("Pass the path as an argument, e.g.:")
        print("  python3 build-island-3d.py ~/Documents/islandhouse-p0/project-hi/reconstruction.json")
        sys.exit(1)

    recs = json.load(open(SRC))
    frags = []
    for rec in recs:
        pts = []
        for p in rec.get("points", {}).values():
            x, y, z = p["coordinates"]
            col = p.get("color", [200, 200, 200])
            r, g, b = [int(max(0, min(255, round(c)))) for c in col]
            pts.append([round(x, 4), round(y, 4), round(z, 4), r, g, b])
        cams = []
        # keep the sweep in capture order (shot keys sort chronologically here)
        for name in sorted(rec.get("shots", {}).keys()):
            s = rec["shots"][name]
            c = cam_center(s["rotation"], s["translation"])
            cams.append([round(c[0], 4), round(c[1], 4), round(c[2], 4)])
        frags.append({"points": pts, "cams": cams, "nimg": len(rec.get("shots", {}))})

    # largest first, so fragment 0 is the strongest piece
    frags.sort(key=lambda f: (-f["nimg"], -len(f["points"])))
    data = json.dumps(frags, separators=(",", ":"))

    html = TEMPLATE.replace("/*__DATA__*/", data)
    open(OUT, "w").write(html)
    tot = sum(f["nimg"] for f in frags)
    print("wrote", OUT)
    print("fragments:", len(frags), "| images across fragments:", tot,
          "| largest:", frags[0]["nimg"], "images,", len(frags[0]["points"]), "points")

TEMPLATE = r"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Island House — 3D capture (what we have) — The Business</title>
<style>
  :root{--green:#1f5c4d;--dark:#153f35;--gold:#b07d2b;--ink:#22302e;--muted:#6a7b76;--line:#dfe6e2;}
  *{box-sizing:border-box;} body{margin:0;background:#eef1ee;color:var(--ink);font-family:"Helvetica Neue",Arial,sans-serif;line-height:1.55;}
  .wrap{max-width:1040px;margin:0 auto;padding:0 22px 70px;}
  header{background:linear-gradient(160deg,var(--green),var(--dark));color:#f4efe6;padding:38px 22px 26px;}
  header .inner{max-width:1040px;margin:0 auto;}
  .kicker{letter-spacing:4px;text-transform:uppercase;font-size:11px;color:#d8c9a8;}
  h1{font-family:Georgia,serif;font-weight:400;font-size:30px;margin:8px 0 6px;}
  header p{max-width:680px;color:#e6dcc8;font-size:14px;margin:0;}
  .back{display:inline-block;margin-top:14px;color:#d8c9a8;text-decoration:none;font-size:12.5px;letter-spacing:1px;}
  .back:hover{color:#fff;}
  h2{font-family:Georgia,serif;color:var(--dark);font-size:19px;margin:28px 0 4px;border-bottom:2px solid var(--gold);padding-bottom:6px;}
  .sub{color:var(--muted);font-size:13px;margin:0 0 12px;}
  .frags{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 10px;}
  .fb{border:1px solid var(--line);background:#fff;color:var(--green);font-size:12.5px;font-weight:700;
      padding:8px 13px;border-radius:9px;cursor:pointer;font-family:inherit;}
  .fb.on{background:var(--green);color:#fff;border-color:var(--green);}
  .fb small{display:block;font-weight:400;font-size:10.5px;color:var(--muted);}
  .fb.on small{color:#cfe0d8;}
  #stage{position:relative;width:100%;height:560px;max-height:72vh;background:#0d1614;border-radius:14px;overflow:hidden;
    box-shadow:0 6px 24px rgba(20,50,45,.18);border:1px solid #0a1210;}
  #stage canvas{display:block;}
  .hud{position:absolute;left:14px;top:12px;color:#cfe0d8;font-size:12px;background:rgba(10,20,18,.55);
    padding:7px 11px;border-radius:8px;pointer-events:none;line-height:1.4;}
  .legend{position:absolute;right:14px;bottom:12px;color:#cfe0d8;font-size:11px;background:rgba(10,20,18,.55);
    padding:7px 11px;border-radius:8px;pointer-events:none;}
  .legend .p{color:#d8c9a8;} .legend .c{color:#f0b64a;}
  .ctl{position:absolute;left:14px;bottom:12px;display:flex;gap:6px;}
  .ctl button{background:rgba(10,20,18,.55);color:#cfe0d8;border:1px solid rgba(255,255,255,.14);border-radius:7px;
    font-size:12px;padding:6px 10px;cursor:pointer;font-family:inherit;}
  .note{font-size:12.5px;color:var(--muted);margin-top:10px;}
  .panel{background:#fff;border:1px solid var(--line);border-left:6px solid var(--gold);border-radius:14px;
    padding:16px 20px;margin-top:16px;box-shadow:0 3px 12px rgba(20,50,45,.06);}
  .panel h3{font-family:Georgia,serif;margin:0 0 8px;color:var(--dark);font-size:18px;}
  .panel p{font-size:13.5px;margin:6px 0;}
  ul.clean{list-style:none;padding:0;margin:8px 0 0;}
  ul.clean li{position:relative;padding:5px 0 5px 22px;font-size:13.5px;border-bottom:1px dashed var(--line);}
  ul.clean li:last-child{border-bottom:0;}
  ul.clean li:before{content:"→";position:absolute;left:0;color:var(--gold);font-weight:700;}
</style></head><body>
<header><div class="inner">
  <div class="kicker">Private &middot; Island House · 3D capture spike (P0)</div>
  <h1>Island House — the 3D capture, so far</h1>
  <p>A first pass at turning the 360 photos into a 3D model. It didn't tie into one whole-house model yet (the photos were shot too far apart to link up), but it did reconstruct several <b>fragments</b> — individual areas. Below you can spin each one around in the browser. This is the raw geometry, not a finished render.</p>
  <a class="back" href="index.html">← Back to the Business Operating System</a>
</div></header>
<div class="wrap">

  <h2>Pick a fragment</h2>
  <p class="sub">Each button is one reconstructed piece — larger = more photos linked. They're separate captures, so each is viewed on its own. Drag to rotate · scroll to zoom · right-drag to pan.</p>
  <div class="frags" id="frags"></div>

  <div id="stage">
    <div class="hud" id="hud"></div>
    <div class="legend"><span class="p">● points</span> = surfaces &nbsp; <span class="c">▬ line</span> = camera path</div>
    <div class="ctl"><button id="reset">Reset view</button><button id="spin">Auto-spin: on</button></div>
  </div>
  <p class="note">This is a <b>sparse</b> point cloud — the matched feature points, enough to read the shape and the sweep path. A dense, photo-textured model comes from the re-shoot.</p>

  <div class="panel">
    <h3>What this tells us — and the re-shoot that fixes it</h3>
    <p>Two processing passes both split the house into ~9–10 fragments with the largest linking only ~10 of 53 photos. That's not a software limit — it's the spacing. Consecutive frames overlap, but the gaps between sweep positions (2–3m) were too big to close the loops into one model.</p>
    <p><b>The re-shoot spec (this is the whole fix):</b></p>
    <ul class="clean">
      <li>A 360 sweep <b>every ~1–1.5m</b> — consecutive spots should share 60%+ of the same view.</li>
      <li><b>Extra sweeps at every corner, doorway and turn</b> — that's exactly where the links break.</li>
      <li>Walk <b>one continuous loop</b> and return to the start — don't hop between rooms.</li>
      <li>Shoot <b>doorways from in the doorway</b>, so one sweep sees both rooms and stitches them.</li>
      <li>Even light, avoid blown-out windows, keep some texture/edges in frame (blank walls give nothing to match).</li>
    </ul>
    <p class="note" style="margin-top:10px;">Do that and it processes into one clean whole-house model in a single pass.</p>
  </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
var FRAGS = /*__DATA__*/;

var stage = document.getElementById('stage');
var W = stage.clientWidth, H = stage.clientHeight;
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(W,H); stage.appendChild(renderer.domElement);
var scene = new THREE.Scene(); scene.background = new THREE.Color(0x0d1614);
var camera = new THREE.PerspectiveCamera(55, W/H, 0.01, 5000);

// simple orbit state
var target = new THREE.Vector3(0,0,0);
var rad = 3, theta = 0.6, phi = 1.1, autospin = true;
function applyCam(){
  camera.position.set(
    target.x + rad*Math.sin(phi)*Math.cos(theta),
    target.y + rad*Math.cos(phi),
    target.z + rad*Math.sin(phi)*Math.sin(theta)
  );
  camera.lookAt(target);
}
var current = null, camLine = null;
var homeTarget = new THREE.Vector3(), homeRad = 6, homeTheta = 0.6, homePhi = 1.05;

function clearScene(){
  if(current){ scene.remove(current); current.geometry.dispose(); current.material.dispose(); current=null; }
  if(camLine){ scene.remove(camLine); camLine.geometry.dispose(); camLine.material.dispose(); camLine=null; }
}

function loadFrag(i){
  clearScene();
  var f = FRAGS[i];
  var pts = f.points, n = pts.length;
  var pos = new Float32Array(n*3), col = new Float32Array(n*3);
  var cx=0,cy=0,cz=0;
  for(var k=0;k<n;k++){ cx+=pts[k][0]; cy+=pts[k][1]; cz+=pts[k][2]; }
  cx/=n; cy/=n; cz/=n;
  var maxr=0.0001;
  for(var k=0;k<n;k++){
    var dx=pts[k][0]-cx, dy=pts[k][1]-cy, dz=pts[k][2]-cz;
    var d=Math.sqrt(dx*dx+dy*dy+dz*dz); if(d>maxr) maxr=d;
  }
  var s = 2.0/maxr; // scale so cloud radius ~2 units
  for(var k=0;k<n;k++){
    pos[k*3]=(pts[k][0]-cx)*s; pos[k*3+1]=(pts[k][1]-cy)*s; pos[k*3+2]=(pts[k][2]-cz)*s;
    col[k*3]=pts[k][3]/255; col[k*3+1]=pts[k][4]/255; col[k*3+2]=pts[k][5]/255;
  }
  var g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos,3));
  g.setAttribute('color', new THREE.BufferAttribute(col,3));
  var m = new THREE.PointsMaterial({size:0.06, vertexColors:true, sizeAttenuation:true});
  current = new THREE.Points(g,m); scene.add(current);

  // camera path
  if(f.cams && f.cams.length){
    var cp=[];
    for(var k=0;k<f.cams.length;k++){
      cp.push(new THREE.Vector3((f.cams[k][0]-cx)*s,(f.cams[k][1]-cy)*s,(f.cams[k][2]-cz)*s));
    }
    var lg=new THREE.BufferGeometry().setFromPoints(cp);
    var lm=new THREE.LineBasicMaterial({color:0xf0b64a});
    camLine=new THREE.Line(lg,lm); scene.add(camLine);
    var sg=new THREE.SphereGeometry(0.05,8,8), sm=new THREE.MeshBasicMaterial({color:0xf0b64a});
    for(var k=0;k<cp.length;k++){ var sp=new THREE.Mesh(sg,sm); sp.position.copy(cp[k]); camLine.add(sp); }
  }
  current.geometry.computeBoundingSphere();
  var bs=current.geometry.boundingSphere;
  homeTarget.copy(bs.center); homeRad=Math.max(1.2, bs.radius*2.4);
  target.copy(homeTarget); rad=homeRad; theta=homeTheta; phi=homePhi; applyCam();
  document.getElementById('hud').innerHTML =
    'Fragment '+(i+1)+' of '+FRAGS.length+'<br>'+f.nimg+' photos linked · '+n.toLocaleString()+' points';
  document.querySelectorAll('.fb').forEach(function(b,bi){ b.classList.toggle('on', bi===i); });
}

// buttons
var fc = document.getElementById('frags');
FRAGS.forEach(function(f,i){
  var b=document.createElement('button'); b.className='fb';
  b.innerHTML='Fragment '+(i+1)+'<small>'+f.nimg+' photos</small>';
  b.onclick=function(){ loadFrag(i); }; fc.appendChild(b);
});

// interaction
var dragging=false, panning=false, lx=0, ly=0;
renderer.domElement.addEventListener('mousedown',function(e){ dragging=true; panning=(e.button===2); lx=e.clientX; ly=e.clientY; autospin=false; document.getElementById('spin').textContent='Auto-spin: off'; e.preventDefault(); });
window.addEventListener('mouseup',function(){ dragging=false; panning=false; });
window.addEventListener('mousemove',function(e){
  if(!dragging) return;
  var dx=e.clientX-lx, dy=e.clientY-ly; lx=e.clientX; ly=e.clientY;
  if(panning){
    var right=new THREE.Vector3().crossVectors(camera.up,new THREE.Vector3().subVectors(camera.position,target)).normalize();
    var up=camera.up.clone().normalize();
    var k=rad*0.0016;
    target.addScaledVector(right, dx*k); target.addScaledVector(up, dy*k);
  } else {
    theta -= dx*0.005; phi -= dy*0.005;
    phi=Math.max(0.05,Math.min(Math.PI-0.05,phi));
  }
  applyCam();
});
renderer.domElement.addEventListener('contextmenu',function(e){ e.preventDefault(); });
renderer.domElement.addEventListener('wheel',function(e){ rad *= (1+ (e.deltaY>0?0.1:-0.1)); rad=Math.max(0.5,Math.min(60,rad)); applyCam(); e.preventDefault(); },{passive:false});

document.getElementById('reset').onclick=function(){ target.copy(homeTarget); rad=homeRad; theta=homeTheta; phi=homePhi; applyCam(); };
document.getElementById('spin').onclick=function(){ autospin=!autospin; this.textContent='Auto-spin: '+(autospin?'on':'off'); };

window.addEventListener('resize',function(){
  W=stage.clientWidth; H=stage.clientHeight; renderer.setSize(W,H); camera.aspect=W/H; camera.updateProjectionMatrix();
});

function tick(){ requestAnimationFrame(tick); if(autospin){ theta+=0.0016; applyCam(); } renderer.render(scene,camera); }
loadFrag(0); tick();
</script>
</body></html>
"""

if __name__ == "__main__":
    main()
