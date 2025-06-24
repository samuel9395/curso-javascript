// Switch/Case

const data = new Date(1993-8-25);
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);// nesse caso mudamos a variável para constante, para ser utilizada dentro da função

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         break;
// }

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto; // Essa variável não tem a ver com a variável externa de mesmo nome | Aqui ela vai como 'let' pois seu valor é variável...
    // let texto;
    
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        break;
    }

    return ( // Aqui eu poderia simplesmente usar return diaSemanaTexto;
        `O dia da semana é: ${diaSemanaTexto}`
    )
}

console.log(diaSemanaTexto);
