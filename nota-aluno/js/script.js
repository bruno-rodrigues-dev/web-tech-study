const inputNota = document.getElementById("nota");
const inputNome = document.getElementById("nome");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");

console.log("funciona");

function resultadoNotaClick(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value;
    const inputNomeValue = inputNome.value;


    //validação
    if(inputNotaValue == ""){
        message.style.display="block";
        return false;
    }

    //logica
    if (inputNotaValue >= 6){
        
        resultado.innerHTML=`Aluno(a) ${inputNomeValue} foi aprovado! `
        
    } else{
        resultado.innerHTML=`Aluno(a) ${inputNomeValue} foi reprovado! `
    }

    inputNota.value = "";
    inputNome.value="";
}