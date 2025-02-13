// Existem diversos tipos de operadores no JavaScript, vamos ver cada um deles.


// 📌 1. Operadores Aritméticos
// Servem para realizar operações matemáticas.

let a = 10;
let b = 5;

// Adição
let soma = a + b; 
console.log(soma); // 15

// Subtração
let subtracao = a - b;
console.log(subtracao); // 5

// Multiplicação
let multiplicacao = a * b;
console.log(multiplicacao); // 50

// Divisão
let divisao = a / b;
console.log(divisao); // 2

// Resto da divisão (Módulo)
let modulo = a % b;
console.log(modulo); // 0 (resto de 10 dividido por 5)

// Exponenciação (potência)
let potencia = a ** b;
console.log(potencia); // 100000 (10 elevado a 5)

// 📌 2. Operadores de Atribuição
// São usados para atribuir valores a variáveis.

let x = 10; // Atribuição simples
x += 5; // x = x + 5 (aumenta 5 em x)
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

x %= 3; // x = x % 3 (resto da divisão)
console.log(x); // 0

// 📌 3. Operadores de Comparação
// São usados para comparar valores.

let y = 10;
let z = 20;

// Igualdade (não considera o tipo)
console.log(y == z); // false

// Igualdade estrita (considera o tipo)
console.log(y === z); // false

// Diferença (não considera o tipo)
console.log(y != z); // true

// Diferença estrita (considera o tipo)
console.log(y !== z); // true

// Maior que
console.log(y > z); // false

// Menor que
console.log(y < z); // true

// Maior ou igual a
console.log(y >= z); // false

// Menor ou igual a
console.log(y <= z); // true

// 📌 4. Operadores Lógicos
// Usados para combinar condições.

let condicao1 = true;
let condicao2 = false;

// AND lógico (e)
console.log(condicao1 && condicao2); // false

// OR lógico (ou)
console.log(condicao1 || condicao2); // true

// NOT lógico (não)
console.log(!condicao1); // false

// 📌 5. Operadores de String
// Concatenam (juntam) strings.

let primeiroNome = "John";
let ultimoNome = "Doe";
let nomeCompleto = primeiroNome + " " + ultimoNome;
console.log(nomeCompleto); // John Doe

// 📌 6. Operadores Ternários
// Um atalho para uma estrutura condicional simples (if...else).

let idade_pessoa = 18;
let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultado); // Maior de idade

// 📌 7. Operador de Tipo
// Verifica o tipo de uma variável.

let valor = 42;
console.log(typeof valor); // number

let texto = "John Doe";
console.log(typeof texto); // string

let objeto = {};
console.log(typeof objeto); // object

// 📌 8. Operador de Nullish Coalescing (??)
// Retorna o valor da esquerda se não for null ou undefined; caso contrário, retorna o valor da direita.

let variavel = null;
console.log(variavel ?? "Valor default"); // Valor default

variavel = "valor";
console.log(variavel ?? "Valor default"); // valor

// 📌 9. Operador de Desestruturação
// Facilita a extração de valores de objetos ou arrays.

let pessoa = { nome: "John", idade: 30 };
let { nome, idade } = pessoa;
console.log(nome); // John
console.log(idade); // 30

let frutas = ["maçã", "banana", "laranja"];
let [fruta1, fruta2] = frutas;
console.log(fruta1); // maçã
console.log(fruta2); // banana

