import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function CursosNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Popover
        isLazy
        returnFocusOnClose={false}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        placement='right-start'>
        <PopoverTrigger>
          <Link className='nav-link'>
            <MdOutlineArrowForwardIos />
            Cursos
          </Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow placement='left' />
          <PopoverHeader>
            <Link to={"/cursos"}>
              <li>Mis cursos</li>
            </Link>
          </PopoverHeader>
          <PopoverBody>
            <Link to={"/cursos"}>
              <li>Todos los cursos</li>
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CursosNavbar;
