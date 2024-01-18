import React from 'react'

export default function Curso({name, description}) {
  return (
    <div>
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}
