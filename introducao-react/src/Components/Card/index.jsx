import './Card.css'
import hero from '../../assets/hero.png'

const Card = () => {
  return (
    <section>
        <article className='card'>
            <img src={hero} alt="" className='img-card'/>

            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sapiente iste quis quisquam officia, vero impedit eaque sunt pariatur possimus molestiae iusto, cum dolorum velit totam alias nam eos explicabo!</p>
        </article>
        <hr />

    </section>
  )
}

export default Card;
