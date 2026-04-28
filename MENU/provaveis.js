/* ============================================================
   PROVÁVEIS ESCALAÇÕES — CARTOLA FC + JOSA.BET
   VERSÃO: 2.0 (integrada com proxy e lógica do projeto original)
   ============================================================ */

// ========== CONFIGURAÇÕES GLOBAIS ==========
const PROXY_URL = 'https://josabet-proxy.onrender.com';

// Mapeamento slug -> ID do clube no Cartola
const SLUG_TO_CARTOLA_ID = {
  corinthians_v2: 264,
  palmeiras_v2: 275,
  flamengo_v2: 262,
  vasco_v2: 267,
  'atletico-mg_v2': 282,
  cruzeiro_v2: 283,
  gremio_v2: 284,
  internacional_v2: 285,
  botafogo_v2: 263,
  fluminense_v2: 266,
  'sao-paulo_v2': 276,
  santos_v2: 277,
  bragantino_v2: 280,
  'athletico-pr_v2': 293,
  bahia_v2: 265,
  vitoria_v2: 287,
  mirassol_v2: 2305,
  chapecoense_v2: 315,
  coritiba_v2: 294,
  remo_v2: 364,
  fortaleza_v2: 131,
  sport_v2: 79,
  ceara_v2: 105,
  juventude_v2: 143,
};

// Estado local para cache dos dados
let provavelState = {
  lineupsData: null,      // escalações via /provaveis/lineups
  mercadoImages: null,    // map de atleta_id -> dados (foto, apelido, etc.)
  teamUpdatesData: null,  // timestamps de atualização
  partidasData: null,     // dados das partidas (vindos do módulo jogos_rodada.js)
  loading: false,
};

// ========== FUNÇÕES AUXILIARES ==========
function renderLoaderProvaveis() {
  const main = document.getElementById('main-content');
  if (main) {
    main.innerHTML = `
      <div class="flex flex-col justify-center items-center h-screen gap-3 px-6 text-center">
        <div class="loader"></div>
        <p class="uppercase text-[10px] font-bold tracking-[0.3em] text-gray-400">
          Carregando escalações prováveis...
        </p>
        <p class="text-[10px] text-gray-300 mt-2">
          O servidor pode levar até 50s para acordar
        </p>
      </div>
    `;
  }
}

function renderError(msg) {
  const main = document.getElementById('main-content');
  if (main) {
    main.innerHTML = `
      <div class="flex flex-col justify-center items-center h-screen gap-2 px-6 text-center">
        <p class="uppercase text-xs font-bold tracking-widest text-red-500">
          Erro ao carregar
        </p>
        <p class="text-sm text-gray-500">${msg}</p>
        <button onclick="window.renderProvaveis()" 
          class="mt-4 px-4 py-2 bg-black text-white text-xs uppercase tracking-widest rounded-full">
          Tentar novamente
        </button>
      </div>
    `;
  }
}

// Renderiza bolinhas de aproveitamento (últimos 5 jogos)
function renderAproveitamentoBolinhas(aprov) {
  if (!aprov || !Array.isArray(aprov)) return '';
  return aprov.map(resultado => {
    let colorClass = '';
    if (resultado === 'v') colorClass = 'bg-green-500';
    else if (resultado === 'e') colorClass = 'bg-gray-400';
    else if (resultado === 'd') colorClass = 'bg-red-500';
    return `<div class="w-2.5 h-2.5 rounded-full ${colorClass} shadow-sm border border-white/50"></div>`;
  }).join('');
}

// Formata data ISO para "DD/MM • HH:MM"
function formatarDataPartida(iso) {
  if (!iso) return 'A definir';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const data = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  const hora = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  return `${data} • ${hora}`;
}

// Resolve posição do jogador (usa x,y do JSON, ou fallback central)
function resolvePos(slot, xy) {
  if (xy && Number.isFinite(xy.x) && Number.isFinite(xy.y)) {
    return { x: xy.x, y: xy.y };
  }
  return { x: 50, y: 50 };
}

// ========== BUSCA DE DADOS VIA PROXY ==========
async function fetchLineups() {
  try {
    const res = await fetch(`${PROXY_URL}/provaveis/lineups`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    provavelState.lineupsData = data;
    console.log('✅ Escalações carregadas');
    return data;
  } catch (err) {
    console.error('❌ Erro ao buscar escalações:', err);
    return null;
  }
}

async function fetchMercadoImages() {
  try {
    const res = await fetch(`${PROXY_URL}/provaveis/mercado-images`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json(); // array de { atleta_id, foto, apelido, nome }
    const map = new Map();
    data.forEach(item => map.set(item.atleta_id, item));
    provavelState.mercadoImages = map;
    console.log('✅ Imagens de atletas carregadas:', map.size);
    return map;
  } catch (err) {
    console.error('❌ Erro ao buscar mercado-images:', err);
    return new Map();
  }
}

async function fetchTeamUpdates() {
  try {
    const res = await fetch(`${PROXY_URL}/provaveis/team-updates`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    provavelState.teamUpdatesData = data;
    console.log('✅ Atualizações de times carregadas');
    return data;
  } catch (err) {
    console.error('❌ Erro ao buscar team-updates:', err);
    return null;
  }
}

// Os dados de partidas já devem estar disponíveis globalmente (vindos do módulo jogos_rodada.js)
// Mas se não estiverem, buscamos via proxy também
async function ensurePartidasData() {
  if (provavelState.partidasData && provavelState.partidasData.partidas) {
    return provavelState.partidasData;
  }
  // Tenta pegar da variável global definida pelo jogos_rodada.js (se existir)
  if (window.ultimasPartidas) {
    provavelState.partidasData = window.ultimasPartidas;
    return provavelState.partidasData;
  }
  // Fallback: buscar via proxy
  try {
    const res = await fetch(`${PROXY_URL}/partidas`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    provavelState.partidasData = data;
    console.log('✅ Partidas carregadas via proxy');
    return data;
  } catch (err) {
    console.error('❌ Erro ao buscar partidas:', err);
    return null;
  }
}

// ========== RENDERIZAÇÃO DO CARD DE UM TIME ==========
function renderTimeCard(timeId, partida, timesNaOrdem, index) {
  const clubeInfo = provavelState.partidasData?.clubes?.[timeId] || {};
  const nomeTime = clubeInfo.nome || `Time ${timeId}`;

  // Slug do time (para buscar escalação)
  const slug = Object.keys(SLUG_TO_CARTOLA_ID).find(
    key => SLUG_TO_CARTOLA_ID[key] === timeId
  );

  const lineup = slug ? provavelState.lineupsData?.teams?.[slug] : null;
  const lastUpdate = slug ? provavelState.teamUpdatesData?.teams?.[slug]?.last_update : null;

  // Formata última atualização
  let fmtUpdate = null;
  if (lastUpdate) {
    try {
      const now = new Date();
      const dt = new Date(lastUpdate);
      const pad = n => String(n).padStart(2, '0');
      const hhmm = pad(dt.getHours()) + 'h' + pad(dt.getMinutes());
      const sameDay = now.toDateString() === dt.toDateString();
      const yest = new Date(now);
      yest.setDate(now.getDate() - 1);
      if (sameDay) fmtUpdate = 'Hoje ' + hhmm;
      else if (yest.toDateString() === dt.toDateString()) fmtUpdate = 'Ontem ' + hhmm;
      else fmtUpdate = pad(dt.getDate()) + '/' + pad(dt.getMonth() + 1) + ' ' + hhmm;
    } catch (e) {}
  }

  // Informações da partida
  let partidaInfo = null;
  if (partida) {
    const adversarioId = partida.clube_casa_id === timeId
      ? partida.clube_visitante_id
      : partida.clube_casa_id;
    const adversarioClube = provavelState.partidasData.clubes?.[adversarioId] || {};
    const isMandante = partida.clube_casa_id === timeId;
    const dataFmt = formatarDataPartida(partida.partida_data);

    partidaInfo = {
      adversarioNome: adversarioClube.abreviacao || adversarioClube.nome || '???',
      adversarioEscudo: `./ESCUDOS_BRASILEIRAO/${adversarioId}.png`,
      local: partida.local || '—',
      data: dataFmt,
      mando: isMandante ? 'Casa' : 'Fora',
    };
  }

  // Geração do campo com jogadores
  let jogadoresHtml = '';
  if (lineup && provavelState.mercadoImages) {
    jogadoresHtml = lineup.titulares
      .filter(p => p.slot !== 'TEC') // exclui técnico
      .map(p => {
        const jogador = provavelState.mercadoImages.get(p.id);
        let nome = jogador?.apelido || jogador?.nome;
        if (!nome) nome = `#${p.id}`;

        const foto = jogador?.foto || `./ESCUDOS_BRASILEIRAO/${timeId}.png`;
        const pos = resolvePos(p.slot, { x: p.x, y: p.y });
        const isDuvida = p.sit === 'duvida';
        let duvidaComNome = '';
        if (isDuvida && p.duvida_com) {
          const alt = provavelState.mercadoImages.get(p.duvida_com);
          duvidaComNome = alt?.apelido || alt?.nome || `#${p.duvida_com}`;
        }

        const abreviar = (n) => {
          const partes = n.trim().split(' ');
          if (partes.length <= 1) return n;
          return partes[0].charAt(0).toUpperCase() + '. ' + partes.slice(1).join(' ');
        };
        const nomeAbrev = abreviar(nome);
        const duvidaAbrev = duvidaComNome ? abreviar(duvidaComNome) : '';

        return `
          <div class="absolute flex flex-col items-center" style="left: ${pos.x}%; top: ${pos.y}%; transform: translate(-50%, -50%); z-index: 20;">
            <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 p-1 shadow-md ${isDuvida ? 'border-2 border-orange-500' : ''}">
              <img src="${foto}" alt="${nome}" class="w-full h-full object-contain rounded-full" onerror="this.src='./ESCUDOS_BRASILEIRAO/${timeId}.png'">
            </div>
            <div class="mt-1 px-1.5 py-0.5 bg-white/40 backdrop-blur-sm rounded-md text-center" style="min-width:48px; max-width:70px;">
              <p class="text-[10px] md:text-[11px] font-semibold text-gray-900 leading-tight text-center drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">${nomeAbrev}</p>
            </div>
            ${isDuvida && duvidaAbrev ? `
              <div class="mt-0.5 px-1.5 py-0.5 bg-white/25 backdrop-blur-sm rounded-md text-center" style="min-width:48px; max-width:70px;">
                <p class="text-[9px] md:text-[10px] font-medium text-gray-700 leading-tight text-center drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">${duvidaAbrev}</p>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
  }

  const timeData = timesNaOrdem.find(t => t.id === timeId) || {};

  return `
    <div id="time-card-${index}" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3 scroll-mt-20 transition-all duration-300">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 shrink-0 bg-white rounded-xl p-1.5 shadow-md border border-white/50">
          <img src="./ESCUDOS_BRASILEIRAO/${timeId}.png" 
               alt="${nomeTime}" 
               class="w-full h-full object-contain"
               onerror="this.src='./ESCUDOS/default.png'">
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-black text-lg uppercase tracking-wide text-gray-800 truncate">${nomeTime}</p>
          ${fmtUpdate ? `
            <p class="flex items-center gap-1 text-[10px] font-mono text-gray-400 leading-none mt-0.5">
              <svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
                <circle cx='12' cy='12' r='10'/><polyline points='12 6 12 12 16 14'/>
              </svg> Atualizado ${fmtUpdate}
            </p>
          ` : ''}
        </div>
        <div class="flex gap-1.5">
          ${renderAproveitamentoBolinhas(timeData.aproveitamento)}
        </div>
        <div class="shrink-0">
          <span class="text-[10px] font-mono text-gray-500 uppercase bg-black/5 px-2 py-1 rounded-full">
            ${timeData.isMandante ? 'Casa' : 'Fora'}
          </span>
        </div>
      </div>

      <!-- Campo tático -->
      <div class="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/30 shadow-inner bg-gradient-to-b from-green-600 to-green-800">
        <div class="absolute inset-0 opacity-30 pointer-events-none">
          <div class="absolute inset-3 border border-white rounded"></div>
          <div class="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white rounded-full"></div>
          <div class="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-12 border border-t-0 border-white"></div>
          <div class="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-12 border border-b-0 border-white"></div>
        </div>
        ${jogadoresHtml}
      </div>

      ${partidaInfo ? `
        <div class="flex items-center gap-3 px-3 py-2.5 bg-black/[0.04] rounded-xl border border-black/[0.06]">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            <span class="text-[10px] font-mono text-gray-400 uppercase shrink-0">ADV</span>
            <img src="${partidaInfo.adversarioEscudo}" alt="${partidaInfo.adversarioNome}"
                 class="w-6 h-6 object-contain shrink-0"
                 onerror="this.style.display='none'">
            <span class="font-black text-base uppercase leading-none text-gray-800 truncate">${partidaInfo.adversarioNome}</span>
            <span class="text-[10px] font-mono text-gray-400 bg-black/5 px-1.5 py-0.5 rounded-full shrink-0">${partidaInfo.mando}</span>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-0.5">
            <span class="flex items-center gap-1 text-[10px] font-mono text-gray-500">
              <svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
                <rect x='3' y='4' width='18' height='18' rx='2' ry='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/>
              </svg>
              ${partidaInfo.data}
            </span>
            <span class="flex items-center gap-1 text-[10px] font-mono text-gray-400 text-right">
              <svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3 shrink-0' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/><circle cx='12' cy='10' r='3'/>
              </svg>
              ${partidaInfo.local}
            </span>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// ========== FUNÇÃO PRINCIPAL ==========
window.renderProvaveis = async function() {
  const main = document.getElementById('main-content');
  if (!main) return;

  renderLoaderProvaveis();
  provavelState.loading = true;

  try {
    // 1. Carregar partidas (prioriza dados já existentes)
    const partidasData = await ensurePartidasData();
    if (!partidasData || !partidasData.partidas || partidasData.partidas.length === 0) {
      throw new Error('Nenhuma partida encontrada para esta rodada.');
    }
    provavelState.partidasData = partidasData;
    const partidas = partidasData.partidas;

    // 2. Carregar escalações, fotos e atualizações em paralelo
    await Promise.all([
      fetchLineups(),
      fetchMercadoImages(),
      fetchTeamUpdates(),
    ]);

    // Valida se temos escalações (opcional, pode continuar mesmo sem)
    if (!provavelState.lineupsData) {
      console.warn('⚠️ Nenhuma escalação disponível. Exibindo apenas informações básicas.');
    }

    // Construir lista de times na ordem das partidas
    let timesNaOrdem = [];
    partidas.forEach(p => {
      timesNaOrdem.push({
        id: p.clube_casa_id,
        aproveitamento: p.aproveitamento_mandante,
        isMandante: true,
      });
      timesNaOrdem.push({
        id: p.clube_visitante_id,
        aproveitamento: p.aproveitamento_visitante,
        isMandante: false,
      });
    });

    // Renderizar grid de escudos (atalho para scroll)
    const gridEscudos = `
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
        <div class="grid grid-cols-5 gap-2 md:gap-4 justify-items-center">
          ${timesNaOrdem.map((time, idx) => `
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/5 rounded-full p-2 flex items-center justify-center border border-black/5 hover:bg-black/10 transition-all shadow-sm cursor-pointer hover:scale-110"
                 onclick="document.getElementById('time-card-${idx}')?.scrollIntoView({ behavior: 'smooth', block: 'center' })">
              <img src="./ESCUDOS_BRASILEIRAO/${time.id}.png" 
                   alt="Time ${time.id}" 
                   class="w-full h-full object-contain drop-shadow-sm"
                   onerror="this.style.display='none'">
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Renderizar cards de cada time (dois por partida)
    const cardsHtml = partidas.flatMap((partida, idx) => {
      const casaIdx = timesNaOrdem.findIndex(t => t.id === partida.clube_casa_id);
      const visIdx = timesNaOrdem.findIndex(t => t.id === partida.clube_visitante_id);
      return [
        renderTimeCard(partida.clube_casa_id, partida, timesNaOrdem, casaIdx),
        renderTimeCard(partida.clube_visitante_id, partida, timesNaOrdem, visIdx),
      ];
    }).join('');

    main.innerHTML = `
      <div class="space-y-6 animate-in fade-in duration-300 pt-6">
        ${gridEscudos}
        <div class="space-y-4 px-4">
          ${cardsHtml}
        </div>
      </div>
    `;

    provavelState.loading = false;
    console.log('✅ Prováveis escalações renderizadas com sucesso');
  } catch (err) {
    console.error('❌ Erro em renderProvaveis:', err);
    renderError(err.message || 'Falha ao carregar os dados. Tente novamente.');
    provavelState.loading = false;
  }
};

// Exporta a função para o escopo global (já está)
console.log('✅ provaveis.js v2.0 carregado');
