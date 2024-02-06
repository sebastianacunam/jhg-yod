import React from 'react'
import '../../../../assets/scss/layout/_menuLogin.scss'
import logo from '../../../../assets/images/logos/logo.png'
import { Link } from 'react-router-dom'


export default function MenuLogin() {
    // const navigate = useNavigate();

    return (
        <div className='bg-menu-login'>
            <div className='bg-login'>
                <div className='menu1'>
                    <img className='logoLogin' src={logo} alt='img not found' />
                </div>
                <div className='menu2'>
                    <div className='submenu2'>
                        <Link to='/register'>Registrar</Link>
                    </div>
                    <div className='submenu2'>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>

            </div>
        </div>

    )
}   
