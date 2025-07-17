// Funções Imediatas (IIFE)
// IIFE -> Immediately Invoked Function Expression
// Uma IIFE é uma função que se auto-executa assim que é definida.

// function qualquerCoisa() { // Essa função toca o escopo global
//     console.log(123456789);
// }

// Aqui definimos a IIFE. Ela é anônima e já é chamada com os argumentos (31, 91, 1.78).
(function (idade, peso, altura) {

    // Criamos uma constante local chamada sobrenome.
    // Essa constante está dentro do escopo da IIFE e não "vaza" para o escopo global.
    const sobrenome = 'Bitencourt';

    // Função interna que recebe um nome e retorna o nome completo.
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    } 

    // Outra função interna que chama criaNome e imprime no console.
    function falaNome() {
        console.log(criaNome('Noah'));
    }

    // Executa a função falaNome.
    falaNome();
    // Imprime os parâmetros recebidos pela IIFE: idade, peso e altura.
    console.log(idade, peso, altura);
    
    // Os argumentos passados na execução imediata da função:
})(31, 91, 1.78);

// Fora da IIFE, criamos uma constante chamada nome.
// Isso demonstra que variáveis dentro da IIFE não afetam o escopo global.
const nome = 'Qualquer nome';
