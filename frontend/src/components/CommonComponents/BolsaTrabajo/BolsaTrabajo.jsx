import LeftMenu from "../../UserRegisteredComponents/LeftMenu/LeftMenu";
import '../../../assets/scss/layout/_bolsaEmpleo.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpleos } from "../../../redux/actions/actionEmpleos";
import { Pagination } from "../Pagination/Pagintation";
import { Heading, CircularProgress } from '@chakra-ui/react';
import { CardTrabajo } from "./CardTrabajo";
import { Aside } from "./Aside";


export default function BolsaTrabajo() {
   const dispatch = useDispatch();
   const empleos = useSelector((state) => state.allEmpleos);
   const [currentPage, setCurrentPage] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [expandedCards, setExpandedCards] = useState({});
   const [selectedJobType, setSelectedJobType] = useState(null);
   const [selectedJobType2, setSelectedJobType2] = useState(null);


   const jobTypeOptions = [...new Set(empleos.map(empleo => empleo.job_type))]
      .map(jobType => ({ value: jobType, label: jobType }));

   const empleosFiltradosPorJobType = empleos.filter(
      empleo => !selectedJobType || empleo.job_type === selectedJobType.value
   );

   const itemsPerPage = 10;
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentJobs = empleosFiltradosPorJobType.slice(startIndex, endIndex)
   const isNextDisabled = endIndex >= empleosFiltradosPorJobType.length;

   useEffect(() => {
      dispatch(getEmpleos());
   }, [dispatch, selectedCategory]);

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
      <div className="container-empleo-gn">
         <LeftMenu />
         <section className="conteiner-empleo">

            {/* ----HEADER------ */}
            <header className="header-empleo">
               {currentJobs.length ?
                  <Heading size='lg' fontSize='50px' ml={-250}>
                     Bolsa de empleos
                  </Heading>
                  : ""}
               <div>
                  {currentJobs.length ?
                     <Aside
                        options={options}
                        setSelectedCategory={setSelectedCategory}
                        selectedCategory={selectedCategory}
                        jobTypeOptions={jobTypeOptions}
                        setSelectedJobType2={setSelectedJobType2}
                        selectedJobType2={selectedJobType2}
                        aplicarFiltros={aplicarFiltros}
                        limpiarFiltros={limpiarFiltros}
                     />
                     : ""}

               </div>
            </header>

            {/* COMPONENTE CARD */}
            <main className="main-empleo">
               {currentJobs.length ?
                  <CardTrabajo
                     currentJobs={currentJobs}
                     handleToggleExpand={handleToggleExpand}
                     expandedCards={expandedCards}
                  /> :
                  <CircularProgress
                     isIndeterminate color='blue.200'
                     ml={700}
                     mt={200}
                     size='100px'
                  />
               }

               {/* COMPONENTE PAGINACION */}
               {currentJobs.length ? <Pagination
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

