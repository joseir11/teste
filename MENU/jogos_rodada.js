/* ============================================================
   LÓGICA: JOGOS DA RODADA (100% AUTOMATIZADO)
   ============================================================ */

const btnJogos = document.getElementById('btn-jogos');
const appContent = document.getElementById('main-content'); // USANDO SEU ID PADRÃO

if (btnJogos) {
    btnJogos.addEventListener('click', carregarTelaJogos);
}

async function carregarTelaJogos() {
    // LOADING INSTANTÂNEO
    appContent.innerHTML = `
        <div class="flex justify-center pt-20">
            <div class="animate-spin h-8 w-8 border-4 border-gray-200 border-t-orange-500 rounded-full"></div>
        </div>
    `;

    try {
        // BUSCA DADOS DIRETOS DA API VIA PROXY
        const res = await fetch(API_ROUTES.PARTIDAS);
        if (!res.ok) throw new Error("FALHA NA CONEXÃO");
        const data = await res.json();
        
        renderizarPartidas(data);
    } catch (e) {
        appContent.innerHTML = `
            <div class="p-10 text-center glass-card">
                <p class="text-red-500 font-black text-xs uppercase tracking-widest">Erro de Sincronização</p>
                <p class="text-gray-400 text-[10px] mt-2">O PROXY PODE ESTAR INICIANDO. TENTE NOVAMENTE EM INSTANTES.</p>
            </div>
        `;
    }
}

function renderizarPartidas(data) {
    const { partidas, clubes } = data;

    let html = `
        <div class="p-4 animate-in fade-in duration-300">
            <h1 class="text-center text-gray-400 font-teko text-2xl uppercase tracking-[0.2em] mb-8">
                Jogos da Rodada
            </h1>
            <div class="grid grid-cols-1 gap-4">
    `;

    partidas.forEach(jogo => {
        const casa = clubes[jogo.clube_casa_id];
        const vste = clubes[jogo.clube_visitante_id];
        const status = jogo.status_transmissao_tr === "ENCERRADA" ? "ENCERRADO" : "AO VIVO";

        html += `
            <div class="bg-white/80 backdrop-blur-md rounded-3xl p-6 flex items-center justify-between shadow-sm border border-white/50">
                <div class="flex flex-col items-center w-1/3">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_casa_id}.png" class="w-14 h-14 object-contain" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[11px] font-black text-gray-500 mt-2 uppercase font-mono">${casa.abreviacao}</span>
                </div>

                <div class="flex flex-col items-center w-1/3">
                    <div class="flex items-center gap-4">
                        <span class="text-4xl font-black text-gray-800">${jogo.placar_oficial_mandante ?? 0}</span>
                        <span class="text-gray-300 font-light text-2xl">×</span>
                        <span class="text-4xl font-black text-gray-800">${jogo.placar_oficial_visitante ?? 0}</span>
                    </div>
                    <div class="mt-3 bg-orange-500 text-white text-[9px] px-4 py-1 rounded-full font-black uppercase tracking-widest">
                        ${status}
                    </div>
                    <span class="text-[8px] text-gray-400 mt-3 font-bold uppercase text-center leading-tight">
                        ${jogo.local || 'ARENA'}
                    </span>
                </div>

                <div class="flex flex-col items-center w-1/3">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_visitante_id}.png" class="w-14 h-14 object-contain" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[11px] font-black text-gray-500 mt-2 uppercase font-mono">${vste.abreviacao}</span>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    appContent.innerHTML = html;
}
