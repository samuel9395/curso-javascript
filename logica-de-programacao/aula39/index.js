// While e Do While - Estrutura de repetição

// 🔁 while - repete enquanto a condição for verdadeira

let controle = 0;

// Enquanto controle for menor ou igual a 10, o bloco será executado
while (controle <= 10) {
    console.log(controle); // Exibe o valor atual
    controle++;            // Incrementa o valor
}

console.log('-------');

// 🔢 Função para gerar número aleatório

function random(min, max) {
    const r = Math.random() * (max - min) + min; // Gera número aleatório entre min e max
    return Math.floor(r); // Arredonda para baixo
}

// 🎲 while com número aleatório até cair no valor 10

const min = 1;
const max = 50;

let rand = random(min, max); // Número aleatório inicial
console.log(rand !== 10);    // Exibe true/false se for diferente de 10

while (rand !== 10) {
    rand = random(min, max); // Gera novo número
    console.log(rand);       // Exibe o número
}

// 🧠 Resumo: Aqui o while continua gerando números aleatórios até o número 10 aparecer.

console.log('-------');

// ✅ do...while - executa pelo menos uma vez

do {
    rand = random(min, max); // Gera novo número
    console.log(rand);       // Exibe o número
} while (rand !== 10);

// 🧠 Resumo: Ao contrário do while, o do...while executa o bloco primeiro, depois verifica a condição.

/**
 * 📌 Diferença entre while e do...while:
 
    | Estrutura    | Verifica condição antes?  | Garante ao menos uma execução?|
    | ------------ | ------------------------- | ------------------------------|
    | `while`      | ✅ Sim                    | ❌ Não                        |
    | `do...while` | ❌ Não (verifica depois)  | ✅ Sim                        |

*/