import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../../assets/scss/layout/_detalles.scss";
import { getCursoById } from "../../../redux/actions/actionCurso.js";
import { getBootcampById } from "../../../redux/actions/actionBootcamps.js";
import img from "../../../assets/images/bg-sign-up-cover.jpeg";
import LeftMenu from "../LeftMenu/LeftMenu.jsx";
import { getMentoriaById } from "../../../redux/actions/actionMentorias.js";
import { getAnuncioById } from "../../../redux/actions/actionAnuncios.js";

const CursoDetail = () => {
  const [producto, setProducto] = useState({});
  let productoId = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getCursoById(productoId.id)
      
      if (data.error === true) {
        data = await getBootcampById(productoId.id)
        if (data.error === true) {
            data = await getMentoriaById(productoId.id);
            if (data.error === true) {
                data = await getAnuncioById(productoId.id);
            }
        };
      };

      setProducto(data.data);
    };
    fetchData();
  }, [productoId]);

  return (
    <div>
      <div>
        <LeftMenu />
      </div>
      <div className="detail-container">
        <div className="column-container">
          <div className="detail-info-container">
            <h3>{producto?.name}</h3>
            <h4>{producto?.description}</h4>
          </div>
          <div>
            {producto?.type === "CURSO" ? (
              <NavLink to={"/cursos"}>
                <button className="details-btns">Cursos</button>
              </NavLink>
            ) : producto?.type === "BOOTCAMP" ? (
              <NavLink to={"/bootcamps"}>
                <button className="details-btns">Bootcamps</button>
              </NavLink>
            ) : producto?.type === "MENTORIA" ? (
              <NavLink to={"/mentorias"}>
                <button className="details-btns">Mentorias</button>
              </NavLink>
            ) : producto?.type === "ANUNCIO" ? (
              <NavLink to={"/anuncios"}>
                <button className="details-btns">Anuncios</button>
              </NavLink>
            ) : (
              <button className="details-btns">Cargando...</button>
            )}
          </div>
        </div>

        <div className="column-container">
          <div className="img-container">
            <img src={img} alt="example" />
          </div>
          <div>
            {producto?.type === "CURSO" ? (
              <button className="details-btns">
                <NavLink to={`/checkout/${productoId.id}`}>
                  Comprar Curso
                </NavLink>
              </button>
            ) : producto?.type === "BOOTCAMP" ? (
              <button className="details-btns">
                <NavLink to={`/checkout/${productoId.id}`}>
                  Comprar Bootcamp
                </NavLink>
              </button>
            ) : producto?.type === "MENTORIA" ? (
              <button className="details-btns">
                <NavLink to={`/checkout/${productoId.id}`}>
                  Comprar Mentoria
                </NavLink>
              </button>
            ) : producto?.type === "ANUNCIO" ? (
              <button className="details-btns">
                <NavLink to={`/checkout/${productoId.id}`}>
                  Comprar Anuncio
                </NavLink>
              </button>
            ) : (
              <button className="details-btns">Cargando...</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoDetail;
