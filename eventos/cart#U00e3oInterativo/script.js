const btnRevelar = document.querySelector("#btnRevelar");
const img = document.querySelector(".homemAranha");

btnRevelar.addEventListener("click", function() {
    img.style.display = "block";
    btnRevelar.style.display = "none";
});