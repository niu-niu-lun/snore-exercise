const CACHE = 'snore-exercise-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './images/exercise-01.jpg',
  './images/exercise-02.jpg',
  './images/exercise-03.jpg',
  './images/exercise-04.jpg',
  './images/workout-plan.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
