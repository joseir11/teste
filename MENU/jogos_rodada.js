import API_ROUTES from '../API/rotas_proxy.js';

// SELECIONA OS ELEMENTOS DO DOM
const btnJogos = document.getElementById('btn-jogos');
const appContent = document.getElementById('app-content');

// LISTENER PARA O CLIQUE NO MENU
btnJogos.addEventListener('click', () => {
    carregarTelaJogos();
});

async function carregarTelaJogos() {
    // LIMPA O CONTEÚDO E EXIBE LOADING
    appContent.innerHTML = `
        <div class="flex justify-center items-center h-64">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
        </div>
    `;

    try {
        const response = await fetch(API_ROUTES.PARTIDAS);
        const data = await response.json();
        renderizarPartidas(data);
    } catch (error) {
        console.error("ERRO AO BUSCAR PARTIDAS:", error);
        appContent.innerHTML = `<p class="text-center text-red-500 mt-10 font-bold">ERRO AO CARREGAR PARTIDAS</p>`;
    }
}

function renderizarPartidas(data) {
    const { partidas, clubes } = data;

    // CABEÇALHO DA TELA
    let html = `
        <div class="p-4">
            <h1 class="text-center text-gray-600 font-black text-xl uppercase tracking-tighter mb-6">
                Jogos da Rodada
            </h1>
            <div class="flex flex-col gap-3">
    `;

    // LOOP NAS PARTIDAS
    partidas.forEach(jogo => {
        const casa = clubes[jogo.clube_casa_id];
        const visitante = clubes[jogo.clube_visitante_id];
        const status = jogo.status_transmissao_tr === "ENCERRADA" ? "ENCERRADO" : "A DEFINIR";

        html += `
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-between">
                <div class="flex flex-col items-center w-1/4">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_casa_id}.png" class="w-12 h-12" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[11px] font-bold text-gray-500 mt-2 uppercase">${casa.abreviacao}</span>
                </div>

                <div class="flex flex-col items-center w-2/4">
                    <div class="flex items-center gap-4">
                        <span class="text-3xl font-black text-gray-800">${jogo.placar_oficial_mandante ?? 0}</span>
                        <span class="text-gray-300 font-light text-xl">X</span>
                        <span class="text-3xl font-black text-gray-800">${jogo.placar_oficial_visitante ?? 0}</span>
                    </div>
                    <div class="mt-2 bg-orange-500 text-white text-[9px] px-3 py-0.5 rounded-full font-black uppercase tracking-wider">
                        ${status}
                    </div>
                    <span class="text-[9px] text-gray-400 mt-2 font-semibold uppercase tracking-tighter">
                        ${jogo.local || 'Local não informado'}
                    </span>
                </div>

                <div class="flex flex-col items-center w-1/4">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_visitante_id}.png" class="w-12 h-12" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[11px] font-bold text-gray-500 mt-2 uppercase">${visitante.abreviacao}</span>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    appContent.innerHTML = html;
}
