import React from 'react'
import "./sobre.css"

export default function Sobre() {
  return (
    <section className="container">

      <h1 className="sobre-title">Sobre os jogos</h1>

      <div className="jogos-container">

        <div className="jogo-box">
          <h2>Ghost of Tsushima</h2>

          <p>
            Ghost of Tsushima é um jogo de ação e aventura ambientado no Japão
            feudal. O jogador acompanha Jin Sakai em sua luta para proteger
            sua terra durante a invasão mongol.
          </p>
        </div>

        
        <div className="jogo-box">
          <h2>Ghost of Yōtei</h2>

          <p>
            Ghost of Yōtei é um jogo de ação e aventura desenvolvido pela
            Sucker Punch Productions. A história acompanha uma nova protagonista
            em uma jornada pelo Japão.
          </p>
        </div>

      </div>

    </section>
  )
}