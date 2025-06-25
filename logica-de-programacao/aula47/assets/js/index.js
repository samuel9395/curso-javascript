

function relogio() {
    // 🕒 criaHoraSegundos() – Função que formata segundos em HH:MM:SS
    // Alternativa 1 (manual):
    // function criaHoraSegundos(segundos) {
    //     const horas = Math.floor(segundos / 3600);
    //     const minutos = Math.floor((segundos % 3600) / 60);
    //     const segundosRestantes = segundos % 60;

    //     return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
    // }
    // Calcula horas, minutos e segundos manualmente.
    // Usa padStart() para manter o formato 00.

    // Alternativa 2 (com Date + toISOString):
    function criaHoraSegundos(segundos) {
        return new Date(segundos * 1000).toISOString().substr(11, 8);
    }
    // Cria um objeto Date com os segundos convertidos para milissegundos.
    // Usa .toISOString() e extrai somente a parte HH:MM:SS.

    console.log(criaHoraSegundos(0));

    // 📄 Elementos da página:
    let elementoP = document.querySelector('#count');
    // let iniciar = document.querySelector('.iniciar');
    // let pausar = document.querySelector('.pausar');
    // let zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    // elementoP: local onde o tempo será exibido.
    // segundos: contador.
    // timer: guarda o setInterval para pausar ou zerar depois.

    // ▶️ iniciaRelogio() – função que inicia o cronômetro
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            elementoP.innerHTML = criaHoraSegundos(segundos);
        }, 1000);
    }
    // Atualiza o valor exibido a cada segundo.
    // Usa criaHoraSegundos() para formatar.

    // 🖱️ Tratamento de eventos com delegação de eventos
    document.addEventListener('click', function (e) {
        const elemento = e.target;
        // console.log(elemento);
        if (elemento.classList.contains('iniciar')) {
            console.log('INICIAR');
            elementoP.classList.remove('pausado'); // Muda a cor do elemento 
            clearInterval(timer);
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            console.log('PAUSAR');
            elementoP.classList.add('pausado');
            clearInterval(timer);
        }
        if (elemento.classList.contains('zerar')) {
            console.log('ZERAR');
            elementoP.classList.remove('pausado');
            clearInterval(timer);
            elementoP.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
    // Verifica qual botão foi clicado usando classList.contains.
    // Usa uma única função de clique para lidar com os 3 botões (iniciar, pausar, zerar).
    // Evita múltiplos addEventListener, o que é ótimo para performance e legibilidade.

    // 🧪 Alternativa com addEventListener direto (comentada)
    // iniciar.addEventListener('click', function (e) {
    //     elementoP.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });

    // pausar.addEventListener('click', function (e) {
    //     elementoP.classList.add('pausado');
    //     clearInterval(timer);
    // });

    // zerar.addEventListener('click', function (e) {
    //     clearInterval(timer);
    //     elementoP.innerHTML = '00:00:00';
    //     segundos = 0;
    // });

}

relogio();