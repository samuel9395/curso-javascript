let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = parseFloat(num1.toFixed(2)); // Sem esse método o resultado estaria incorreto, retornando 'false' e '0.9999999999999999'
/*
    Na prática, por trás dos panos, o JavaScript não representa perfeitamente os decimais em binário. 
    Então quando você faz 0.7 + 0.1 + 0.1 + 0.1, o resultado é 0.9999999999999999, não exatamente 1.
    Por isso o uso de: num1 = parseFloat(num1.toFixed(2));
*/
console.log(num1);
console.log(Number.isInteger(num1)); // retorno '1' e 'true'

/*
    let num1 = 0.7;
    let num2 = 0.1;
    console.log(num1 + num2); // Retorno: 0.7999999999999999
    A soma não é precisa, mesmo usando o toFixed(2)
*/

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(typeof num1);
// console.log(num1.toString(2)); // representação binária do valor
// console.log(num1.toFixed(2)); // Desse jeito usamos só duas casas decimais
// console.log(Number.isInteger(num1)); // Desse jeito consigo ver se o número é inteiro(true/false)

/*
    let temp = num1 * '5'; // Por estar multiplacando um número pro uma string, o retorno 'console.log(temp)' da operação será 'NaN'
    console.log(Number.isNaN(temp)); // Aqui estou verificando se a variável 'temp' é '= NaN' com o retorno da operação 'true' 
    Ao alterar a variável temp = num1 * '5' funcionaria pois a String seria convertida em número. Porém não seria uma boa prática de programção, 
    pois estaria fazendo uma operação com número e string 
*/


