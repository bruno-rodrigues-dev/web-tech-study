import { useEffect, useState } from "react"
import "./listagem.css"

export default function Listagem() {
      const [usuario, setUsuario] = useState([]);
    
        useEffect(() => {
            fetch("http://localhost:3000/usuariosNews")
                .then((response) => response.json())
                .then((data) => setUsuario(data))
                .catch((error) => console.log(error))
        }, [])
  return (
    <section className="secao-listaUsuarios">
        <h3 className="titulo-listagem">Usuarios cadastrados</h3>

            {usuario.map((u) => (
                    <div key={u.id} className="container-listagem">
                        <h2>{u.nome}</h2>
                        <p>{u.email}</p>
                    </div>
                ) 
            )}
    </section>
  )
}
