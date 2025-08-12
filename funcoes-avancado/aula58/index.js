// Funções construtoras (constructor functions) ->
// Função fábrica -> objetos
// Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    // Atributos privados
    const ID = 123456;
    const metodoInterno = function () {
        // Apenas disponível dentro da função
    };

    // Atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Método público
    this.metodo = function () {
        console.log(this.nome + ': Sou um método');
    };
}


const pessoa1 = new Pessoa('Samuel', 'Barreto');
const pessoa2 = new Pessoa('Noah', 'Bitencourt');

console.log(pessoa1);
console.log(pessoa2.nome);
pessoa2.metodo();

// 📌 Diferença para função fábrica
// Função fábrica
// Retorna um objeto manualmente:

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        metodo() {
            console.log(`${this.nome}: Sou um método`);
        }
    };
}
const pessoa = criarPessoa('Maria', 'Silva');

// Função construtora
// Usa new para criar o objeto automaticamente e configurar o this.