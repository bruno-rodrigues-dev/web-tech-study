let inputProduto = document.querySelector ("#produto")
let btnForm = document.querySelector("#btn-form")
let lista = document.querySelector("#lista")
const btnSumir = document.querySelector("btnSumir")

//btnForm.addEventListener("click", (e) => {
//    e.preventDefault()

//    alert("Funcionou!")
//})

//function cadastrar(){
//   alert("Funcionou!")
//}

btnForm.addEventListener("click", function(event) {
    event.preventDefault()

    let valorLista = inputProduto.value
    let templateHTML = `<li>${valorLista}</li>`
    
    console.log(valorLista)

    if(valorLista == ""){
        alert("Preencheer campo")
        return false
    }

    lista.innerHTML += templateHTML

})

btnSumir.addEventListener("click", function(event) {
    event.preventDefault()
    inputProduto.classList.add("sumir-input")
})