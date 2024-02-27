import { useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCases } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
import { AiFillRocket } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import logout from "../../../assets/images/icons/logout.png";
import "../../../assets/scss/layout/_leftMenu.scss";
import { Link } from "react-router-dom";
import { getCursos } from "../../../redux/actions/actionCurso.js";
import { getMentorias } from "../../../redux/actions/actionMentorias.js";
import CursosNavbar from "./CursosNavbar.jsx";
import BootcampsNavbar from "./BootcampsNavbar.jsx";
import MentoriasNavbar from "./MentoriasNavbar.jsx";
export default function LeftMenu() {
  const dispatch = useDispatch();
  const usuarioAct = useSelector((state) => state.usuarioActual);
  const token = useSelector((state) => state.refreshToken);
  // const token = localStorage.getItem("token");

  useEffect(() => {
    token ? dispatch(usuarioActual()) : dispatch(null);
    dispatch(getCursos());
    dispatch(getMentorias());
  }, [dispatch, token]);

  function logOut() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className='dashboard-left'>
      {/* //menu */}
      <div className='inner-dashboard-left'>
        <div className='welcome-dashboard-wrapper'>
          <p>Bienvenido a tu dashboard</p>
          <p>{usuarioAct?.name}</p>
        </div>
        <ul className='ul-li-items'>
          <li className='li-items'>
            <Link to='/dashboard' className='nav-link'>
              <MdDashboard />
              Dashboard
            </Link>
          </li>
          <li className='li-items '>
            <CursosNavbar />
          </li>
          <li className='li-items'>
            <BootcampsNavbar />
          </li>
          <li className='li-items'>
            <MentoriasNavbar />
          </li>
          <li className='li-items'>
            <Link to='/anuncios' className='nav-link'>
              <AiFillNotification />
              Anuncios
            </Link>
          </li>
          <li className='li-items'>
            <Link to='/beneficios' className='nav-link'>
              <AiFillRocket />
              Beneficios
            </Link>
          </li>
          <li className='li-items'>
            <Link to='/beneficios' className='nav-link'>
              <BsPeopleFill />
              Comunidades
            </Link>
          </li>
          <li className='li-items'>
            <Link to='/bolsa-empleo' className='nav-link'>
              <MdOutlineCases />
              Bolsa de trabajo
            </Link>
          </li>

          <li className='li-items'>
            <Link to='/perfil' className='nav-link'>
              <FaUser />
              Perfil
            </Link>
          </li>
          <div className='i-d-l-btn' onClick={() => logOut()}>
            <Link to='/login'>
              <div className='btn-logout'>
                <img className='logout-icon' src={logout} alt='img not found' />
                <p>Logout</p>
              </div>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
