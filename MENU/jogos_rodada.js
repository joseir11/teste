/* ============================================================
   JOGOS DA RODADA — CARTOLA FC
   VERSÃO: 2.0 — ESCUDOS LOCAIS
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

/* ── RENDERIZA UM CARD DE PARTIDA ─────────────────────── */
function renderCardPartida(partida, clubes) {
  const idCasa = partida.clube_casa_id;
  const idVis = partida.clube_visitante_id;

  const mandante = clubes[idCasa];
  const visitante = clubes[idVis];

  const placarCasa = partida.placar_oficial_mandante ?? "-";
  const placarVis = partida.placar_oficial_visitante ?? "-";
  const jogoIniciado = partida.placar_oficial_mandante !== null;

  // ESCUDOS LOCAIS
  const escudoCasa = `${ESCUDOS_PATH}/${idCasa}.png`;
  const escudoVis = `${ESCUDOS_PATH}/${idVis}.png`;

  // FALLBACK PARA API CASO O ARQUIVO LOCAL NÃO EXISTA
  const fallbackCasa = mandante?.escudos?.["60x60"] || "";
  const fallbackVis = visitante?.escudos?.["60x60"] || "";

  // LOG PARA DEBUG
  console.log(`⚽ ${mandante?.abreviacao} (${idCasa}) x ${visitante?.abreviacao} (${idVis})`);
  console.log(`   Escudo casa: ${escudoCasa}`);
  console.log(`   Escudo vis : ${escudoVis}`);

  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
      <p class="text-[10px] uppercase tracking-widest text-gray-400 text-center mb-3">
        ${formatarData(partida.partida_data)} • ${partida.local || "Local a definir"}
      </p>
      <div class="flex items-center justify-between gap-2">
        
        <div class="flex flex-col items-center flex-1">
          <img src="${escudoCasa}" 
               onerror="this.onerror=null;this.src='${fallbackCasa}';console.warn('⚠️ Escudo não encontrado: ${idCasa}.png');"
               alt="${mandante?.nome || ""}" 
               class="w-14 h-14 object-contain">
          <span class="text-xs font-bold mt-1 text-center">
            ${mandante?.abreviacao || "?"}
          </span>
        </div>

        <div class="flex items-center gap-3 px-2">
          <span class="text-2xl font-black ${jogoIniciado ? "text-black" : "text-gray-300"}">
            ${placarCasa}
          </span>
          <span class="text-gray-300 text-sm">×</span>
          <span class="text-2xl font-black ${jogoIniciado ? "text-black" : "text-gray-300"}">
            ${placarVis}
          </span>
        </div>

        <div class="flex flex-col items-center flex-1">
          <img src="${escudoVis}" 
               onerror="this.onerror=null;this.src='${fallbackVis}';console.warn('⚠️ Escudo não encontrado: ${idVis}.png');"
               alt="${visitante?.nome || ""}" 
               class="w-14 h-14 object-contain">
          <span class="text-xs font-bold mt-1 text-center">
            ${visitante?.abreviacao || "?"}
          </span>
        </div>
      </div>
    </div>
  `;
}

/* ── FUNÇÃO PRINCIPAL — BUSCA E RENDERIZA OS JOGOS ────── */
async function carregarJogos() {
  console.log("🟢 BOTÃO JOGOS CLICADO");
  console.log("🔗 URL da API:", API_CARTOLA?.PARTIDAS);

  if (!window.API_CARTOLA || !API_CARTOLA.PARTIDAS) {
    renderError("API_CARTOLA não está definida. Verifique rotas_proxy.js");
    return;
  }

  renderLoader();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    const res = await fetch(API_CARTOLA.PARTIDAS, {
      signal: controller.signal,
      cache: "no-store", // FORÇA BUSCAR DA REDE
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    console.log("✅ Resposta recebida:", data);

    const partidas = data.partidas || [];
    const clubes = data.clubes || {};
    const rodada = data.rodada || "?";

    if (partidas.length === 0) {
      mainContent.innerHTML = `
        <div class="flex flex-col justify-center items-center h-screen">
          <p class="text-sm text-gray-400">Nenhum jogo encontrado.</p>
        </div>
      `;
      return;
    }

    const cards = partidas.map((p) => renderCardPartida(p, clubes)).join("");

    mainContent.innerHTML = `
      <header class="px-5 pt-8 pb-4">
        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">
          Brasileirão
        </p>
        <h1 class="text-2xl font-black">Rodada ${rodada}</h1>
      </header>
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

/* ── LIGA O BOTÃO E CARREGA AUTOMATICAMENTE ──────────── */
btnJogos.addEventListener("click", carregarJogos);
document.addEventListener("DOMContentLoaded", carregarJogos);
