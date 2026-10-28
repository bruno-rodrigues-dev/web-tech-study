import  { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./Accordion.css"

export default function Accordion({ pergunta, resposta }) {

    const [ativo, setAtivo] = useState(false)

    return (
      <div className="accordion-item">
        <div className="accordion-titulo"
        onClick={() => setAtivo(!ativo)}>
            <span>{pergunta}</span>
            <span className={`icon ${ativo ? "ativo" : ""}`}>
                {ativo ? <FaMinus /> : <FaPlus />}
            </span>
        </div>

        {ativo && (
          <div className="accordion-conteudo">
            {resposta}
          </div>
        )}
      </div>
    )
}