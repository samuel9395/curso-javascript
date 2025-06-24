// Dentro da estrutura condicional, o código é checado até encontrar a primeira expressão verdadeira. Caso contrário, se todas as condições forem falsas, será executada a ultima expressão... 

const numero = 3;

if (numero >= 0 && numero <= 5){
    console.log("O número está entre 0 e 5.");
}
 else if (1 === 1){
    console.log('LITERAL');
 }
 else if (numero > 5 && numero <= 10){
    console.log("O número está entre 6 e 10.");
}
 else {
    console.log('O número não está entre 0 e 10...');
}

console.log('...Aqui vai o resto do código.');
