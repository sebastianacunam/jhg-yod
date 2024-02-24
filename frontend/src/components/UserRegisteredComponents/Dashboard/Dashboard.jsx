import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usuarioActual } from "../../../redux/actions/actionUser";
import LeftMenu from "../LeftMenu/LeftMenu";
import "../../../assets/scss/layout/_dashboard.scss";

export default function Dashboard() {
  const dispatch = useDispatch();
  // const params = window.location.href
  // const usuarioAct = useSelector((state) => state.usuarioActual);
  // const [showModal, setShowModal] = useState(false)
  // const [showModalNotification, setShowModalNotification] = useState(false)
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? dispatch(usuarioActual()) : null;
  }, []);

  return (
    <div>
      <div>
        {/* Dashboard's left side  */}
        <LeftMenu />
        {/* Dashboard's right side  */}
      </div>
      <div className='container-left-n-right'>
        <div className='right-section'>
          <h1>Bienvenido a Nestify</h1>
        </div>
      </div>
    </div>
  );
}
