import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
// import '../../../assets/scss/layout/_leftMenu.scss'

function ComunidadesNavbar() {
  return (
    <div>
      <Popover
        isLazy
        returnFocusOnClose={false}
        trigger='hover'
        placement='right-start'>
        <PopoverTrigger>
          <Link className='nav-link'>Comunidades</Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow placement='left' />
          <PopoverHeader>
            <a href='/https://discord.gg/H8ZW5SXr '>
              <li className='comunidad-menu'>
                <BsDiscord /> &nbsp;Discord
              </li>
            </a>
          </PopoverHeader>
          <PopoverBody>
            <a
              href='https://t.me/joshuaherreragroupnomadas'
              target='_blank'
              rel='noreferrer'>
              <li className='comunidad-menu'>
                <FaTelegramPlane />
                &nbsp; Telegram
              </li>
            </a>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ComunidadesNavbar;
