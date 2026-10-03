/* Sieve AI by Mohammed Fardeen Khan: service worker that keeps the app working offline.
   The app is fetched network-first, so updates arrive as soon as you are online.
   Fonts and the Word and PDF readers are kept after first use.
   Searches to Crossref, Europe PMC and Wikipedia always go straight to the network and are never stored. */
const VERSION = 'sieve-app-v1';
const LIBS = 'sieve-libs';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
];
const LIB_HOSTS = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];
const PRELOAD = [
  'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.13.0/mammoth.browser.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await cache.addAll(CORE);
    /* best effort: fetch the Word and PDF readers now so they work offline later */
    const libs = await caches.open(LIBS);
    await Promise.allSettled(PRELOAD.map(async url => {
      if (await libs.match(url)) return;
      const res = await fetch(url, { mode: 'no-cors' });
      await libs.put(url, res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const old = k => (k.startsWith('sieve-') || k.startsWith('cc-')) && k !== VERSION && k !== LIBS;
    await Promise.all(keys.filter(old).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate') {
      event.respondWith((async () => {
        try {
          const res = await fetch(req);
          if (res.ok) {
            const cache = await caches.open(VERSION);
            await cache.put('./index.html', res.clone());
          }
          return res;
        } catch (e) {
          return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
        }
      })());
      return;
    }
    event.respondWith((async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) (await caches.open(VERSION)).put(req, res.clone());
      return res;
    })());
    return;
  }

  if (LIB_HOSTS.includes(url.hostname)) {
    event.respondWith((async () => {
      const cache = await caches.open(LIBS);
      const hit = await cache.match(req, { ignoreVary: true }) || await cache.match(url.href);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
      return res;
    })());
  }
  /* anything else (database searches, outside links) is left to the network */
});
