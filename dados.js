// Existem diversos tipos de dados em JavaScript. Vamos explicar cada um neste arquivo.
  

// 📌 1. Números (Number)
let inteiro = 10; // Número inteiro
let decimal = 10.5; // Número decimal (float)
console.log(inteiro); // 10
console.log(decimal); // 10.5

// 📌 2. Texto (String)
let nome = "John Doe"; // Pode usar aspas duplas ou simples
let mensagem = 'Olá, mundo!';
console.log(nome); // John Doe
console.log(mensagem); // Olá, mundo!

// 📌 3. Valores booleanos (Boolean) - Representam verdadeiro ou falso
let verdadeiro = true;
let falso = false;
console.log(verdadeiro); // true
console.log(falso); // false

// 📌 4. Objetos (Object) - Conjunto de propriedades (chave e valor)
let pessoa = {
    nome: "John Doe",
    idade: 30,
    endereco: {
        rua: "123 Street",
        cidade: "New York",
        estado: "NY"
    }
};
// Objetos armazenam dados em pares "chave: valor"
console.log(pessoa.nome); // John Doe
console.log(pessoa.endereco.rua); // 123 Street

// 📌 5. Arrays (Array) - Lista ordenada de valores
let frutas = ["apple", "banana", "orange"];
console.log(frutas[0]); // apple
console.log(frutas[2]); // orange
console.log(frutas.length); // 3 (quantidade de itens no array)

// 📌 6. Valor nulo (null) - Representa ausência de valor
let nulo = null;
console.log(nulo); // null

// 📌 7. Valor indefinido (undefined) - Quando uma variável não tem valor atribuído
let indefinido;
console.log(indefinido); // undefined

// Também pode ocorrer ao acessar uma propriedade que não existe em um objeto
let usuario = {};
console.log(usuario.idade); // undefined
