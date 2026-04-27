/* ============================================================
   CONFIGURAÇÃO DE ROTAS - PRODUÇÃO GITHUB
   ============================================================ */

const PROXY_URL = "https://josabet-proxy.onrender.com";
const BASE_URL = "https://api.cartolafc.globo.com";

const API_ROUTES = {
    MERCADO_STATUS: `${PROXY_URL}/${BASE_URL}/mercado/status`,
    ATLETAS_MERCADO: `${PROXY_URL}/${BASE_URL}/atletas/mercado`,
    ATLETAS_PONTUADOS: `${PROXY_URL}/${BASE_URL}/atletas/pontuados`,
    CLUBES: `${PROXY_URL}/${BASE_URL}/clubes`,
    PARTIDAS: `${PROXY_URL}/${BASE_URL}/partidas`,
    RODADAS: `${PROXY_URL}/${BASE_URL}/rodadas`
};
