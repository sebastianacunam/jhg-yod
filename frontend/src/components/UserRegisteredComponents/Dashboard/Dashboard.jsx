import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { Link, useActionData } from "react-router-dom";
import Curso from "../Curso/Curso";
import LeftMenu from "../LeftMenu/LeftMenu";
import "../../../assets/scss/layout/_dashboard.scss";

export default function Dashboard() {
  const dispatch = useDispatch();
  // const params = window.location.href
  const usuarioAct = useSelector((state) => state.usuarioActual);
  // const [showModal, setShowModal] = useState(false)
  // const [showModalNotification, setShowModalNotification] = useState(false)
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? dispatch(usuarioActual()) : null;
  }, []);

  const cursos = usuarioAct.cursos;

  return (
    <div>
      <div>
        {/* Dashboard's left side  */}
        <LeftMenu />
        {/* Dashboard's right side  */}
      </div>
      <div className='container-left-n-right'>
        <div className='right-section'>
          <h4>cursos</h4>

          {cursos?.length !== 0 ? (
            usuarioAct.cursos?.map((e, i) => {
              return (
                <div key={i}>
                  <Curso
                    id={e?._id}
                    name={e?.name}
                    description={e?.description}
                  />
                </div>
              );
            })
          ) : (
            <div>
              <p>No tienes cursos todavía. </p>
              <p>
                Puedes ver nuestros cursos &nbsp;
                <Link to='/cursos'>acá</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
