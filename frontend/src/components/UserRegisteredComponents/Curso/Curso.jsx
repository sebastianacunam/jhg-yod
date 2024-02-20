import React from 'react'
import '../../../assets/scss/layout/_curso.scss'
import { NavLink } from 'react-router-dom'

export default function Curso({id, name, description}) {
  return (
    <div style={{ border: "2px solid red" }} className='bg-curso'>
      <NavLink to={`/detalles/${id}`}>
        <div style={{ border: "3px solid blue" }} className='each-curso'>
              <p>{name}</p>
              <p>{description}</p>
        </div>
      </NavLink>
    </div>
  )
}