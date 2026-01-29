/*

// STRICT
"use strict"

// teste = "teste"
const teste = "teste"

// const undefined = 10
// delete [].length


// DEBUGANDO COM O CONSOLE.LOG
let a = 1, 
b = 2

if(a == 1) {
    a = b + 2
}

console.log(a)

for(let i = 0; i < b; i++) {
    a = a + 2
    console.log(a)
}

if(a > 5) {
    a = 25
}

console.log(a)

// DEBUGANDO COM O DEBUGGER
let c = 1
let d = 2

if (c == 1) {
    c = d + 2
}

debugger

for (let i = 0; i < d; i++) {
    c = c + 2
}

console.log("Loop executado!")

debugger

if (c > 5) {
    c = 25
}

// TRATAMENTO DE DADOS COM FUNÇÃO
function checkNumber (num) {
    const result = Number(num)

    if (Number.isNaN(result)) {
        console.log("Valor inválido!")
        return
    }
    console.log("Valor correto!")
    return result
}

checkNumber (5)
checkNumber ("10")
checkNumber ({})
checkNumber ("texto")

// EXCEPTIONS
let x = 10

if (x != 11) {
    throw new Error("Valor de X não pode ser diferente de 11")
}

// TRY CATCH
try {
    const soma = x + y
} catch(error) {
    console.log (`Erro na execução do programa: ${error}`)
}

// FINALLY
function checkNumber (num) {
    const result = Number(num)

    if (Number.isNaN(result)) {
        console.log("Valor inválido!")
        return
    }
    console.log("Valor correto!")
    return result
}

try {
    const value = checkNumber("abcd")

    if(!value) {
        throw new Error("Valor inválido!")
    }
} catch (error) {
    console.log(`Houve um erro: ${error}`)    
} finally {
    console.log("O código foi executado!")
}

// ASSERTIONS
function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error("Array não pode ser vazio")
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([])
// checkArray([1, 2, 3])

*/


