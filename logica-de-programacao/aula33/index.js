// Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: 'Samuel', 
    sobrenome: 'Barreto',
    idade: 31,
    endereco: {
        rua: 'Rua Cazuza',
        numero: 'n°101'
    }
};
// Atribuição via desestruturação
// const {nome, sobrenome} = pessoa; // caso o objeto nome não existisse, o retorno seria undefined. Sendo assim eu poderia setar um valor padrão tipo: const {nome = '', sobrenome} = pessoa; com string vazia ou algum valor...
// console.log(nome, sobrenome);

// const {
//     endereco: {rua: r = 'valor padrão', numero},
//     endereco
// } = pessoa;
// console.log(r, numero, '\n',endereco);
// // Podemos também especificar a chave e mudar o nome da variável

const {nome, ...rest} = pessoa;
console.log(nome, '\n',rest);
/**------------------------------------------------------------------------------------------------------------- */

/**
---

### 🧱 Objeto base

```javascript
const pessoa = {
    nome: 'Samuel', 
    sobrenome: 'Barreto',
    idade: 31,
    endereco: {
        rua: 'Rua Cazuza',
        numero: 'n°101'
    }
};
```

---

### 🟢 Desestruturação simples com valor padrão

```javascript
const { nome = '', sobrenome } = pessoa;
```

* A variável `nome` recebe `'Samuel'`.
* Se `nome` **não existisse no objeto**, ele cairia no **valor padrão `''`**.
* Muito útil para evitar `undefined`.

---

### 🟡 Desestruturação aninhada e renomeação

```javascript
const {
    endereco: { rua: r = 'valor padrão', numero },
    endereco
} = pessoa;

console.log(r, numero, '\n', endereco);
```

* `rua` é renomeada para `r`.
* Se `rua` **não existisse**, `r` seria `'valor padrão'`.
* Também extraímos o objeto `endereco` completo, caso precise dele inteiro.

---

### 🟣 Operador rest (`...rest`) na desestruturação

```javascript
const { nome, ...rest } = pessoa;
console.log(nome, '\n', rest);
```

* Aqui, você:

  * Extrai a chave `nome`.
  * E agrupa o **restante das chaves** (`sobrenome`, `idade`, `endereco`) no objeto `rest`.
* Isso é útil para **dividir dados**, como por exemplo:

  ```javascript
  const { id, ...dadosDoFormulario } = requisicao;
  ```

---

### ✅ Saída do seu `console.log` final:

```
Samuel 
{
  sobrenome: 'Barreto',
  idade: 31,
  endereco: { rua: 'Rua Cazuza', numero: 'n°101' }
}
```

---
 * 
 */