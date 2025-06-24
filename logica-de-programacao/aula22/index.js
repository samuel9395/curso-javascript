/**
 * OPERADORES LÓGICOS
 * 
 * && -> And -> E | Todas as expressões precisam ser verdadeiras, pois uma retornar false, o retorno da operação também
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 * 
 */

// Exemplos
/*
const turno = 'noite';
const clima = 'chuva';
const possui = 'guarda chuva';

if (turno === 'dia' && clima === 'limpo'|| turno === 'dia' && possui ==='guarda chuva'){
    console.log("Stuart irá sair para passear...");
}else {
    console.log("Stuart não irá passear hoje...");   
}
*/
const usuario = 'Noah';
const senha = '123456';

const vaiLogar = usuario === "Noah" && senha === "12345";
 
if (vaiLogar === true){ // Aqui fazemos uma validação booleana
    console.log("Login efetuado com sucesso!");
}else {
    console.log("Login não efetuado!");
}

console.log(!true); // Aqui como estou usando o operador lógico de negação "!", o valor passa a ser falso
