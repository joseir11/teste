/* ============================================================
   PROVÁVEIS ESCALAÇÕES — V.7
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
};

let provavelState = {
  lineupsData: null,
  mercadoImages: null,
  teamUpdatesData: null,
  partidasData: null,
  loading: false,
};

// ========== LOADER E ERRO ==========
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
          Aguarde até que o servidor responda.
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

// ========== BOTÃO VOLTAR AO TOPO ==========
function initScrollToTop() {
  if (document.getElementById('scrollToTopProvaveis')) return;
  
  const btn = document.createElement('button');
  btn.id = 'scrollToTopProvaveis';
  btn.className = 'fixed bottom-24 right-4 w-12 h-12 bg-[#FF6321]/80 text-black rounded-full shadow-lg flex items-center justify-center opacity-0 invisible transition-all duration-300 z-50 hover:scale-110';
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'invisible');
      btn.classList.add('opacity-100', 'visible');
    } else {
      btn.classList.add('opacity-0', 'invisible');
      btn.classList.remove('opacity-100', 'visible');
    }
  });
}

// ========== DESTAQUE DO CARD ==========
function highlightCard(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.classList.add('ring-4', 'ring-[#FF6321]', 'ring-offset-2', 'transition-all', 'duration-300');
  setTimeout(() => {
    card.classList.remove('ring-4', 'ring-[#FF6321]', 'ring-offset-2');
  }, 2000);
}

// ========== FUNÇÕES AUXILIARES ==========
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

function formatarDataPartida(iso) {
  if (!iso) return 'A definir';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const data = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  const hora = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  return `${data} • ${hora}`;
}

function resolvePos(slot, xy) {
  if (xy && Number.isFinite(xy.x) && Number.isFinite(xy.y)) {
    return { x: xy.x, y: xy.y };
  }
  return { x: 50, y: 50 };
}

// ========== OBTÉM NOME DO JOGADOR (MESMA LÓGICA DO PROJETO ORIGINAL) ==========
function getNomeJogador(id, mercadoImagesMap) {
  const jogador = mercadoImagesMap?.get(id);
  let nome = jogador?.apelido || jogador?.nome;
  if (!nome && typeof JOGADORES !== 'undefined' && JOGADORES[id] && JOGADORES[id].slug) {
    nome = JOGADORES[id].slug.split('-').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
  }
  return nome || `#${id}`;
}

// ========== GERA NOME DO ARQUIVO DE IMAGEM LOCAL ==========
function getNomeArquivoJogador(id, mercadoImagesMap) {
  if (typeof JOGADORES !== 'undefined' && JOGADORES[id] && JOGADORES[id].slug) {
    return JOGADORES[id].slug.toUpperCase().replace(/-/g, '');
  }
  const nome = mercadoImagesMap?.get(id)?.apelido || mercadoImagesMap?.get(id)?.nome;
  if (nome) {
    return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  }
  return '';
}

// ========== MODAL DO JOGADOR ==========
function fecharModal() {
  const modal = document.getElementById('modal-jogador-scout');
  if (modal) modal.remove();
}
window.fecharModal = fecharModal;

window.abrirModalJogador = function(jogadorId, timeId) {
  const idStr = String(jogadorId);
  if (typeof SCOUTS === 'undefined') {
    console.error("SCOUTS não definido");
    alert("Erro: base de jogadores não carregada.");
    return;
  }
  const dadosJogador = SCOUTS[idStr];
  if (!dadosJogador) {
    console.error(`Jogador ID ${idStr} não encontrado`);
    alert(`Dados do jogador ID ${idStr} não encontrados.`);
    return;
  }

  // Usa a mesma lógica de foto do renderJogadoresCampo
  const mercadoImagesMap = provavelState.mercadoImages;
  const nomeArquivo = getNomeArquivoJogador(parseInt(idStr), mercadoImagesMap);
  const fotoLocal = nomeArquivo ? `./JOGADORES/${idStr}_${nomeArquivo}.webp` : null;
  const fotoProxy = mercadoImagesMap?.get(parseInt(idStr))?.foto || '';
  const foto = fotoLocal || fotoProxy || `./ESCUDOS_BRASILEIRAO/${timeId}.png`;

  const partidas = provavelState.partidasData?.partidas || [];
  const partida = partidas.find(p => p.clube_casa_id === timeId || p.clube_visitante_id === timeId);
  
  let confrontoHtml = '';
  let dataHora = '—', local = '—';
  if (partida) {
    const timeCasaId = partida.clube_casa_id;
    const timeVisitanteId = partida.clube_visitante_id;
    const escudoCasa = `./ESCUDOS_BRASILEIRAO/${timeCasaId}.png`;
    const escudoVisitante = `./ESCUDOS_BRASILEIRAO/${timeVisitanteId}.png`;
    const posCasa = partida.clube_casa_posicao ? partida.clube_casa_posicao + "º" : "?";
    const posVisitante = partida.clube_visitante_posicao ? partida.clube_visitante_posicao + "º" : "?";
    
    confrontoHtml = `
      <div class="flex items-center justify-between gap-2">
        <div class="flex flex-col items-center">
          <img src="${escudoCasa}" class="w-8 h-8 object-contain" onerror="this.style.display='none'">
          <span class="text-[10px] font-mono">${posCasa}</span>
        </div>
        <span class="text-sm font-black text-gray-700">VS</span>
        <div class="flex flex-col items-center">
          <img src="${escudoVisitante}" class="w-8 h-8 object-contain" onerror="this.style.display='none'">
          <span class="text-[10px] font-mono">${posVisitante}</span>
        </div>
      </div>
    `;
    dataHora = formatarDataPartida(partida.partida_data);
    local = partida.local || '—';
  } else {
    confrontoHtml = `<p class="text-xs text-gray-400 text-center">Dados não disponíveis</p>`;
  }

  const preco = dadosJogador.preco?.toFixed(2) || "0.00";
  const varValor = dadosJogador.var || 0;
  const varFormatado = varValor > 0 ? `+${varValor.toFixed(2)}` : varValor.toFixed(2);
  const corVar = varValor > 0 ? "text-green-500" : (varValor < 0 ? "text-red-500" : "text-gray-400");
  const jogos = dadosJogador.jogos || 0;
  const media = dadosJogador.media?.toFixed(2) || "0.00";
  const mpv = dadosJogador.mpv?.toFixed(2) || "0.00";
  const pt_ced = dadosJogador.pt_ced?.toFixed(1) || "0.0";
  const ult = dadosJogador.ult !== undefined ? dadosJogador.ult.toFixed(1) : "-";

  // Scouts
  const scoutsAta = dadosJogador.scouts?.ata || {};
  const scoutsDef = dadosJogador.scouts?.def || {};

  // Definição das células: [label, valor, corVermelha?]
  const ataques = [
    { label: "G", value: scoutsAta.G || 0, red: false },
    { label: "A", value: scoutsAta.A || 0, red: false },
    { label: "FT", value: scoutsAta.FT || 0, red: false },
    { label: "FD", value: scoutsAta.FD || 0, red: false },
    { label: "FF", value: scoutsAta.FF || 0, red: false },
    { label: "FS", value: scoutsAta.FS || 0, red: false },
    { label: "PS", value: scoutsAta.PS || 0, red: false },
    { label: "V", value: scoutsAta.V || 0, red: false },
    { label: "I", value: scoutsAta.I || 0, red: true },
    { label: "PP", value: scoutsAta.PP || 0, red: true }
  ];

  const defesas = [
    { label: "DS", value: scoutsDef.DS || 0, red: false },
    { label: "SG", value: scoutsDef.SG || 0, red: false },
    { label: "DE", value: scoutsDef.DE || 0, red: false },
    { label: "DP", value: scoutsDef.DP || 0, red: false },
    { label: "CV", value: scoutsDef.CV || 0, red: true },
    { label: "CA", value: scoutsDef.CA || 0, red: true },
    { label: "FC", value: scoutsDef.FC || 0, red: true },
    { label: "GC", value: scoutsDef.GC || 0, red: true },
    { label: "GS", value: scoutsDef.GS || 0, red: true },
    { label: "PC", value: scoutsDef.PC || 0, red: true }
  ];

  // Função para gerar uma célula com cor condicional
  const renderCell = (label, value, isRed) => {
    const bgColor = isRed ? "bg-red-100" : "bg-green-100";
    return `
      <div class="${bgColor} rounded-md p-1 text-center min-w-[40px]">
        <div class="text-[9px] font-bold uppercase text-gray-600">${label}</div>
        <div class="text-sm font-black text-gray-800">${value}</div>
      </div>
    `;
  };

  // Gera linha de scouts de ataque (flex wrap)
const ataquesHtml = `<div class="flex flex-wrap gap-1 justify-start">${ataques.map(a => renderCell(a.label, a.value, a.red)).join('')}</div>`;
const defesasHtml = `<div class="flex flex-wrap gap-1 justify-start">${defesas.map(d => renderCell(d.label, d.value, d.red)).join('')}</div>`;
   
  fecharModal();
  const modalHtml = `
    <div id="modal-jogador-scout" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all" onclick="if(event.target === this) fecharModal()">
      <div class="relative w-full max-w-md mx-3 bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-200">
        <button onclick="fecharModal()" class="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <!-- Cabeçalho com foto e nome -->
        <div class="bg-gradient-to-r from-orange-50 to-white p-4 border-b border-orange-100">
          <div class="flex items-center gap-3">
            <div class="w-14 h-14 bg-white rounded-full p-1 shadow-md border border-orange-200">
              <img src="${foto}" class="w-full h-full object-contain rounded-full" onerror="this.onerror=null; this.src='${fotoProxy || `./ESCUDOS_BRASILEIRAO/${timeId}.png`}'">
            </div>
               <div>
                 <h3 class="text-2xl uppercase tracking-wide text-gray-800" style="font-family: Arial, Helvetica, sans-serif !important; font-weight: 900;">${dadosJogador.nome}</h3>
                 <p class="text-xs font-mono text-gray-500">${dadosJogador.pos}</p>
               </div>
          </div>
        </div>

        <div class="p-4 space-y-3">
          <!-- Preço e variação -->
          <div class="flex items-center justify-between bg-black/[0.02] rounded-xl p-2 border border-black/5">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-[#FF6321] text-white flex items-center justify-center font-black text-sm shadow-sm">C$</div>
              <div>
                <p class="text-[10px] text-gray-400 uppercase">Preço</p>
                <p class="text-lg font-black text-gray-900">${preco}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-[10px] text-gray-400 uppercase">Variação</p>
              <p class="text-base font-black ${corVar}">${varFormatado}</p>
            </div>
          </div>

          <!-- MPV / CEDIDO agrupados -->
          <div class="flex items-center justify-between gap-2 bg-black/[0.02] rounded-xl p-2 border border-black/5">
            <div class="flex-1 text-center">
              <p class="text-[10px] text-gray-400 uppercase">MPV</p>
              <p class="text-lg font-black text-gray-800">${mpv}</p>
            </div>
            <div class="w-px h-8 bg-gray-200"></div>
            <div class="flex-1 text-center">
              <p class="text-[10px] text-gray-400 uppercase">CEDIDO</p>
              <p class="text-lg font-black text-gray-800">${pt_ced}</p>
            </div>
          </div>

          <!-- Confronto -->
          <div class="bg-black/[0.02] rounded-xl p-2 border border-black/5 space-y-1">
            ${confrontoHtml}
            <p class="text-center text-[9px] font-mono text-gray-500">${local} • ${dataHora}</p>
          </div>

          <!-- Badges JOGOS / MÉDIA / ULT -->
          <div class="grid grid-cols-3 gap-2">
            <div class="bg-black/[0.02] rounded-xl p-2 text-center border border-black/5">
              <p class="text-[9px] uppercase tracking-wider text-gray-400">JOGOS</p>
              <p class="text-xl font-black text-gray-800">${jogos}</p>
            </div>
            <div class="bg-black/[0.02] rounded-xl p-2 text-center border border-black/5">
              <p class="text-[9px] uppercase tracking-wider text-gray-400">MÉDIA</p>
              <p class="text-xl font-black text-gray-800">${media}</p>
            </div>
            <div class="bg-black/[0.02] rounded-xl p-2 text-center border border-black/5">
              <p class="text-[9px] uppercase tracking-wider text-gray-400">ULT.</p>
              <p class="text-xl font-black text-gray-800">${ult}</p>
            </div>
          </div>

          <!-- Tabela de Scouts - ATAQUE -->
          <div class="bg-black/[0.02] rounded-xl p-2 border border-black/5">
            <p class="text-xs font-black uppercase tracking-wider text-gray-600 mb-2">SCOUTS - ATAQUE</p>
            ${ataquesHtml}
          </div>

          <!-- Tabela de Scouts - DEFESA -->
          <div class="bg-black/[0.02] rounded-xl p-2 border border-black/5">
            <p class="text-xs font-black uppercase tracking-wider text-gray-600 mb-2">SCOUTS - DEFESA</p>
            ${defesasHtml}
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// ========== RENDERIZA OS JOGADORES NO CAMPO (COM ONCLICK) ==========
function renderJogadoresCampo(lineup, timeId, mercadoImagesMap) {
  if (!lineup || !mercadoImagesMap) return '';

  return lineup.titulares
    .filter(p => p.slot !== 'TEC')
    .map(p => {
      const id = p.id;
      const nome = getNomeJogador(id, mercadoImagesMap);
      const nomeArquivo = getNomeArquivoJogador(id, mercadoImagesMap);
      const fotoLocal = nomeArquivo ? `./JOGADORES/${id}_${nomeArquivo}.webp` : null;
      const fotoProxy = mercadoImagesMap.get(id)?.foto || '';
      const foto = fotoLocal || fotoProxy || `./ESCUDOS_BRASILEIRAO/${timeId}.png`;

      const pos = resolvePos(p.slot, { x: p.x, y: p.y });
      const isDuvida = p.sit === 'duvida';
      let duvidaComNome = '';
      if (isDuvida && p.duvida_com) {
        duvidaComNome = getNomeJogador(p.duvida_com, mercadoImagesMap);
      }

      const abreviar = (n) => {
        const partes = n.trim().split(' ');
        if (partes.length <= 1) return n;
        return partes[0].charAt(0).toUpperCase() + '. ' + partes.slice(1).join(' ');
      };
      const nomeAbrev = abreviar(nome);
      const duvidaAbrev = duvidaComNome ? abreviar(duvidaComNome) : '';

      const onClickAttr = `onclick="event.stopPropagation(); window.abrirModalJogador(${id}, ${timeId})"`;

      return `
        <div class="absolute flex flex-col items-center cursor-pointer hover:scale-110 transition-transform" 
             style="left: ${pos.x}%; top: ${pos.y}%; transform: translate(-50%, -50%); z-index: 20;" 
             ${onClickAttr}>
          <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 p-1 shadow-md ${isDuvida ? 'border-2 border-orange-500' : ''}">
            <img src="${foto}" alt="${nome}" class="w-full h-full object-contain rounded-full" 
                 onerror="this.onerror=null; this.src='${fotoProxy || `./ESCUDOS_BRASILEIRAO/${timeId}.png`}'">
          </div>
          <div class="mt-1 px-1.5 py-0.5 bg-white/40 backdrop-blur-sm rounded-md text-center" style="min-width:48px; max-width:70px;">
            <p class="text-[10px] md:text-[11px] font-semibold text-gray-900 leading-tight text-center">${nomeAbrev}</p>
          </div>
          ${isDuvida && duvidaAbrev ? `
            <div class="mt-0.5 px-1.5 py-0.5 bg-white/25 backdrop-blur-sm rounded-md text-center" style="min-width:48px; max-width:70px;">
              <p class="text-[9px] md:text-[10px] font-medium text-gray-700 leading-tight text-center">${duvidaAbrev}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
}

// ========== RENDERIZA O CARD DE UM TIME ==========
function renderTimeCard(timeId, partida, timesNaOrdem, index, mercadoImagesMap) {
  const clubeInfo = provavelState.partidasData?.clubes?.[timeId] || {};
  const nomeTime = clubeInfo.nome_fantasia || clubeInfo.nome || `Time ${timeId}`;

  const slug = Object.keys(SLUG_TO_CARTOLA_ID).find(key => SLUG_TO_CARTOLA_ID[key] === timeId);
  const lineup = slug ? provavelState.lineupsData?.teams?.[slug] : null;
  const lastUpdate = slug ? provavelState.teamUpdatesData?.teams?.[slug]?.last_update : null;

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

  let partidaInfo = null;
  if (partida) {
    const adversarioId = partida.clube_casa_id === timeId ? partida.clube_visitante_id : partida.clube_casa_id;
    const adversarioClube = provavelState.partidasData.clubes?.[adversarioId] || {};
    const isMandante = partida.clube_casa_id === timeId;
    const dataFmt = formatarDataPartida(partida.partida_data);

    partidaInfo = {
      adversarioNome: adversarioClube.nome_fantasia || adversarioClube.nome || '???',
      adversarioEscudo: `./ESCUDOS_BRASILEIRAO/${adversarioId}.png`,
      local: partida.local || '—',
      data: dataFmt,
      mando: isMandante ? 'Casa' : 'Fora',
    };
  }

  const jogadoresHtml = lineup ? renderJogadoresCampo(lineup, timeId, mercadoImagesMap) : '';
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
          ${fmtUpdate ? `<p class="flex items-center gap-1 text-[10px] font-mono text-gray-400 leading-none mt-0.5"><svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='12' r='10'/><polyline points='12 6 12 12 16 14'/></svg> Atualizado ${fmtUpdate}</p>` : ''}
        </div>
        <div class="flex gap-1.5">${renderAproveitamentoBolinhas(timeData.aproveitamento)}</div>
        <div class="shrink-0"><span class="text-[10px] font-mono text-gray-500 uppercase bg-black/5 px-2 py-1 rounded-full">${timeData.isMandante ? 'Casa' : 'Fora'}</span></div>
      </div>

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
            <img src="${partidaInfo.adversarioEscudo}" class="w-6 h-6 object-contain shrink-0" onerror="this.style.display='none'">
            <span class="font-black text-base uppercase leading-none text-gray-800 truncate">${partidaInfo.adversarioNome}</span>
            <span class="text-[10px] font-mono text-gray-400 bg-black/5 px-1.5 py-0.5 rounded-full shrink-0">${partidaInfo.mando}</span>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-0.5">
            <span class="flex items-center gap-1 text-[10px] font-mono text-gray-500"><svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><rect x='3' y='4' width='18' height='18' rx='2' ry='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/></svg> ${partidaInfo.data}</span>
            <span class="flex items-center gap-1 text-[10px] font-mono text-gray-400 text-right"><svg xmlns='http://www.w3.org/2000/svg' class='w-3 h-3 shrink-0' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/><circle cx='12' cy='10' r='3'/></svg> ${partidaInfo.local}</span>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// ========== BUSCAS VIA PROXY ==========
async function fetchLineups() {
  try {
    const res = await fetch(`${PROXY_URL}/provaveis/lineups`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    provavelState.lineupsData = await res.json();
    console.log('✅ Escalações carregadas');
  } catch (err) { console.error('❌ Erro ao buscar escalações:', err); }
}

async function fetchMercadoImages() {
  try {
    const res = await fetch(`${PROXY_URL}/provaveis/mercado-images`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const map = new Map();
    data.forEach(item => map.set(item.atleta_id, item));
    provavelState.mercadoImages = map;
    console.log('✅ Imagens de atletas carregadas:', map.size);
  } catch (err) { console.error('❌ Erro ao buscar mercado-images:', err); }
}

async function fetchTeamUpdates() {
  try {
    const res = await fetch(`${PROXY_URL}/provaveis/team-updates`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    provavelState.teamUpdatesData = await res.json();
    console.log('✅ Atualizações de times carregadas');
  } catch (err) { console.error('❌ Erro ao buscar team-updates:', err); }
}

async function ensurePartidasData() {
  if (provavelState.partidasData) return provavelState.partidasData;
  if (window.API_CARTOLA?.PARTIDAS) {
    try {
      const res = await fetch(window.API_CARTOLA.PARTIDAS, { cache: 'no-store' });
      provavelState.partidasData = await res.json();
      return provavelState.partidasData;
    } catch (err) {}
  }
  const res = await fetch(`${PROXY_URL}/partidas`, { cache: 'no-store' });
  provavelState.partidasData = await res.json();
  return provavelState.partidasData;
}

// ========== FUNÇÃO PRINCIPAL ==========
window.renderProvaveis = async function() {
  const main = document.getElementById('main-content');
  if (!main) return;
  renderLoaderProvaveis();
  provavelState.loading = true;

  try {
    const partidasData = await ensurePartidasData();
    if (!partidasData?.partidas?.length) throw new Error('Nenhuma partida encontrada.');
    provavelState.partidasData = partidasData;
    const partidas = partidasData.partidas;

    await Promise.all([fetchLineups(), fetchMercadoImages(), fetchTeamUpdates()]);

    let timesNaOrdem = [];
    partidas.forEach(p => {
      timesNaOrdem.push({ id: p.clube_casa_id, aproveitamento: p.aproveitamento_mandante, isMandante: true });
      timesNaOrdem.push({ id: p.clube_visitante_id, aproveitamento: p.aproveitamento_visitante, isMandante: false });
    });

    const gridEscudos = `<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4"><div class="grid grid-cols-5 gap-2 md:gap-4 justify-items-center">${timesNaOrdem.map((time, idx) => `<div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/5 rounded-full p-2 flex items-center justify-center border border-black/5 hover:bg-black/10 transition-all shadow-sm cursor-pointer hover:scale-110" onclick="highlightCard('time-card-${idx}')"><img src="./ESCUDOS_BRASILEIRAO/${time.id}.png" class="w-full h-full object-contain drop-shadow-sm" onerror="this.style.display='none'"></div>`).join('')}</div></div>`;

    const cardsHtml = partidas.flatMap((partida, idx) => {
      const casaIdx = timesNaOrdem.findIndex(t => t.id === partida.clube_casa_id);
      const visIdx = timesNaOrdem.findIndex(t => t.id === partida.clube_visitante_id);
      return [
        renderTimeCard(partida.clube_casa_id, partida, timesNaOrdem, casaIdx, provavelState.mercadoImages),
        renderTimeCard(partida.clube_visitante_id, partida, timesNaOrdem, visIdx, provavelState.mercadoImages),
      ];
    }).join('');

    main.innerHTML = `<div class="space-y-6 animate-in fade-in duration-300 pt-6">${gridEscudos}<div class="space-y-4 px-4">${cardsHtml}</div></div>`;
    initScrollToTop();
    console.log('✅ Prováveis escalações renderizadas com sucesso (v3.1 com modal)');
  } catch (err) {
    console.error('❌ Erro:', err);
    renderError(err.message || 'Falha ao carregar os dados.');
  }
  provavelState.loading = false;
};

window.highlightCard = highlightCard;
console.log('✅ provaveis.js v3.1 carregado');
