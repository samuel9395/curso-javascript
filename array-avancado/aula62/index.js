// Revisão do básico em Arrays

// Índices:        0        1        2        3        4          5   
const nomes01 = ['Samuel', 'Noah', 'Lena', 'Suzana', 'Wilson', 'Janice'];
// Arrays podem armazenar strings, objetos, funções e números.

// Outra forma de criar arrays é usando o construtor:
// const nomes02 = new Array('Samuel', 'Noah', 'Lena');

// Alterando diretamente pelo índice
nomes01[2] = 'João';   // Substitui "Lena" por "João"
delete nomes01[2];     // Remove o valor no índice 2 (fica "undefined")

// O array é passado por referência, logo `novo01` aponta para o mesmo array
const novo01 = nomes01;
novo01.pop();          // Remove o último elemento do array original também

// Para evitar alterar o original, usamos o spread operator
const novo02 = [...nomes01];
novo02.pop();          // Remove só do clone, sem mexer no original

console.log(novo02);
console.log(nomes01);

// Métodos para adicionar elementos
nomes01.push('Jesus');       // Adiciona no final
nomes01.unshift('Vovô');     // Adiciona no início
nomes01.unshift('Vovó');     // Adiciona no início
console.log(nomes01);

// slice -> retorna uma cópia parcial do array
const novo = nomes01.slice(0, -3); // Copia até o penúltimo 3 elementos
console.log(novo);

// Removendo elementos
const removidoFinal = nomes01.pop();   // Remove último
const removidoComeco = nomes01.shift(); // Remove primeiro

console.log(nomes01, '\n', removidoFinal, '\n', removidoComeco);
console.log(nomes01.length); // Mostra o tamanho atual do array

// Convertendo string em array
const nome03 = 'Samuel Barreto Bitecourt de Freitas';
const nomeDividido = nome03.split(' '); // Divide a string em partes por espaço
console.log(nomeDividido);

// Convertendo array em string
const nomeJunto = nomeDividido.join(' '); // Junta os elementos de volta
console.log(nomeJunto);
