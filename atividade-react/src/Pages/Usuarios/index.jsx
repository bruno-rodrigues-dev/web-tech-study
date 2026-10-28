import { useState, useEffect } from "react"

import "./Usuarios.css"

export default function Index() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="container usuarios">
      <h1>Lista de Usuários</h1>

      {usuarios.map((user) => (
        <article key={user.id} className="content-usuarios">
          <strong>Nome: {user.nome}</strong>
          <br />
          <strong>Telefone: {user.telefone}</strong>
          <br />
          <strong>Email: {user.email}</strong>
          <br />
          <button className="delete">Deletar</button>
          <hr />
        </article>
      ))}
    </section>
  )
}