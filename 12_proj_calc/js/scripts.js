const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number")
const multiplicatorInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operations")
const multiplicationTitle = document.querySelector("#multiplication-title span")
 
//FUNÇÃO CRIAR TABELA
 
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";
 
    //criar tabuada
    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;
 
        const template =
        `<div class="row">
            <div class="operation"> ${number} x ${i} =</div>
            <div class="result"> ${result}</div>
        </div>`;
 
        const parser = new DOMParser();
 
        const htmlTemplate = parser.parseFromString(template, "text/html")
 
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row)
    }    
    multiplicationTitle.innerText = number
}
 
 
 
 
 
//EVENTOS
 
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const multiplicationNumber = numberInput.value;
    const multiplicatorNumber = multiplicatorInput.value;
 
    if(!multiplicationNumber || !multiplicatorNumber){
        return;
    }
    createTable(multiplicationNumber, multiplicatorNumber)
})
 

