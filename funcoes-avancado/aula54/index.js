// Funções de Callback

// Função que gera um número aleatório entre `min` e `max` milissegundos
// para simular o tempo de espera de uma operação assíncrona
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// console.log(rand());
// Cada função abaixo simula uma operação assíncrona
// Elas recebem uma função de callback como parâmetro e a executam após o tempo aleatório
function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback(); // Executa a próxima função na cadeia
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1();
// f2();
// f3();

// console.log('Olá mundo!');

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo!');
//         })
//     })
// })

// Execução das funções em sequência usando callbacks
// Inicia a cadeia de execução passando f2 como callback de f1, e assim por diante
f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('Olá mundo!');
}


