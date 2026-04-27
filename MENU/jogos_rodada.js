/* ============================================================
   MENU/jogos_rodada.js
   ============================================================ */

// ESCUTA O CLIQUE NO DOCUMENTO PARA NÃO DAR ERRO DE CARREGAMENTO
document.addEventListener('click', function (e) {
    const btn = e.target.closest('#btn-jogos');
    if (btn) {
        console.log("BOTÃO JOGOS CLICADO");
        carregarTelaJogos();
    }
});

async function carregarTelaJogos() {
    const main = document.getElementById('main-content');
    
    // FEEDBACK VISUAL
    main.innerHTML = `
        <div class="flex flex-col justify-center items-center pt-20">
            <div class="loader"></div>
            <p class="text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-widest">Buscando Partidas...</p>
        </div>
    `;

    try {
        // API_ROUTES vem do arquivo rotas_proxy.js
        const response = await fetch(API_ROUTES.PARTIDAS);
        const data = await response.json();

        if (!data || !data.partidas) throw new Error("Sem dados");

        renderizarJogos(data);
    } catch (error) {
        console.error("ERRO:", error);
        main.innerHTML = `
            <div class="p-20 text-center">
                <p class="text-red-500 font-bold text-xs uppercase">Erro de Conexão</p>
                <p class="text-gray-400 text-[9px] mt-2 font-bold uppercase">Verifica o teu Proxy no Render</p>
            </div>
        `;
    }
}

function renderizarJogos(data) {
    const main = document.getElementById('main-content');
    const { partidas, clubes } = data;

    let html = `
        <div class="p-4">
            <h1 class="text-center text-gray-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">Jogos da Rodada</h1>
            <div class="flex flex-col gap-4">
    `;

    partidas.forEach(jogo => {
        const casa = clubes[jogo.clube_casa_id];
        const vste = clubes[jogo.clube_visitante_id];
        
        html += `
            <div class="bg-white rounded-3xl p-5 flex items-center justify-between shadow-sm border border-gray-100">
                <div class="flex flex-col items-center w-1/4">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_casa_id}.png" class="w-12 h-12" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[10px] font-black text-gray-500 mt-2 uppercase">${casa.abreviacao}</span>
                </div>

                <div class="flex flex-col items-center w-2/4">
                    <div class="flex items-center gap-4">
                        <span class="text-3xl font-black text-gray-800">${jogo.placar_oficial_mandante ?? 0}</span>
                        <span class="text-gray-200 font-light italic">x</span>
                        <span class="text-3xl font-black text-gray-800">${jogo.placar_oficial_visitante ?? 0}</span>
                    </div>
                </div>

                <div class="flex flex-col items-center w-1/4">
                    <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_visitante_id}.png" class="w-12 h-12" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                    <span class="text-[10px] font-black text-gray-500 mt-2 uppercase">${vste.abreviacao}</span>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    main.innerHTML = html;
}
