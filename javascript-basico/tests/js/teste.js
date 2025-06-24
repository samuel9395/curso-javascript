function dadosForm () {
    const form = document.querySelector('form.form');
    const resultado = document.querySelector('div.resultado');


    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const dadosPessoas = { 
            /* AQui eu poderia ter usado 
                dadosPessoas.push({
                    nome: nome.value,
                    sobrenome: sobrenome.value,
                    peso: peso.value,
                    altura: altura.value
                })
            */
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        console.log(dadosPessoas);
        
        resultado.innerHTML = `<p>Nome: ${dadosPessoas.nome}</p> <p>Sobrenome: ${dadosPessoas.sobrenome}</p><p></p>Peso: ${dadosPessoas.peso}<p>Altura: ${dadosPessoas.altura}</p>`;
    }

    form.addEventListener( 'submit', recebeEventoForm);

}

dadosForm();

/* Outra alternativa
function dadosForm () {
    const form = document.querySelector('form.form');

    form.onsubmit = function (evento) {
        evento.preventDefault();// Previnir o padrão, não envia o formulário
        alert('Formulário Enviado!');
        console.log('Formulário Enviado');
    };
}

dadosForm();
*/
