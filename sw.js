self.addEventListener('install', (e) => {
  console.log('Service Worker Instalalt');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
