import "./StrangerThings.css"
import stLogo from "../../assets/stLogo.png"

const StrangerThings = (props) => {
  return (
    <section className="st-secao">
        

        <div className="container">
            <img src ={stLogo}/>
            <p className="temporada">{props.temporada}</p>
            <p className="descricao">{props.descricao}</p>
        </div>

        {props.children}
    </section>
  )
}

export default StrangerThings
