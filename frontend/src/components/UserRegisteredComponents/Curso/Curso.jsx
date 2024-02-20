import React from 'react'
import '../../../assets/scss/layout/_curso.scss'
import { NavLink } from 'react-router-dom'

export default function Curso({id, name, description}) {
  return (
    <div className='bg-curso'>
      <NavLink to={`/detalles/${id}`}>
        <div className='each-curso'>
              <p>{name}</p>
              <p>{description}</p>
        </div>
      </NavLink>
    </div>
  )
}