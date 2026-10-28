import Box from "../../components/Box"
import img1 from "../../assets/img/box-1.jpg"
import img2 from "../../assets/img/box-2.jpg"
export default function index() {
  return (
    <main className="container">
        <section className="d-flex secao">
            <Box
                img={img1}
                title="titulo componente"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Box
                img={img2}
                title="titulo componente"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
        </section>
    </main>
  )
}

