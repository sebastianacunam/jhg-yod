import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCursoById } from "../../../../redux/actions/actionCurso";
import LeftMenu from "../../LeftMenu/LeftMenu";
import img from "../../../../assets/images/bg-sign-up-cover.jpeg";
import "../../../../assets/scss/layout/_detalles.scss";

const CursoDetail = () => {
  const [curso, setCurso] = useState({});
  let cursoId = useParams();


  useEffect(() => {
    const fetchData = async () => {
      let data = await getCursoById(cursoId.id);
      setCurso(data);
    };
    fetchData();
  }, [cursoId]);

  return (
    <div>
      <div>
        <LeftMenu />
      </div>
      <div className="detail-container">
        <div className="column-container">
          <div className="detail-info-container">
            <h3>{curso.name}</h3>
            <h4>{curso.description}</h4>
          </div>
          <div>
            <NavLink to={"/cursos"}>
              <button className="details-btns">Cursos</button>
            </NavLink>
          </div>
        </div>

        <div className="column-container">
          <div className="img-container">
            <img src={img} alt="example" />
          </div>
          <div>
              <button className="details-btns" >
            <NavLink to={`/checkout/${cursoId.id}`}>
                Comprar Curso
            </NavLink>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoDetail;
