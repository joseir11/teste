/* ============================================================
   LÓGICA: JOGOS DA RODADA - VERSÃO GITHUB
   ============================================================ */

const btnJogos = document.getElementById('btn-jogos');
const appContent = document.getElementById('app-content');

if (btnJogos) {
    btnJogos.addEventListener('click', carregarTelaJogos);
}

async function carregarTelaJogos() {
    // FEEDBACK VISUAL RÁPIDO
    appContent.innerHTML = `
        <div class="flex justify-center pt-20">
            <div class="animate-spin h-6 w-6 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
        </div>
    `;

    try {
        const res = await fetch(API_ROUTES.PARTIDAS);
        if (!res.ok) throw new Error("ERRO_API");
        const data = await res.json();
        
        renderizarPartidas(data);
    } catch (e) {
        console.error(e);
        appContent.innerHTML = `
            <div class="p-20 text-center">
                <p class="text-red-400 font-black text-xs uppercase tracking-widest">Erro de Conexão</p>
                <p class="text-gray-400 text-[9px] mt-2 font-bold">O PROXY NO RENDER PODE ESTAR REINICIANDO</p>
            </div>
        `;
    }
}

function renderizarPartidas(data) {
    const { partidas, clubes } = data;

    let html = `
        <div class="p-4 animate-in fade-in duration-300">
            <h1 class="text-center text-gray-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8">
                Jogos da Rodada
            </h1>
            <div class="flex flex-col gap-4">
    `;

    partidas.forEach(jogo => {
        const casa = clubes[jogo.clube_casa_id];
        const vste = clubes[jogo.clube_visitante_id];
        
        html += `
            <div class="bg-white rounded-3xl p-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50">
                <div class="flex flex-col items-center w-1/4">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_casa_id}.png" class="w-12 h-12 object-contain" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[10px] font-black text-gray-500 mt-2 uppercase tracking-tighter">${casa.abreviacao}</span>
                </div>

                <div class="flex flex-col items-center w-2/4">
                    <div class="flex items-center gap-4">
                        <span class="text-3xl font-black text-gray-800">${jogo.placar_oficial_mandante ?? 0}</span>
                        <span class="text-gray-200 font-light text-xl">×</span>
                        <span class="text-3xl font-black text-gray-800">${jogo.placar_oficial_visitante ?? 0}</span>
                    </div>
                    <div class="mt-3 bg-orange-500 text-white text-[8px] px-3 py-0.5 rounded-full font-black uppercase tracking-widest">
                        ${jogo.status_transmissao_tr === "ENCERRADA" ? "ENCERRADO" : "AO VIVO"}
                    </div>
                </div>

                <div class="flex flex-col items-center w-1/4">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_visitante_id}.png" class="w-12 h-12 object-contain" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[10px] font-black text-gray-500 mt-2 uppercase tracking-tighter">${vste.abreviacao}</span>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    appContent.innerHTML = html;
}
