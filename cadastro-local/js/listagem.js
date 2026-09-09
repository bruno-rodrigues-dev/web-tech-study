const listaValores = document.querySelector("#listaValores")

//Carregar valores ao iniciar a pagina
carregarValoresSalvos();

//função para carregar valores na lista
function carregarValoresSalvos(){
    listaValores.innerHTML = ""
    for(let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i)

        if(chave.startsWith(`ValorSalvo`)) { //filtra as chaves
            const valor = localStorage.getItem(chave)
            const listItem = document.createElement("li")
            listItem.textContent = valor;
            listaValores.appendChild(listItem)
        }
    }
}