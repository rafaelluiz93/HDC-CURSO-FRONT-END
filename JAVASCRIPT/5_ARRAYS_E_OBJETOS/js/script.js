/*

// 1 - ARRAYS
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Rafael", 4, true, 4.5, []];

// 2 - ACESSAR OS ITENS DA LISTA
const arrayLetras = ["a", "b", "c", "d", "e"];

console.log(arrayLetras[0]);
console.log(arrayLetras[2]);
console.log(arrayLetras[4]);

// 3 - PROPRIEDADES
const numbers = [5, 3, 4];

console.log(numbers.length);
//ou
console.log(numbers["length"]);

const myName = "Rafael";

console.log(`Contagem de caracteres do nome: ${myName.length}`);

// 4 - MÉTODOS

//concatenar itens de outra lista
// (importante: usar variável do item 3)
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

//conversão de texto (uppercase)
const text = "Algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

//identificar posição de um item
console.log(text.indexOf("m"));


// 5 - OBJETOS
const person = {
    name: "Rafael",
    age: 31,
    job: "Programador"
}

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - CRIANDO E DELETANDO PROPRIEDADES
const car = {
    engine: 2.0,
    brand: "Hyundai",
    model: "I30",
    km: 20000
};

console.log(car);
//criar
car.doors = 4;
console.log(car);
//deletar
delete car.km;
console.log(car);

// DIFERENÇAS: ARRAYS X OBJETOS
// ARRAYS: LISTA DE ITENS
// OBJETOS: CONJUNTO DE PROPRIEDADES

// 7 - OBJETOS ++
const obj = {
    a: "teste",
    b: true
}

console.log(obj);
console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign (obj2, obj);
console.log(obj2);


// 8 - OBJETOS: KEYS/ENTRIES

console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(Object.keys(obj2));
console.log(Object.entries(obj2));

// 9 - MUTAÇÃO
const a = {
    name: "Rafael"
}

const b = a;

console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age

console.log(a);
console.log(b);

// 10 - LOOPS EM ARRAYS
const users = ["Rafael", "Letícia", "Aline", "Leandro"];

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - ARRAY: PUSH/POP 
// PUSH: ADICIONA ITEM (FIM DO ARRAY)
// POP: EXCLUI ITEM (FIM DO ARRAY)
const list = ["a", "b", "c"];

list.push("d");
console.log(list);
console.log(list.length);

list.pop();
console.log(list);

const itemRemovido = list.pop();
console.log(itemRemovido);

list.push("x", "y", "z");
console.log(list);

// 12 - ARRAY: UNSHIFT/SHIFT
// UNSHIFT: ADICIONA ITEM (INÍCIO DO ARRAY)
// SHIFT: EXCLUI ITEM (INÍCIO DO ARRAY)
const list = ["a", "b", "c"];

list.unshift("d");
console.log(list);
console.log(list.length);

list.shift();
console.log(list);

const itemRemovido = list.shift();
console.log(itemRemovido);

list.unshift("x", "y", "z");
console.log(list);

// 13 - INDEXOF | LASTINDEXOF
const listaFrutas = ["Morango", "Maçã", "Abacaxi", "Melancia", "Abacaxi", "Maçã"];

console.log(listaFrutas.indexOf("Maçã"));
console.log(listaFrutas.indexOf("Abacaxi"));

console.log(listaFrutas.lastIndexOf("Maçã"));
console.log(listaFrutas.lastIndexOf("Abacaxi"));

//índice não encontrado
console.log(listaFrutas.indexOf("Uva"));
console.log(listaFrutas.lastIndexOf("Banana"));

// 14 - SLICE
//EXTRAIR UM INTERVALO PRÉ-DEFINIDO DE UM ARRAY
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(testeSlice);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(testeSlice);
console.log(subArray2);

const subArray3 = testeSlice.slice(2);
console.log(testeSlice);
console.log(subArray3);

// ÍNDICE INEXISTENTE
const subArray4 = testeSlice.slice(10, 20);
console.log(subArray4);

// 15 - FOREACH
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(`O número é: ${number}`)
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Java"},
    {title: "Terceiro post", category: "Python"}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`)
});

// 16 - INCLUDES

const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("VW"));
console.log(brands.includes("Hyundai"));


const marca = prompt("Digite uma marca para verificação: ");

if (brands.includes(`${marca}`) == true) {
    console.log("Há carros dessa marca!");
} else {
    console.log("NÃO há carros dessa marca!");
}

// 17 - REVERSE
// IMPORTANTE: ALTERA ARRAY ORIGINAL!
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 - TRIM
const trimTest = "  testando \n  "

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 19 - PADSTART / PADEND
const testePadstart = "1";
const newNumber = testePadstart.padStart(4, "0");

console.log(testePadstart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "2");
console.log(testePadEnd);

// 20 - SPLIT
const frase = "Não contavam com minha astúcia";

const arrayFrase = frase.split(" ");

console.log(arrayFrase);

// 21 - JOIN
const listaFrase = ["Não", "contavam", "com", "minha", "astúcia"];

const joinFrase = listaFrase.join(" ");

console.log(joinFrase);

// 22 - REPEAT
const palavra = "Testando \n";

console.log(palavra.repeat(5));

// 23 - REST OPERATOR / PARAMETER
const somaInfinita = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total+=args[i]
    }
    return total;
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(10, 20, 30, 40, 50));

// 24 - FOR OF
const somaInfinita = (...args) => {
    let total = 0
    for (num of args) {
        total += num;   
    }
    return total;
};

console.log(somaInfinita(1, 3, 5));
console.log(somaInfinita(2, 4, 6, 8, 10));

// 25 - DESTRUCTURING EM OBJETOS
const userDetails = {
    firstName: "Rafael",
    lastName: "Souza",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

//renomear variáveis
const {firstName: primeiroNome} = userDetails

console.log(primeiroNome);

// 26 - DESTRUCTURING EM ARRAYS
const myList = ["avião", "submarino", "carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON + CONVERSÃO DE JSON
const myJSON = '{"name": "Rafael", "age": 31, "skills": ["HTML", "CSS", "Javascript"]}';

console.log(myJSON);

//PARSE: JSON > OBJETO
const myObject = JSON.parse(myJSON);
console.log(myObject);

//STRINGFY: OBJETO > JSON
const mynewJSON = JSON.stringify(myObject);
console.log(mynewJSON);

// JSON INVÁLIDO
// const badJSON = '{"name": Matheus, "age": 31}'
// const myBadObject = JSON.parse(badJSON);
*/














