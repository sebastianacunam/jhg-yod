import React from 'react'
import '../../../assets/scss/layout/_curso.scss'

export default function Curso({name, description}) {
  return (
    <div className='bg-curso'>
      <div className='each-curso'>
            <p>{name}</p>
            <p>{description}</p>
      </div>
    </div>
  )
}