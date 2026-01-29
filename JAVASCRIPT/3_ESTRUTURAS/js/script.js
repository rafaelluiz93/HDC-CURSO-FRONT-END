/*

// 1 - VARIÁVEIS

// variável
let nome = "Rafael";
console.log(nome);
nome = "Rafael Souza";
console.log(nome);

// constante
const idade = 32;
console.log(idade);

// tipos dos dados
console.log(typeof nome);
console.log(typeof idade);

//declaração múltipla
let a = 10, b = 20, c = 30;
console.log(a, b, c);

//case sensitive
const nomecompleto = "Rafael Luiz";
const nomeCompleto = "Michael Jordan";
console.log(nomecompleto);
console.log(nomeCompleto);

//declaração com caracteres especiais
let _teste = "teste 1";
let $teste = "teste 2";
console.log(_teste, $teste);


// 2 - FUNÇÕES

// PROMPT
const age = prompt("Digite a sua idade: ");
console.log(`Você tem ${age} anos.`);

// ALERT
alert("Alerta executado!");

const z = 10;
alert(`Número é igual a ${z}`)


// 3 - OBJETOS

// MATH
// menor número
console.log(Math.min(5, 2, 10, 1));
// maior número
console.log(Math.max(5, 2, 10, 1));
// arredondar pra baixo
console.log(Math.floor(3.5));
// arredondar pra cima
console.log(Math.ceil(3.5));

// CONSOLE
console.log("Mensagem");
console.error("Erro!");
console.warn("Aviso!");

// 4 - ESTRUTURAS DE CONTROLE

//IF
const valor = 10;

if (valor > 5) {
    console.log ("Valor é maior que 5!")
}

const user = "Rafael";

if (user === "Rafael") {
    console.log(`Olá, ${user}`);
}

//ELSE
const loggedIn = false;

if (loggedIn) {
    console.log("Usuário autenticado!")
} else {
    console.log("Usuário não autenticado!")
}

const q = 10, w = 15;

if (q > 5 && w > 20) {
    console.log("Executado com sucesso!");
} else {
    console.log("Não executado!");
}

//ELSE IF
if(1 > 2) {
    console.log("Teste 1");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1){
    console.log("Teste 3");
}

const userName = "Rafael";
const userAge = 32;

if (userName === "José") {
    console.log("Bem-vindo, José!");
} else if(userName === "Rafael" && userAge === 32) {
    console.log(`Bem-vindo, ${userName}! Você tem ${userAge} anos.`);
} else {
    console.log("Nenhuma condição atendida!")
}

// 4 - ESTRUTURAS DE REPETIÇÃO

// WHILE
let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// DO WHILE
let c = 10;

do {
    console.log(`Valor de c: ${c}`);
    c--;
} while (c > 1);

// FOR
// for (let t = 0; t < 10; t++) {
//     console.log(`Repetindo...`);
// }

let r = 10;
for (r; r > 0; r--) {
    console.log(`Valor de r: ${r}`);
}

// 5 - INDENTAÇÃO
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10: ${u}`);
    } else {
        if (u / 2 === 0){
            console.log(`ZERO`);
        }    
    }
}

// 6 - FORÇAR SAÍDA DO LOOP (BREAK)
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 18) {
        console.log(`G = 18`);
        break;
    }
}

// 7 - PULAR EXECUÇÃO DO LOOP (CONTINUE)
for (let s = 1; s < 10; s++){
    if (s % 2 === 0) {
        console.log(`Número par`);
        continue;
    }

    console.log(s);
}

// 8 - SWITCH
const job = "Engenheiro";

switch(job) {
    case "Programador":
        console.log("Você é um Programador!");
        break;
    case "Advogado":
        console.log("Você é um Advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um Engenheiro!");
        break;
    default:
        console.log("Profissão não encontrada!");
}
        


// EXERCÍCIOS

// VERIFICAÇÃO DE NÚMERO (PAR OU IMPAR)

let n = prompt("Digite um número: ");

if (n % 2 === 0) {
    console.log(`O número digitado (${n}) é PAR!`);
    } else {
        console.log(`O número digitado (${n}) é ÍMPAR!`);
    } 

// ----------------------------------------

// TABUADA

let num = prompt("Digite um número, entre 1 e 10: "), resultado;

console.log(`Tabuada do ${num} \n\n`);
for(let c = 1; c <= 10; c++) {
    resultado = num * c;
    console.log(`${num} X ${c} = ${resultado}`);
}

// ----------------------------------------

// CONTAGEM REGRESSIVA

let x = 10;

console.log ("Contagem regressiva");
for (let c = x; c >= 0; c--) {
    console.log(`${c}...`);
}

//VERIFICAÇÃO DE IDADE (>18 ANOS)

let idade = Number(prompt("Digite a sua idade: "));

if (idade >= 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");    
}

//RAIZ QUADRADA
let number = Number(prompt("Digite um número: "));
const raizQuadrada = Math.sqrt(number);

console.log(`A raiz quadrada de ${number} é: ${raizQuadrada}`);

//NÚMERO ALEATÓRIO
let number = Math.floor(Math.random() * 10) + 1,
    tentativa = 0;

while (tentativa !== number){
    tentativa = Number(prompt("Escolha um número (de 1 a 10): "));
}

console.log(`Parabéns, você acertou! Número ${number}`);

//CÁLCULO FATORIAL
let numero = Number(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = numero; i > 0; i--) {
    fatorial *= i;
}

console.log(`${numero}! = ${fatorial}`);

*/
