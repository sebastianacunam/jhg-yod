import LeftMenu from "../../UserRegisteredComponents/LeftMenu/LeftMenu";
import '../../../assets/scss/layout/_bolsaEmpleo.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpleos } from "../../../redux/actions/actionEmpleos";
import { Pagination } from "../Pagination/Pagintation";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


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


   const setEmpleos = currentJobs && currentJobs.map(e => (
      <ul className="ul-container-empleo" key={e.id}>
         <li className="card-empleo">
            <img src={e.company_logo} alt="Logo de la compañía" style={{ maxWidth: '70px', maxHeight: '100px' }} />
            <h4>Titulo: {e.title}</h4>
            <h4>Categoría: {e.category}</h4>
            <h4>Nombre de la compañía: {e.company_name}</h4>
            <h4>Tipo de empleo: {e.job_type}</h4>
            <h4>Link del empleo:  <a href={e.url} target="_blank" rel="noopener noreferrer">{e.url}</a></h4>
         </li>
      </ul>
   ));


   const options = empleos.map(e => e.category).filter((valor, indice, self) => self.indexOf(valor) === indice).map(e => ({ value: e, label: e, }));
   const handleFilterChange = (selectedOption) => {
      setSelectedCategory(selectedOption);
   };
   const limpiarFiltros = () => {
      setSelectedCategory(null);
   }
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
                     onChange={(selectedOptions) => { handleFilterChange(selectedOptions) }}
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

