import"./ImgCard.css"
import ImgCard from "../assets/img-card-2.jpg"

const ImgCard = (props) => {
    return (
        <div className="image-card">
            <img src={imgCard} alt="" className="image-card-img"/>
            <p className="image-card-caption">Lorem ipsum</p>
        </div>
    )
}

export default ImgCard 