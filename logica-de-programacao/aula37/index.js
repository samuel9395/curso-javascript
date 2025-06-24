// For of - Estrutura de repetição

const nome = ['Noah', 'Samuel', 'Lena'];

// 🔁 FOR clássico - mais controle, útil quando precisa do índice diretamente
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); // Acessa cada elemento pelo índice
}

console.log('------');

// 🔁 FOR...IN - itera sobre os índices (não recomendado para arrays)
for (let i in nome) {
    console.log(nome[i]); // 'i' aqui é o índice (0, 1, 2)
    // Não é ideal para arrays pois também pode acessar propriedades extras se o array for modificado
}

console.log('------');

// 🔁 FOR...OF - itera diretamente sobre os valores
for (let valor of nome) {
    console.log(valor); // 'valor' é o conteúdo (Noah, Samuel, Lena)
    // Mais seguro e claro do que o for...in para arrays
}

console.log('------');

// 🔁 forEach - método funcional moderno
// Executa uma função para cada elemento do array
nome.forEach(function(el) {
    console.log(el); // 'el' é o elemento atual do array
});

console.log('------');

// 🔁 forEach com todos os parâmetros disponíveis
// valor: elemento atual
// i: índice do elemento
// array: o array completo
nome.forEach(function(valor, i, array) {
    console.log(valor, i, array); 
    // Exemplo:
    // Noah 0 ['Noah', 'Samuel', 'Lena']
    // Samuel 1 ['Noah', 'Samuel', 'Lena']
    // Lena 2 ['Noah', 'Samuel', 'Lena']
});

/**
| Tipo de loop | Ideal para      | Acessa o quê?        | Permite break/continue?        |
| ------------ | --------------- | -------------------- | ------------------------------ |
| `for`        | Controle total  | Índice               | ✅ Sim                          |
| `for...in`   | Objetos         | Chave/índice         | ✅ Sim (mas cuidado com arrays) |
| `for...of`   | Arrays, Strings | Valor                | ✅ Sim                          |
| `forEach`    | Arrays          | Valor, índice, array | ❌ Não                          |

 */