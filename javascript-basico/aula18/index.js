/*
const array = [1, 2, 3];
array.push(4);
array[0] = 'Noah';
// array = 'Alterar'; Não consigo e não posso alterar o valor dessa variável, pois ela é uma constante.
console.log(array);
// Colchete '[]' é um array, chaves '{}' é um objeto

const pessoa01 = {
    nome: 'Samuel', 
    sobrenome: 'Bitencourt',
    idade: 31
};

console.log(pessoa01.nome, pessoa01.sobrenome);


function criaPessoa(nome, sobrenome, idade) { // AQui criamos um parêmentro
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

// Aqui criamos o argumento para esse parâmetro
const pessoa01 = criaPessoa('Samuel', 'Bitencourt', 31);
const pessoa02 = criaPessoa('Lena', 'Bitencourt', 30);
const pessoa03 = criaPessoa('Noah', 'Bitencourt', 1);

console.log('',pessoa01.nome,'\n',pessoa02.nome,'\n',pessoa03.nome);
*/

const pessoa01 = {
    nome: 'Samuel',
    sobrenome: 'Bitencourt',
    idade: 31,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
    idadeAtual() {
        console.log(`A minha idade atual é ${this.idade} anos.`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa01.fala();
pessoa01.idadeAtual();
pessoa01.incrementaIdade();
pessoa01.idadeAtual();
pessoa01.incrementaIdade();
pessoa01.idadeAtual();
pessoa01.incrementaIdade();