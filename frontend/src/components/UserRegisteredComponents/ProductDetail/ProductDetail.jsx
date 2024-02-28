import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../../assets/scss/layout/_detalles.scss";
import { getCursoById } from "../../../redux/actions/actionCurso.js";
import { getBootcampById } from "../../../redux/actions/actionBootcamps.js";
import img from "../../../assets/images/bg-sign-up-cover.jpeg";
import LeftMenu from "../LeftMenu/LeftMenu.jsx";
import { getMentoriaById } from "../../../redux/actions/actionMentorias.js";
import { getAnuncioById } from "../../../redux/actions/actionAnuncios.js";
import { useSelector } from "react-redux";

const CursoDetail = () => {
  const [producto, setProducto] = useState({});
  let productoId = useParams();
  const userActual = useSelector((state) => state.usuarioActual);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getCursoById(productoId.id);

      if (data.error === true) {
        data = await getBootcampById(productoId.id);
        if (data.error === true) {
          data = await getMentoriaById(productoId.id);
          if (data.error === true) {
            data = await getAnuncioById(productoId.id);
          }
        }
      }

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
            <h3>
              <strong>{producto?.name}</strong>
            </h3>
            <h3>$ {producto?.price} USD</h3>
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
              userActual.cursos.length !== 0 &&
              userActual.cursos.some((curso) => curso.id === productoId.id) ? (
                <div className="div-comprado">Curso Comprado</div>
              ) : (
                <button className="details-btns">
                  <NavLink to={`/checkout/${productoId.id}`}>
                    Comprar Curso
                  </NavLink>
                </button>
              )
            ) : producto?.type === "BOOTCAMP" ? (
              userActual.bootcamps.length !== 0 &&
              userActual.bootcamps.some(
                (bootcamp) => bootcamp.id === productoId.id
              ) ? (
                <div className="div-comprado">Bootcamp Comprado</div>
              ) : (
                <button className="details-btns">
                  <NavLink to={`/checkout/${productoId.id}`}>
                    Comprar Bootcamp
                  </NavLink>
                </button>
              )
            ) : producto?.type === "MENTORIA" ? (
              userActual.mentorias.length !== 0 &&
              userActual.mentorias.some(
                (mentoria) => mentoria.id === productoId.id
              ) ? (
                <div className="div-comprado">Mentoria Comprada</div>
              ) : (
                <button className="details-btns">
                  <NavLink to={`/checkout/${productoId.id}`}>
                    Comprar Mentoria
                  </NavLink>
                </button>
              )
            ) : producto?.type === "ANUNCIO" ? (
              userActual.anuncios.length !== 0 &&
              userActual.anuncios.some(
                (anuncio) => anuncio.id === productoId.id
              ) ? (
                <div className="div-comprado">Anuncio Comprado</div>
              ) : (
                <button className="details-btns">
                  <NavLink to={`/checkout/${productoId.id}`}>
                    Comprar Anuncio
                  </NavLink>
                </button>
              )
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
