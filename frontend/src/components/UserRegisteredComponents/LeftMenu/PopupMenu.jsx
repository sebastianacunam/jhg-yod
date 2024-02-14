import { useRef } from "react";
import { NavLink } from "react-router-dom";

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
            <li>
              <NavLink className='navlinkNoStyles'>Mis cursos</NavLink>
            </li>
            <li>
              <NavLink className='navlinkNoStyles' to={"/cursos"}>
                Todos los cursos
              </NavLink>
            </li>
          </ul>
        </div>
      );
      break;
    case "Bootcamps":
      content = (
        <div className='courses-menu-content'>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li>Mis bootcamps</li>
            <li>Todos los bootcamps</li>
          </ul>
        </div>
      );
      break;
    case "Mentorias":
      content = (
        <div className='courses-menu-content'>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li>Mis mentorias</li>
            <li>Todas las mentorias</li>
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
