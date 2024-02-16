import { useRef } from "react";
import { NavLink } from "react-router-dom";

//eslint-disable-next-line
const PopupMenu = ({ isOpen, data, setIsMenuOpen }) => {
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  let content = null;
  switch (data) {
    case "Cursos":
      content = (
        <div className='courses-menu-content'>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink className='navlinkNoStyles' to={"/cursos"}>
              <li>Mis cursos</li>
            </NavLink>
            <NavLink className='navlinkNoStyles' to={"/cursos"}>
              <li>Todos los cursos</li>
            </NavLink>
          </ul>
        </div>
      );
      break;
    case "Bootcamps":
      content = (
        <div className='courses-menu-content'>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink className='navlinkNoStyles' to={"/cursos"}>
              <li>Mis bootcamps</li>
            </NavLink>
            <NavLink className='navlinkNoStyles' to={"/cursos"}>
              <li>Todos los bootcamps</li>
            </NavLink>
          </ul>
        </div>
      );
      break;
    case "Mentorias":
      content = (
        <div className='courses-menu-content'>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink className='navlinkNoStyles' to={"/mentorias"}>
              <li>Mis mentorias</li>
            </NavLink>
            <NavLink className='navlinkNoStyles' to={"/mentorias"}>
              <li>Todas las mentorias</li>
            </NavLink>
          </ul>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <div
      ref={menuRef}
      className={`courses-menu ${isOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isOpen && <div className='courses-menu-content'>{content}</div>}
    </div>
  );
};

export default PopupMenu;
