// Método splice
// Índices negativos: contam de trás para frente
//                -5       -4      -3      -2        -1
// Índices normais:       
//                0        1       2       3         4
const nomes = ['Maria', 'José', 'João', 'Júlia', 'Gabriel'];

/*
  Sintaxe do splice:
  array.splice(índiceInicial, quantosRemover, item1, item2, ...)

  - índiceInicial → posição onde vai começar a mexer no array
  - quantosRemover → quantidade de elementos que serão removidos
  - item1, item2... → elementos que serão adicionados no array
*/

// Exemplo: remover a partir do índice -3 até o final
// const removidos = nomes.splice(-3, Number.MAX_VALUE);

// Exemplo: inserir 'Samuel' na posição 3, sem remover nada
// const removidos = nomes.splice(3, 0, 'Samuel');

// Simular o pop (remove o último elemento)
// const removidos = nomes.splice(-1, 1);

// Simular o shift (remove o primeiro elemento)
// const removidos = nomes.splice(0, 1);

// Simular o push (adicionar elemento no final)
// nomes.splice(nomes.length, 0, 'Samuel');

// Simular o unshift (adicionar elementos no início)
nomes.splice(0, 0, 'Margarida', 'Flor');

console.log(nomes);
