// 🔹 Calcular o fatorial de um número
// Crie uma função chamada fatorial que receba um número inteiro e retorne o fatorial desse número.

// Exemplo: fatorial(5) retorna 120 → 5 x 4 x 3 x 2 x 1 = 120

// function fatorial(numero) {
//     let resultado = 1;

//     for (let i = numero; i > 1; i--) {
//         resultado *= i;
//     }

//     return resultado;
// }

// console.log(fatorial(5)); 

// 🧠 Explicação:
// Começamos com resultado = 1 (pois é o elemento neutro da multiplicação).
// O for vai de numero até 1, diminuindo.
// A cada passo, fazemos resultado *= i → multiplicamos o número atual pelo resultado anterior.

// **********************************************************************************************

// 🔁 Alternativa com for crescente:
// function fatorial(numero) {
//   let resultado = 1;

//   for (let i = 1; i <= numero; i++) {
//     resultado *= i;
//   }

//   return resultado;
// }

// fatorial(5);

// ✅ Solução simples com JavaScript:
// function inverterPalavra(palavra) {
//   return palavra.split('').reverse().join('');
// }

// console.log(inverterPalavra('JavaScript')); // tpircSavaJ

// 🧠 Explicação:
// split('') → transforma a string em um array de letras:
// 'JavaScript' → ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
// reverse() → inverte a ordem do array:
// ['t', 'p', 'i', 'r', 'c', 'S', 'a', 'v', 'a', 'J']
// join('') → junta tudo de volta em uma string: 'tpircSavaJ'

// 🛠️ Versão manual (usando for) — boa para praticar:
// function inverterPalavra(palavra) {
//   let invertida = '';

//   for (let i = palavra.length - 1; i >= 0; i--) {
//     invertida += palavra[i];
//   }

//   return invertida;
// }

// console.log(inverterPalavra('JavaScript')); // tpircSavaJ

// function getPrice(productName) {
//     switch (productName) {
//         case 'Arroz':
//             return 300
//             break;
//         case 'Feijão':
//             return 200
//             break;
//         case 'Açucar':
//             return 250
//             break;
//         default:
//             return 'Produto não encontrado!'
//             break;
//     }
// }

// console.log(getPrice('Queijo'));

function ehPalindromo(palavra) {

    let invertida = palavra.split('').reverse().join('');
    // Alternativa; return palavra === palavra.split('').reverse().join('');
    return invertida === palavra;

}

console.log(ehPalindromo('radar'));
