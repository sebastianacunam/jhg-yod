import React from 'react'
import MenuRegister from '../Menus/MenuRegister/MenuRegister'
import FormRegister from '../FormRegister/FormRegister'
import Footer from '../Footer/Footer'
import '../../../assets/scss/layout/_register.scss'


export default function Register() {
  return (
    <div className='bg-register'>
      <MenuRegister/>
      <FormRegister />
      <Footer />
    </div>
  )
}
