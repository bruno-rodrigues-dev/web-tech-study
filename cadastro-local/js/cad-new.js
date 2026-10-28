const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");


salvarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const valor = campo.value;

    console.log(valor)

    if(!valor.trim()){
        alert("O campo não pode estar vazio");
    }

    //limpar campo
    campo.value = "";

    //salvar no localStorage
    const chave = `ValorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor)


    carregarValores();
})
