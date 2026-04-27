/* ============================================================
   JOGOS DA RODADA — CARTOLA FC
   VERSÃO: 5.0 — INTEGRADO COM PROVÁVEIS
   ============================================================ */

const mainContent = document.getElementById("main-content");
const btnJogos = document.getElementById("btn-jogos");

// CAMINHO BASE DOS ESCUDOS LOCAIS
const ESCUDOS_PATH = "./ESCUDOS_BRASILEIRAO";

/* ── HTML DO LOADER ────────────────────────────────────── */
function renderLoader() {
  mainContent.innerHTML = `
    <div class="flex flex-col justify-center items-center h-screen gap-3 px-6 text-center">
      <div class="loader"></div>
      <p class="uppercase text-[10px] font-bold tracking-[0.3em] text-gray-400">
        Carregando jogos...
      </p>
      <p class="text-[10px] text-gray-300 mt-2">
        O servidor pode levar até 50s para acordar
      </p>
    </div>
  `;
}

/* ── HTML DE ERRO ──────────────────────────────────────── */
function renderError(msg) {
  mainContent.innerHTML = `
    <div class="flex flex-col justify-center items-center h-screen gap-2 px-6 text-center">
      <p class="uppercase text-xs font-bold tracking-widest text-red-500">
        Erro ao carregar
      </p>
      <p class="text-sm text-gray-500">${msg}</p>
      <button onclick="carregarJogos()" 
        class="mt-4 px-4 py-2 bg-black text-white text-xs uppercase tracking-widest rounded-full">
        Tentar novamente
      </button>
    </div>
  `;
}

/* ── FORMATA DATA ISO -> "DD/MM • HH:MM" ──────────────── */
function formatarData(iso) {
  if (!iso) return "A definir";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const data = d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
  const hora = d.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${data} • ${hora}`;
}

/* ── FORMATA POSIÇÃO -> "8º" ──────────────────────────── */
function formatarPosicao(pos) {
  if (!pos || pos === 0) return "";
  return `${pos}º`;
}

/* ── FORMATA TIMESTAMP DE FECHAMENTO -> "DD/MM HH:MM" ── */
function formatarFechamento(fechamento) {
  if (!fechamento) return "--/-- --:--";
  const { dia, mes, hora, minuto } = fechamento;
  const dd = String(dia).padStart(2, "0");
  const mm = String(mes).padStart(2, "0");
  const hh = String(hora).padStart(2, "0");
  const mi = String(minuto).padStart(2, "0");
  return `${dd}/${mm} ${hh}:${mi}`;
}

/* ── INTERPRETA STATUS DO MERCADO ─────────────────────── */
function statusMercado(status) {
  // 1 = ABERTO | 2 = FECHADO | 3 = ATUALIZAÇÃO | 4 = MANUTENÇÃO | 6 = ENCERRADO
  const map = {
    1: { label: "ABERTO", cor: "text-emerald-500", labelTempo: "MERCADO FECHA" },
    2: { label: "FECHADO", cor: "text-rose-500", labelTempo: "MERCADO ABRE" },
    3: { label: "ATUALIZANDO", cor: "text-amber-500", labelTempo: "AGUARDE" },
    4: { label: "MANUTENÇÃO", cor: "text-gray-500", labelTempo: "EM MANUTENÇÃO" },
    6: { label: "ENCERRADO", cor: "text-gray-500", labelTempo: "FIM DE TEMPORADA" },
  };
  return map[status] || { label: "—", cor: "text-gray-400", labelTempo: "—" };
}

/* ── RENDERIZA O CARD DE STATUS DO MERCADO ────────────── */
function renderStatusMercado(mercado) {
  const status = statusMercado(mercado.status_mercado);
  const fechamento = formatarFechamento(mercado.fechamento);

  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 mx-4 mb-4 overflow-hidden">
      
      <!-- FAIXA LARANJA SUAVE — CABEÇALHO -->
      <div class="bg-orange-100/70 px-4 py-2.5 border-b border-orange-100">
        <p class="text-sm uppercase tracking-[0.25em] font-black text-black text-center">
          Jogos da Rodada
        </p>
      </div>

      <!-- CONTEÚDO COM 3 DIVISÕES CENTRALIZADAS -->
      <div class="grid grid-cols-3 divide-x divide-gray-100 p-5">
        
        <div class="flex flex-col items-center justify-center text-center">
          <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
            Rodada Atual
          </p>
          <p class="text-2xl font-black text-black tabular-nums">
            ${mercado.rodada_atual ?? "-"}
          </p>
        </div>

        <div class="flex flex-col items-center justify-center text-center">
          <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
            Status Mercado
          </p>
          <p class="text-2xl font-black ${status.cor}">
            ${status.label}
          </p>
        </div>

        <div class="flex flex-col items-center justify-center text-center">
          <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
            ${status.labelTempo}
          </p>
          <p class="text-lg font-black text-black tabular-nums">
            ${fechamento}
          </p>
        </div>

      </div>
    </div>
  `;
}

/* ── RENDERIZA AS BOLINHAS DE APROVEITAMENTO ──────────── */
function renderAproveitamento(aproveitamento) {
  if (!Array.isArray(aproveitamento) || aproveitamento.length === 0) return "";

  // CORES SUTIS / PASTEL
  const cores = {
    v: "bg-emerald-200", // VITÓRIA
    d: "bg-rose-200",    // DERROTA
    e: "bg-gray-200",    // EMPATE
  };

  const bolinhas = aproveitamento
    .map((r) => {
      const cor = cores[r] || "bg-gray-100";
      return `<span class="w-2 h-2 rounded-full ${cor}"></span>`;
    })
    .join("");

  return `<div class="flex items-center justify-center gap-1 mt-2">${bolinhas}</div>`;
}

/* ── RENDERIZA UM CARD DE PARTIDA ─────────────────────── */
function renderCardPartida(partida, clubes) {
  const idCasa = partida.clube_casa_id;
  const idVis = partida.clube_visitante_id;

  const mandante = clubes[idCasa];
  const visitante = clubes[idVis];

  const placarCasa = partida.placar_oficial_mandante ?? "-";
  const placarVis = partida.placar_oficial_visitante ?? "-";
  const jogoIniciado = partida.placar_oficial_mandante !== null;

  // POSIÇÕES NA TABELA
  const posCasa = formatarPosicao(partida.clube_casa_posicao);
  const posVis = formatarPosicao(partida.clube_visitante_posicao);

  // APROVEITAMENTOS (ÚLTIMOS 5 JOGOS)
  const aproveitamentoCasa = renderAproveitamento(partida.aproveitamento_mandante);
  const aproveitamentoVis = renderAproveitamento(partida.aproveitamento_visitante);

  // ESCUDOS LOCAIS COM FALLBACK PARA API
  const escudoCasa = `${ESCUDOS_PATH}/${idCasa}.png`;
  const escudoVis = `${ESCUDOS_PATH}/${idVis}.png`;
  const fallbackCasa = mandante?.escudos?.["60x60"] || "";
  const fallbackVis = visitante?.escudos?.["60x60"] || "";

  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
      <p class="text-[10px] uppercase tracking-widest text-gray-400 text-center mb-3">
        ${formatarData(partida.partida_data)} • ${partida.local || "Local a definir"}
      </p>

      <div class="flex items-start justify-between gap-2">
        
        <!-- MANDANTE -->
        <div class="flex flex-col items-center flex-1">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-bold text-gray-400 tabular-nums">
              ${posCasa}
            </span>
            <img src="${escudoCasa}" 
                 onerror="this.onerror=null;this.src='${fallbackCasa}';"
                 alt="${mandante?.nome || ""}" 
                 class="w-12 h-12 object-contain">
          </div>
          <span class="text-xs font-bold mt-1 text-center">
            ${mandante?.abreviacao || "?"}
          </span>
          ${aproveitamentoCasa}
        </div>

        <!-- PLACAR -->
        <div class="flex items-center gap-3 px-2 pt-3">
          <span class="text-2xl font-black ${jogoIniciado ? "text-black" : "text-gray-300"}">
            ${placarCasa}
          </span>
          <span class="text-gray-300 text-sm">×</span>
          <span class="text-2xl font-black ${jogoIniciado ? "text-black" : "text-gray-300"}">
            ${placarVis}
          </span>
        </div>

        <!-- VISITANTE -->
        <div class="flex flex-col items-center flex-1">
          <div class="flex items-center gap-2">
            <img src="${escudoVis}" 
                 onerror="this.onerror=null;this.src='${fallbackVis}';"
                 alt="${visitante?.nome || ""}" 
                 class="w-12 h-12 object-contain">
            <span class="text-[11px] font-bold text-gray-400 tabular-nums">
              ${posVis}
            </span>
          </div>
          <span class="text-xs font-bold mt-1 text-center">
            ${visitante?.abreviacao || "?"}
          </span>
          ${aproveitamentoVis}
        </div>

      </div>
    </div>
  `;
}

/* ── FUNÇÃO PRINCIPAL — BUSCA E RENDERIZA OS JOGOS ────── */
async function carregarJogos() {
  console.log("🟢 BOTÃO JOGOS CLICADO");

  if (!window.API_CARTOLA) {
    renderError("API_CARTOLA não está definida. Verifique rotas_proxy.js");
    return;
  }

  renderLoader();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    // BUSCA MERCADO E PARTIDAS EM PARALELO
    const [resMercado, resPartidas] = await Promise.all([
      fetch(API_CARTOLA.MERCADO_STATUS, {
        signal: controller.signal,
        cache: "no-store",
      }),
      fetch(API_CARTOLA.PARTIDAS, {
        signal: controller.signal,
        cache: "no-store",
      }),
    ]);
    clearTimeout(timeoutId);

    if (!resMercado.ok) throw new Error(`Mercado HTTP ${resMercado.status}`);
    if (!resPartidas.ok) throw new Error(`Partidas HTTP ${resPartidas.status}`);

    const mercado = await resMercado.json();
    const dataPartidas = await resPartidas.json();

    console.log("✅ Mercado:", mercado);
    console.log("✅ Partidas:", dataPartidas);

    const partidas = dataPartidas.partidas || [];
    const clubes = dataPartidas.clubes || {};

    if (partidas.length === 0) {
      mainContent.innerHTML = `
        <div class="pt-6">
          ${renderStatusMercado(mercado)}
        </div>
        <div class="flex flex-col justify-center items-center py-20">
          <p class="text-sm text-gray-400">Nenhum jogo encontrado.</p>
        </div>
      `;
      return;
    }

    const cards = partidas.map((p) => renderCardPartida(p, clubes)).join("");

    mainContent.innerHTML = `
      <div class="pt-6">
        ${renderStatusMercado(mercado)}
      </div>
      <section class="px-4">
        ${cards}
      </section>
    `;
  } catch (err) {
    console.error("❌ Erro ao carregar jogos:", err);
    renderError(
      err.name === "AbortError"
        ? "Tempo esgotado. Tente novamente."
        : err.message
    );
  }
}

/* ── LIGA O BOTÃO PROVÁVEIS ───────────────────────────── */
function initBtnProvaveis() {
  const btnProvaveis = document.getElementById("btn-provaveis");
  if (!btnProvaveis) return;
  
  btnProvaveis.removeEventListener("click", carregarProvaveis);
  btnProvaveis.addEventListener("click", carregarProvaveis);
}

/* ── CARREGA MÓDULO PROVÁVEIS ──────────────────────────── */
function carregarProvaveis() {
  console.log("🔵 Mudando para PROVÁVEIS");
  
  // Remove event listeners atuais
  document.getElementById("btn-jogos")?.removeEventListener("click", carregarJogos);
  
  // Carrega o novo módulo
  const script = document.createElement("script");
  script.src = "./MENU/provaveis.js";
  script.onerror = () => {
    renderError("Erro ao carregar módulo de prováveis. Recarregue a página.");
  };
  document.head.appendChild(script);
}

/* ── LIGA OS BOTÕES DO MENU ───────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initBtnProvaveis();
  carregarJogos();
});
