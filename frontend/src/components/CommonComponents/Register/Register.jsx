import React from 'react'
import MenuRegister from '../MenuLogin/MenuRegister/MenuRegister'
import FormRegister from '../FormRegister/FormRegister'
import '../../../assets/scss/layout/_register.scss'

export default function Register() {
  return (
    <div className='bg-register'>
      <MenuRegister/>
      <FormRegister />
    </div>
  )
}
