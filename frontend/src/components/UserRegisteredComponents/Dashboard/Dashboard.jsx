import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken, usuarioActual } from "../../../redux/actions/actionUser";
import LeftMenu from "../LeftMenu/LeftMenu";
import { useDisclosure } from "@chakra-ui/react";
import MenuComponent from "../LeftMenu/MenuComponent";
import "../../../assets/scss/layout/_dashboard.scss";

export default function Dashboard() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  // const params = window.location.href
  const usuarioAct = useSelector((state) => state.refreshToken);
  // const [showModal, setShowModal] = useState(false)
  // const [refreshToken, setRefreshToken] = useState('');
  useEffect(() => {
    dispatch(refreshToken());
    usuarioAct ? dispatch(usuarioActual()) : null;
  }, [dispatch, usuarioAct]);

  return (
    <div>
      <div>
        <MenuComponent onToggle={onToggle} />
      </div>
      <div>
        {/* Dashboard's left side  */}
        <LeftMenu isOpen={isOpen} />
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
