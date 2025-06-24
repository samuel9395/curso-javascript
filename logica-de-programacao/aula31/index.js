// Diferenças entre 'var', 'let' e 'const'

const verdadeira = true;

// let tem escopo de bloco {....bloco}
// var só tem escopo de função

let nome = 'Noah'; // AQui estou criando a variável 'nome' | Não posso redeclarar uma variável 'let' sobre escrevendo o valor | let nome = 'Samuel'; 
var nome2 = 'Samuel'; // Com a variável 'var', já posso sobre escrever o valor da mesma | var nome2 = 'Noah';

var nome2 = 'Janice'; // Variável redeclarada | Desse jeito aqui essa variável recebe o novo valor em toda a estrutura
console.log(nome2);


if (verdadeira) {
    let nome = 'Lena'; // Embora essa variável tenha o mesmo nome da variável externa, essa é uma variável nova criada dentro desse bloco(condição), não sendo a mesma variável
    console.log(nome, '|', nome2); 
    
    if (verdadeira) {
        var nome2 = 'Redeclarada';
        let nome = 'Variável nova';
        console.log(nome, '|', nome2);   
    }
}

console.log(nome, '|', nome2); // escopo global | Aqui vemos a diferença entre var e let sendo o escopo. No caso, como a variável let só pode ser redeclarada dentro de um bloco, no escopo global ela permanece com o seu valor inicial, ao contrário da variável var.

/**
 
### 🟢 `var`

* **Escopo de função**: visível em toda a função onde foi declarada, mesmo antes da linha da declaração (por causa do *hoisting*).
* **Pode ser redeclarada**: dentro do mesmo escopo.
* **Pode ser reatribuída**: sim.
* **Problemas**: pode gerar bugs inesperados devido ao seu escopo amplo.

```javascript
var exemplo = 'valor1';
var exemplo = 'valor2'; // ok (redeclarada)
```

---

### 🟡 `let`

* **Escopo de bloco** `{}`: só é visível dentro do bloco onde foi declarada.
* **Não pode ser redeclarada** no mesmo escopo.
* **Pode ser reatribuída**.

```javascript
let nome = 'João';
// let nome = 'Maria'; // erro (redeclaração no mesmo escopo)
nome = 'Carlos'; // ok (reatribuição)
```

---

### 🔴 `const`

* **Escopo de bloco** `{}`.
* **Não pode ser redeclarada**.
* **Não pode ser reatribuída**.
* **Usada para valores constantes** ou para garantir que a referência não mude (em objetos/arrays o conteúdo pode ser alterado, mas não a referência).

```javascript
const idade = 30;
// idade = 40; // erro (não pode reatribuir)
```

---

### 🧠 Exemplo visual com escopos:

```javascript
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10 (var tem escopo de função)
console.log(b); // erro (b está no escopo do bloco)
console.log(c); // erro (c está no escopo do bloco)
```

---
 */