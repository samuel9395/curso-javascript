// Objeto Date
/*
// Uma função construtora"Date()" começa com letra maiúscula
const tresHoras = 60 * 60 * 3 * 1000; // Aqui temos 3 horas em milesimos de segundos
const umDIa = 60 * 60 * 24 * 1000; // Aqui temos 1 dia em milesimos de segundos
const data = new Date(0 + tresHoras + umDIa); // A função construtora "Date(0)" no '0' marca a seguinte data: 01/01/1970 Timestamp unix, ou época unix... Ou dia zero. Porém por conta do fuso horário a data apresentada é do dia anterior
console.log(data.toString()); // O toString() está sendo usado para formatar a hora no modo gringo
*/
//                    ano|mês|dia|hora|min|sec|milésimos de segundos
//const data = new Date(1993, 7, 25, 18, 30, 27, 1000); // Nesse caso pelo milésimo estar no '1000', então os segundos saem de '27' para '28' segundos. | Podemos também fazer assim: const data = new Date(1993-7-25  18:30:27);
//const dataAtual = new Date(); // Quando passamos a função construtora vazia dentro de uma variável, ela trás a data e hora atual...
//console.log(`Data nascimento: ${data.toString()}\nData atual: ${dataAtual.toString()}`);
/*
const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa com '0'
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //getDay obtém o número do dia na semana, não no mês | A contagem em js para o dia da semana começa em '0 - Domingo',  e '6 - Sábado'
console.log(Date.now()); // Irá trazer o dia atual em milésimos de segundos, partindo do marco zero 
*/

// Esse trecho do código usamos a função formataData para formatar a data no modelo Brasil
function zeroAesquerda(num) { // Função responsável para colocar o zero á esquerda do número
    return num >= 10 ? num: `0${num}`;
}

function formataData(data) {
    const dia = zeroAesquerda(data.getDate())
    const mes = zeroAesquerda(data.getMonth() + 1)
    const ano = zeroAesquerda(data.getFullYear())
    const hora = zeroAesquerda(data.getHours())
    const min = zeroAesquerda(data.getMinutes())
    const seg = zeroAesquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ás ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
