import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <Popover
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        placement='right-start'>
        <PopoverTrigger>
          <Link className='font-white-left'>
            <MdOutlineArrowForwardIos />
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              Mentorias
            </div>
          </Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow placement='left' />
          <PopoverHeader>
            <Link className='navlinkNoStyles' to={"/cursos"}>
              <li>Mis mentorias</li>
            </Link>
          </PopoverHeader>
          <PopoverBody>
            <Link className='navlinkNoStyles' to={"/cursos"}>
              <li>Todas las mentorias</li>
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MentoriasNavbar;
