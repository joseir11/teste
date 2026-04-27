/* MENU/jogos_rodada.js */
document.addEventListener('click', function (e) {
    if (e.target.closest('#btn-jogos')) {
        carregarTelaJogos();
    }
});

async function carregarTelaJogos() {
    const container = document.getElementById('main-content');
    container.innerHTML = `<div class="flex justify-center pt-20"><div class="animate-spin h-6 w-6 border-2 border-gray-300 border-t-gray-600 rounded-full"></div></div>`;

    try {
        const res = await fetch(API_ROUTES.PARTIDAS);
        const data = await res.json();
        
        let html = `<div class="p-4"><h1 class="text-center text-gray-400 font-bold text-xs uppercase tracking-[0.4em] mb-8">Jogos da Rodada</h1><div class="flex flex-col gap-4">`;

        data.partidas.forEach(jogo => {
            const casa = data.clubes[jogo.clube_casa_id];
            const vste = data.clubes[jogo.clube_visitante_id];
            html += `
                <div class="bg-white rounded-3xl p-5 flex items-center justify-between shadow-sm border border-gray-50">
                    <div class="flex flex-col items-center w-1/4">
                        <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_casa_id}.png" class="w-12 h-12" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                        <span class="text-[10px] font-bold text-gray-500 mt-2">${casa.abreviacao}</span>
                    </div>
                    <div class="flex flex-col items-center w-2/4">
                        <div class="flex items-center gap-4">
                            <span class="text-2xl font-black text-gray-800">${jogo.placar_oficial_mandante ?? 0}</span>
                            <span class="text-gray-200 font-light italic">x</span>
                            <span class="text-2xl font-black text-gray-800">${jogo.placar_oficial_visitante ?? 0}</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-center w-1/4">
                        <img src="./ESCUDOS_BRASILEIRAO/${jogo.clube_visitante_id}.png" class="w-12 h-12" onerror="this.src='./ESCUDOS_BRASILEIRAO/0.png'">
                        <span class="text-[10px] font-bold text-gray-500 mt-2">${vste.abreviacao}</span>
                    </div>
                </div>`;
        });

        html += `</div></div>`;
        container.innerHTML = html;
    } catch (err) {
        container.innerHTML = `<div class="p-20 text-center text-red-400 text-xs font-bold uppercase">ERRO AO CARREGAR DADOS</div>`;
    }
}
