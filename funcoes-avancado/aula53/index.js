// Closures

// Função externa
function retornaFuncao() {
    const nome = 'Noah'; // Variável do escopo da função retornaFuncao

    // Retorna uma função interna (anônima)
    return function () {
        return nome; // A função interna "lembra" do escopo onde foi criada
    };
}

// A constante 'funcao' agora contém a função retornada por retornaFuncao
const funcao = retornaFuncao();

// Inspecionando a função com console.dir para ver seu [[Scopes]]
console.dir(funcao); // Mostra a estrutura interna, incluindo o fechamento com a variável 'nome'

// 🧠 Explicação
// Este é um exemplo clássico de closure. Mesmo após a função retornaFuncao ter sido executada e encerrada, a função retornada mantém acesso às variáveis do seu escopo léxico (neste caso, a variável nome).
// Isso acontece porque o JavaScript mantém o fechamento do escopo — ou seja, as variáveis ainda são acessíveis enquanto a função retornada existir.

