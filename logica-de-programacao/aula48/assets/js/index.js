// 💻 JavaScript: lógica da aplicação
// Seleciona os elementos HTML
const inputTarefa = document.querySelector('.inputTarefa');
const btn = document.querySelector('.btn');
const tarefas = document.querySelector('.tarefas');// ul

// 📌 Função que cria um elemento <li>
function criaLi() {
    const li = document.createElement('li');// Cria um novo elemento <li>
    return li;
}

// ⌨️ Evento: ao pressionar ENTER no input
inputTarefa.addEventListener('keypress', function (e) {
    // console.log(e);
    if (e.keyCode === 13) { // Se a tecla pressionada for ENTER
        // console.log('ENTER PRESSIONADO');
        if (!inputTarefa.value) return; // Impede que adicione tarefa vazia
        criaTarefa(inputTarefa.value);  // Cria a tarefa com o texto digitado
    }
});

// 🧼 Função que limpa o campo de input
function limpaInput() {
    inputTarefa.value = ''; // Limpa o texto digitado
    inputTarefa.focus(); // Mantém o foco no input
}

//🗑️ Cria o botão "Apagar" dentro do <li>
function criaBotaoApagar(li) {
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('');
    botaoApagar.setAttribute('class', 'apagar'); // Adiciona classe para identificar
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar); // Insere o botão dentro do <li>
}

// ✅ Cria a tarefa e adiciona na lista
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput; // Define o texto da tarefa
    tarefas.appendChild(li); // Adiciona o <li> na <ul>
    limpaInput(); // Limpa o input
    criaBotaoApagar(li); // Adiciona o botão "Apagar"
    salvarTarefas(); // Salva a tarefa no localStorage
}

// 🖱️ Evento de clique no botão "Adicionar tarefa"
btn.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    // console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);  // Cria a tarefa com o texto digitado
})

// 🖱️ Evento delegado para remover tarefa ao clicar em "Apagar"
document.addEventListener('click', function (e) {
    const element = e.target;
    // console.log(element);

    if (element.classList.contains('apagar')) {
        // console.log('Apagar clicado');
        // console.log(element.parentElement);
        element.parentElement.remove(); // Remove o <li> pai do botão
        salvarTarefas(); // Atualiza o localStorage
    }
})

// 💾 Salva as tarefas no localStorage
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    // console.log(liTarefas);
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');  // Remove o texto do botão
        listaDeTarefas.push(tarefaTexto);
        // console.log(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte array para JSON
    localStorage.setItem('tarefas', tarefasJSON); // Salva no localStorage
    // console.log(tarefasJSON);
}

// 📂 Carrega tarefas salvas ao abrir a página
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // Busca no localStorage
    const listaDeTarefas = JSON.parse(tarefas); // Converte de volta para array
    // console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa); // Recria cada tarefa salva
    }
}

adicionaTarefasSalvas(); // Executa ao carregar o site