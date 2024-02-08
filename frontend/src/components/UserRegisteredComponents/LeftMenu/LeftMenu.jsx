import { React, useEffect } from 'react'
import { usuarioActual } from '../../../redux/actions/actionUser'
import { useDispatch, useSelector } from 'react-redux'
import logout from '../../../assets/images/icons/logout.png'
import '../../../assets/scss/layout/_leftMenu.scss'


import { Link } from 'react-router-dom'

export default function LeftMenu() {

    const dispatch = useDispatch()
    const usuarioAct = useSelector((state) => state.usuarioActual)
    const token = localStorage.getItem("token")
    
    useEffect(() => {
      token
      ? (dispatch(usuarioActual()))
      : null
    }, [])
  
    function logOut() {
      window.localStorage.removeItem("token")
      window.location.reload()
    }

    return (
        <div className='dashboard-left'>
            {/* //menu */}
            <div className='inner-dashboard-left'>
                <p className='welcome-dashboard'>Bienvenido a tu dashboard</p>
                <p>{usuarioAct?.name}</p>
                
                <ul>

                <li>
                    <Link className='font-white-left' to='/dashboard'>Dashboard</Link>
                </li>              
                <li>
                    <div>
                    <Link className='font-white-left' to='/cursos'>Cursos</Link>
                    </div>
                </li>              
                <li>-Bootcamps</li>
                <li>-Mentorías</li>
                <li>-Comunidad "acá rrss ds y telegram" </li>
                <li>-Bolsa de trabajo</li>
                <li>-Beneficios</li>
                <li>
                    <Link className='font-white-left' to='/perfil'>Perfil</Link>
                </li>
                </ul>
                
                <div className='i-d-l-btn' onClick={() => logOut()}>
                    <Link to="/login">
                    <div className='btn-logout'>
                        <img className='logout-icon' src={logout}  alt="img not found" />
                        <p>Logout</p>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
    )
}
