// Resultado do professor

const form = document.querySelector('.modelForm');

form.addEventListener('submit', function (e) { // e de evento ou event
    e.preventDefault();
    const inputPeso = e.target.querySelector('.input-peso');
    const inputAltura = e.target.querySelector('.input-altura');
     
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc) ;

    const msg = `IMC: ${imc}| Resultado: ${nivelImc}`;

    setResultado(msg, true);

    console.log(imc.toFixed(2), nivelImc);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau° 1', 'Obesidade grau° 2', 'Obesidade grau° 3'];
    // Array para obter os valores
    // AQui usamos somente o if pois ao executar uma condição, não executaremos as próximas.
    // Também usamos a estrutura condicional sem as chaves{}, pois o if está muito curto. "Porém não é uma prática recomendada..."
    
    if (imc >= 39.9) return nivel[5]; // Checagem de trás para frente
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarParagrafo() {
    const p = document.createElement('p');
    return p;    
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado-imc');
    resultado.innerHTML = '';
    
    const p = criarParagrafo();
    
    if (isValid) {
        p.classList.add('paragrafo');  
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}
