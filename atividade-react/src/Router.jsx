import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import NotFound from "./Pages/NotFound";
import Duvida from "./Pages/Duvida";
import News from "./Pages/News/App";
import Nav from "./components/Nav";
import Usuarios from "./Pages/Usuarios";
import Cadastro from "./Pages/Cadastro";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/news" element={<News />} />
        <Route path="/duvida" element={<Duvida />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}