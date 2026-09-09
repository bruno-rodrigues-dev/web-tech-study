import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import NotFound from "./Pages/NotFound";
import Duvida from "./Pages/Duvida";
import Nav from "./components/Nav";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/duvida" element={<Duvida />} />
      </Routes>
    </BrowserRouter>
  )
}