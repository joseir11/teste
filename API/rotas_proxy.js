/* ============================================================
   ROTAS DA API — CARTOLA FC (VIA PROXY CORS)
   ============================================================ */

// PROXY PÚBLICO — BOM PARA TESTES
// EM PRODUÇÃO, USE SEU PRÓPRIO PROXY (RENDER, VERCEL, CLOUDFLARE)
const PROXY = "https://corsproxy.io/?url=";

const API_CARTOLA = {
  MERCADO_STATUS: PROXY + encodeURIComponent("https://api.cartola.globo.com/mercado/status"),
  PARTIDAS: PROXY + encodeURIComponent("https://api.cartola.globo.com/partidas"),
  CLUBES: PROXY + encodeURIComponent("https://api.cartola.globo.com/clubes"),
  PARTIDAS_RODADA: (rodada) =>
    PROXY + encodeURIComponent(`https://api.cartola.globo.com/partidas/${rodada}`),
};

window.API_CARTOLA = API_CARTOLA;
console.log("✅ Rotas API carregadas:", API_CARTOLA);
