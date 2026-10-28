import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import Listagem from "../../components/Listagem";
import "./news.css"


export default function News() {
    const [formData, setFormData] = useState({
        nome: "",
        email: ""
    })

    const handleChange = (e) => {
        //obter o elemento de entrada atual
        const {name, value} = e.target;
        //extrai o valor e o nome do campo de entrada
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value

        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.nome == "" || formData.email == "" ){
            toast.error("Todos os campos são obrigatorios")
            return false;
        }

        fetch("http://localhost:3000/usuariosNews", {
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
    <main className="container containerNews">
      <h1>News</h1>
        <div>
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
        </div>

        <Listagem/>
    </main>
    )
}
