import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBootcamps } from "../../../../redux/actions/actionBootcamps";
import Bootcamp from "../Bootcamp/Bootcamp.jsx";
import LeftMenu from "../../LeftMenu/LeftMenu";

export default function Bootcamps() {
  const dispatch = useDispatch();
  const bootcamps = useSelector((state) => state.allBootcamps);

  useEffect(() => {
    dispatch(getBootcamps());
  }, []);

  return (
    <div className='container-left-n-right'>
      <LeftMenu />
        <div className='right-section'>
          <h1>Da tus primeros pasos.</h1>
          <h3>Estos son nuestros bootcamps.</h3>
            <div className='mc-container'>
            {bootcamps?.data?.map((e, i) => {
              return (
                <div key={i}>
                  <Bootcamp
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
