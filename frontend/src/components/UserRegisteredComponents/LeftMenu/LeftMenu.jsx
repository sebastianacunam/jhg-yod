import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCases } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import logout from "../../../assets/images/icons/logout.png";
import "../../../assets/scss/layout/_leftMenu.scss";
import { Link } from "react-router-dom";
import PopupMenu from "./PopupMenu";
import { getCursos } from "../../../redux/actions/actionCurso.js";
import { getMentorias } from "../../../redux/actions/actionMentorias.js";

export default function LeftMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupText, setPopupText] = useState("");
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
  const handleMouseEnter = (text) => {
    setIsMenuOpen(true);
    setPopupText(text);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsMenuOpen(true);
      setPopupText("");
    }, 3000);
  };
  return (
    <div className='dashboard-left'>
      {/* //menu */}
      <div className='inner-dashboard-left'>
        <p className='welcome-dashboard'>Bienvenido a tu dashboard</p>
        <p>{usuarioAct?.name}</p>

        <ul>
          <Link className='font-white-left' to='/dashboard'>
            <li>
              <MdDashboard />
              Dashboard
            </li>
          </Link>
          <li>
            <div
              onMouseEnter={() => handleMouseEnter("Cursos")}
              onMouseLeave={handleMouseLeave}>
              <MdOutlineArrowForwardIos />
              Cursos
            </div>
            <PopupMenu
              isOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              data={popupText}
            />
          </li>
          <li>
            <div
              onMouseEnter={() => handleMouseEnter("Bootcamps")}
              onMouseLeave={handleMouseLeave}>
              <MdOutlineArrowForwardIos />
              Bootcamps
            </div>
          </li>
          <li>
            <div
              onMouseEnter={() => handleMouseEnter("Mentorias")}
              onMouseLeave={handleMouseLeave}>
              <MdOutlineArrowForwardIos />
              Mentorías
            </div>
          </li>
          <Link className='font-white-left' to='/dashboard'>
            <li>-Anuncios</li>
          </Link>
          <Link className='font-white-left' to='/dashboard'>
            <li>-Beneficios</li>
          </Link>
          <li>
            <BsPeopleFill />
            Comunidad acá rrss ds y telegram
          </li>
          <Link className='font-white-left' to='/bolsa-empleo'>
            <li>
              <MdOutlineCases />
              Bolsa de trabajo
            </li>
          </Link>

          <Link className='font-white-left' to='/perfil'>
            <li>Perfil</li>
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
