/* ============================================================
   SERVICE WORKER — CARTOLA FC PWA
   ============================================================ */

const CACHE_NAME = 'cartola-pwa-v1';

// ARQUIVOS ESTÁTICOS PARA CACHE INICIAL
const ARQUIVOS_ESTATICOS = [
  './',
  './index.html',
  './API/rotas_proxy.js', // NOVO ARQUIVO DE ROTAS
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

/* ── INSTALAÇÃO ─────────────────────────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARQUIVOS_ESTATICOS))
    .then(() => self.skipWaiting())
  );
});

/* ── ATIVAÇÃO ────────────────────────────────────────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

/* ── FETCH (ESTRATÉGIA: NETWORK FIRST PARA API) ───────────── */
self.addEventListener('fetch', event => {
  // SE A REQUISIÇÃO FOR PARA O PROXY OU API DA GLOBO, TENTA REDE PRIMEIRO
  if (event.request.url.includes('onrender.com') || event.request.url.includes('globo.com')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request)) // SE FALHAR A REDE, PEGA O QUE TIVER NO CACHE
    );
    return;
  }

  // PARA ARQUIVOS ESTÁTICOS, MANTÉM A LÓGICA ANTERIOR (CACHE FIRST)
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
