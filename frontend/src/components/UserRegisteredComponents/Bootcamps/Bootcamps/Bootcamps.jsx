import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bootcamp from "../Bootcamp/Bootcamp.jsx";
import { getBootcamps } from "../../../../redux/actions/actionBootcamps";
import LeftMenu from "../../LeftMenu/LeftMenu";

export default function Bootcamps() {
  const dispatch = useDispatch();
  const bootcamps = useSelector((state) => state.allBootcamps);
  console.log('desde el componente',bootcamps)
  useEffect(() => {
    dispatch(getBootcamps());
  }, []);

  return (
    <div>
      <div>
        <LeftMenu />
      </div>
      <div className='container-left-n-right'>
        <div className='right-section'>
          <h1>Da tus primeros pasos.</h1>
          <h3>Estos son nuestros bootcamps.</h3>
          {bootcamps?.data?.map((e, i) => {
            return (
              <div key={i}>
                <Bootcamp
                  id={e?._id}
                  name={e?.name}
                  description={e?.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
