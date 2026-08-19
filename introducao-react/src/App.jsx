import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"

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

      <Footer text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, numquam!" />
    </>
  )
}

export default App
