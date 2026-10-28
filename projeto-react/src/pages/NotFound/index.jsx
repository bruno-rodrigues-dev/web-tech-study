import "./NotFound.css"
import {Link} from "react-router-dom";

export default function index() {
  return (
    <section className="container2 notfound-container ">
        <h1 className="notfound"> 404 - Página não encontrada</h1>
        <p className="notfound-text">
            A página que você esta procurando não existe.
        </p>
        <Link to="/" className="notfound-link">
            voltar para a home
        </Link>
    </section>
  )
}
