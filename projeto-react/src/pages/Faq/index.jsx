import "./Faq.css"
import Accordion from "../../components/Accordion"
import { useEffect, useState } from "react"


export default function Faq() {
    const [perguntas, setPerguntas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/faq")
        .then((response) => response.json())
            .then((data) => setPerguntas(data))
            .catch((error) => console.log(error))
    })

  return (
    <section className="container faq">
      <div className="titulo-faq">
        <h2>Perguntas frequentes</h2>
            <p>Confira as principais dúvidas sobre nossos produtos e serviços.</p>
      </div>

      <div className="accordion-container">

        {perguntas.map((question) => (
            <Accordion pergunta={question.pergunta} resposta={question.resposta} key={question.id}/>
        ))}

      </div>

    </section>
  )
}
