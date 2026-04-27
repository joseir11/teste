/* ============================================================
   SERVICE WORKER — CARTOLA FC PWA
   VERSÃO: v6 — INCREMENTADA PARA SUPORTE AOS PROVÁVEIS
   ============================================================ */

const CACHE_NAME = "cartola-pwa-v6";

// ARQUIVOS ESTÁTICOS PARA CACHE INICIAL
const ARQUIVOS_ESTATICOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./API/rotas_proxy.js",
  "./MENU/jogos_rodada.js",
  "./MENU/provaveis.js",
  "./IMAGES/provaveis.png",
  "https://cdn.tailwindcss.com",
];

/* ── INSTALAÇÃO ─────────────────────────────────────────── */
self.addEventListener("install", (event) => {
  console.log(`[SW] Instalando ${CACHE_NAME}`);
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // ADICIONA UM POR VEZ — SE ALGUM FALHAR, NÃO QUEBRA TUDO
        return Promise.allSettled(
          ARQUIVOS_ESTATICOS.map((url) =>
            cache.add(url).catch((err) =>
              console.warn(`[SW] Falha ao cachear ${url}:`, err)
            )
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

/* ── ATIVAÇÃO — LIMPA CACHES ANTIGOS ────────────────────── */
self.addEventListener("activate", (event) => {
  console.log(`[SW] Ativando ${CACHE_NAME}`);
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE_NAME)
            .map((k) => {
              console.log(`[SW] Removendo cache antigo: ${k}`);
              return caches.delete(k);
            })
        )
      )
      .then(() => self.clients.claim())
  );
});

/* ── FETCH — ESTRATÉGIAS DIFERENTES POR TIPO ──────────── */
self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // IGNORA REQUISIÇÕES NÃO-GET
  if (event.request.method !== "GET") return;

  // ESTRATÉGIA 1: API (PROXY/GLOBO) — NETWORK ONLY (NUNCA CACHEIA)
  // EVITA SERVIR DADOS DESATUALIZADOS DE PARTIDAS/MERCADO
  if (url.includes("onrender.com") || url.includes("globo.com")) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(
          JSON.stringify({ erro: "Sem conexão" }),
          { headers: { "Content-Type": "application/json" } }
        )
      )
    );
    return;
  }

  // ESTRATÉGIA 2: ESCUDOS — CACHE FIRST (RARO MUDAR)
  if (url.includes("/ESCUDOS_BRASILEIRAO/") || url.includes("/IMAGES/")) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return (
          cached ||
          fetch(event.request).then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) =>
              cache.put(event.request, copy)
            );
            return response;
          })
        );
      })
    );
    return;
  }

  // ESTRATÉGIA 3: ARQUIVOS DO APP — NETWORK FIRST
  // SEMPRE TENTA REDE PRIMEIRO PRA PEGAR ATUALIZAÇÕES
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) =>
          cache.put(event.request, copy)
        );
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

/* ── ESCUTA MENSAGEM PARA FORÇAR ATUALIZAÇÃO ────────────── */
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});
