// Exercício

// Escreva uma function que recebe 2 números e retorna o maior deles;

function maiorNumero(num1, num2) {

    // if (num1 > num2) return num1; // Versão tradicional com if
    // return num2;

    return num1 > num2 ? num1 : num2; // Versão com operador ternário (mais enxuta)
    /**
        ? → se verdadeiro retorna num1
        : → senão, retorna num2
     */

}

const maior = maiorNumero(5, 3);
console.log(maior);

// ✅ Arrow Function (função de seta)


const numeroMaior = (num1, num2) => num1 > num2 ? num1 : num2;

/**
    Sintaxe moderna e compacta.
    Ideal para funções simples de uma linha.
*/

console.log(numeroMaior(10, 15));

/**
    🧠 Dica extra: validação de igualdade
    Se quiser retornar algo especial quando os dois forem iguais, pode fazer:
 */

const maiorOuIgual = (a, b) => a === b ? 'São iguais' : a > b ? a : b;

console.log(maiorOuIgual(10, 10)); // "São iguais"
