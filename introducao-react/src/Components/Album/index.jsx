import "./Album.css"
import { useState } from "react"

function Album() {
    const album = [
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoQszl6rvvoD_QMy6FJm2Ukl5yLwDg8ThtSA8MFMVQQ&s=10",
            nomeDoAlbum: "summer flows 0.02",
            nomeDaBanda: "Wave to earth",
            nomeDaMusica: "Seasons",
            refrao:[
                "But I'll pray for you all the time", 
                "If I could be by your side I'll give you all my life, my seasonsBy your side,",
                "I'll be your seasons, hmm My love"
            ],
            fundo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_3MtJ-LGReydNLprxMypjHjb7iU-VgwRfI2_xmfdKNEZcP_qwD_X-_k&s=10"
        },
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXtuAxYTsSCKGjzcnaqHJhmIIAmsikSBede3cWmW_bw-z_vfAkwbJgmY&s=10",
            nomeDoAlbum: "OMG",
            nomeDaBanda: "New Jeans",
            nomeDaMusica: "Ditto",
            refrao:[
                "Stay in the middle, like you a little",
                "Don't want no riddle, malhaejwo say it back",
                "Oh, say it ditto, achimeun neomu meoreo",
                "So say it ditto"
            ],
            fundo: "https://i.pinimg.com/736x/95/55/ff/9555ff900d86e6c1bd2ae022dfc1a515.jpg"
        },
        {
            imagem: "https://cdn-images.dzcdn.net/images/cover/d7353e7f013511372451627aed94c974/0x1900-000000-80-0-0.jpg",
            nomeDoAlbum: "Petal",
            nomeDaBanda: "Ariana Grande",
            nomeDaMusica: "Hate tha i made you love me",
            refrao:[
                "I, I hate that I made you love me (Made you love me, baby)",
                "Sorry if I made me your type",
                "Yeah, I, I hate that I made you love me",
                "'Cause I barely tried"
            ],
            fundo: "https://i.pinimg.com/736x/c1/93/a2/c193a2c1bd6bdcd2f4d7dcffc3523b4b.jpg"
        },
        {
            imagem: "https://upload.wikimedia.org/wikipedia/pt/7/71/Hit_Me_Hard_and_Soft.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
            nomeDoAlbum: "Hit me Hard and Soft",
            nomeDaBanda: "Billie Eilish",
            nomeDaMusica: "WildFlower",
            refrao:[
                "But I see her in the back of my mind",
                "All the time",
                "Like a fever, like I'm burning alive","Like a sign",
                "Did I cross the line?"
            ],
            fundo: "https://i.pinimg.com/736x/e6/58/8e/e6588e062f97e39acd083bdfcdc33755.jpg"
        },
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgZu6WyrzIyoSSgiX5nYvrBOroPION0RArEB35H_-hFgpFiFL13kJqGlD&s=10",
            nomeDoAlbum: "Aqui, ali, em qualquer lugar",
            nomeDaBanda: "Rita lee",
            nomeDaMusica: "Minha vida",
            refrao:[   
                "Tem lugares que me lembram Minha vida, por onde andei",
                "As histórias, os caminhos O destino que eu mudei",
                "Cenas do meu filme em branco e preto",
                "Que o vento levou e o tempo traz",
                "Entre todos os amores e amigos",
                "De você me lembro mais"
            ],
            fundo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jHH151__iR2QSOQzomkZXrQnwI8AxnP4TvFMImSv6DP-4Q09K663u_UC&s=10"
        },
        {
            imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/250px-Blonde_-_Frank_Ocean.jpeg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            nomeDoAlbum: "Blond",
            nomeDaBanda: "Frank Ocean",
            nomeDaMusica: "Pink + white",
            refrao:[
                "Just the same way you showed me, showed me",
                "You showed me love",
                "Glory from above Regard, my dear",
                "It's all downhill from here"
            ],
            fundo: "https://i.pinimg.com/474x/98/62/ed/9862ed6cc44355dc738cef4a20d3d3cc.jpg"
        },
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDvxvrOyFafVyiwd7BGDvqqkUYg2Dy8XkAYwiKRswHq2ZQg2Wu0Mwm24&s=10",
            nomeDoAlbum: "Freudian",
            nomeDaBanda: "Daniel Caesar",
            nomeDaMusica: "Japanese Denim",
            refrao:[
                "I don't stand in line, I don't pay for clubs, fuck that, yeah",
                "But I'll wait for youI'm bending it over",
                "You're my four leaf cloverI'm so in love, so in love"
            ],
            fundo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrcAEYkJmI8zCi1gOGP9b75WsszQBt06qyoYx_Uw19eBfEcrcVrLoILVi&s=10"
        },
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnH1Fub_-OMbHR4VLfTK05AT8GrVM_jNMkvH8qqgOuBRwEc8PmMlu1Os&s=10",
            nomeDoAlbum: "Off the Wall",
            nomeDaBanda: "Michael Jackson",
            nomeDaMusica: "Rock Whith You",
            refrao:[
                "I wanna rock with you (all night)",
                " Dance you into day (sunlight)",
                "I wanna rock with you (all night)",
                "We're gonna rock the night away"
            ],
            fundo: "https://c4.wallpaperflare.com/wallpaper/993/817/190/singers-michael-jackson-wallpaper-preview.jpg"
        },

    ]


    const [musicaAtual, setMusicaAtual] = useState(0);

    const musica = album[musicaAtual];

    function trocarMusica(){
        setMusicaAtual((atual) => {
            if (atual === album.length -1){
                return 0;
            }
            return atual +1;

        })
    }

  return (
    <section className="albumSection" style={{ backgroundImage: `url(${musica.fundo})`}}>
        <div className="albumContainer">
            <div className="albumInfo">
                <img src={musica.imagem} alt="capaDoAlbum" className="capaAlbum"/>
                <h1>{musica.nomeDoAlbum}</h1>
            </div>
            <div className="musicaContainer">
                <h2>{musica.nomeDaBanda}</h2>
                <div className="musicaInfo">
                    <h3 className="nomeMusica">{musica.nomeDaMusica}</h3>
                    {musica.refrao.map((linha, index) => (
                        <p className="refrao" key={index}>{linha}</p>
                    ))}
                </div>
            </div>

            <button className="btnTrocarMusica" onClick={trocarMusica}>Trocar Musica</button>
        </div>
    </section>
  )
}

export default Album
