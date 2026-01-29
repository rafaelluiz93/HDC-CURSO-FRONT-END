/*

// setTimeout
console.log("Ainda não executou")

setTimeout (function() {
    console.log("Requisição assíncrona")
}, 2000)

console.log("Ainda não executou 2")

// setInterval
console.log("Ainda não executou")

setInterval (function() {
    console.log("Intervalo assíncrono")
}, 3000)

console.log("Ainda não executou 2")


//PROMISES
const promessa = Promise.resolve(5 + 5)
console.log("Algum código")
promessa
    .then((value) => {
        console.log(`Resultado da soma: ${value}`)
        return value
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Valor final: ${value}`))
console.log("Outro código")

//PROMISES: TRATAMENTO DE ERROS
const promessa = Promise.resolve(4 * "texto")

promessa
    .then((n) => {
        if(Number.isNaN(n)){
            throw new Error("Valores inválidos")    
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`))


//PROMISES: REJEIÇÃO
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`Executado com sucesso`)
        } else {
            reject(new Error("Falhou"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)
console.log(a, b)

a.then((v) => console.log(`O resultado é: ${v}`))
    .catch((err) => console.log(`Ocorreu um erro: ${err}`)
)

b.then((v) => console.log(`O resultado é: ${v}`))
    .catch((err) => console.log(`Ocorreu um erro: ${err}`)
)

// PROMISES: RESOLUÇÃO MÚLTIPLA (ALL)
const p1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve(10)  
  }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
  if(30 > 10) {
    resolve(30)
  } else {
    reject("Erro")
  }
})

Promise.all([p1, p2, p3])
  .then((values) => console.log(values))


// ASYNC FUNCTIONS
async function somarComDelay (a, b) {
  return a + b
}

somarComDelay(2, 4)
  .then((value) => {
    console.log(`Valor da soma: ${value}`)  
  })

console.log("Teste ASYNC")


// ASYNC AWAIT
function resolveComDelay() {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve("Resolveu a Promise!")
    }, 2000)
  })
}

async function chamadaAsync(){
  console.log("Chamando a promise e esperando o resultado")
  const result = await resolveComDelay()
  console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()


// GENERATORS
function* generator () {
  yield 1
  yield 2
  yield 3
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

*/