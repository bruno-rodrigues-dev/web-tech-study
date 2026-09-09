import "./BlackCloverCard.css"
import blackCloverImg from "../assets/black-clover.jpg"

function BlackCloverCard({ title, description, news, children }) {
  return (
    <div className="black-clover-card">

        <img src={blackCloverImg} alt="Imagem do anime Black Clover" className="black-clover-card__image" />

      <div className="black-clover-card__content">
        <h2 className="black-clover-card__title">{title}</h2>
        <p className="black-clover-card__description">{description}</p>
        {news && (
          <p className="black-clover-card__news">
            <strong>A segunda temporada do anime Black Clover tem estreia confirmada para outubro de 2026.
               A transmissão oficial e simultânea no Brasil será feita pela Crunchyroll.</strong> {news}
          </p>
        )}
        <div className="black-clover-card__children">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BlackCloverCard
