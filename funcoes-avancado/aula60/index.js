// Funções recursivas
// Uma função recursiva é aquela que chama a si mesma até atingir uma condição de parada.

function recursiva(max) {

    console.log(max); // Exibe o valor atual de 'max' no console.

    // Condição de parada:
    // Se 'max' for maior ou igual a 10, a função para de se chamar (retorna e finaliza).
    if (max >= 10) return;

    // Incrementa o valor de 'max' em 1.
    max++;

    // Chama novamente a função passando o novo valor de 'max'.
    recursiva(max);
}

// Chamada inicial da função, começando com 'max' igual a 0.
recursiva(0);

// 💡 Resumo do funcionamento:
// A função começa com max = 0.
// Ela imprime esse valor e, enquanto max for menor que 10, incrementa max e chama a si mesma.
// Quando max chega a 10, ela para, evitando chamadas infinitas.