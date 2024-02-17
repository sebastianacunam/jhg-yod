import LeftMenu from "../../UserRegisteredComponents/LeftMenu/LeftMenu";
import '../../../assets/scss/layout/_bolsaEmpleo.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpleos } from "../../../redux/actions/actionEmpleos";
import { Pagination } from "../Pagination/Pagintation";

export default function BolsaTrabajo() {
   const empleos = useSelector((state) => state.allEmpleos)
   const dispatch = useDispatch();
   const itemsPerPage = 20;
   const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
      dispatch(getEmpleos())
   }, [dispatch]);


   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentJobs = empleos.slice(startIndex, endIndex)


   const setEmpleos = currentJobs && currentJobs.map(e => (
      <ul className="ul-container-empleo" key={e.id}>
         <li className="card-empleo">
            <h4>Titulo: {e.title}</h4>
            <h4>Categoría: {e.category}</h4>
            <h4>Logo: {e.company_logo}</h4>
            <h4>Nombre de la compañía: {e.company_name}</h4>
            <h4>Tipo de empleo: {e.job_type}</h4>
            <h4>Link del empleo: {e.url}</h4>
         </li>
      </ul>
   ));

   return (
      <div>
         <LeftMenu />
         <section className="conteiner-empleo">
            <header className="header-empleo">Header</header>
            <aside className="aside-empleo">Aside</aside>
            <main className="main-empleo">
               {setEmpleos}
               <Pagination
                  items={empleos}
                  itemsPerPage={itemsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
               />
            </main>
            <footer className="footer-empleo">Footer</footer>
         </section>
      </div>
   );
}
