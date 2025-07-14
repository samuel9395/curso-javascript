// Retorno da função

//✅ 1. Função que retorna valor
function soma(a, b) {
    return a + b; // Retorna o resultado da soma
}
console.log(soma(5, 5)); // Saída: 10

// ------------------------------------------
//✅ 2. Função que executa ação mas não retorna
function soma2(a, b) {
    console.log(a + b); // Apenas exibe no console, não retorna valor
}
soma2(5, 2); // Saída: 7

// Exemplo de função que executa ação ao clicar no documento
// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// });

// ------------------------------------------
//✅ 3. Função que retorna um objeto (Factory Function)
function criaPessoa(nome, sobrenome) {
    return{
        nome: nome, 
        sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Samuel', 'Barreto');
const p2 = {
    nome: 'Noah',
    sobrenome: 'Barreto'
};

console.log('Pessoa 01: ', p1,'\nPessoa 02: ', p2);

// ------------------------------------------
//✅ 4. Função retornando outra função (closure)
function falaFrase(comeco) {
// Retorna uma nova função com acesso à variável "comeco"
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá'); // "comeco" é 'Olá'
const resto = fala('mundo!'); // "resto" é 'mundo!'
console.log(resto); // Saída: Olá mundo!

// ------------------------------------------
//✅ 5. Factory de funções: cria funções multiplicadoras
// function duplica(n) {
//     return n * 2;
// }
// function triplica(n) {
//     return n * 3;
// }
// function quadriplica(n) {
//     return n * 4;
// } Ao invés de usar esse tanto de funções eu posso fazer o seguinte;

function criaMultiplicador(multiplicador) {
    // Retorna uma função que multiplica o número por esse multiplicador
    return function (n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2)); // Saída: 4
console.log(triplica(2)); // Saída: 6
console.log(quadriplica(2)); // Saída: 8
// ------------------------------------------

// 🧠 Conceitos importantes usados:
// ✅ Return: retorna valores que podem ser usados em outras partes do código
// ✅ Função factory: retorna um objeto ou outra função personalizada
// ✅ Função de alta ordem: função que recebe ou retorna outra função
// ✅ Closure: função interna que lembra do escopo externo (ex: falaFrase)