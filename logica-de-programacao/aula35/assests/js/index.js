// EXERCÍCIO COM LAÇO DE REPETIÇÃO FOR
// Este código cria elementos HTML dinamicamente e os adiciona na tela.

// Lista de objetos, onde cada objeto define uma tag HTML e o texto que ela deve exibir
const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
];

// Seleciona no HTML o local onde os elementos serão adicionados (classe "container")
const container = document.querySelector('.container');

// Cria uma <div> que vai servir de "caixa" para guardar todos os elementos acima
const div = document.createElement('div');

// Laço de repetição que percorre cada item da lista "elementos"
for (let index = 0; index < elementos.length; index++) {
    // Desestrutura o objeto, pegando a tag (ex: 'p') e o texto (ex: 'Frase 1')
    let { tag, texto } = elementos[index];

    // Cria o elemento HTML de acordo com a tag especificada (ex: <p>, <div>, etc.)
    let elementoTag = document.createElement(tag);

    // Define o texto que aparecerá dentro do elemento
    // Usamos "innerText" porque o conteúdo é apenas texto simples, sem HTML
    elementoTag.innerText = texto;

    // Adiciona o novo elemento (ex: <p>Frase 1</p>) dentro da div criada anteriormente
    div.appendChild(elementoTag);
}

// Depois de todos os elementos serem adicionados à div, a div inteira é colocada dentro do container principal da página
container.appendChild(div);
