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
  return (
    <div>
      <Popover
        isLazy
        returnFocusOnClose={true}
        trigger='hover'
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
            <Link to={"/mis-cursos"}>
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
