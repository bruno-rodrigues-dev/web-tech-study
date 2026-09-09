const apagarBtn = document.querySelector("#apagar")

apagarBtn.addEventListener("click", function(event){
    //Limpa todos os valores
    localStorage.clear()

    //limpa lista da interface
    listaValores.innerHTML = ""
})