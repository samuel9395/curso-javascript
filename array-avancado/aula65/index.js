// Filter - filtrando o array
// O método filter SEMPRE retorna um novo array com a mesma quantidade de elementos ou menos.
// Ele não altera o array original.

// Exemplo 1: Retorne os números maiores que 10
// Índice        0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Forma alternativa (caso queira reaproveitar a função em outro lugar do código):
// function callackFilter(valor) { 
//     return valor > 10;
// }
// const numeros_filtrados = numeros.filter(callackFilter);

// Forma prática: função anônima ou arrow function
const numeros_filtrados = numeros.filter((valor) => valor > 10);

console.log(numeros_filtrados); 
// Saída: [50, 80, 11, 15, 22, 27]

// ----------------------------------------------------------------------------------
// Exemplo 2: Trabalhando com objetos
// Temos um array de pessoas com nome e idade
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Mary', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// Filtrar pessoas que têm nome com 5 letras ou mais
const pessoas_nome_grande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoas_nome_grande);

// Filtrar pessoas com mais de 50 anos
const pessoasMaisDeCinquentaAnos = pessoas.filter((maior) => maior.idade > 50);
console.log(pessoasMaisDeCinquentaAnos);

// Filtrar pessoas cujo nome termina com a letra 'a'
// Usamos toLowerCase() para não ter problema com letras maiúsculas/minúsculas
const nomeTerminaEmA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaEmA);
