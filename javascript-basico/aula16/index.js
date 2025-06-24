//                  0       1       2      
const alunos = ['Samuel', 'Noah', 'Lena'];
console.log(alunos[1]); // Acessando o índice 1 = Noah

alunos[0] = 'Papai'; // Elemento alterado
console.log(alunos); //  ['Papai', 'Noah', 'Lena']
console.log(alunos.length); // Tamanho do Array

alunos.push('Deus'); // Método para adicionar mais um elemento
console.log(alunos);

alunos.unshift('Jesus'); // Adicionando um elemento no primeiro índice
console.log(alunos);

alunos.pop(); // Removendo o elemento do ultimo índice
console.log(alunos);

delete alunos[0]; // Removendo o elemento e mantendo apenas o índice
console.log(alunos); // [ <1 empty item>, 'Papai', 'Noah', 'Lena' ]

console.log(typeof alunos); // Array no JavaScript é um objeto, por isso não retorna um array