const apagarBtn = document.querySelector("#apagar");

apagarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //apaga os valores do local storage

    localStorage.clear();
    listaValores.innerHTML = "";
})