/* ============================================================
   PROVÁVEIS ESCALAÇÕES — CARTOLA FC + JOSA.BET
   VERSÃO: 1.0 — Busca de APIs + Visualização em Campo
   ============================================================ */

const PROXY_URL = 'https://josabet-proxy.onrender.com';

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

let provavelState = {
  lineupsData: null,
  mercadoImages: null,
  teamUpdatesData: null,
  partidasData: null,
  loading: false,
};

// ========== BUSCAR PARTIDAS DA API ==========
async function fetchPartidas() {
  try {
    console.log('📡 Buscando partidas...');
    const response = await fetch(
      'https://api.cartolafc.globo.com/partidas',
      { cache: 'no-store' }
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log('✅ Partidas carregadas:', data);
    provavelState.partidasData = data;
    return data;
  } catch (error) {
    console.error('❌ Erro ao buscar partidas:', error);
    return null;
  }
}

// ========== BUSCAR ATLETAS/MERCADO DA API ==========
async function fetchAtletas() {
  try {
    console.log('📡 Buscando atletas...');
    const response = await fetch(
      'https://api.cartola.globo.com/atletas/mercado',
      { cache: 'no-store' }
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    
    // Mapear por ID para lookup rápido
    const mercadoMap = new Map();
    if (data.atletas && Array.isArray(data.atletas)) {
      data.atletas.forEach((atleta) => {
        mercadoMap.set(atleta.atleta_id, atleta);
      });
    }
    console.log('✅ Atletas carregados:', mercadoMap.size);
    provavelState.mercadoImages = mercadoMap;
    return mercadoMap;
  } catch (error) {
    console.error('❌ Erro ao buscar atletas:', error);
    return new Map();
  }
}

// ========== BUSCAR ESCALAÇÕES DO PROXY ==========
async function fetchLineups() {
  try {
    console.log('📡 Buscando escalações...');
    const response = await fetch(`${PROXY_URL}/provaveis/lineups`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log('✅ Escalações carregadas');
    provavelState.lineupsData = data;
    return data;
  } catch (error) {
    console.error('❌ Erro ao buscar escalações:', error);
    return null;
  }
}

// ========== BUSCAR ATUALIZAÇÕES DE TIME ==========
async function fetchTeamUpdates() {
  try {
    console.log('📡 Buscando atualizações...');
    const response = await fetch(`${PROXY_URL}/provaveis/team-updates`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log('✅ Atualizações carregadas');
    provavelState.teamUpdatesData = data;
    return data;
  } catch (error) {
    console.error('❌ Erro ao buscar atualizações:', error);
    return null;
  }
}

// ========== RENDERIZAR APROVEITAMENTO (BOLINHAS) ==========
function renderAproveitamentoBolinhas(aprov) {
  if (!aprov || !Array.isArray(aprov)) return '';
  return aprov
    .map((resultado) => {
      let colorClass = '';
      if (resultado === 'v') colorClass = 'bg-green-500';
      else if (resultado === 'e') colorClass = 'bg-gray-400';
      else if (resultado === 'd') colorClass = 'bg-red-500';
      return `<div class="w-2.5 h-2.5 rounded-full ${colorClass} shadow-sm border border-white/50"></div>`;
    })
    .join('');
}

// ========== FORMATAR DATA ==========
function formatarDataPartida(iso) {
  if (!iso) return 'A definir';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const data = d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  });
  const hora = d.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${data} • ${hora}`;
}

// ========== RESOLVER POSIÇÃO DO JOGADOR ==========
function resolvePos(slot, xy) {
  if (xy && Number.isFinite(xy.x) && Number.isFinite(xy.y)) {
    return { x: xy.x, y: xy.y };
  }
  return { x: 50, y: 50 };
}

// ========== RENDERIZAR CARD DO TIME ==========
function renderTimeCard(timeId, partida, timesNaOrdem, index) {
  const clubeInfo = provavelState.partidasData?.clubes?.[timeId] || {};
  const nomeTime = clubeInfo.nome || `Time ${timeId}`;

  // Encontrar slug correspondente
  const slug = Object.keys(SLUG_TO_CARTOLA_ID).find(
    (key) => SLUG_TO_CARTOLA_ID[key] === timeId
  );

  // Obter escalação
  const lineup = slug ? provavelState.lineupsData?.teams?.[slug] : null;

  // Dados da partida
  let partidaInfo = null;
  if (partida) {
    const adversarioId =
      partida.clube_casa_id === timeId
        ? partida.clube_visitante_id
        : partida.clube_casa_id;
    const adversarioClube =
      provavelState.partidasData.clubes?.[adversarioId] || {};
    const isMandante = partida.clube_casa_id === timeId;
    const dt = new Date(partida.partida_data.replace(' ', 'T') + '-03:00');
    const pad = (n) => String(n).padStart(2, '0');
    const dataFmt =
      pad(dt.getDate()) +
      '/' +
      pad(dt.getMonth() + 1) +
      '/' +
      dt.getFullYear() +
      ' ' +
      pad(dt.getHours()) +
      'h' +
      pad(dt.getMinutes());

    partidaInfo = {
      adversarioNome: adversarioClube.abreviacao || adversarioClube.nome || '???',
      adversarioEscudo: `./ESCUDOS_BRASILEIRAO/${adversarioId}.png`,
      local: partida.local || '—',
      data: dataFmt,
      mando: isMandante ? 'Casa' : 'Fora',
    };
  }

  // Horário de última atualização
  const lastUpdate = slug
    ? provavelState.teamUpdatesData?.teams?.[slug]?.last_update
    : null;
  const fmtUpdate = (() => {
    if (!lastUpdate) return null;
    try {
      const now = new Date();
      const dt = new Date(lastUpdate);
      const pad = (n) => String(n).padStart(2, '0');
      const hhmm = pad(dt.getHours()) + 'h' + pad(dt.getMinutes());
      const sameDay = now.toDateString() === dt.toDateString();
      const yest = new Date(now);
      yest.setDate(now.getDate() - 1);
      if (sameDay) return 'Hoje ' + hhmm;
      if (yest.toDateString() === dt.toDateString()) return 'Ontem ' + hhmm;
      return pad(dt.getDate()) + '/' + pad(dt.getMonth() + 1) + ' ' + hhmm;
    } catch {
      return null;
    }
  })();

  // Renderizar jogadores no campo
  let jogadoresHtml = '';
  if (lineup && provavelState.mercadoImages) {
    jogadoresHtml = lineup.titulares
      .filter((p) => p.slot !== 'TEC')
      .map((p) => {
        const jogador = provavelState.mercadoImages.get(p.id);

        // Nome: apelido > nome > ID
        let nome = jogador?.apelido || jogador?.nome;
        if (!nome) {
          nome = `#${p.id}`;
        }

        const foto = jogador?.foto || `./ESCUDOS_BRASILEIRAO/${timeId}.png`;
        const pos = resolvePos(p.slot, { x: p.x, y: p.y });
        const isDuvida = p.sit === 'duvida';
        let duvidaComNome = '';

        if (isDuvida && p.duvida_com) {
          const altJogador = provavelState.mercadoImages.get(p.duvida_com);
          duvidaComNome = altJogador?.apelido || altJogador?.nome;
          if (!duvidaComNome) duvidaComNome = `#${p.duvida_com}`;
        }

        const abreviar = (n) => {
          const partes = n.trim().split(' ');
          if (partes.length <= 1) return n;
          return (
            partes[0].charAt(0).toUpperCase() +
            '. ' +
            partes.slice(1).join(' ')
          );
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
            ${
              isDuvida && duvidaAbrev
                ? `
            <div class="mt-0.5 px-1.5 py-0.5 bg-white/25 backdrop-blur-sm rounded-md text-center" style="min-width:48px; max-width:70px;">
              <p class="text-[9px] md:text-[10px] font-medium text-gray-700 leading-tight text-center drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">${duvidaAbrev}</p>
            </div>`
                : ''
            }
          </div>
        `;
      })
      .join('');
  }

  const timeData = timesNaOrdem.find((t) => t.id === timeId) || {};

  return `
    <div id="time-card-${index}" class="glass-card p-4 space-y-3 scroll-mt-20 transition-all duration-300">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 shrink-0 bg-white rounded-xl p-1.5 shadow-md border border-white/50">
          <img src="./ESCUDOS_BRASILEIRAO/${timeId}.png" 
               alt="${nomeTime}" 
               class="w-full h-full object-contain"
               onerror="this.src='./ESCUDOS/default.png'">
        </div>
        
        <div class="flex-1 min-w-0">
          <p class="font-teko text-2xl uppercase leading-tight tracking-wide text-gray-800 truncate">${nomeTime}</p>
          ${
            fmtUpdate
              ? `<p class="flex items-center gap-1 text-[10px] font-mono text-gray-400 leading-none mt-0.5">
              <svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3 inline-block' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><polyline points='12 6 12 12 16 14'/></svg> Atualizado ${fmtUpdate}
            </p>`
              : ''
          }
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

      <div class="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/30 shadow-inner">
        <div class="absolute inset-0 bg-gradient-to-b from-green-600/40 to-green-800/40"></div>
        
        <div class="absolute inset-0 opacity-30 pointer-events-none">
          <div class="absolute inset-3 border border-white rounded"></div>
          <div class="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white rounded-full"></div>
          <div class="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-12 border border-t-0 border-white"></div>
          <div class="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-12 border border-b-0 border-white"></div>
        </div>
        
        <!-- Jogadores posicionados -->
        ${jogadoresHtml}
      </div>

      ${
        partidaInfo
          ? `
      <div class="flex items-center gap-3 px-3 py-2.5 bg-black/[0.04] rounded-xl border border-black/[0.06]">
        <div class="flex items-center gap-2 flex-1 min-w-0">
          <span class="text-[10px] font-mono text-gray-400 uppercase shrink-0">ADV</span>
          <img src="${partidaInfo.adversarioEscudo}" alt="${partidaInfo.adversarioNome}"
               class="w-6 h-6 object-contain shrink-0"
               onerror="this.style.display='none'">
          <span class="font-teko text-lg uppercase leading-none text-gray-800 truncate">${partidaInfo.adversarioNome}</span>
          <span class="text-[10px] font-mono text-gray-400 bg-black/5 px-1.5 py-0.5 rounded-full shrink-0">${partidaInfo.mando}</span>
        </div>
        <div class="flex flex-col items-end shrink-0 gap-0.5">
          <span class="flex items-center gap-1 text-[10px] font-mono text-gray-500">
            <svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='4' width='18' height='18' rx='2' ry='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/></svg>
            ${partidaInfo.data}
          </span>
          <span class="flex items-center gap-1 text-[10px] font-mono text-gray-400 text-right">
            <svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3 shrink-0' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/><circle cx='12' cy='10' r='3'/></svg>
            ${partidaInfo.local}
          </span>
        </div>
      </div>`
          : ''
      }
    </div>
  `;
}

// ========== RENDERIZAR PROVÁVEIS ==========
async function renderProvaveis() {
  const mainContent = document.getElementById('main-content');

  if (!mainContent) {
    console.error('❌ main-content não encontrado');
    return;
  }

  provavelState.loading = true;

  try {
    console.log('🚀 Iniciando carregamento de prováveis...');

    // Buscar dados em paralelo
    await Promise.all([
      fetchPartidas(),
      fetchAtletas(),
      fetchLineups(),
      fetchTeamUpdates(),
    ]);

    console.log('📊 Estado após fetch:', provavelState);

    // Validar dados
    if (!provavelState.partidasData || !provavelState.partidasData.partidas) {
      throw new Error(
        'Dados de partidas inválidos. Verifique a API do Cartola.'
      );
    }

    const partidas = provavelState.partidasData.partidas || [];
    if (partidas.length === 0) {
      throw new Error('Nenhuma partida encontrada para esta rodada.');
    }

    // Organizar times na ordem das partidas
    let timesNaOrdem = [];
    partidas.forEach((p) => {
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

    // Renderizar cards
    const cardsHtml = partidas
      .flatMap((partida, idx) => {
        const casaIdx = timesNaOrdem.findIndex(
          (t) => t.id === partida.clube_casa_id
        );
        const visIdx = timesNaOrdem.findIndex(
          (t) => t.id === partida.clube_visitante_id
        );

        return [
          renderTimeCard(
            partida.clube_casa_id,
            partida,
            timesNaOrdem,
            casaIdx
          ),
          renderTimeCard(
            partida.clube_visitante_id,
            partida,
            timesNaOrdem,
            visIdx
          ),
        ];
      })
      .join('');

    mainContent.innerHTML = `
      <div class="space-y-6 animate-in fade-in duration-300">
        
        <!-- Grid de escudos para scroll rápido -->
        <div class="glass-card p-6">
          <div class="grid grid-cols-5 gap-2 md:gap-4 justify-items-center">
            ${timesNaOrdem
              .map(
                (time, index) => `
              <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/5 rounded-full p-2 flex items-center justify-center border border-black/5 hover:bg-black/10 transition-colors shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200" 
                   onclick="document.getElementById('time-card-${index}') && document.getElementById('time-card-${index}').scrollIntoView({ behavior: 'smooth', block: 'center' })"
                   title="Ver card do time">
                <img src="./ESCUDOS_BRASILEIRAO/${time.id}.png" 
                     alt="Time ${time.id}" 
                     class="w-full h-full object-contain drop-shadow-sm"
                     onerror="this.style.display='none'">
              </div>
            `
              )
              .join('')}
          </div>
        </div>

        <!-- Cards dos times -->
        <div class="space-y-4 px-4">
          ${cardsHtml}
        </div>
      </div>
    `;

    provavelState.loading = false;
    console.log('✅ Prováveis renderizadas com sucesso');
  } catch (error) {
    console.error('❌ Erro ao renderizar prováveis:', error);
    mainContent.innerHTML = `
      <div class="flex flex-col justify-center items-center h-screen gap-3 px-6 text-center">
        <div class="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <svg xmlns='http://www.w3.org/2000/svg' class='w-8 h-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='12' r='10'/><line x1='12' y1='8' x2='12' y2='12'/><line x1='12' y1='16' x2='12.01' y2='16'/></svg>
        </div>
        <p class="text-red-500 font-teko text-2xl uppercase">Erro ao carregar</p>
        <p class="text-xs text-gray-500 max-w-sm">${error.message}</p>
        <button onclick="renderProvaveis()" class="mt-4 px-6 py-2 bg-black text-white text-xs uppercase tracking-widest rounded-full">
          Tentar Novamente
        </button>
      </div>
    `;
    provavelState.loading = false;
  }
}

// ========== EXPORTAR PARA USO GLOBAL ==========
window.renderProvaveis = renderProvaveis;

console.log('✅ provaveis.js carregado com sucesso');
