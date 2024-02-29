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
            Bootcamps
          </Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow placement='left' />
          <PopoverHeader>
            <Link to={"/mis-bootcamps"}>
              <li>Mis bootcamps</li>
            </Link>
          </PopoverHeader>
          <PopoverBody>
            <Link to={"/bootcamps"}>
              <li>Todos los bootcamps</li>
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default BootcampsNavbar;
