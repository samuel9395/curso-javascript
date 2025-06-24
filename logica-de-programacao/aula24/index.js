// Estruturas Condicionais

//if else

/*
 * O if pode ser executado sozinho
 * Sempre que utilizar o else, precisa de um if antes
 * O else if pode ser utilizado quantas vezes forem necessárias dentro na condição 
 * Só posso ter um else na condição
 * Podemos usar condições sem o else if, usando apenas o if e o else
*/

const hora = 150;

if (hora >= 0 && hora < 12){
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!');    
} else {
    console.log('Ops! Horário incorreto...');
}
