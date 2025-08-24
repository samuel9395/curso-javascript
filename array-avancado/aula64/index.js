// Concatenando Arrays

// Criamos o primeiro array com três números
const a1 = [1, 2, 3];

// Criamos o segundo array com outros três números
const a2 = [4, 5, 6];

// Forma clássica de concatenar arrays em JavaScript:
// const a3 = a1.concat(a2, [7, 8, 9, 'Samuel']);

// Forma moderna usando spread operator (...):
// Aqui, estamos criando um novo array (a3) que contém:
// -> todos os elementos de a1
// -> o valor 'Samuel'
// -> todos os elementos de a2
// -> todos os elementos do array [7, 8, 9]
const a3 = [...a1, 'Samuel', ...a2, ...[7, 8, 9]];

console.log(a3);
