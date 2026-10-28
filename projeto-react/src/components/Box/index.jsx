import "./Box.css"

export default function index(props) {
  return (
    <section className="container-box">
        <img src={props.img} alt="" className="image"/>
        <h1 className="title-box">{props.title}</h1>
        <p className="description">{props.description}</p>
    </section>
  )
}
