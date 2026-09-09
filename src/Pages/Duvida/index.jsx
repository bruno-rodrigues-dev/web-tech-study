import React from 'react'
import "./duvida.css"

export default function Duvida() {
  return (
    <section className="container">

      <h1 className="duvida-title">Tire suas dúvidas</h1>

      <p className="duvida-text">
        Preencha o formulário abaixo e envie sua dúvida.
      </p>

      <form className="duvida-form">

        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label htmlFor="duvida">Sua dúvida:</label>
          <textarea
            id="duvida"
            name="duvida"
            placeholder="Digite sua dúvida"
          ></textarea>
        </div>

        <button type="submit">
          Enviar dúvida
        </button>

      </form>

    </section>
  )
}