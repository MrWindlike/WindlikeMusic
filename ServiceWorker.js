var cacheStorageKey = 'minimal-pwa-2';

var cacheList = [
  './',
  "./index.html",
  "./app.js",
  "./icon.png"
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache => cache.addAll(cacheList))
    .then(() => self.skipWaiting())
  )
})