/* ============================================================
   ROTAS DA API — VIA PROXY PRÓPRIO NO RENDER
   ============================================================ */

const BASE = "https://josabet-proxy.onrender.com";

const API_CARTOLA = {
  MERCADO_STATUS: `${BASE}/mercado/status`,
  PARTIDAS: `${BASE}/partidas`,
  CLUBES: `${BASE}/clubes`,
  ATLETAS_MERCADO: `${BASE}/mercado`, // ATENÇÃO: rota é /mercado, não /atletas/mercado
  POSICOES: `${BASE}/posicoes`,
  RODADAS: `${BASE}/rodadas`,
  PARTIDAS_RODADA: (rodada) => `${BASE}/partidas/${rodada}`,
  PONTUADOS: (rodada) =>
    rodada ? `${BASE}/atletas/pontuados/${rodada}` : `${BASE}/atletas/pontuados`,
};

window.API_CARTOLA = API_CARTOLA;
console.log("✅ Rotas API carregadas:", API_CARTOLA);
