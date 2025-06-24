// Exercício

// Escrever uma function chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

// 🟢 1. Primeira resposta (condicional com if)
const imagem = {
    largura: 600,
    altura: 400
}

const altura = imagem.altura;
const largura = imagem.largura;

function ePaisagem1(x, y) {
    if (x > y) return true;
    return 'A imagem está no modo retrato';
}

const paisagem = ePaisagem1(largura, altura);
console.log(paisagem);


// ✅ Funciona, e ainda retorna uma mensagem explicativa caso esteja no modo retrato.
// 🧠 Se for um exercício puramente lógico (esperando true ou false), talvez o retorno 'A imagem está no modo retrato' fuja um pouco da proposta.

console.log('------------------------------------');

// 🟡 2. Segunada resposta (Versão com operador ternário)
function ePaisagem2(largura, altura) {
    return largura > altura ? true : false;
}

const paisagem2 = ePaisagem2(200, 400);
console.log(paisagem2);

// 💡 Dica: largura > altura já retorna um booleano por si só, então o ternário aqui é redundante.

console.log('------------------------------------');

// ✅ 3. Resposta do professor (mais limpa)
function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1920, 1080));

// ✔️ Curta, clara e direta ao ponto.
// 🧼 Ideal para funções simples que retornam booleanos.

console.log('------------------------------------');

// 🟣 4. Arrow Function com ternário
const imagemPaisagem = (largura, altura) => largura > altura ? true : false;

// ✅ Versão simplificada
// const imagemPaisagem = (largura, altura) => largura > altura;

console.log(imagemPaisagem(2560, 1080));

console.log('------------------------------------');

// ✅ MELHOR PRÁTICA (final):
// const ePaisagem = (largura, altura) => largura > altura;
// console.log(ePaisagem(1920, 1080));
