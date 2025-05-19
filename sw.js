
const CACHE_NAME = "exam-protector-cache";
const urlsToCache = [
  "./",
  "./index.html",
  "./exam.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
