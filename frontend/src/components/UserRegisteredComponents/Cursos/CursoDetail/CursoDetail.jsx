import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductoById } from "../../../../redux/actions/actionCurso";
import LeftMenu from "../../LeftMenu/LeftMenu";
import img from "../../../../assets/images/bg-sign-up-cover.jpeg";
import "../../../../assets/scss/layout/_detalles.scss";

const CursoDetail = () => {
  const [producto, setProducto] = useState({});
  let productoId = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getProductoById(productoId.id);
      setProducto(data);
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
            <h3>{producto.name}</h3>
            <h4>{producto.description}</h4>
          </div>
          <div>
            {producto.type === "CURSO" ? (
              <NavLink to={"/cursos"}>
                <button className="details-btns">Cursos</button>
              </NavLink>
            ) : producto.type === "BOOTCAMP" ? (
              <NavLink to={"/bootcamps"}>
                <button className="details-btns">Bootcamps</button>
              </NavLink>
            ) : producto.type === "MENTORIA" ? (
              <NavLink to={"/mentorias"}>
                <button className="details-btns">Mentorias</button>
              </NavLink>
            ) : producto.type === "ANUNCIO" ? (
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
            {producto.type === "CURSO" ? (
              <button className="details-btns">
                <NavLink to={`/checkout/${productoId.id}`}>
                  Comprar Curso
                </NavLink>
              </button>
            ) : producto.type === "BOOTCAMP" ? (
              <button className="details-btns">
                <NavLink to={`/checkout/${productoId.id}`}>
                  Comprar Bootcamp
                </NavLink>
              </button>
            ) : producto.type === "MENTORIA" ? (
              <button className="details-btns">
                <NavLink to={`/checkout/${productoId.id}`}>
                  Comprar Mentoria
                </NavLink>
              </button>
            ) : producto.type === "ANUNCIO" ? (
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
