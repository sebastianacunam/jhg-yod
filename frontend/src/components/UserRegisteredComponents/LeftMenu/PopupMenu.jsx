import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const PopupMenu = ({ isOpen,data, setIsMenuOpen }) => {
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className={`courses-menu ${isOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isOpen && (
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
      )}
    </div>
  );
};

export default PopupMenu;
