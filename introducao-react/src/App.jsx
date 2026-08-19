import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"
import BlackCloverCard from "./Components/BlackCloverCard"

function App() {
  return (
    <>
      <Header title="Meu site" />

      <Header title="Lorem Ipsum" />

      <Header title="Introdução ao React" />

      <Card caption="New lorem ipsum" />

      <Banner>
        <h1>Bem-vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas!</p>
      </Banner>

      <Card caption="Outra descrição para o card" />

      <BlackCloverCard title="Black Clover">
        <p>
          <strong>A segunda temporada do anime Black Clover tem estreia confirmada para outubro de 2026.
               A transmissão oficial e simultânea no Brasil será feita pela Crunchyroll.</strong>
        </p>
      </ BlackCloverCard>

      <Footer text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, numquam!" />
    </>
  )
}

export default App
