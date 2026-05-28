const CACHE_NAME = 'playcast-v1';
const ASSETS = [
  'index.html',
  'icon.png',
  'manifest.json'
];

// ইনস্টল ইভেন্ট
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ফেচ ইভেন্ট (অনলাইন/অফলাইন লোড ঠিক রাখার জন্য)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
