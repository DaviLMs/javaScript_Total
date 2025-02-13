// 📌 1. Funções Declaradas


// Uma função simples que não recebe parâmetros e não retorna nada.
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

saudacao(); // Olá, seja bem-vindo!

// Função que recebe parâmetros e retorna um valor.
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 10);
console.log(resultado); // 15

// Função com parâmetros default
function multiplicar(a, b = 2) {
    return a * b;
}

console.log(multiplicar(3)); // 6 (b tem o valor default de 2)
console.log(multiplicar(3, 4)); // 12 (b é 4, como foi passado)

// Função que pode receber número variável de parâmetros
function mostrarValores(...valores) {
    console.log(valores); // Array com todos os valores passados
}

mostrarValores(1, 2, 3); // [1, 2, 3]
mostrarValores("a", "b", "c", 4); // ['a', 'b', 'c', 4]

// 📌 2. Funções Anônimas (ou Funções de Expressão)

// Uma função anônima armazenada em uma variável
const subtrair = function(a, b) {
    return a - b;
};

console.log(subtrair(10, 5)); // 5

// Funções anônimas também podem ser passadas como argumentos
setTimeout(function() {
    console.log("Esta mensagem é exibida após 2 segundos");
}, 2000); // Exibe a mensagem após 2 segundos

// 📌 3. Funções Arrow (Funções de seta)

const dividir = (a, b) => {
    return a / b;
};



console.log(dividir(10, 2)); // 5

// Se a função tiver apenas uma expressão, podemos omitir as chaves e o return
const quadrado = x => x * x;

console.log(quadrado(4)); // 16

// 📌 4. Funções Recursivas
// Função que chama a si mesma

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1); // Chama a função novamente
    }
}

console.log(fatorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// 📌 5. Funções como Parâmetros (Passando funções para outras funções)

function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

const soma = (a, b) => a + b;
const multiplicacao = (a, b) => a * b;

console.log(executarOperacao(3, 4, soma)); // 7
console.log(executarOperacao(3, 4, multiplicacao)); // 12

// 📌 6. Funções com retorno de valores e sem retorno

// Função que retorna um valor
function obterNome() {
    return "John Doe";
}

let nome = obterNome();
console.log(nome); // John Doe

// Função que não retorna nada (void)
function exibirMensagem() {
    console.log("Mensagem exibida");
}

exibirMensagem(); // Mensagem exibida


// 📌 7. Funções com Parâmetros e Retorno Default

// Se não for passado um valor para o parâmetro, o valor default será utilizado.
function saudacaoPersonalizada(nome = "Usuário") {
    console.log(`Olá, ${nome}!`);
}

saudacaoPersonalizada(); // Olá, Usuário!
saudacaoPersonalizada("Maria"); // Olá, Maria!

