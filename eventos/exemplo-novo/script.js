const botao = document.querySelector("#btnRevelar")
const texto = document.querySelector("#resposta")

botao.addEventListener("click", function() {
    texto.innerHTML = "O JavaScript deixa as páginas dinâmicas"
    botao.style.display = "none"
})

