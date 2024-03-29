import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Curso from "../Curso/Curso";
import { getCursos } from "../../../../redux/actions/actionCurso";
import LeftMenu from "../../LeftMenu/LeftMenu";

export default function Cursos() {
  const dispatch = useDispatch();
  const cursos = useSelector((state) => state.allCursos);

  useEffect(() => {
    dispatch(getCursos());
  }, []);

  return (
    <div className='container-left-n-right'>
      <LeftMenu />
        <div className='right-section'>
          <h1>Da tus primeros pasos.</h1>
          <h3>Estos son nuestros cursos.</h3>
            <div className='mc-container'>
            {cursos?.data?.map((e, i) => {
              return (
                <div key={i}>
                  <Curso
                    id={e?._id}
                    name={e?.name}
                    description={e?.description}
                    price={e?.price}
                  />
                </div>
              );
            })}
            </div>
        </div>
    </div>
  );
}
