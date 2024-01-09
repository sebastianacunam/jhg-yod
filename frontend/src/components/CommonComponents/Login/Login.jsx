import React from 'react'
import MenuLogin from '../MenuLogin/MenuLogin/MenuLogin'
import FormLogin from '../FormLogin/FormLogin'
import '../../../assets/scss/layout/_login.scss'

export default function Login() {  
  return (
    <div className='bgcontainer'>
        <div className='bg'> 
            <MenuLogin/>
            <h1 className='fuentes'>Log in to Material Dashboard NodeJS Live Preview</h1>
            <FormLogin/>
        </div>
    </div>
  )
}