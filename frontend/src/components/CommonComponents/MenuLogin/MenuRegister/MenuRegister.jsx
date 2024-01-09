import React from 'react'
import '../../../../assets/scss/layout/_menuRegister.scss'
import logo from '../../../../assets/images/logos/logo.png'
import { Link } from 'react-router-dom'


export default function MenuRegister() {
    // const navigate = useNavigate();

    return (
        <div className='bgcontainermenuregister'>
            <div className='prueba'>
                <div className='menu1-register'>
                    <img className='logoLogin' src={logo} alt='img not found' />
                </div>
                <div className='menu2-register'>
                    <div>
                        <div className='submenu2'>
                            <Link to='/register'>Registrar</Link>
                        </div>
                    </div>
                    <div>
                        <div className='submenu2'>
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                </div>
                <div  className='menu3-register'> 
                    <p>botón  </p>
                </div>

            </div>
        </div>

    )
}   
