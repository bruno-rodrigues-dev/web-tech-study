import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import Faq from "./pages/Faq"
import Usuarios from "./pages/Usuarios/Usuarios";
import Cadastro from "./pages/Cadastro/Cadastro";
import News from "./pages/News/News";

export default function Router() {
  return (

    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/news" element={<News/>}/>

        </Routes>
    </BrowserRouter>
  )
  
}
