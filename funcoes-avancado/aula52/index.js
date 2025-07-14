// Escopo léxico
// 🧠 O que é Escopo Léxico?
// Escopo léxico é o conceito de que uma função "lembra" o local onde ela foi definida, e não de onde ela foi executada. 
// Isso significa que ela usa as variáveis do local onde foi criada, não do local onde foi chamada.

// Variável global
const nome = 'NOAH';

function falaNome() {
    // Aqui há uma variável com o mesmo nome, mas no escopo da função
    const nome = 'Paciência';
    console.log(nome); // Vai imprimir "Paciência"
}

function usaFalaNome() {
    // Chama a função falaNome
    falaNome(); // Apesar de estar sendo chamada aqui, falaNome usa o seu próprio escopo
}

usaFalaNome(); // Saída: "Paciência"

// 🔎 Explicação:
// A função falaNome foi definida com sua própria variável nome (const nome = 'Paciência').
// Mesmo sendo chamada de dentro da função usaFalaNome, ela não usa a variável nome de fora, mas sim a que foi declarada dentro dela mesma.
// Isso mostra o escopo léxico: a função usa o contexto onde foi criada, não onde foi chamada.
