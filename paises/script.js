const paises = [
    "Brasil",
    "Argentina",
    "Chile",
    "Uruguai",
    "Paraguai",
    "Portugal",
    "Espanha",
    "França",
    "Itália",
    "Japão"
];

function listarPaises(){
    const lista = document.getElementById("listaPaises");
    const quantidade = document.getElementById("quantidadePaises");
    
    for (let i = 0; i < paises.length; i++) {
        console.log(paises[i]);
        lista.innerHTML += `<li>${paises[i]}</li>`;
    }
    
    quantidade.innerHTML = `Quantidade de países: ${paises.length}`;
}