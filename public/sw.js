self.addEventListener('install', (event) => {
    console.log("[service worker]--- installing", event);
});

self.addEventListener('activate', (event) => {
    console.log("[service worker]--- activating", event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log("[service worker] fetching something...", event);
    // event.respondWith(null);
});

