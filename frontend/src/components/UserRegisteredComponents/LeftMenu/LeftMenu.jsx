import { useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCases } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
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
  const token = localStorage.getItem("token");

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
        <ul className='leftmenu-items '>
          <li>
            <Link
              to='/dashboard'
              className='dropdown-button font-white-left leftmenu-li-items'>
              <MdDashboard />
              Dashboard
            </Link>
          </li>

          <li className='leftmenu-li-items'>
            <CursosNavbar />
          </li>

          <li className='leftmenu-li-items'>
            <BootcampsNavbar />
          </li>
          <li className='leftmenu-li-items'>
            <MentoriasNavbar />
          </li>
          <Link className='font-white-left' to='/anuncios'>
            <li className='leftmenu-li-items leftmenu-li-items'>-Anuncios</li>
          </Link>
          <Link className='font-white-left' to='/dashboard'>
            <li className='leftmenu-li-items leftmenu-li-items'>-Beneficios</li>
          </Link>
          <li className='dropdown-button leftmenu-li-items'>
            <BsPeopleFill />
            Comunidades
          </li>
          <Link className='font-white-left dropdown-button' to='/bolsa-empleo'>
            <li className='dropdown-button leftmenu-li-items'>
              <MdOutlineCases />
              Bolsa de trabajo
            </li>
          </Link>

          <Link className='font-white-left dropdown-button' to='/perfil'>
            <li className='dropdown-button leftmenu-li-items'>Perfil</li>
          </Link>
        </ul>

        <div className='i-d-l-btn' onClick={() => logOut()}>
          <Link to='/login'>
            <div className='btn-logout'>
              <img className='logout-icon' src={logout} alt='img not found' />
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
