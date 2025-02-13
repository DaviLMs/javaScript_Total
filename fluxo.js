// 📌 1. Estruturas de Decisão (Condicionais)


// if: Verifica uma condição e executa um bloco de código se a condição for verdadeira.
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
}

// if...else: Verifica uma condição e executa um bloco de código se a condição for verdadeira, 
// ou outro bloco se a condição for falsa.
if (idade < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}

// if...else if...else: Verifica várias condições, executando o primeiro bloco que for verdadeiro.
let nota = 8;
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else {
    console.log("Precisa melhorar");
}

// Operador Ternário: Forma compacta de if...else, ideal para decisões simples.
let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultado); // Maior de idade


// 📌 2. Estruturas de Repetição (Laços de Repetição)

// while: Executa um bloco de código enquanto a condição for verdadeira.
let contador = 0;
while (contador < 5) {
    console.log(contador); // 0 1 2 3 4
    contador++;
}

// do...while: Executa o bloco de código pelo menos uma vez, e depois repete enquanto a condição for verdadeira.
let numero = 0;
do {
    console.log(numero); // 0 1 2 3 4
    numero++;
} while (numero < 5);

// for: Executa um bloco de código um número específico de vezes.
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// for...of: Itera sobre os elementos de um array ou objeto iterável.
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log(fruta); // maçã banana laranja
}

// for...in: Itera sobre as propriedades de um objeto.
let pessoa = { nome: "John", idade: 30, cidade: "New York" };
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]); 
    // nome: John
    // idade: 30
    // cidade: New York
}


// 📌 3. Controle de Fluxo - break, continue, return

// break: Interrompe a execução de um laço (while, for, etc.) prematuramente.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Interrompe o laço quando i é igual a 5
    }
    console.log(i); // 0 1 2 3 4
}

// continue: Pula a execução da iteração atual de um laço e vai para a próxima iteração.
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // Pula quando i é igual a 3
    }
    console.log(i); // 0 1 2 4
}

// return: Usado dentro de funções para retornar um valor e interromper a execução da função.
function soma(a, b) {
    return a + b;
}
let resultadoSoma = soma(10, 20);
console.log(resultadoSoma); // 30


// 📌 4. Estruturas de Controle com Exceções - try...catch

// try...catch: Permite tratar erros sem interromper o programa.
try {
    let resultado = 10 / 0;
    console.log(resultado); // Infinity
    let resultadoInvalido = a + b; // erro, 'a' e 'b' não estão definidos
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message); // Ocorreu um erro: a is not defined
}

