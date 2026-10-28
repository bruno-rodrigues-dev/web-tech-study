import "./ImgCard.css"
import imgCard from "../../assets/img-card-2.jpg"

const ImgCard = (props) => {
  return (
    <div className="image-card">
      <img src={imgCard} alt="" />
      <p className="image-card-caption">{props.caption}</p>
    </div>
  )
}

export default ImgCard
