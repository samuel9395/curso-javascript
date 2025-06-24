// Seleciona a div que contém os parágrafos
const divParagrafos = document.querySelector('.paragrafos');

// Seleciona todos os elementos <p> dentro da div
const paragrafos = divParagrafos.querySelectorAll('p');

// Pega os estilos computados (aplicados de fato) do <body>
const estilosBody = getComputedStyle(document.body);

// Captura a cor de fundo do body
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody); // Exibe a cor de fundo no console

// Loop que percorre todos os <p> usando for...of
for (let p of paragrafos) {
    // Define o background dos parágrafos como igual ao do body
    p.style.backgroundColor = backgroundColorBody;

    // Muda a cor do texto para branco para ter contraste
    p.style.color = 'white';
}


/**
    🧠 O que o JS está fazendo:
    * Pegando a cor de fundo do body.
    * Aplicando essa cor como fundo dos parágrafos (<p>).
    * Mudando a cor do texto para branco ('white'), criando contraste.

    📝 Resultado visual:
    Os parágrafos, que estavam com fundo branco por padrão, passam a ter o mesmo fundo do body (azul escuro), e o texto fica branco, criando um efeito inverso ao section branco com texto colorido.

*/