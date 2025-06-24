const numero = Number(prompt('DIgite um número:'));// Nesse caso como é uma const, inserimos o método NUmber dentro da variável
// numero = Number(numero); Esse caso é para uma variável tipo let
const numeroP =  document.getElementById('numero-p');
const texto = document.getElementById('texto');

numeroP.innerHTML = numero;
texto.innerHTML = `<p>Seu número +2 é: ${numero + 2}</p>`;