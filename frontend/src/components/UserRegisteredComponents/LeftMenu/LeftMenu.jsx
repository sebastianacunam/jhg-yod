import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCases } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import logout from "../../../assets/images/icons/logout.png";
import { getCursos } from "../../../redux/actions/actionCurso";
import "../../../assets/scss/layout/_leftMenu.scss";
import { Link } from "react-router-dom";
import PopupMenu from "./PopupMenu";
import { getMentorias } from "../../../redux/actions/actionMentorias";
export default function LeftMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const usuarioAct = useSelector((state) => state.usuarioActual);
  const courseData = useSelector((state) => state.allCursos);
  const mentoriasData = useSelector((state) => state.allMentorias);
  console.log(mentoriasData);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? dispatch(usuarioActual()) : dispatch(null);

    dispatch(getCursos());
    dispatch(getMentorias());
  }, [token]);

  function logOut() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }
  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsMenuOpen(true);
    }, 0);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 1000);
  };
  return (
    <div className='dashboard-left'>
      {/* //menu */}
      <div className='inner-dashboard-left'>
        <p className='welcome-dashboard'>Bienvenido a tu dashboard</p>
        <p>{usuarioAct?.name}</p>

        <ul>
          <li>
            <MdDashboard />
            <Link className='font-white-left' to='/dashboard'>
              Dashboard
            </Link>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Link className='font-white-left' to='/cursos'>
                <MdOutlineArrowForwardIos />
                Cursos
              </Link>
            </div>
            <PopupMenu
              isOpen={isMenuOpen}
              data={courseData}
              setIsMenuOpen={setIsMenuOpen}
            />
          </li>
          <li>
            <div>
              <MdOutlineArrowForwardIos />
              Bootcamps
            </div>
          </li>
          <li>
            <MdOutlineArrowForwardIos />
            Mentorías
          </li>
          <li>
            <BsPeopleFill />
            Comunidad "acá rrss ds y telegram"
          </li>
          <li>
            <MdOutlineCases />
            Bolsa de trabajo
          </li>
          <li>-Beneficios</li>
          <li>
            <Link className='font-white-left' to='/perfil'>
              Perfil
            </Link>
          </li>
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
