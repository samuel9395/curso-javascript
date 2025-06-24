function imc() {
    const modelForm = document.querySelector('form.modelForm');
    const resultadoImc = document.querySelector('#resultado-imc');


    function calcularImc(event) {
        event.preventDefault();

        const peso = document.querySelector('.input-peso').value;
        const altura = document.querySelector('.input-altura').value;
        const alturaTotal = altura * altura;

        let imc = peso / alturaTotal;

        console.log(`Peso: ${peso}\nAltura: ${altura}\nIMC: ${imc.toFixed(2)}`);
        
        if (altura != 0 && peso != 0 ){
            if (imc < 18.5) {
                resultadoImc.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`;
            } else if (imc >= 18.5 && imc <= 24.99) {
                resultadoImc.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Considerado peso normal)</p>`;
            } else if (imc >= 25 && imc <= 29.99) {
                resultadoImc.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Considerado sobrepeso)</p>`;
            } else if (imc >= 30 && imc <= 34.99) {
                resultadoImc.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Considerado obesidade grau° 1)</p>`;
            } else if (imc >= 35 && imc <= 39.99) {
                resultadoImc.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Considerado obesidade grau° 2)</p>`;
            } else if (imc >= 40) {
                resultadoImc.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Considerado obesidade grau° 3)</p>`;
            } else {
                alert('Por gentileza, insira os dados corretamente.');
                resultadoImc.innerHTML = `<p>Ops! Insira os seus dados...</p>`;
                console.log('Ops! Insira os seus dados...');
            }
        } else {
                alert('Por gentileza, insira os dados corretamente.');
                resultadoImc.innerHTML = `<p>Ops! Insira os seus dados...</p>`;
                console.log('Ops! Insira os seus dados...');
            }
    }

    modelForm.addEventListener('submit', calcularImc);
}

imc();
