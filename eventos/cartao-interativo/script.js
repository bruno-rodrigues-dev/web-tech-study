const btnRevelar = document.querySelector("#btnRevelar");
const img = document.querySelector(".homemAranha");
const descricao = document.querySelector("#descricao");

btnRevelar.addEventListener("click", function() {
    img.style.display = "block";
    descricao.style.display = "block";
    btnRevelar.style.display = "none";
});