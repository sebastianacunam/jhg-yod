/* eslint-disable react/prop-types */
import { Button, Flex } from "@chakra-ui/react";
import makeAnimated from 'react-select/animated';
import Select from "react-select";


export const Aside = ({ asideVisible, options, setSelectedCategory, selectedCategory, jobTypeOptions, setSelectedJobType2, selectedJobType2, aplicarFiltros, limpiarFiltros }) => {
   const animatedComponent = makeAnimated();
   return asideVisible && (
      <aside className="aside-empleo">

         <div className="div-select">
            <Select
               options={options}
               placeholder="Categorías"
               components={animatedComponent}
               onChange={(selectedOptions) => {
                  setSelectedCategory(selectedOptions);
               }}
               value={selectedCategory}
            />
         </div>
         <div>
            <Select
               options={jobTypeOptions}
               placeholder="Tipo de empleo"
               components={animatedComponent}
               onChange={(selectedOptions) => {
                  setSelectedJobType2(selectedOptions);
               }}
               value={selectedJobType2}
            />
         </div>
         <div>
            <Flex justifyContent="center" gap="6rem">
               <Button
                  borderRadius="2rem"
                  variant="solid"
                  style={{
                     backgroundColor: `#0083a3`,
                  }}
                  w="11rem"
                  h="4rem"
                  fontSize="1.4rem"
                  onClick={aplicarFiltros}
                  color='white'
               >
                  Aplicar Filtros
               </Button>
               <Button
                  borderRadius="2rem"
                  variant="black"
                  colorScheme="red"
                  w="11rem"
                  h="4rem"
                  fontSize="1.4rem"
                  onClick={limpiarFiltros}
                  style={{
                     backgroundColor: `#0083a3`,
                  }}
                  color='white'
               >
                  Limpiar filtros
               </Button>
            </Flex>
         </div>
      </aside>
   )


};