// service-worker.js

const CACHE_NAME = 'bmt-calculator-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/global.scss',
  '/assets/bmtlogo.png'
];


// Installationsereignis - Ressourcen werden gecacht
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opening cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Abrufereignis - Versucht, Ressourcen aus dem Cache abzurufen
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Rückgabe aus dem Cache
        }
        return fetch(event.request); // Netzwerkanfrage, wenn nicht gecacht
      })
  );
});

// Aktivierung und Cache aktualisieren
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
