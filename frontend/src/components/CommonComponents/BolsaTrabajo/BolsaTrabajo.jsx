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
   const [expandedCards, setExpandedCards] = useState({});
   const [selectedJobType, setSelectedJobType] = useState(null);
   const [selectedJobType2, setSelectedJobType2] = useState(null);
   const [asideVisible, setAsideVisible] = useState(false);


   const jobTypeOptions = [...new Set(empleos.map(empleo => empleo.job_type))]
      .map(jobType => ({ value: jobType, label: jobType }));
   const empleosFiltradosPorJobType = empleos.filter(
      empleo => !selectedJobType || empleo.job_type === selectedJobType.value
   );
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentJobs = empleosFiltradosPorJobType.slice(startIndex, endIndex)
   const isNextDisabled = endIndex >= empleosFiltradosPorJobType.length;

   useEffect(() => {
      dispatch(getEmpleos());
   }, [dispatch]);

   const aplicarFiltros = () => {
      if (selectedCategory) {
         const query = `?category=${selectedCategory.value}`;
         dispatch(getEmpleos(query));
         setSelectedJobType(selectedJobType2)
         setCurrentPage(1);
      } else {
         dispatch(getEmpleos());
         setSelectedJobType(selectedJobType2)
         setCurrentPage(1);
      }
   };

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
            style={{
               backgroundImage: `linear-gradient(to left, #0083a3, #00adbf)`,
            }}
            borderRadius='2rem'
            onClick={() => handleToggleExpand(e.id)}
            cursor="pointer"
            w={asideVisible ? 1250 : 1400}
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
                     <Button borderRadius='2rem' variant='solid' backgroundColor='#1c9ebc' textColor='black' marginRight='13rem' marginTop='-8rem' w="13rem" h='4rem' fontSize='1.5rem'  >
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                           Ver Trabajo
                        </a>
                     </Button>
                  </Flex>

               </CardFooter>
            </Stack>
         </Card>
      </Box >
   ));

   const seenCategories = {};
   const options = empleos
      .filter(e => {
         if (!seenCategories[e.category]) {
            seenCategories[e.category] = true;
            return true;
         }
         return false;
      })
      .map(e => ({ value: e.category, label: e.category }));


   const limpiarFiltros = () => {
      setSelectedCategory(null);
      setSelectedJobType2(null);
      setSelectedJobType(null);
      setCurrentPage(1);
   };

   return (
      <div>
         <LeftMenu />
         <section className="conteiner-empleo">
            <header className="header-empleo">
               {setEmpleos.length ? <h1>Bolsa de empleos</h1> : ""}
            </header>
            <div className="ocultar-aside" onClick={() => setAsideVisible(!asideVisible)}>
               {!asideVisible ? <Icon
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
               />}
            </div>
            {asideVisible && (
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
            )}
            <main className="main-empleo">
               {setEmpleos.length ? setEmpleos : <div style={{ textAlign: "center" }}><h1>Cargando empleos</h1></div>}
               {setEmpleos.length ? <Pagination
                  items={empleos}
                  itemsPerPage={itemsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  isNextDisabled={isNextDisabled}
               /> : ""}
            </main>
         </section>
      </div >
   );
}

