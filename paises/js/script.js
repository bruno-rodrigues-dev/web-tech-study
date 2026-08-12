const paises = [
    "Brasil",
    "Colômbia",
    "México",
    "Argentina",
    "Peru",
    "Chile",
    "Uruguai",
    "Paraguai"
];

function listarPaises(){
    let lista = document.getElementById("listaPaises");
    lista.innerHTML = "";

    for(let i = 0; i < paises.length; i++) {
        lista.innerHTML += "<li>" + paises[i] + "</li>"; 
    }

    lista.innerHTML += "<li>Total de países: " + paises.length + "</li>";
}