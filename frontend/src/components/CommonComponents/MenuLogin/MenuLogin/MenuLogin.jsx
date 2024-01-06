import React from 'react'
import s from '../MenuLogin/MenuLogin.module.css'


export default function MenuLogin() {
  return (
    <div className={s.bgcontainer}>
        <div className={s.menu1}>
            <p>LOGO NESTIFY </p>
        </div>
        <div className={s.menu2}>
            <div className={s.submenu2}>
                <p>Registrar </p>
            </div>
            <div className={s.submenu2}>
                <p>Login </p>
            </div>
        </div>
        <div  className={s.menu3}> 
            <p>BUTTON  </p>
        </div>
    </div>

  )
}   
