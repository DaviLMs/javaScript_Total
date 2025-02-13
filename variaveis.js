// Existem 3 formas de guardar valores dentro do JavaScript
// Elas são: var, let e const


// 1. Variável com 'var' (pode ser redeclarada e reatribuída)
var nome = "John Doe";
nome = "Jane Doe"; // Pode ser reatribuída
console.log(nome); // Jane Doe

// Quando é criada dentro de uma função, ela não altera a variável externa
function MostrarNome() {
    var nome = "Bob Smith"; // Essa variável 'nome' só existe dentro da função
    console.log(nome); // Bob Smith
}
MostrarNome();
console.log(nome); // Jane Doe (a variável externa não foi alterada)

// 2. Variável com 'let' (não pode ser redeclarada no mesmo escopo, mas pode ser reatribuída)
let sobrenome = "Doe";
sobrenome = "Smith"; // Pode ser reatribuída
console.log(sobrenome); // Smith

// Como é criada dentro de uma função, ela também funciona de forma independente
function MostrarSobrenome() {
    let sobrenome = "Johnson"; // Essa variável 'sobrenome' só existe dentro da função
    console.log(sobrenome); // Johnson
}
MostrarSobrenome();
console.log(sobrenome); // Smith (a variável externa não foi alterada)

// O 'var' permite redeclaração dentro do mesmo escopo
var a = 1;
var a = 2;
console.log(a); // 2

// O 'let' NÃO permite redeclaração no mesmo escopo
let b = 10;
// let b = 20; // ❌ Erro: Identifier 'b' has already been declared

// 3. Variável com 'const' (não pode ser redeclarada nem reatribuída)
const idade = 30;
// idade = 31; // ❌ Erro: Assignment to constant variable
console.log(idade); // 30

// O 'const' precisa ser inicializado na hora da declaração
// const ano; // ❌ Erro: Missing initializer in const declaration

// 🔹 Resumo das diferenças entre var, let e const:
// 1. 'var' pode ser redeclarado e reatribuído.
// 2. 'let' não pode ser redeclarado no mesmo escopo, mas pode ser reatribuído.
// 3. 'const' não pode ser redeclarado nem reatribuído.

// O uso correto de cada tipo de variável depende do contexto em que elas serão usadas.

// Se quiser testar o código, execute no Node.js com:
// node variaveis.js
// OBS: Certifique-se de ter o Node.js instalado em sua máquina.
