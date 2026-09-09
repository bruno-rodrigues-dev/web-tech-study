import React from 'react'
import "./Box.css"

export default function index(props) {
  console.log(props)
  return (
        <section className='container-box'>
          <img src={props.imagem} alt="" className="image" />
            <h1 className='title-box'>{props.title}</h1>
            <p className='description'>{props.description}</p>
        </section>
  )
}
