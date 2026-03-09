/* ============================================================
   SERVICE WORKER — TAÇA NATTOS 2026
   Versão: 2.0 - Corrigido para GitHub Pages
   ============================================================ */

const CACHE_NAME = 'nattos-v4';
const BASE = '/teste';

/* Arquivos estáticos em cache */
const ARQUIVOS_ESTATICOS = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/campo.png`,
  `${BASE}/CARTOLA.png`,
  `${BASE}/CS.png`,
  `${BASE}/TROFEU_NATTOS.png`,
  `${BASE}/manifest.json`,
  `${BASE}/Fontecartola.otf`,
  `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=Teko:wght@600;700&display=swap`
];

/* Arquivos de dados - SEMPRE DA REDE */
const ARQUIVOS_DADOS = ['tabela.js', 'escalacoes.js'];

/* ── INSTALAÇÃO ─────────────────────────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ARQUIVOS_ESTATICOS).catch(err => {
          console.warn('[SW] Alguns arquivos não cacheados:', err);
          // Continua mesmo com erro em alguns arquivos
        });
      })
      .then(() => self.skipWaiting())
  );
});

/* ── ATIVAÇÃO (limpa caches antigos) ─────────────────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

/* ── ESTRATÉGIA DE CACHE: Stale-While-Revalidate para estáticos ─── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Ignorar requisições que não são do mesmo domínio (como fonts.googleapis.com)
  if (url.origin !== location.origin && !url.href.includes('fonts.googleapis.com')) {
    return;
  }

  const isDado = ARQUIVOS_DADOS.some(nome => url.pathname.endsWith(nome));

  if (isDado) {
    // DADOS: Network First
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return response;
        })
        .catch(() => {
          // Se offline, retorna uma resposta vazia
          return new Response('// offline', { 
            headers: { 'Content-Type': 'application/javascript' } 
          });
        })
    );
  } else {
    // ESTÁTICOS: Stale-While-Revalidate
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              // Atualiza o cache se a resposta for válida
              if (networkResponse && networkResponse.status === 200) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => {
              // Se falhar e não tiver cache, retorna erro
              if (!cachedResponse) {
                return new Response('Offline', { status: 503 });
              }
            });
          
          // Retorna o cache primeiro, ou a rede se não tiver cache
          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});

/* ── NOTIFICAÇÕES DE NOVA RODADA ──────────────────────────── */
self.addEventListener('message', async event => {
  if (event.data && event.data.tipo === 'VERIFICAR_RODADA') {
    const { rodadaAtual, serieAtiva } = event.data;
    const chave = `ultima_rodada_${serieAtiva}`;

    try {
      const db = await abrirDB();
      const ultimaRodada = await lerValor(db, chave);

      if (ultimaRodada !== null && rodadaAtual > ultimaRodada) {
        await gravarValor(db, chave, rodadaAtual);
        
        // Verifica se tem permissão para notificações
        const permission = await self.registration.permissionStatus || 
                          { state: 'default' };
        
        if (permission.state === 'granted') {
          self.registration.showNotification('⚽ TAÇA NATTOS 2026', {
            body: `Nova rodada disponível: ${rodadaAtual}`,
            icon: `${BASE}/CARTOLA.png`,
            badge: `${BASE}/CARTOLA.png`,
            tag: `rodada-${serieAtiva}-${rodadaAtual}`,
            renotify: true,
            data: { url: `https://joseir11.github.io/teste/?rdd=${rodadaAtual}` }
          });
        }
      } else if (ultimaRodada === null) {
        await gravarValor(db, chave, rodadaAtual);
      }
    } catch (error) {
      console.error('[SW] Erro ao processar rodada:', error);
    }
  }
});

/* ── CLIQUE NA NOTIFICAÇÃO ───────────────────────────────── */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  const urlParaAbrir = event.notification.data?.url || 
                      'https://joseir11.github.io/teste/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(windowClients => {
        // Verifica se já existe uma janela aberta
        for (const client of windowClients) {
          if (client.url.includes('/teste/') && 'focus' in client) {
            return client.focus();
          }
        }
        // Se não existir, abre uma nova
        if (clients.openWindow) {
          return clients.openWindow(urlParaAbrir);
        }
      })
  );
});

/* ── INDEXEDDB HELPERS ───────────────────────────────────── */
function abrirDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('nattos-sw', 2);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('kv')) {
        db.createObjectStore('kv');
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = e => reject(e.target.error);
  });
}

function lerValor(db, chave) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('kv', 'readonly');
    const req = tx.objectStore('kv').get(chave);
    req.onsuccess = e => resolve(e.target.result || null);
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