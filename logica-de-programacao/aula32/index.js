// Atribuição via desestruturação(Arrays)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Valores indexados, partindo do 0 1 2 3...

// const [num1, num2, ...resto] = numeros; // '... rest' = pega o resto de alguma coisa | '... spread' = usado para distribuir alguma coisa

// console.log(num1, num2);
// console.log(resto);

// INDICES
//                   0         1         2   
//                0  1  2   0  1  2   0  1  2  
const numeros = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(numeros[1][2]);

const [lista1, lista2, lista3] = numeros;
console.log(lista3);

const [, [, , seis]] = numeros;
console.log(seis);


