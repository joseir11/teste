/* ============================================================
   PROVÁVEIS ESCALAÇÕES — CARTOLA FC
   VERSÃO: 1.0 — INTEGRAÇÃO BÁSICA
   ============================================================ */

const mainContent = document.getElementById("main-content");
const btnJogos = document.getElementById("btn-jogos");

// URL DA API PARA PROVÁVEIS
const URL_PROVAVEIS = window.API_CARTOLA?.PROVAVEIS_LINEUPS || 
                     "https://josabet-proxy.onrender.com/provaveis/lineups";

/* ── HTML DO LOADER ────────────────────────────────────── */
function renderLoader() {
  mainContent.innerHTML = `
    <div class="flex flex-col justify-center items-center h-screen gap-3 px-6 text-center">
      <div class="loader"></div>
      <p class="uppercase text-[10px] font-bold tracking-[0.3em] text-gray-400">
        Carregando escalações...
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
      <button onclick="carregarProvaveis()" 
        class="mt-4 px-4 py-2 bg-black text-white text-xs uppercase tracking-widest rounded-full">
        Tentar novamente
      </button>
    </div>
  `;
}

/* ── CABEÇALHO DA TELA ─────────────────────────────────── */
function renderHeader() {
  return `
    <header class="px-5 pt-8 pb-4">
      <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">
        Brasileirão 2026
      </p>
      <h1 class="text-2xl font-black">Prováveis Escalações</h1>
    </header>
  `;
}

/* ── RENDERIZA UM CARD DE PROVÁVEL ─────────────────────── */
function renderCardProvavel(clube, jogadores) {
  // Verifica se há escudo personalizado
  const temEscudoLocal = Number.isInteger(clube.id) && clube.id > 0;
  const escudoUrl = temEscudoLocal 
    ? `./ESCUDOS_BRASILEIRAO/${clube.id}.png`
    : (clube.escudos?.["60x60"] || "");

  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
      <div class="flex items-center gap-3 mb-3">
        ${escudoUrl 
          ? `<img src="${escudoUrl}" 
                onerror="this.onerror=null;this.src='${escapeHtml(clube.escudos?.["60x60"] || "")}';"
                alt="${escapeHtml(clube.nome || "")}" 
                class="w-12 h-12 object-contain">` 
          : ""
        }
        <div>
          <p class="font-black text-sm">${escapeHtml(clube.nome || "")}</p>
          <p class="text-gray-500 text-xs">${escapeHtml(clube.estado || "")}</p>
        </div>
      </div>

      <div class="space-y-2">
        ${jogadores.slice(0, 5).map(jogador => `
          <div class="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
            <div>
              <p class="font-bold text-xs">${escapeHtml(jogador.atleta.nome_popular || jogador.atleta.apelido || "Sem nome")}</p>
              <p class="text-gray-500 text-[10px]">${escapeHtml(jogador.posicao?.nome || "")}</p>
            </div>
            <span class="text-xs font-black bg-orange-100 text-orange-700 rounded-full px-2 py-1">
              ${jogador.goleiro ? "G" : jogador.capitao ? "C" : "I"}
            </span>
          </div>
        `).join('')}
      </div>

      ${jogadores.length > 5 
        ? `<p class="text-gray-500 text-xs mt-2 text-center">+ ${jogadores.length - 5} jogadores</p>` 
        : ""
      }
    </div>
  `;
}

/* ── ESCAPE HTML BASICO ────────────────────────────────── */
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ── FUNÇÃO PRINCIPAL ──────────────────────────────────── */
async function carregarProvaveis() {
  console.log("🔵 BOTÃO PROVÁVEIS CLICADO");
  
  if (!window.API_CARTOLA) {
    renderError("API_CARTOLA não está definida. Verifique rotas_proxy.js");
    return;
  }

  renderLoader();
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    const res = await fetch(URL_PROVAVEIS, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const rodada = data.rodada || "Atual";
    const clubs = data.times || [];

    console.log("✅ Prováveis recebidos:", data);

    // Verifica se tem dados
    if (clubs.length === 0) {
      mainContent.innerHTML = `
        ${renderHeader()}
        <div class="px-4 py-6 bg-gray-50 rounded-2xl border border-gray-100 mx-4 mb-4">
          <p class="text-center text-gray-500 text-sm">
            Nenhuma escalação prevista para esta rodada
          </p>
        </div>
      `;
      return;
    }

    // Filtra times válidos com pelo menos 1 jogador
    const validClubs = clubs.filter(clube => 
      clube.jogadores && Array.isArray(clube.jogadores) && clube.jogadores.length > 0
    );

    if (validClubs.length === 0) {
      mainContent.innerHTML = `
        ${renderHeader()}
        <div class="px-4 py-6 bg-gray-50 rounded-2xl border border-gray-100 mx-4 mb-4">
          <p class="text-center text-gray-500 text-sm">
            Dados incompletos disponíveis para visualização
          </p>
        </div>
      `;
      return;
    }

    // Monta os cards dos times
    const cards = validClubs.map(clube => 
      renderCardProvavel(clube.time, clube.jogadores)
    ).join('');

    mainContent.innerHTML = `
      ${renderHeader()}
      
      <div class="px-4">
        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">
          Rodada ${rodada}
        </p>
        <div class="text-xs text-gray-500 mb-4">
          ⚠️ Informações baseadas em análises jornalísticas e podem não refletir o time real do Cartola FC
        </div>
      </div>

      <section class="px-4">
        ${cards}
      </section>
    `;
  } catch (err) {
    console.error("❌ Erro ao carregar prováveis:", err);
    
    // Mensagem amigável para timeout (Render Free)
    if (err.name === "AbortError") {
      mainContent.innerHTML = `
        ${renderHeader()}
        <div class="px-4 py-6 bg-gray-50 rounded-2xl border border-gray-100 mx-4 mb-4">
          <p class="text-center text-gray-500 text-sm">
            O servidor ainda está acordando...<br>Demora até 50s na primeira requisição
          </p>
        </div>
      `;
      return;
    }
    
    renderError(err.message);
  }
}

/* ── LIGA O BOTÃO DE RETORNO AOS JOGOS ─────────────────── */
if (btnJogos) {
  btnJogos.addEventListener("click", () => {
    console.log("🟢 Voltando para JOGOS");
    
    const script = document.createElement("script");
    script.src = "./MENU/jogos_rodada.js";
    script.onerror = () => {
      alert("Erro ao carregar tela de jogos. Recarregue a página.");
    };
    document.head.appendChild(script);
  });
}

// Executa automaticamente ao carregar o módulo
document.addEventListener("DOMContentLoaded", carregarProvaveis);
