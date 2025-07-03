// Parâmetros da função

// ✅ Parâmetros e o objeto arguments
function funcao() {
    // O objeto "arguments" contém todos os argumentos passados, mesmo que não sejam declarados nos parâmetros da função

    let total = 0;

    // Faz a soma de todos os argumentos usando um loop for...of
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total); // Exibe a soma dos argumentos
}

// Chamada da função com 4 valores
funcao(1, 2, 5, 7); // Saída: 15

// 🧠 Explicação dos conceitos:
// function funcao() pode receber argumentos, mesmo que você não declare parâmetros explícitos.
// Dentro dela, o objeto arguments se comporta como um array-like object, ou seja, parece um array (tem índices e length), mas não é um array real.
// Você pode percorrer arguments com for...of para somar ou manipular os dados.

// ⚠️ Observação importante:
// const funcao = () => {
//     console.log(arguments); // ❌ ReferenceError
// }
// funcao(1, 2, 3);
// O código acima lançaria um erro, pois arguments não existe em arrow functions.
// Para fazer algo semelhante em arrow functions, usamos o rest operator:

// ✅ Função com múltiplos parâmetros
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3, 4); // Saída: 1 2 3 4 undefined undefined
// Explicação:
// Você passou 4 argumentos para 6 parâmetros. Os dois últimos (e, f) ficam como undefined.
// Isso é perfeitamente válido em JavaScript.

// 🔄 Comparando maneira antiga vs maneira moderna de valores padrão:
function funcao3(a, b = 2, c = 5) {
    // Maneira antiga:
    // b = b || 2; // Se `b` for falso (false, 0, '', null, undefined...), atribui 2
    console.log(a + b + c);
}
// ❗ Problema da maneira moderna:
// funcao3(2, '', 10); // Saída: "210"
// Explicação:
// Aqui você passou '' (string vazia) como valor para b.
// Como b = '', e não está undefined, o valor padrão 2 não é usado.
// O que acontece: a + b + c = 2 + '' + 10 → coerção para string → "210" (concatenação).

// 💡 Como "pular" um valor e forçar uso do default?
// ✅ Usar undefined explicitamente:
funcao3(2, undefined, 20); // Saída: 17 → 2 + 2 (default) + 10 = 14

// ✅ Função com desestruturação de objeto nos parâmetros
// A função espera receber um objeto, e já desestrutura os valores nome, sobrenome e idade
function objetoDesestruturado({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
// Objeto que será passado para a função
let objeto = {
    nome: 'Samuel',
    sobrenome: 'Bitencourt',
    idade: 31
}
// Passa o objeto como argumento
objetoDesestruturado(objeto);
// Saída: Samuel Bitencourt 31
// 🧠 Vantagens dessa abordagem:
// Mais conciso: você não precisa acessar objeto.nome, objeto.sobrenome, etc.
// Clareza: a função já deixa explícito o que ela espera receber.
// Boa prática: muito usado em funções que lidam com configurações ou props (ex: em React).

// ✅ Função com operador, acumulador e valores múltiplos (rest operator)
const conta = function (operador, acumulador, ...numeros) {
    // O parâmetro "...numeros" irá reunir todos os argumentos restantes em um array
    // OBS: o rest operator deve ser o **último parâmetro** da função

    for (let numero of numeros) {
        // Executa a operação de acordo com o operador fornecido
        if (operador === '+') acumulador += numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador); // Mostra o resultado final
}

conta('+', 1, 20, 30, 40, 50);
// 🧠 O que você aprendeu aqui:
// | Conceito          | Explicação                                                                  |
// | ----------------- | --------------------------------------------------------------------------- |
// | `...numeros`      | Rest operator → agrupa argumentos restantes em um array                     |
// | `for...of`        | Percorre os valores do array `numeros`                                      |
// | Controle com `if` | Executa a operação conforme o operador (`+`, `-`, `*`, `/`)                 |
// | Flexibilidade     | A função aceita qualquer número de valores (não precisa saber a quantidade) |

// 💡 Alternativa mais robusta e legível
const operacao = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        switch (operador) {
            case '+': acumulador += numero; break;
            case '-': acumulador -= numero; break;
            case '*': acumulador *= numero; break;
            case '/': acumulador /= numero; break;
            default:
                console.log('Operador inválido!');
                return;
        }
    }

    console.log(`Resultado: ${acumulador}`);
};
operacao('+', 1, 20, 30, 40, 50);