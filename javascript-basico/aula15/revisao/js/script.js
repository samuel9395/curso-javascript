const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nulo = document.getElementById('nulo');
const cima = document.getElementById('cima');
const baixo = document.getElementById('baixo');
const decimal = document.getElementById('decimal');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = numero ** 0.5;
inteiro.innerHTML = Number.isInteger(numero);
nulo.innerHTML = Number.isNaN(numero);
cima.innerHTML = Math.ceil(numero);
baixo.innerHTML = Math.floor(numero);
decimal.innerHTML = numero.toFixed(2);


/*
    Eu também poderia simplesmente ter manipulado um único elemento html.

----------------------------HTML----------------------------------------------

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Exercícios</title>
    </head>
    <body>
        <section>
            <h1>O seu número é <span id="numero-titulo">0</span></h1>
            <div id="texto">Texto</div>
        </section>

        <script src="js/script.js"></script>
    </body>
    </html>

----------------------------JAVASCRIPT----------------------------------------------
    
    const numero = Number(prompt('Digite um número:'));
    const numeroTitulo = document.getElementById('numero-titulo');
    const texto = document.getElementById('texto');

    numeroTitulo.innerHTML = numero;

    texto.innerHTML = '';
    texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
    texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
    texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
    texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
    texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
    texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
*/