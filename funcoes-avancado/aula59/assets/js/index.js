function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const elemento = event.target;
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if (elemento.classList.contains('btn-clear')) this.clear();
            if (elemento.classList.contains('btn-del')) this.del();
            if (elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = elemento => this.display.value += elemento.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            
        } catch (e) {
            alert('Conta inválida!')
        }
    }
    


    this.inicia = () => this.capturaCliques();

}

const calculadora = new Calculadora();
calculadora.inicia();