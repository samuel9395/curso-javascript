/**
 * Operadores de comparação
 * 
 * > maior quê
 * >= maior que ou igual a
 * < menor quê
 * <= menor que ou igual a
 * == igualdade (valor) **NÃO RECOMENDADO** 
 * === igualdade estrita (valor e tipo)
 * != diferente (valor) **NÃO RECOMENDADO**
 * !== diferente estrito (valor e tipo)
 */

// Exemplos

console.log(10 > 5); //true
console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 <= 5); //false
console.log(10 == 5); //false
console.log(10 === 5); //false
console.log(10 != 5); //true
console.log(10 !== 5); //true

const num1 = 10;
const num2 = '10';
const comparacao = num1 != num2;

if (comparacao === false){
    console.log(`O retorno da operação é "falso", pois os valores são iguais...`);
}else {
    console.log(`O retorno da operação é "verdadeiro", pois os valores são diferentes...`);
}

