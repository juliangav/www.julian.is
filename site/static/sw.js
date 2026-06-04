var CACHE_PREFIX = 'site-cache-';
var CACHE_NAME = 'site-cache-20260604-reset';
var urlsToCache = [
  '/',
  '/style.css',
  '/js/production.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
    .then(function() {
      return self.skipWaiting();
    })
  );
});

function isHtmlRequest(request) {
  return request.mode === 'navigate' ||
    (request.headers.get('accept') || '').indexOf('text/html') !== -1;
}

function cacheResponse(request, response) {
  if (!response || response.status !== 200 || response.type !== 'basic') {
    return response;
  }

  var responseToCache = response.clone();

  caches.open(CACHE_NAME)
    .then(function(cache) {
      cache.put(request, responseToCache);
    });

  return response;
}

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') {
    return;
  }

  if (isHtmlRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
      .then(function(response) {
        return cacheResponse(event.request, response);
      })
      .catch(function() {
        return caches.match(event.request)
          .then(function(response) {
            return response || caches.match('/');
          });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response) {
          return cacheResponse(event.request, response);
        }
      );
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (
            cacheName !== CACHE_NAME &&
            (cacheName.indexOf(CACHE_PREFIX) === 0 || cacheName === 'site-cache')
          ) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
