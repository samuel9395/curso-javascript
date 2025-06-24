/** Curto-Circuito
 * 
 * 
 * Ao usar o operador lógico '&&' com expressões -> false && true -> a mesma irá retornar 'false', então todas as expressões devem ser verdadeiras...
 * || -> Nesse caso independente da expressão, o retorno será verdadeiro | true || false -> true
 * 
 * Em javascript 'false' é o valor literalmente falso
 * Tipo: 0, "", '', null, undefined, NaN | QUalquer coisa diferente disso em javascript, será avaliado como true
 */

// EX;
/*
console.log('Noah' && 0 && 'Lena'); // Nesse exemplo o retorno é '0', pois ele é considerado um valor falso em js 
console.log('Noah' && true && 'Lena'); // Nesse exemplo o retorno é 'Lena', pois todas as expressões são verdadeiras retornando então o ultimo valor verdadeiro da expressão

const corUsuario = null;
const corPadrao = corUsuario || 'red';
console.log(corPadrao); // retorno 'red' pois é o primeiro valor verdadeiro
*/

const a = 0; 
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
// Nesse caso o valor retornado será o da variável c, pois a string tem um valor e não está vazia, sendo então uma expressão verdadeira(true)... Se caso todos os valores fossem falsos, o retorno seria da ultima expressão falsa que seria 'NaN'.