const CACHE_NAME = 'easydispo-build-prototype-v0-1';
const CORE_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/icons/easydispo.svg',
  '/legacy/EasyDispo-Demo_v1.6_hoverfix.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match('/')))
  );
});
