// Escreva um function que recebe números e retorna o seguinte:
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100 

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 0;
const max = 100;

let rand = random(min, max);
console.log(rand);

function fizzBuzz(numero) {

    numero = rand;

    if (numero !== 0) {

        if (typeof numero !== 'number') return 'Não é um número';
        if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
        if (numero % 3 === 0) return 'Fizz';
        if (numero % 5 === 0) return 'Buzz';
        return 'Não divisível';

    } else return 'Número igual a zero!'
} 

let resultado = fizzBuzz(rand);
console.log(resultado);

console.log('***---***');

// function fizzBuzz2(numero) {
//     if (typeof numero !== 'number') return 'Não é um número';
//     if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
//     if (numero % 3 === 0) return 'Fizz';
//     if (numero % 5 === 0) return 'Buzz';
//     return numero;
// }

// for (let i = 0; i <= 100; i++) {
//     console.log(i, fizzBuzz2(i));
// }
