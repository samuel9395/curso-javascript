/*
*TIPOS DE DADOS*{
    primitivos(imutáveis){
        string, number, boolean, undefined, null(bigint, symbol)

        Exemmplo;

        let nome = 'Lena';
        nome[0] = 'S';
        console.log(nome[0], nome); Retorno = L Lena
        
        // Neste exemplo vemos claramente que o valor da string é imutável
    } 

    Referência (mutável){
        array, object, function

        Exemplo;

        let a = [1, 2, 3];
        let b = a;
        console.log(a, b); //Retorno = [ 1, 2, 3 ] [ 1, 2, 3 ]

        a.push(4); // Adicionando um valor a variável 'a'
        console.log(a, b); //Retorno = [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

        b.pop(); // retirando o ultimo valor
        console.log(a, b);

        // Mesmo mexendo somente na variável 'a', 'b' também é alterado pois os dois apontam para o mesmo valor na memória
    }
}
*/