// sw.js — caches the whole route on first load so the trail works in airplane mode
// on the signal-dead coast path. Cache-first for everything in the app shell.
const CACHE = "township-loop-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./manifest.webmanifest",
  "./snapshot.public.json",
  "./snapshot.preview.json",
  "./loop-core.mjs",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(e.request)
        .then((res) => {
          // runtime-cache same-origin successes so a first online visit warms everything
          const copy = res.clone();
          if (res.ok && new URL(e.request.url).origin === location.origin) {
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => caches.match("./index.html")); // offline fallback for navigations
    })
  );
});
