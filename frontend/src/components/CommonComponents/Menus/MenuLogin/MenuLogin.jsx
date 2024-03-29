import React from 'react'
import '../../../../assets/scss/layout/_menuLogin.scss'
import logo from '../../../../assets/images/logos/logo.png'
import { Link } from 'react-router-dom'


export default function MenuLogin() {

    return (
        <div className='bg-menu-login'>
            <div className='bg-login'>
                <div className='menu1'>
                    <img className='logoLogin' src={logo} alt='img not found' />
                </div>
                <div className='menu2'>
                    <div className='sub-menu1'>
                        <Link to='/register' className='sub-link' style={{ color: 'gray', fontWeight: "bold" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                            Registrar
                        </Link>
                    </div>
                    <div className='sub-menu2'>
                        <Link to='/login' className='sub-link' style={{ color: 'gray', fontWeight: "bold" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-key" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" /><path d="M15 9h.01" /></svg>
                            Login
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    )
}   
