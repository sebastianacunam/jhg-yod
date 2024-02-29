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

function MentoriasNavbar() {
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
            Mentorias
          </Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow placement='left' />
          <PopoverHeader>
            <Link to={"/mis-mentorias"}>
              <li>Mis mentorias</li>
            </Link>
          </PopoverHeader>
          <PopoverBody>
            <Link to={"/mentorias"}>
              <li>Todas las mentorias</li>
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MentoriasNavbar;
