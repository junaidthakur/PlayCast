const CACHE_NAME = 'playcast-v2';
const assets = [
  '/PlayCast/',
  '/PlayCast/index.html',
  '/PlayCast/manifest.json',
  '/PlayCast/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// এই fetch ইভেন্টটি ক্রোম ব্রাউজারের জন্য বাধ্যতামূলক
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
