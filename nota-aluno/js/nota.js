//Variaveis

const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");
const inputNome = document.getElementById("nome");

function resultadoNotaClick(event){
    event.preventDefault()
    const inputNotaValue = inputNota.value;
    const inputNomeValue = inputNome.value;

    //Validação
    if (inputNotaValue && inputNomeValue == ""){
        //alert("O campo está vázio")
        message.style.display = "block";
        return false
    }


    //Lógica
    if (inputNotaValue >= 6) {
        //alert("Você está aprovado");
        resultado.innerHTML = `O aluno ${inputNomeValue} aprovado`
    } 
    else {
        //alert("Você está reprovado");
        resultado.innerHTML = `O aluno ${inputNomeValue} reprovado`
    }

}