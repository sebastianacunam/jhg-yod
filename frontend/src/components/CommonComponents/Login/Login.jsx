import React from 'react'
import MenuLogin from '../MenuLogin/MenuLogin/MenuLogin'
import FormLogin from '../FormLogin/FormLogin'
import s from '../Login/Login.module.css'

export default function Login() {
  return (
    <div className={s.bgcontainer}>
        <div className={s.bg}> 
            <MenuLogin/>
            <h1 className={s.fuentes}>Log in to Material Dashboard NodeJS Live Preview</h1>
            <FormLogin/>
        </div>
    </div>
  )
}
