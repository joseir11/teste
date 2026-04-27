/* ============================================================
   ROTAS DA API — CARTOLA FC
   ============================================================ */
const API_CARTOLA = {
  BASE: "https://api.cartola.globo.com",
  MERCADO_STATUS: "https://api.cartola.globo.com/mercado/status",
  PARTIDAS: "https://api.cartola.globo.com/partidas",
  CLUBES: "https://api.cartola.globo.com/clubes",
  // PARTIDAS DE UMA RODADA ESPECÍFICA:
  PARTIDAS_RODADA: (rodada) =>
    `https://api.cartola.globo.com/partidas/${rodada}`,
};

// EXPÕE GLOBALMENTE
window.API_CARTOLA = API_CARTOLA;
