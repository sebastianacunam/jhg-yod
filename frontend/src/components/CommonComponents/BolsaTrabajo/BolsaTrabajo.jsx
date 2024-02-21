import LeftMenu from "../../UserRegisteredComponents/LeftMenu/LeftMenu";
import '../../../assets/scss/layout/_bolsaEmpleo.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpleos } from "../../../redux/actions/actionEmpleos";
import { Pagination } from "../Pagination/Pagintation";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Box, Flex, Badge, Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { format } from "@formkit/tempo"


const animatedComponent = makeAnimated();
export default function BolsaTrabajo() {
   const dispatch = useDispatch();
   const empleos = useSelector((state) => state.allEmpleos);
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState(null);

   useEffect(() => {
      if (selectedCategory) {
         const query = `?category=${selectedCategory.value}`;
         dispatch(getEmpleos(query));
      } else {
         dispatch(getEmpleos());
      }
   }, [dispatch, selectedCategory]);

   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentJobs = empleos.slice(startIndex, endIndex)


   const [expandedCards, setExpandedCards] = useState({});

   const handleToggleExpand = (id) => {
      setExpandedCards((prevExpandedCards) => ({
         ...prevExpandedCards,
         [id]: !prevExpandedCards[id],
      }));
   };
   const setEmpleos = currentJobs && currentJobs.map((e) => (
      <Box key={e.id} mb={8} mt={18}>
         <Card
            key={e.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            backgroundColor='blue.100'
            borderRadius='2rem'
            onClick={() => handleToggleExpand(e.id)}
            cursor="pointer"
            w={1250}
         >
            <Icon
               as={ChevronDownIcon}
               w={12}
               h={12}
               ml={2}
               mt={1}
               position="absolute"
               transform={expandedCards[e.id] ? 'rotate(180deg)' : 'none'}
            />
            <Image
               objectFit='cover'
               maxW={{ base: '50%', sm: '80px' }}
               maxH={{ base: '50%', sm: '80px' }}
               src={e.company_logo}
               alt='Logo de la compañía'
               borderRadius='50%'
               mt={20}
               ml={10}
            />
            <Stack
               w="100%"
               direction={{ base: 'column', sm: 'row' }}
               marginLeft='8rem'
            >
               <CardBody>
                  <Flex>
                     <Heading mt={10} ml={-24} size='md' fontSize='1.8rem' height='5rem'>{e.title}</Heading>
                  </Flex>
                  <Text mt={-25} ml={-24}>
                     <Badge borderRadius='1rem' variant="subtle" backgroundColor="white" mr={4} fontSize='1.3rem' color="grey.300" marginBottom='2rem'>
                        {e.job_type}
                     </Badge>
                     <Badge borderRadius='1rem' variant="subtle" backgroundColor="white" mr={4} fontSize='1.3rem' color="grey.300" marginBottom='2rem'>
                        {e.category}
                     </Badge>
                  </Text>
                  {expandedCards[e.id] && (
                     <Text py='5' ml={-24}>
                        <Badge borderRadius='1rem' variant="subtle" backgroundColor="white" mr={4} fontSize='1.3rem' color="grey.300" marginBottom='3rem'>
                           {e.company_name}
                        </Badge>
                        <Badge
                           borderRadius='1rem'
                           variant="subtle"
                           backgroundColor="white"
                           mr={4}
                           fontSize='1.3rem'
                           color="grey.300"
                           marginBottom='3rem' >
                           {typeof e.tags === Array ? e.tags.length <= 9 ? e.tags.join(', ') : e?.tags.join(', ').slice(50, 100) : e.tags.length >= 9 ? e.tags.slice(0, 11) : e.tags}
                        </Badge>
                     </Text>
                  )}
               </CardBody>
               <CardFooter>
                  <Text marginRight='-8rem' marginTop='1'><p>Remoto 🌍</p></Text>
                  <Flex justifyContent="flex-end" alignItems="center">
                     <Text marginRight='-24rem' marginTop='8'><p>{format(e.publication_date, "short")}</p></Text>
                     <Button borderRadius='2rem' variant='solid' colorScheme='green' marginRight='13rem' marginTop='-8rem' w="13rem" h='4rem' fontSize='1.5rem'  >
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                           Ver Trabajo
                        </a>
                     </Button>
                  </Flex>

               </CardFooter>
            </Stack>
         </Card>
      </Box>
   ));


   const options = empleos.map(e => e.category).filter((valor, indice, self) => self.indexOf(valor) === indice).map(e => ({ value: e, label: e, }));

   const limpiarFiltros = () => {
      setSelectedCategory(null);
   };

   return (
      <div>
         <LeftMenu />
         <section className="conteiner-empleo">
            <header className="header-empleo">Header</header>
            <aside className="aside-empleo">
               <div>
                  <Select
                     options={options}
                     placeholder="Categorías..."
                     components={animatedComponent}
                     onChange={(selectedOptions) => { setSelectedCategory(selectedOptions) }}
                     value={selectedCategory}
                  />
                  <button onClick={limpiarFiltros}>Limpiar filtros</button>
               </div>
            </aside>
            <main className="main-empleo">
               {setEmpleos.length ? setEmpleos : <div style={{ textAlign: "center" }}><p>Cargando....</p></div>}
               <Pagination
                  items={empleos}
                  itemsPerPage={itemsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
               />
            </main>
            <footer className="footer-empleo">Footer</footer>
         </section>
      </div >
   );
}

