
// Files to cache
const cacheName = 'quiz app';
const appShellFiles = [
    Quiz-App/,
    Quiz-App/index.html,
    Quiz-App/styles/style.css,
    Quiz-App/scripts/script.js,
    Quiz-App/scripts/quiz.js,
    Quiz-App/peculiar.js,
    Quiz-App/icons/icon-512×512.png,
    Quiz-App/icons/icon-192×192.png,
    Quiz-App/icons/icon-384×384.png,
    Quiz-App/icons/icon-256×256.png,
    Quiz-App/images,
    Quiz-App/images/loader.jpg,
    Quiz-App/images/img5.jpg,
    Quiz-App/images/img5.jpeg,
    Quiz-App/images/img5.png,
     Quiz-App/images/img3.png,
    Quiz-App/images/img2.png,
    Quiz-App/images/img1.png,
 Quiz-App/images/img4.png,
    Quiz-App/images/img1.jpeg,
    Quiz-App/images/img2.jpeg,
 Quiz-App/images/img3.jpeg,
    Quiz-App/images/img4.jpeg,
    Quiz-App/images/img6.jpeg,
    Quiz-App/images/img7.jpeg,
    Quiz-App/images/img8.jpeg,
    Quiz-App/images/img9.jpeg,
    Quiz-Appquestions.js
  /*css,js,images,icon..*/
];
/*const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}*/
const contentToCache = appShellFiles//.concat(gamesImages);

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});
// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
