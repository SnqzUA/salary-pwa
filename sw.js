const CACHE_NAME = 'salary-calc-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Кэшируем файлы при установке
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Работаем автономно из кэша
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
