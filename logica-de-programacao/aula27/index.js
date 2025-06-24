// Operador ternário
// ?:
// (condição) ? 'Valor para verdadeiro' : 'Opção para falso';

const pontuacaoUsuario = 1500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Normal';

// Nessa operação podemos usar o operador ternário para substituir a estrutura condicional(if e else) deixando o código mais simples...

/* Substituído pelo o operador ternário
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}
*/

// Outro exemplo onde podemos substituir a estrutura condicional, usando simplesmente o operador lógico 'OR ||' 
// Nesse caso se o valor do usuário for falso, será setado a cor padrão definida, o que é chamado de fallback
const corUsuario = null;
const corPadrão = corUsuario || 'Preto';

console.log(`Nível do usuário: ${nivelUsuario}\nCor padrão: ${corPadrão}`);
