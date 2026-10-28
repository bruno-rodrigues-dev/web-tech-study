import imgFooter from "../../assets/img/footer.jpg"
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

import "./Footer.css"

export default function index() {
  return (
    <footer>
        <div className="img-container">
            <img src={imgFooter} alt="" />
        </div>
        <div className="socialmedia-container">
            
            <h4>Redes sociais</h4>
            <ul>
                <li className="social"><FaInstagram /></li>
                <li className="social"><RiTwitterXFill /></li>
                <li className="social"><FaFacebookSquare/></li>
            </ul>
            
        </div>
        <div className="container-direitos">
            <p>Desenvolvido por Kauana</p>
        </div>
        
    </footer>
  )
}
