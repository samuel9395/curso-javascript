// Minha resposta
const data = new Date();
const diaSemana = data.getDay();
const nomeMes = getMesTexto(data.getMonth() + 1);
let dataFront = document.querySelector('p#dataFront');

function zeroAesquerda(num) { // Função responsável para colocar o zero á esquerda do número
    return num >= 10 ? num : `0${num}`;
}

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    // Dica do professor
    // Aqui dentro da função eu poderia ter usado somento o array: 
    // const diaSemanaTexto = ['segunda', 'terça'...]; 
    // return diaSemanaTexto[diaSemana];

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo'
            break;
        case 1:
            diaSemanaTexto = 'segunda-feira'
            break;
        case 2:
            diaSemanaTexto = 'terça-feira'
            break;
        case 3:
            diaSemanaTexto = 'quarta-feira'
            break;
        case 4:
            diaSemanaTexto = 'quinta-feira'
            break;
        case 5:
            diaSemanaTexto = 'sexta-feira'
            break;
        case 6:
            diaSemanaTexto = 'sábado'
            break;
        default:
            break;
    }

    return diaSemanaTexto;
}

function getMesTexto(nomeMes) {
    let mes;

    // Dica do professor
    // Aqui dentro da função eu poderia ter usado somento o array: 
    // const meses = ['janeiro', 'fevereiro'...]; 
    // return meses[nomeMes];

    switch (nomeMes) {
        case 1:
            mes = 'Janeiro'
            break;
        case 2:
            mes = 'Fevereiro'
            break;
        case 3:
            mes = 'Março'
            break;
        case 4:
            mes = 'Abril'
            break;
        case 5:
            mes = 'Maio'
            break;
        case 6:
            mes = 'Junho'
            break;
        case 7:
            mes = 'Julho'
            break;
        case 8:
            mes = 'Agosto'
            break;
        case 9:
            mes = 'Setembro'
            break;
        case 10:
            mes = 'Outubro'
            break;
        case 11:
            mes = 'Novembro'
            break;
        case 12:
            mes = 'Dezembro'
            break;
        default:
            break;
    }

    return mes;
}


function dataHoje(nomeMes, diaSemana) {
    const dataCalendario = zeroAesquerda(data.getDate());
    const ano = data.getFullYear();
    const hora = zeroAesquerda(data.getHours());
    const minutos = zeroAesquerda(data.getMinutes());
    const segundos = zeroAesquerda(data.getSeconds());

    return `Hoje é ${getDiaSemanaTexto(diaSemana)}, ${dataCalendario} de ${nomeMes} de ${ano} ás ${hora}:${minutos}:${segundos}`;
}
console.log(dataHoje(nomeMes, diaSemana));

dataFront.innerHTML = `<strong>${dataHoje(nomeMes, diaSemana)}</strong>`;

// Resposta do professor de acordo com a documentação oficial

// const p = document.querySelector('p#dataFront');
// const data = new Date();
// p.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});
// console.log(data);
