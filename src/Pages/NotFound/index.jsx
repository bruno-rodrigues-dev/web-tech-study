import React from 'react'
import "./notFound.css"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container">
      <h1 className="notFound-title">404 - Página não encontrada</h1>

      <p className="notFound-text">
        A página que você está procurando não existe.
      </p>
      <Link to="/" className='notfound-link'>
        Voltar para home
      </Link>
    </section>
  )
}
