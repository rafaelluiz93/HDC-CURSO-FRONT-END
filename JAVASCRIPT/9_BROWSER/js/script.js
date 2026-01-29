/*
*/
// PERCORRENDO O DOM
console.log(document.body)

console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)

// DOM: SELECIONANDO ELEMENTOS

// POR TAG
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// POR ID
const title = document.getElementById("title")
console.log(title)

// POR CLASSE
const products = document.getElementsByClassName("product")
console.log(products)


// POR CSS (QUERY SELECTOR)
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// ALTERAÇÃO DO HTML: insertBefore
const p = document.createElement("p")
console.log(p)

const header = title.parentElement
console.log(header)

header.insertBefore(p, title)

// ALTERAÇÃO DO HTML: appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)


// ALTERAÇÃO DO HTML: replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Novo título"

header.replaceChild(h2, title)



// ALTERAÇÃO DO HTML: createTextNode
const myText = document.createTextNode("Agora vamos inserir mais um título")
console.log(myText)
const h3 = document.createElement("h3")

h3.appendChild(myText)
console.log(h3)

mainContainer.appendChild(h3)

// ALTERAÇÃO DO HTML: ATRIBUTOS
const firstLink = navLinks.querySelector("a")
console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

// ALTERAÇÃO DO HTML: ALTURA E LARGURA DOS ELEMENTOS
const footer = document.querySelector("footer")
console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// ALTERAÇÃO DO HTML: POSIÇÃO DO ELEMENTO NA TELA
const product = products[0]
console.log(product.getBoundingClientRect())

// ALTERAÇÃO DO HTML: ESTILOS DO ELEMENTO
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// ALTERAÇÃO DO HTML: ESTILIZAÇÃO DE MÚLTIPLOS ELEMENTOS
for (const li of listItens) {
    li.style.backgroundColor = "red"
}
