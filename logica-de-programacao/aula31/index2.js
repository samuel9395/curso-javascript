var sobrenome = 'Freitas';

function falaOi() {
    console.log(sobrenome);   
}

falaOi();

/**

### ✅ Explicação:

Nesse caso, a função `falaOi()` **acessa a variável `sobrenome` que está fora dela**, ou seja, no escopo **global**.

Isso é possível porque:

* O JavaScript faz **busca por escopo** (também chamada de *lexical scope* ou escopo léxico).
* A função `falaOi()` está definida **no mesmo escopo onde a variável `sobrenome` foi declarada**, então ela **enxerga** essa variável.

### 🧠 Escopo léxico:

A função "lembra" do lugar onde foi criada, e por isso consegue acessar variáveis daquele ambiente, mesmo que você execute a função em outro contexto.

---

### 🔁 Se você tivesse feito assim:

```javascript
function falaOi() {
    var sobrenome = 'Silva';
    console.log(sobrenome);   
}

falaOi(); // Silva
console.log(sobrenome); // Erro! 'sobrenome' is not defined
```

Nesse caso, a variável `sobrenome` está **dentro da função**, com `var`, então ela só existe lá. O `console.log` fora da função dá erro.

 */

//--------------------------------------------------------------------------------------------------------------------------------------------

/**

```javascript
const verdadeira = true;
```

---

### 🧠 Código completo:

```javascript
const verdadeira = true;

function falaOi () {
    var sobrenome = 'Miranda';

    if (verdadeira) {
        let nome = 'Luiz';
        console.log(sobrenome); // 🟢 OK - "Miranda"
    }

    console.log(nome); // 🔴 ERRO - "nome is not defined"
}

falaOi();
```

---

### ✅ O que funciona:

* `console.log(sobrenome);` funciona perfeitamente dentro do `if`, pois `sobrenome` é declarada com `var` **no escopo da função**, e o `if` está dentro desse mesmo escopo.
* A função `falaOi()` "enxerga" `sobrenome`.

---

### ❌ O que dá erro:

* `console.log(nome);` **fora do bloco do `if`** causa erro:

  * A variável `nome` foi declarada com `let`, que tem **escopo de bloco `{}`**, ou seja, só existe dentro do `if`.
  * Tentar acessá-la **fora do `if`** resulta em:

    ```
    ReferenceError: nome is not defined
    ```

---

### 🧪 Para corrigir (caso você queira acessar `nome` fora do `if`):

#### Usando `var` (mas cuidado com escopo solto):

```javascript
if (verdadeira) {
    var nome = 'Luiz'; // agora tem escopo de função
}
console.log(nome); // Luiz
```

#### Melhor forma (declarar fora e atribuir dentro):

```javascript
let nome;

if (verdadeira) {
    nome = 'Luiz';
}

console.log(nome); // Luiz
```

---
 */