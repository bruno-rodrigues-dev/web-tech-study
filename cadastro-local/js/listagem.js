const listaValores = document.querySelector("#listaValores");

carregarValores();

function carregarValores(){
    listaValores.innerHTML = "";

    for(let i = 0; i < localStorage.length; i++){

        const chave = localStorage.key(i); 

        
        if(chave && chave.startsWith("ValorSalvo")){
            const valor = localStorage.getItem(chave);
            
            const listItem = document.createElement("li");
            listItem.textContent = valor;

            listaValores.appendChild(listItem);
        }
    }
}