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
