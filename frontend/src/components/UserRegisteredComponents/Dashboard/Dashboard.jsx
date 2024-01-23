import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { Link, useActionData } from "react-router-dom"
import logout from '../../../assets/images/icons/logout.png'
import Curso from "../../CommonComponents/Curso/Curso";
import '../../../assets/scss/layout/_dashboard.scss'


export default function Dashboard() {

  const dispatch = useDispatch()
  const params = window.location.href
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
        <div className='dashboard-left'>
          {/* //menu */}
          <div className='inner-dashboard-left'>
            <h3>Bienvenido a tu dashboard</h3>
            <h1>{usuarioAct?.name}</h1>
            <Link to='/cursos'>
              <p>todos los cursos</p>
            </Link>

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
        <div className='dashboard-right'>
          
          <h1>cursos</h1>{
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
          // <div className='sin-datos'>No hay datos cargados</div>
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

  );
}
