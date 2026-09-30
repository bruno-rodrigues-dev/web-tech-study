import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './cadastro.css'

export default function Index() {

const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
})

// Função para atualizar o estado ao digitar no formulário
const handleChange = (e) => {
    // Obter o elemento de entrada atual
    const { name, value } = e.target

    // Extrair o valor e o nome do campo de entrada
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault()

    if (
        formData.nome === "" ||
        formData.email === "" ||
        formData.telefone === ""
    ) {
        alert("Todos os campos são obrigatórios!")
        return
    }

    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Usuário cadastrado com sucesso: ", data)

        setFormData({
            nome: "",
            telefone: "",
            email: ""
        })
    })
    .catch((error) => {
        console.error("Erro ao cadastrar usuário: ", error)
    })
}

return (
    <main className="container">
        <h1 className="cadastro-title">Cadastro de Usuários</h1>

        <form className="cadastro-form" onSubmit={handleSubmit}>

            <article className="form-control">
                <label htmlFor="nome">Nome</label>

                <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </article>

            <article className="form-control">
                <label htmlFor="telefone">Telefone</label>

                <input
                    type="text"
                    name="telefone"
                    id="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                />
            </article>

            <article className="form-control">
                <label htmlFor="email">Email</label>

                <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </article>

            <button type="submit">Cadastrar</button>

            <ToastContainer />

        </form>
    </main>
)

}