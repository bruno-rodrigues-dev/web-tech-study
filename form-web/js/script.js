/*
    Criando variáveis
*/
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector ("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*
    Criando Função
*/
button.addEventListener("click", (event) => {
    event.preventDefault();
    
    const inputValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    
    const templateHTML = 
    `<li>
        <h2>${inputValue}</h2>
        <p>${emailValue}
        ${telefoneValue}</p>
    </li>`
    
    //incluir itens no HTML
    lista.innerHTML += templateHTML;


    //Limpando campo
    nome.value ="";
    email.value ="";
    telefone.value ="";
});