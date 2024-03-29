import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { validateUser } from "../../../redux/actions/actionUser.js"
import { ToastContainer } from "react-toastify"

export default function ConfirmarCuenta() {
  const dispatch = useDispatch()
  const respuesta = useSelector((state) => state.confirmacion)
  const params = useParams()
  const { id } = params


  useEffect(() => {
    dispatch(validateUser(id))
  }, [dispatch, id])

  return (
    <div className="contConfirm">
      <h2 className="titleConfirm">
        ¡Bienvenido a <span>Nestify</span>!
        <br />
      </h2>
      <ToastContainer limit={1}/>
      <div className="response">{respuesta.message}</div>
      <br />
      <Link to="/dashboard">
        <button className="btnConfirm">Volver a HOME</button>
      </Link>
    </div>
  )
}