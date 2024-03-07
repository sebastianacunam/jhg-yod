/* eslint-disable react/prop-types */
import { Button, Flex } from "@chakra-ui/react";
import makeAnimated from 'react-select/animated';
import Select from "react-select";


export const Aside = ({ options, setSelectedCategory, selectedCategory, jobTypeOptions, setSelectedJobType2, selectedJobType2, aplicarFiltros, limpiarFiltros }) => {
   const animatedComponent = makeAnimated();

   const customStyles = {
      control: (provided, state) => ({
         ...provided,
         width: 200,
         borderColor: state.isFocused ? '#00acbfb9' : "#00acbfb9",
         '&:hover': {
            borderColor: '#00acbfb9'
         },
      }),
       option: (provided, state) => ({
         ...provided,
         color: state.isSelected ? 'black' : 'black',
         backgroundColor: state.isSelected ? 'blue' : state.isFocused ?'#00acbfb9' : 'white',
       }),
   };

   return options && (
      <aside className="aside-empleo">
         <div className="div-select-aside">
            <Select
               options={options}
               placeholder="Categorías"
               components={animatedComponent}
               onChange={(selectedOptions) => {
                  setSelectedCategory(selectedOptions);
               }}
               value={selectedCategory}
               styles={customStyles}

            />
            <Select
               options={jobTypeOptions}
               placeholder="Tipo de empleo"
               components={animatedComponent}
               onChange={(selectedOptions) => {
                  setSelectedJobType2(selectedOptions);
               }}
               value={selectedJobType2}
               styles={customStyles}
            />
            <Flex justifyContent="center" gap="2rem">
               <Button
                  borderRadius="2rem"
                  variant="solid"
                  style={{
                     backgroundColor: `#0083a3`,
                  }}
                  w="10rem"
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
                  w="10rem"
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