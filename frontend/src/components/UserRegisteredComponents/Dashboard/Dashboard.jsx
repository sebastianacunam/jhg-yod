import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { Link } from "react-router-dom"
import Curso from "../../CommonComponents/Curso/Curso";


export default function Dashboard() {

  const dispatch = useDispatch()
  const params = window.location.href
  const usuarioAct = useSelector((state) => state.usuarioActual)
  // const [showModal, setShowModal] = useState(false)
  // const [showModalNotification, setShowModalNotification] = useState(false)
  const token = localStorage.getItem("token")

  // console.log("a ver si trae token", token)

  useEffect(() => {
    token
      ? (dispatch(usuarioActual()))
      : null
  }, [])

  function logOut() {
    window.localStorage.removeItem("token")
    window.location.reload()
  }

  console.log("a ver qué trae usuarioAct", usuarioAct)
  return (
    <div>
      <div className="contenedorTotal">
        <h1>
        {usuarioAct?.name}
        </h1>

        <h1>cursos</h1>{usuarioAct.cursos?.map((e,i)=>{
          return(
            <div key={i}>
            
            <Curso
              id={e?._id}
              name={e?.name}
              description={e?.description}
              />
            </div>
          )
        })}
      </div>
      <div onClick={() => logOut()}>
        <Link to="/login">
          <h3>Logout</h3>
        </Link>
      </div>
    </div>
  );
}
