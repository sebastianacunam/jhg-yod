import React from 'react'
import '../../../assets/scss/layout/_beneficio.scss'


export default function Beneficio({name, description, img}) {
  return (
    <div className='bg-beneficio'>
      <div className='each-beneficio'>
            <img className='img-beneficio' src={img} alt="img not found" />
            <p>{name}</p>
            <p className='p-beneficio'>{description}</p>
      </div>
    </div>
  )
}
