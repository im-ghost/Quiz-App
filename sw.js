const cacheName = 'Quiz-app';
self.addEventListener('install', (e) => {
    e.waitUntil((async () => {
        const contentToCache=[
        'https://peculiar-quiz-app.netlify.app/index.html',
      'https://peculiar-quiz-app.netlify.app/scripts/script.js',
      'https://peculiar-quiz-app.netlify.app/styles/style.css',
      'https://peculiar-quiz-app.netlify.app/img5.jpg',
      'https://peculiar-quiz-app.netlify.app/favecon.ico',
      'https://peculiar-quiz-app.netlify.app/scripts/peculiar.js',
      'https://peculiar-quiz-app.netlify.app/scripts/questions.js',
      'https://peculiar-quiz-app.netlify.app/scripts/quiz.js',
   
        ]
    const cache = await caches.open(cacheName);
   // console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());

      
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    //console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
   // console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});