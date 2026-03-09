/* ============================================================
   SERVICE WORKER — TAÇA NATTOS 2026
   Responsável por: cache offline, notificações de rodada nova
   ============================================================ */

const CACHE_NAME = 'nattos-v3';
const BASE = '/teste';

/* Arquivos estáticos em cache (nunca mudam) */
const ARQUIVOS_ESTATICOS = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/campo.png`,
  `${BASE}/CARTOLA.png`,
  `${BASE}/CS.png`,
  `${BASE}/TROFEU_NATTOS.png`,
  `${BASE}/manifest.json`
];

/* Arquivos de dados — NUNCA cacheados, sempre frescos do servidor */
const ARQUIVOS_DADOS = ['tabela.js', 'escalacoes.js'];

/* ── INSTALAÇÃO ─────────────────────────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ARQUIVOS_ESTATICOS).catch(err => {
        console.warn('[SW] Alguns arquivos não cacheados:', err);
      });
    })
  );
  self.skipWaiting();
});

/* ── ATIVAÇÃO (limpa caches antigos) ─────────────────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── FETCH ───────────────────────────────────────────────── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isDado = ARQUIVOS_DADOS.some(nome => url.pathname.endsWith(nome));

  if (isDado) {
    /* DADOS: sempre busca na rede, SEM cache — garante dados frescos */
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => new Response('// offline', { headers: { 'Content-Type': 'application/javascript' } }))
    );
  } else {
    /* ESTÁTICOS: cache-first */
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});

/* ── VERIFICAÇÃO DE NOVA RODADA ──────────────────────────── */
/*
  O app vai chamar esta função via postMessage após carregar os dados.
  O SW compara com a última rodada conhecida e dispara notificação se mudou.
*/
self.addEventListener('message', async event => {
  if (event.data && event.data.tipo === 'VERIFICAR_RODADA') {
    const { rodadaAtual, serieAtiva } = event.data;
    const chave = `ultima_rodada_${serieAtiva}`;

    /* Lê última rodada salva */
    const db = await abrirDB();
    const ultimaRodada = await lerValor(db, chave);

    if (ultimaRodada !== null && rodadaAtual > ultimaRodada) {
      /* Nova rodada detectada! */
      await gravarValor(db, chave, rodadaAtual);
      self.registration.showNotification('⚽ Taça Nattos 2026', {
        body: `Rodada ${rodadaAtual} atualizada.`,
        icon: `${BASE}/CARTOLA.png`,
        badge: `${BASE}/CARTOLA.png`,
        tag: `rodada-${serieAtiva}-${rodadaAtual}`,
        renotify: true
      });
    } else {
      /* Primeira vez: só salva o valor */
      await gravarValor(db, chave, rodadaAtual);
    }
  }
});

/* ── CLIQUE NA NOTIFICAÇÃO ───────────────────────────────── */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlAlvo = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : 'https://joseir11.github.io/teste/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url === urlAlvo && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(urlAlvo);
    })
  );
});

/* ── INDEXEDDB HELPERS (persistência leve) ───────────────── */
function abrirDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('nattos-sw', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('kv');
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = e => reject(e.target.error);
  });
}

function lerValor(db, chave) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('kv', 'readonly');
    const req = tx.objectStore('kv').get(chave);
    req.onsuccess = e => resolve(e.target.result ?? null);
    req.onerror = e => reject(e.target.error);
  });
}

function gravarValor(db, chave, valor) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('kv', 'readwrite');
    const req = tx.objectStore('kv').put(valor, chave);
    req.onsuccess = () => resolve();
    req.onerror = e => reject(e.target.error);
  });
}
