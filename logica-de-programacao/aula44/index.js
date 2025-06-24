// Tratando e lançando erros (try, catch, throw)

// 📌 Exemplo 1: Capturando erro com try...catch
// try {
//     console.log(naoExiste); // Vai gerar um ReferenceError
// } catch (error) {
//     console.log('naoExiste não está definida'); // Mensagem personalizada
//     console.log(error); // Detalhes técnicos do erro
// }

// 🧠 Explicação:
// try: tenta executar o código.
// catch: executa caso aconteça algum erro dentro do bloco try.
// Isso evita que o erro pare a execução do restante do código.

// 📌 Exemplo 2: Validando dados e lançando erro com throw
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}
// 🧠 Explicação:
// A função verifica se os parâmetros são do tipo number.
// Se não forem, lança um erro com throw new Error(...).
// Esse erro pode (e deve) ser tratado por quem chama a função.

// ✅ Uso com try...catch
try {
    console.log(soma(5, 5));      // ✅ Ok: 10
    console.log(soma('5', 5));    // ❌ Vai lançar um erro
} catch (error) {
    // console.log(error); // (técnico)
    console.log('Alguma coisa mais amigável para o usuário.');
}
// 🧠 Explicação:
// A primeira chamada é válida: 5 + 5 = 10.
// A segunda ('5' + 5) gera erro e é capturada no catch.
// Em vez de mostrar uma mensagem técnica para o usuário, mostramos uma mensagem amigável.