import "./Card.css"

import imgCard from "../assets/img-card.jpg"

const Card = (props) => {
    return (
        <section>
            <article className="card">
                <img
                    src={imgCard}
                    alt={props.caption || "Imagem"}
                    className="img-card"
                />

                <p className="card-text">{props.caption}</p>
            </article>

            <hr />
        </section>
    )
}

export default Card