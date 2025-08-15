// Funções geradoras
// São funções especiais que podem "pausar" a execução com 'yield' e retomar depois.

// Ex: 01 - Gerador simples com valores fixos
function* geradora1() {
    // O 'yield' pausa a execução e retorna o valor.
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value); // Retorna "Valor 1"
console.log(g1.next().value); // Retorna "Valor 2"
console.log(g1.next().value); // Retorna "Valor 3"
console.log('\n');


// Ex: 02 - Gerador infinito (contador)
function* geradora2() {
    let i = 0;

    // Loop infinito -> cada chamada retorna o próximo valor.
    while(true) {
        yield i; // "Pausa" e entrega o valor de i.
        i++;     // Incrementa para a próxima chamada.
    }
}

const g2 = geradora2();
console.log(g2.next().value); // 0
console.log(g2.next().value); // 1
console.log(g2.next().value); // 2
console.log(g2.next().value); // 3
console.log(g2.next().value + '\n'); // 4


// Ex: 03 + 04 - Geradores encadeados
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // Delegando para outro gerador (reaproveita o geradora3)
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor); // Imprime 0,1,2,3,4,5
}
console.log('\n');


// Ex: 05 - Gerador que retorna funções
function* geradora5() {
    yield function() {
        console.log('Vim do yield1');
    };

    // 'return' encerra o gerador e retorna esse valor (não executa mais nada depois).
    return function() {
        console.log('Vim do return');
    };
}

const g5 = geradora5();
const func1 = g5.next().value; // Pega a primeira função (do yield)
const func2 = g5.next().value; // Pega a segunda função (do return)

func1(); // Executa -> "Vim do yield1"
func2(); // Executa -> "Vim do return"
