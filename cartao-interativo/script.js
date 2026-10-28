let btn = document.querySelector('#btn');
let fundo = document.querySelector('body');
let container = document.querySelector('main')
let imgContainer = document.querySelector('.img-container')


let contador = 0;

btn.addEventListener('click', () => {
    contador++

    if (contador % 2 === 1) {
        fundo.style.backgroundImage = "url(https://images4.alphacoders.com/835/thumb-1920-835880.jpg)";
        container.style.backgroundColor = "#ffd8d9"

        let video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/nfK6UgLra7g?si=dUUAqDv622qJ7kGN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> `

        imgContainer.innerHTML = video;
    } else{
        fundo.style.backgroundImage = "url(https://images5.alphacoders.com/835/835652.png)";
        container.style.backgroundColor = "#c8e2e9"
        imgContainer.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/pt/4/47/Koe-no-Katachi-poster-film.jpg" alt="" class="imagem">`;
    }
})