const botao = document.querySelector('#btnRevelar')
const texto = document.querySelector('#resposta')

botao.addEventListener('click', () => {
    texto.innerHTML = "js"

    botao.style.display = "none";
})