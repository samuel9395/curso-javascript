// As várias maneiras de declarar funções em JavaScript

// Declaração de função (function hoisting)
function falaOi() {
    console.log('Oi!');
}
falaOi();

// 💡 JavaScript tem funções como "First-class objects"
// Ou seja, funções podem ser atribuídas a variáveis, passadas como argumento, retornadas de outras funções etc.

// 📦 Function Expression (função anônima atribuída a uma variável)
const souUmDado = function () { // Aqui a minha variável passou a ser uma função | Essa função está anônima, pois está sem nome. Só que no caso, a variável acaba assumindo o lugar da função...
    console.log('Sou um dado.');
};

// souUmDado(); // Esta função foi comentada, pois ela está sendo chamada na próxima função.

// 🧠 Passando função como parâmetro
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao(); // Executa a função recebida como parâmetro
}
executaFuncao(souUmDado); // Passa a function expression acima

// Arrow function = seria uma Function Expression mais curta
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow();

// Todas essas funções são tratadas como objeto de primeira classe, todas são dados...

// 🧱 Função dentro de um objeto (método)
const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
    // Forma reduzida (sintaxe ES6+):
    // falar() {
    //     console.log('Estou falando...');
    // }
};
obj.falar();

// 🔁 Recapitulando:
// | Tipo                   | Nome                     | Pode ser invocada antes?  | Sintaxe curta?  |
// | ---------------------- | ------------------------ | ------------------------  | --------------  |
// | Function Declaration   | `function nome() {}`     | ✅                        | ❌              |
// | Function Expression    | `const x = function(){}` | ❌                        | ❌              |
// | Arrow Function         | `const x = () => {}`     | ❌                        | ✅              |
// | Método em objeto (ES6) | `falar() {}`             | ❌                        | ✅              |


