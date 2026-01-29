/*
// 1 - CRIANDO UMA FUNÇÃO
function minhaFuncao () {
    console.log("Testando...");
}

minhaFuncao();

// Executar função pela variável
const funcaoComVariavel = function () {
    console.log("Função em variável");    
}

funcaoComVariavel();

// Executar função com parâmetro
function funcaoComParametro (txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro ("Teste");
funcaoComParametro ("Teste 2");

// 2 - RETURN
const a = 10, b = 20, c = 30, d = 40;

function soma (n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);
//OU
console.log(soma(c, d));

// 3 - ESCOPO DE FUNÇÃO

let y = 8;

function testarEscopo () {
    let y = 20;
    console.log(`Valor de "y" dentro da função: ${y}`);
}

testarEscopo ();

console.log(`Valor de "y" fora da função: ${y}`);

// 3 - ESCOPO ANINHADO (NESTED)

let m = 10;

function nestedScope () {
    let m = 20;

    if(true) {
        let m = 30;

        if(true) {
            let m = 40;

            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

nestedScope();

console.log(m);


// 4 - ARROW FUNCTION

const TesteArrow = () => {
    console.log("Esta é uma arrow function");
}

TesteArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    } else {
        console.log("Impar");    
    }
}

parOuImpar(5);
parOuImpar(10);

// 5 - ARROW FUNCTION ++

// COMPLETA
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

// RESUMIDA
const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada(2));

const helloWorld = () => console.log("Hello World!");
helloWorld();

// 6 - PARÂMETRO OPCIONAL
const multiplication = function(m, n) {
    if(n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) =>{
    if(!name) {
        console.log("Olá!");
        return;
    } else {
        console.log(`Olá, ${name}`);
    }
}

greeting();
greeting("Rafael");


// 7 - ARGUMENTO DEFAULT
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
}

console.log(customGreeting("Rafael"));
console.log(customGreeting("Rafael", "Bem-vindo"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);    
    }
}

repeatText("Testando");
repeatText("5X", 5);

// 8 - CLOSURE (CONJUNTO DE FUNÇÕES)
function someFunction () {
    let txt = "Algum texto"

    function display () {
        console.log(txt);
    }
    display();
}

someFunction();

// CLOSURE +
const multClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const a = multClosure(50);
const b = multClosure(30);

console.log(a);
console.log(b);

console.log(a(5));
console.log(b(10));

console.log(a(10));
console.log(b(5));

// 9 - RECURSÃO (LOOP)

//DECRESCENTE
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!");
    } else {
        const x = n - m;
        console.log(x);

        untilTen(x, m);
    }
}

untilTen(100, 5);


//CRESCENTE
const contaCrescente = (n, m) => {
    if(n > 100) {
        console.log("A função parou de executar!");
    } else {
        const x = n + m;
        console.log(x);

        contaCrescente(x, m);
    }
}

contaCrescente(10, 5);

//FATORIAL
function fatorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * fatorial(x - 1);
    }
}

const num = 6;
const result = fatorial(num);

console.log(`${num}! = ${result} `);


//----------------------------------------

//TESTE 1
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));

const calc = function(a, b) {
    if (a > b) {
      return a + b;
    } else if (b > a) {
      return b - a;  
    } else {
      return b * a;  
    }
}

console.log(calc(n1, n2));

//TESTE 2
const teste = (a, b = 10) => {
    if (b === 10) {
      return a + b;  
    } else {
      return b + (a * 2);
    }
}

console.log(teste(12));
console.log(teste(5, 2));

//TESTE 3
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));

const funcSoma = (x, y) => n1 + n2;
console.log(funcSoma(n1, n2));
*/