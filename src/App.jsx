import Header from "./components/Header"
import Home from "./Pages/Home"
import Footer from"./components/Footer"
import Router from "./Router"
import"./global.css"
import Nav from "./components/Nav"
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App
