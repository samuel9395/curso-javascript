// break e Continue

// 🔄 break e continue com while

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

while (i < numeros.length) {
    let num = numeros[i]; // Pega o número atual do array com base no índice i

    if (num === 2) {
        console.log('Pulei o número 2'); // Mensagem personalizada
        i++; // Incrementa antes de continuar, para não travar no 2
        continue; // Pula para a próxima iteração (não executa o console.log abaixo)
    }

    if (num === 7) {
        console.log('Encontrei o número 7, saindo...');
        i++; // Incrementa antes do break (boa prática para evitar bugs futuros)
        break; // Sai completamente do laço
    }

    i++; // Incrementa normalmente
    console.log(num); // Exibe o número atual, se não foi pulado nem interrompido
}

/**
    🧠 Explicando break e continue
        
    | Palavra-chave | O que faz                                            |
    | ------------- | ---------------------------------------------------- |
    | `continue`    | Interrompe **a iteração atual** e vai para a próxima |
    | `break`       | Interrompe completamente o **laço inteiro**          |
 */

// 🔁 Se usar com for...of, funcionaria da mesma forma:

for (let num of numeros) {
    if (num === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    if (num === 7) {
        console.log('Encontrei o número 7, saindo...');
        break;
    }

    console.log(num);
}
