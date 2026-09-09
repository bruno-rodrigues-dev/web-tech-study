const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#salvar")

//adicionar evento clicl no botão salvar
salvarBtn.addEventListener('click', function(event){
    event.preventDefault()
    const valor = campo.value

    console.log(valor);

    if(!valor.trim() === ""){
        alert("Campo vazio, digite algo")
    }

    //Salvar no localstorage
    const chave = `ValorSalvo_${Date.now()}`
    localStorage.setItem(chave, valor)

    //Limpar campo após salvar
    campo.value = ''

    //exibir os valores salvos
    carregarValoresSalvos()
});