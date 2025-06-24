// Tratando e lançando erros (try, catch, finally)

// ✅ EXEMPLO 1 — Simulação de erro com try / catch / finally
try {
    // É executado quando não há erros
    console.log(a); // ⚠️ Vai gerar ReferenceError (a não está definida)
    console.log('Abri um arquivo'); // não será executado por causa do erro acima
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    
    // Poderia haver outro try/catch aqui dentro
} catch (e) {
    // Executado quando há erro no bloco try
    console.log('Tratando o erro');
} finally {
    // Sempre executado, com ou sem erro
    console.log('FINALLY: Eu sempre sou executado.');
}
// 🔎 Explicação:
// try: tenta executar o bloco de código.
// catch: executado se ocorrer um erro.
// finally: executa sempre, com ou sem erro (usado para limpeza, como fechar arquivos ou conexões).
console.log('------------------------------------');

// ✅ EXEMPLO 2 — Função que lança erro se o tipo não for Date
function retornaHora(data) {
    // Verifica se 'data' foi passada e não é uma instância de Date
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date"); // Lança erro se o tipo for incorreto
    }

    // Se nenhum valor for passado, usa a data atual
    if (!data) {
        data = new Date();
    }

    // Retorna a hora formatada no padrão brasileiro (24h)
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

// ✅ Chamando a função com tratamento de erro
try {
    const data = new Date('08-25-1993 18:30:00');
    const hora = retornaHora(11); // ⚠️ Erro: 11 não é uma instância de Date
    console.log(hora); // não será executado
} catch (e) {
    // Erro tratado de forma silenciosa (você pode exibir ou não o erro aqui)
    // console.log(e); // opcional
} finally {
    console.log('Tenha um bom dia!'); // Executa sempre
}


