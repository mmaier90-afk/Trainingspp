const CACHE='gymm-buddy-time-dashboard-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./logo-192.png','./logo-512.png','./logo-full.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
