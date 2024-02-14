import LeftMenu from "../../UserRegisteredComponents/LeftMenu/LeftMenu";
// import { useState } from "react";
import '../../../assets/scss/layout/_bolsaEmpleo.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpleos } from "../../../redux/actions/actionEmpleos";

export default function BolsaTrabajo() {
   const empleos = useSelector((state) => state.allEmpleos)
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getEmpleos())
   }, [dispatch])
   console.log(empleos);

   return (
      <div>
         <LeftMenu />
         <section className="conteiner-empleo">
            <header className="header-empleo">Header</header>
            <aside className="aside-empleo">Aside</aside>
            <main className="main-empleo">
               {
                  empleos && empleos.map(e => {
                     return (
                        <ul className="ul-container-empleo"  key={e.id}>
                           <li className="card-empleo">
                              <h4>Titulo: {e.title}</h4>
                              <h4>Categoría: {e.category}</h4>
                              <h4>Logo: {e.company_logo}</h4>
                              <h4>Nombre de la compañía: {e.company_name}</h4>
                              <h4>Tipo de empleo: {e.job_type}</h4>
                              <h4>Link del empleo: {e.url}</h4>
                           </li>
                        </ul>
                     )
                  })
               }
            </main>
            <footer className="footer-empleo">Footer</footer>
         </section>
      </div>
   );
}
