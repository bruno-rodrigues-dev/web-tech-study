const btn = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

btn.addEventListener("click", (event) => {
    popup.classList.add("d-block")
    
})


popup.addEventListener("click", (event) => {
    const classOfClickElement = event.target.classList[0];
    const listaDeClasses = event.target.matches(".popup-close, .popup-link, .popup-wrapper");

    if(listaDeClasses == true){
        popup.classList.remove("d-block")
        
    }
        
})

