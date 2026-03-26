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



// FILTER

//LISTA 1
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

//LISTA 2
const users = [
    {name: "Rafael", available: true},
    {name: "Eduardo", available: false},
    {name: "Aline", available: true},
    {name: "Leandro", available: true},
    {name: "Letícia", available: false}
]

const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)


//MAP
const products = [
    {name: "Camisa", price: 15.00, category: "Roupas"},
    {name: "Torradeira", price: 80.00, category: "Eletro"},
    {name: "Fogão", price: 700.00, category: "Eletro"},
    {name: "Calça Jeans", price: 90.00, category: "Roupas"}
]

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true
    }
})

console.log(products)


// TEMPLATE LITERALS
const userName = "Rafael"
const age = 32

console.log(`Nome do usuário é ${userName.toUpperCase()} e ele tem ${age} anos`)



//DESTRUCTURING

//EXEMPLO 1
const fruits = ["maçã", "mamão", "laranja"]
const [f1, f2, f3] = fruits
console.log(f1, f3) // exibe "maçã" e "laranja"

//EXEMPLO 2
const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periférico",
    color: "Cinza"
}

const {name: productName, price, category, color} = productDetails

console.log (`O nome do produto é ${productName}, ele custa R$ ${price} e é da cor ${color}`)




//SPREAD OPERATOR

// EXEMPLO 1
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a3, 7]

console.log(a4)



// EXEMPLO 2
const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 100000, price: 49999}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)

*/

// CLASSES
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa Polo", 20)
console.log(shirt)

// execução do método para aplicação do desconto
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(25))



//HERANÇA (EXTENDS / SUPER) 

// OBS: usar exemplo anterior (CLASSES)
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes ("Chapéu", 29.99, ["preto", "amarelo", "verde"])
console.log(hat)
console.log(hat.name)

hat.showColors()
