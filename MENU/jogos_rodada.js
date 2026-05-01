/* ============================================================
   JOGOS DA RODADA — CARTOLA FC (COM PRÉ-CARREGAMENTO)
   VERSÃO: 5.0
   ============================================================ */

const mainContent = document.getElementById("main-content");
const btnJogos = document.getElementById("btn-jogos");
const btnProvaveis = document.getElementById("btn-provaveis");

const ESCUDOS_PATH = "./ESCUDOS_BRASILEIRAO";

let jogosRenderizando = false; // evita múltiplas chamadas

/* ── LOADER E ERRO ────────────────────────────────────── */
function renderLoader() {
  if (!mainContent) return;
  mainContent.innerHTML = `
    <div class="flex flex-col justify-center items-center h-screen gap-3 px-6 text-center">
      <div class="loader"></div>
      <p class="uppercase text-[10px] font-bold tracking-[0.3em] text-gray-400">
        Carregando jogos...
      </p>
    </div>
  `;
}

function renderError(msg) {
  if (!mainContent) return;
  mainContent.innerHTML = `
    <div class="flex flex-col justify-center items-center h-screen gap-2 px-6 text-center">
      <p class="uppercase text-xs font-bold tracking-widest text-red-500">
        Erro ao carregar
      </p>
      <p class="text-sm text-gray-500">${msg}</p>
      <button onclick="window.carregarJogos()" 
        class="mt-4 px-4 py-2 bg-black text-white text-xs uppercase tracking-widest rounded-full">
        Tentar novamente
      </button>
    </div>
  `;
}

/* ── UTILITÁRIOS ──────────────────────────────────────── */
function formatarData(iso) {
  if (!iso) return "A definir";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const data = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
  const hora = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return `${data} • ${hora}`;
}

function formatarPosicao(pos) {
  if (!pos || pos === 0) return "";
  return `${pos}º`;
}

function formatarFechamento(fechamento) {
  if (!fechamento) return "--/-- --:--";
  const { dia, mes, hora, minuto } = fechamento;
  const dd = String(dia).padStart(2, "0");
  const mm = String(mes).padStart(2, "0");
  const hh = String(hora).padStart(2, "0");
  const mi = String(minuto).padStart(2, "0");
  return `${dd}/${mm} ${hh}:${mi}`;
}

function statusMercado(status) {
  const map = {
    1: { label: "ABERTO", cor: "text-emerald-500", labelTempo: "MERCADO FECHA" },
    2: { label: "FECHADO", cor: "text-rose-500", labelTempo: "MERCADO ABRE" },
    3: { label: "ATUALIZANDO", cor: "text-amber-500", labelTempo: "AGUARDE" },
    4: { label: "MANUTENÇÃO", cor: "text-gray-500", labelTempo: "EM MANUTENÇÃO" },
    6: { label: "ENCERRADO", cor: "text-gray-500", labelTempo: "FIM DE TEMPORADA" },
  };
  return map[status] || { label: "—", cor: "text-gray-400", labelTempo: "—" };
}

function renderStatusMercado(mercado) {
  const status = statusMercado(mercado.status_mercado);
  const fechamento = formatarFechamento(mercado.fechamento);
  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 mx-4 mb-4 overflow-hidden">
      <div class="bg-orange-50 px-4 py-2.5 border-b border-orange-100">
        <p class="text-xl font-black text-black text-center">Jogos da Rodada</p>
      </div>
      <div class="grid grid-cols-3 divide-x divide-gray-100 p-5">
        <div class="flex flex-col items-center justify-center text-center">
          <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Rodada Atual</p>
          <p class="text-2xl font-black text-black tabular-nums">${mercado.rodada_atual ?? "-"}</p>
        </div>
        <div class="flex flex-col items-center justify-center text-center">
          <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Status Mercado</p>
          <p class="text-2xl font-black ${status.cor}">${status.label}</p>
        </div>
        <div class="flex flex-col items-center justify-center text-center">
          <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">${status.labelTempo}</p>
          <p class="text-lg font-black text-black tabular-nums">${fechamento}</p>
        </div>
      </div>
    </div>
  `;
}

function renderAproveitamento(aproveitamento) {
  if (!Array.isArray(aproveitamento) || aproveitamento.length === 0) return "";
  const cores = { v: "bg-emerald-200", d: "bg-rose-200", e: "bg-gray-200" };
  const bolinhas = aproveitamento.map(r => `<span class="w-2 h-2 rounded-full ${cores[r] || "bg-gray-100"}"></span>`).join("");
  return `<div class="flex items-center justify-center gap-1 mt-2">${bolinhas}</div>`;
}

function renderCardPartida(partida, clubes) {
  const idCasa = partida.clube_casa_id;
  const idVis = partida.clube_visitante_id;
  const mandante = clubes[idCasa];
  const visitante = clubes[idVis];
  const placarCasa = partida.placar_oficial_mandante ?? "-";
  const placarVis = partida.placar_oficial_visitante ?? "-";
  const jogoIniciado = partida.placar_oficial_mandante !== null;
  const posCasa = formatarPosicao(partida.clube_casa_posicao);
  const posVis = formatarPosicao(partida.clube_visitante_posicao);
  const aproveitamentoCasa = renderAproveitamento(partida.aproveitamento_mandante);
  const aproveitamentoVis = renderAproveitamento(partida.aproveitamento_visitante);
  const escudoCasa = `${ESCUDOS_PATH}/${idCasa}.png`;
  const escudoVis = `${ESCUDOS_PATH}/${idVis}.png`;
  const fallbackCasa = mandante?.escudos?.["60x60"] || "";
  const fallbackVis = visitante?.escudos?.["60x60"] || "";
  const nomeCasa = mandante?.nome_fantasia || mandante?.nome || "?";
  const nomeVis = visitante?.nome_fantasia || visitante?.nome || "?";
  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
      <p class="text-[10px] uppercase tracking-widest text-gray-400 text-center mb-3">
        ${formatarData(partida.partida_data)} • ${partida.local || "Local a definir"}
      </p>
      <div class="flex items-start justify-between gap-2">
        <div class="flex flex-col items-center flex-1">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-bold text-gray-400 tabular-nums">${posCasa}</span>
            <img src="${escudoCasa}" onerror="this.onerror=null;this.src='${fallbackCasa}';" alt="${nomeCasa}" class="w-12 h-12 object-contain">
          </div>
          <span class="text-sm font-black mt-1 text-center leading-tight">${nomeCasa}</span>
          ${aproveitamentoCasa}
        </div>
        <div class="flex items-center gap-3 px-2 pt-3">
          <span class="text-2xl font-black ${jogoIniciado ? "text-black" : "text-gray-300"}">${placarCasa}</span>
          <span class="text-gray-300 text-sm">×</span>
          <span class="text-2xl font-black ${jogoIniciado ? "text-black" : "text-gray-300"}">${placarVis}</span>
        </div>
        <div class="flex flex-col items-center flex-1">
          <div class="flex items-center gap-2">
            <img src="${escudoVis}" onerror="this.onerror=null;this.src='${fallbackVis}';" alt="${nomeVis}" class="w-12 h-12 object-contain">
            <span class="text-[11px] font-bold text-gray-400 tabular-nums">${posVis}</span>
          </div>
          <span class="text-sm font-black mt-1 text-center leading-tight">${nomeVis}</span>
          ${aproveitamentoVis}
        </div>
      </div>
    </div>
  `;
}

/* ── FUNÇÃO PRINCIPAL COM CACHE ───────────────────────── */
window.carregarJogos = async function() {
  if (jogosRenderizando) return;
  jogosRenderizando = true;
  console.log("🟢 JOGOS: carregando (com cache se disponível)");
  renderLoader();

  try {
    let mercado, partidasData;

    // Verifica se temos dados pré-carregados (pelo index.html)
    if (window.preloadedJogosData) {
      console.log("📦 Usando cache de JOGOS");
      mercado = window.preloadedJogosData.mercado;
      partidasData = window.preloadedJogosData.partidas;
      // Libera a memória do cache após usar
      delete window.preloadedJogosData;
    } else {
      // Faz fetch normal (fallback)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000);
      const [resMercado, resPartidas] = await Promise.all([
        fetch(API_CARTOLA.MERCADO_STATUS, { signal: controller.signal }),
        fetch(API_CARTOLA.PARTIDAS, { signal: controller.signal })
      ]);
      clearTimeout(timeoutId);
      if (!resMercado.ok) throw new Error(`Mercado HTTP ${resMercado.status}`);
      if (!resPartidas.ok) throw new Error(`Partidas HTTP ${resPartidas.status}`);
      mercado = await resMercado.json();
      partidasData = await resPartidas.json();
    }

    const partidas = partidasData.partidas || [];
    const clubes = partidasData.clubes || {};

    if (partidas.length === 0) {
      mainContent.innerHTML = `
        <div class="pt-6">
          ${renderStatusMercado(mercado)}
        </div>
        <div class="flex flex-col justify-center items-center py-20">
          <p class="text-sm text-gray-400">Nenhum jogo encontrado.</p>
        </div>
      `;
    } else {
      const cards = partidas.map(p => renderCardPartida(p, clubes)).join("");
      mainContent.innerHTML = `
        <div class="pt-6">
          ${renderStatusMercado(mercado)}
        </div>
        <section class="px-4">
          ${cards}
        </section>
      `;
    }
  } catch (err) {
    console.error("❌ Erro ao carregar jogos:", err);
    renderError(err.message);
  } finally {
    jogosRenderizando = false;
  }
};

/* ── EVENTOS: APENAS CLIQUE, SEM CARREGAMENTO AUTOMÁTICO ─ */
if (btnJogos) btnJogos.addEventListener("click", () => window.carregarJogos());
// NÃO EXECUTA carregarJogos automaticamente no DOMContentLoaded

console.log("✅ jogos_rodada.js carregado (modo sob demanda com cache)");
