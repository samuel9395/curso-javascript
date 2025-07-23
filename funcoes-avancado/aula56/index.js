// Funções fábrica (Factory Functions)
// Uma função fábrica retorna objetos personalizados sem usar classes.

function criaPessoa(nome, sobrenome, a, p) {
    return {
        // Propriedades básicas
        nome,
        sobrenome,

        // Getter para nome completo
        // Permite acessar p1.nomeCompleto como se fosse uma propriedade
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter para nome completo
        // Permite alterar o nome e sobrenome através de uma única string
        set nomeCompleto(valor) {
            valor = valor.split(' ');          // Divide a string em partes
            this.nome = valor.shift();         // Pega o primeiro nome
            this.sobrenome = valor.join(' ');  // Junta o restante como sobrenome
        },

        // Método fala (pode receber um argumento ou usar padrão)
        // Exemplo de método em objetos criados por factory
        fala(assunto = 'falando sobre nada...') {
            return `${this.nome} está ${assunto}.`;
        },

        // Altura e peso são passados por parâmetro
        altura: a,
        peso: p,

        // Getter para IMC (Índice de Massa Corporal)
        // Calculado automaticamente com base na altura e peso
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // Retorna com 2 casas decimais
        }
    };
}

// Criação de uma nova pessoa usando a função fábrica
const p1 = criaPessoa('Noah', 'Bitencourt', 1.10, 20);

// Usando o setter para alterar nome completo
p1.nomeCompleto = 'Samuel Barreto de Freitas';

// Utilizando o getter para mostrar nome completo
console.log(p1.nomeCompleto);     // "Samuel Barreto de Freitas"
console.log(p1.nome);             // "Samuel"
console.log(p1.sobrenome);        // "Barreto de Freitas"

// Usando método fala e getter imc
console.log(p1.fala());           // "Samuel está falando sobre nada..."
console.log(p1.imc);              // Exibe o IMC calculado
