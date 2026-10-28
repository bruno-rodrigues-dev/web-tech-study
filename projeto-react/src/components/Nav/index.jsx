import { Link } from "react-router-dom"
import "./Nav.css"

export default function index() {
  return (
    <nav >
        <ul className=" menu">
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                <Link to="/sobre"> Sobre</Link>
            </li>
            <li>
                <Link to="/usuarios">Usuários </Link>
            </li>
            <li>
                <Link to="/faq"> FAQ</Link>
            </li>
            <li>
                <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
        </ul>
    </nav>
  )
}
