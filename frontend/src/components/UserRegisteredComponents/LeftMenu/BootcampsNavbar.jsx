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

function BootcampsNavbar() {
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
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        placement='right-start'>
        <PopoverTrigger>
          <Link className='nav-link'>
            <MdOutlineArrowForwardIos />
            Bootcamps
          </Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow placement='left' />
          <PopoverHeader>
            <Link className='navlinkNoStyles' to={"/bootcamps"}>
              <li>Mis bootcamps</li>
            </Link>
          </PopoverHeader>
          <PopoverBody>
            <Link className='navlinkNoStyles' to={"/bootcamps"}>
              <li>Todos los bootcamps</li>
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default BootcampsNavbar;
