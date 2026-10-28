import "./Box.css"

const Box = () => {
    const data = [
        {
            title: "box1",
            textBox: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati exercitationem aspernatur modi rerum minus cum architecto",
            link: "#"
        },
        {
            title: "box2",
            textBox: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati exercitationem aspernatur modi rerum minus cum architecto",
            link: "#"
        },
    ]

  return (
    <div className="box-container">
        {data.map((box, index) => {
            return(
                <div className="box" key={index}>
                    <h2>{box.title}</h2>
                    <p>{box.textBox} </p>
                    <a href={box.link}>Saiba mais</a>
                </div>
            )
        })}

    </div>
  )
}

export default Box
