// SELECIONAR ELEMENTOS
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTitle = document.querySelector("#multiplication-title span")

// FUNCOES
const createTable = (number, multiplicatorNumber) => {
    const multiplicationTable = document.querySelector("#multiplication-operations")
    multiplicationTable.innerHTML = ""

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i
        console.log(result)

        const template = `
        <div class="row">
            <div class="operation">${number} X ${i} = </div>
            <div class="result">${result}</div>
        </div>
        `
        const parser = new DOMParser ()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row)

        multiplicationTitle.innerText = number
    }
}

// EVENTOS
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicatorNumber) return

    createTable(multiplicationNumber, multiplicatorNumber)
})