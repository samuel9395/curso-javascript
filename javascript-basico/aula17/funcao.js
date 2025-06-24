/*
function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Samuel');
console.log(variavel);


function soma(x, y) {
    const resultado = x + y;
    return resultado; 
}

console.log(soma(5, 5));
console.log(soma(7, 5));
console.log(soma(9, 5));
*/
/*
function soma(x, y) { // Aqui eu poderia já atribuir alguma valor para 'x' e 'y'
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2, 2); // Nesse caso eu consigo criar outra variável chamada 'resultado', porque não consigo acessar o que está dentro da função | Eu poderia enviar ou o valor de 'x' ou 'y'
console.log(resultado);


const raiz = function (n) {
    return n ** 0.5;
};// Nesse caso preciso do ';'

console.log(raiz(9)); // Aqui eu tenho que passar um valor pára a variável
*/

const raiz = (n) => { // AQui é uma 'Arrow function', funciona do mesmo jeito que a anterior 
    return n ** 0.5;
};

console.log(raiz(9));

/*
    const raiz = (n) => n ** 0.5; Mesma coisa só que simplificada
    console.log(raiz(9));
*/ 