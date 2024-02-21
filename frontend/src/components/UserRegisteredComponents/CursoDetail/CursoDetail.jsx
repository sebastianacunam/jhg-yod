import { NavLink, useParams } from "react-router-dom";
import "../../../assets/scss/layout/_detalles.scss";
import { useEffect, useState } from "react";
import { getCursoById } from "../../../redux/actions/actionCurso";
import { getSessionStripe } from "../../../redux/actions/actionStripe";
import LeftMenu from "../LeftMenu/LeftMenu";
import img from "../../../assets/images/bg-sign-up-cover.jpeg";

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

  const goSessionStripe = async () => {
    const url = await getSessionStripe(cursoId.id, curso);
    window.location.href = url;
  };

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
            <button className="details-btns" onClick={goSessionStripe}>
              Comprar Curso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoDetail;
