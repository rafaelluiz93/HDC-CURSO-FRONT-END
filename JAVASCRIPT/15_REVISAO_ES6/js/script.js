/*
// VAR
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

// LET
let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)


// CONST
function logName() {
    const name = "Rafael"
    console.log(name)
}

const name = "Letícia"

logName()

console.log(name)


// ARROW FUNCTIONS

// EXEMPLO 1
const sum = function (a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))

console.log(arrowSum(5, 5))



// EXEMPLO 2
const greeting = (name) => {
    if(name) {
        return `Hello, ${name}`
    }
    else {
        return "Hello"    
    }
}

console.log(greeting("Rafael"))
console.log(greeting())

// EXEMPLO 3
const user = {
    name: "Rafael",
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 3000)
    }
}

user.sayUserName()
user.sayUserNameArrow()

*/



