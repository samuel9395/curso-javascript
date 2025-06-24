// FOR...IN - Estrutura de repetição usada para percorrer objetos ou arrays
// O "for...in" lê os **índices** de arrays e as **chaves** de objetos

// Exemplo com array
const frutas = ['Pera', 'Maçã', 'Uva'];

// Percorrendo o array com for tradicional (mais usado quando precisa de controle total do índice)
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// Percorrendo o array com for...in (mais simples, apenas lê os índices automaticamente)
for (let indice in frutas) {
    console.log(frutas[indice]); // Mostra o valor em cada posição do array
}

// Exemplo com objeto
const pessoa = {
    nome: 'Noah',
    sobrenome: 'Bitencourt',
    idade: 1.3
};

// Formas de acessar propriedades de um objeto:
// console.log(pessoa.nome);  // Forma direta
// console.log(pessoa['nome']);  // Forma com colchetes

// const chave = 'nome';
// console.log(pessoa[chave]);  // Forma dinâmica, útil quando a chave vem de uma variável

// Usando for...in para percorrer todas as chaves do objeto
for (let chave in pessoa) {
    // Mostra o nome da chave (ex: 'nome') e o valor correspondente (ex: 'Noah')
    console.log(chave, pessoa[chave]);
}

// ### 🧠 Explicação simples:

// * `for...in ` serve para **percorrer chaves ou índices**.
// * Em arrays, ele percorre os **índices** (`0`, `1`, `2`, ...).
// * Em objetos, ele percorre os **nomes das propriedades** (`nome`, `sobrenome`, `idade`, ...).