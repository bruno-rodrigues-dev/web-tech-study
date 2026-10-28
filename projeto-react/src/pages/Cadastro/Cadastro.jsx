import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./cadastro.css"

export default function Cadastro() {
    //estado para armazenar os ddos do formulario
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: ""
    })

    //função para atualizar o status ao digitar no formulario
    const handleChange = (e) => {
        //obter o elemento de entrada atual
        const {name, value} = e.target;
        //extrai o valor e o nome do campo de entrada
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value

        }))
    }

    //função para enviar formulario
    const handleSubmit = (e) =>{
        e.preventDefault();
        // enviando os dados para o backend como json

        //validação dos campos
        if(formData.nome == "" || formData.email == "" || formData.telefone == ""){
            toast.error("Todos os campos são obrigatorios")
            return false;
        }

        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        .then((res) => res.json())
        .then((data) => {
            console.log("usuario cadastrado: ", data)
            toast.success("usuario cadastrado com sucesso")
            setFormData({
                nome: "",
                telefone:"",
                email:"",
            })
        })
    } 

    return (
    <main className='container cadUsuarios'>
      <h1>Cadastro de usuarios</h1>
        <form className="form-container" onSubmit={handleSubmit}>
        <article className="form-control">
            <label htmlFor="nome">Nome</label>
            <input 
                type="text" 
                name="nome" 
                value={formData.nome}
                onChange={handleChange}
            />
        </article>
        
        <article className="form-control">
            <label htmlFor="telefone">Telefone</label>
            <input 
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
            />
        </article>

        <article className="form-control">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
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
