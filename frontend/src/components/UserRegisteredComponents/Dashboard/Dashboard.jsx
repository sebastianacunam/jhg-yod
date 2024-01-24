import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { Link, useActionData } from "react-router-dom"
import logout from '../../../assets/images/icons/logout.png'
import Curso from "../../CommonComponents/Curso/Curso";
import '../../../assets/scss/layout/_dashboard.scss'


export default function Dashboard() {

  const dispatch = useDispatch()
  // const params = window.location.href
  const usuarioAct = useSelector((state) => state.usuarioActual)
  // const [showModal, setShowModal] = useState(false)
  // const [showModalNotification, setShowModalNotification] = useState(false)
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
  
  const cursos = usuarioAct.cursos


  return (
    
    <div className="contenedorTotal">
      {/* Dashboard's left side  */}
        <div className='dashboard-left'>
          {/* //menu */}
          <div className='inner-dashboard-left'>
            <p className='welcome-dashboard'>Bienvenido a tu dashboard</p>
            <p>{usuarioAct?.name}</p>
            
            <ul>
              <li>
                <Link className='font-white-left' to='/cursos'>Cursos</Link>
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

      {/* Dashboard's right side  */}
        
        <div className='dashboard-right'>  
          
          <h4>cursos</h4>
          <div className='dashboard-curso'>

            {
              cursos?.length !== 0 ? 
              usuarioAct.cursos?.map((e,i)=>{
                  return(
                    <div key={i}>
                    <Curso
                      id={e?._id}
                      name={e?.name}
                      description={e?.description}
                      />
                    </div>
                  )
                  })
              : 
              <div>
                <p>No tienes cursos todavía. </p>
                <p>Puedes ver nuestros cursos &nbsp;
                  <Link to='/cursos'>acá</Link>  
                </p>
              </div>
            }
          </div>


        </div>
     
      </div>

  );
}
