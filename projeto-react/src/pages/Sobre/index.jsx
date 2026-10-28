import { useEffect, useState } from "react"
import "./Sobre.css"

export default function Sobre() {
  const [texto, setTexto] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/sobre")
            .then((response) => response.json())
            .then((data) => setTexto(data))
            .catch((error) => console.log(error))
    }, [])
  return (
    <section className="container container-sobre">
        <h1>Sobre</h1>
        {texto.map((texto) => (
          <div key={texto.id}>
            <h2>{texto.titulo}</h2>
            <p>{texto.texto}</p>
          </div>
        ))}

    </section>
  )
}
