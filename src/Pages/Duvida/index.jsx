import React, { useEffect, useState } from 'react'
import "./duvida.css"

export default function Duvida() {

  const [usuarios, setUsuarios] = useState([])

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [duvida, setDuvida] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then(response => response.json())
      .then(data => {
        setUsuarios(data)
      })
  }, [])

  function enviarDuvida(event) {
    event.preventDefault()

    const novaDuvida = {
      nome: nome,
      email: email,
      duvida: duvida
    }

    fetch("http://localhost:3000/duvidas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novaDuvida)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Dúvida enviada:", data)

        setNome("")
        setEmail("")
        setDuvida("")

        alert("Dúvida enviada com sucesso!")
      })
  }

  return (
    <section className="container">

      <h1 className="duvida-title">
        Tire suas dúvidas
      </h1>

      <p className="duvida-text">
        Preencha o formulário abaixo e envie sua dúvida.
      </p>

      <form 
        className="duvida-form"
        onSubmit={enviarDuvida}
      >

        <div>
          <label htmlFor="nome">
            Nome:
          </label>

          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">
            E-mail:
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="duvida">
            Sua dúvida:
          </label>

          <textarea
            id="duvida"
            name="duvida"
            placeholder="Digite sua dúvida"
            value={duvida}
            onChange={(event) => setDuvida(event.target.value)}
          ></textarea>
        </div>

        <button type="submit">
          Enviar dúvida
        </button>

      </form>

    </section>
  )
}