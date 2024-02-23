/* eslint-disable react/prop-types */
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

export const OcultarAside = ({ currentJobs, setAsideVisible, asideVisible }) => {
   return (
      <div className="ocultar-aside" onClick={() => setAsideVisible(!asideVisible)}>
         {currentJobs ? !asideVisible ? <Icon
            as={ChevronDownIcon}
            w={20}
            h={20}
            ml={150}
            mt={1}
            position="absolute"
            transform={'rotate(90deg)'}
         /> : <Icon
            as={ChevronDownIcon}
            w={20}
            h={20}
            ml={2}
            mt={1}
            transform={'rotate(-90deg)'}
         /> : ""}
      </div>
   )

};