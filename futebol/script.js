const jogadores = [
    "Neymar",
    "Vinicius Júnior",
    "Rodrygo",
    "Endrick",
    "Casemiro",
    "Alisson",
    "Marquinhos",
    "Gabriel Magalhães",
    "Bruno Guimarães",
    "Raphinha"
];

function listarJogadores(){
   let lista = document.getElementById("listaJogadores")
   lista.innerHTML = ""

   for(let i = 0; i < jogadores.length; i++){
        console.log(jogadores[i])
        lista.innerHTML += `<li>${jogadores[i]} </li>`
    }
}