import { useState, useRef } from "react";

const PopupMenu = ({ isOpen, data, setIsMenuOpen }) => {
  const menuRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleMouseEnter = () => {
    setIsMenuOpen(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMenuOpen(false);
    }, 0);
    setTimeoutId(id);
  };

  return (
    <div
      ref={menuRef}
      className={`courses-menu ${isOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isOpen && (
        <div className='courses-menu-content'>
          <ul onMouseLeave={handleMouseLeave}>
            {data.map((element, index) => (
              <li key={index}>{element.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
