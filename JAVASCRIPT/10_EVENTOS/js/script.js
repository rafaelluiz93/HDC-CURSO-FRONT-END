/*

// ADICIONAR EVENTOS
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
    console.log("Clicou aqui")
})

// REMOVER EVENTOS
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#btn-2")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem) 
})

// ARGUMENTO DO EVENTO
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.offsetX)
    console.log(event.pointerType)
})

// PROPAGAÇÃO
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1") 
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2") 
})

// REMOVER EVENTO PADRÃO
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Link não foi acessado")
})

// EVENTOS DE TECLA
document.addEventListener("keydown", (e) =>{
    console.log(`Usuário apertou a tecla (${e.key})`)
})

document.addEventListener("keyup", (e) =>{
    console.log(`Usuário soltou a tecla (${e.key})`)
})


// OUTROS EVENTOS DO MOUSE
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () =>{
    console.log("Clicou com o mouse!")
})

mouseEvents.addEventListener("mouseup", () =>{
    console.log("Soltou o clique do mouse!")
})

mouseEvents.addEventListener("dblclick", () =>{
    console.log("Clique duplo!")
})


// MOVIMENTO DO MOUSE
document.addEventListener("mousemove", (e) =>{
    // console.log("Usuário moveu o mouse!")
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo Y: ${e.y}`)
})


// EVENTOS POR SCROLL
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200px")
    }
})


// EVENTO POR FOCO EM UM ELEMENTO
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})


// EVENTOS DE CARREGAMENTO DA PÁGINA
window.addEventListener("load", () =>{
    console.log("Página carregada!")
})

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault()
    e.returnValue = ""
})


// DEBOUNCE
const debounce = (f, delay) => {
    let timeout

    return(...args) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(args)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce (() => {
    console.log("Executando a cada 400ms")    
}, 400))

*/
