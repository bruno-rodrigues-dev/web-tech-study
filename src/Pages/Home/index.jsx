import React from "react";
import Box from "../../components/Box/index"
import img1 from"../../assets/img/goftsushima.png"
import img2 from"../../assets/img/gofyotei.jpg"
import Footer from "../../components/Footer/index"

export default function index() {
  return (
    <main className="container">
      <section className="d-flex">
        <Box
          title="Título do componente"
          description="Este é um parágrafode exemplo para o componente"
          imagem={img1}
          />
          <Box
          title="Título do componente 2"
          description="Esta é uma descrição aleatória"
          imagem={img2} />
      </section>
    </main>
  )
}
