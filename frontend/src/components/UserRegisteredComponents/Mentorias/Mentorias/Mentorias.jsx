import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mentoria from "../Mentoria/Mentoria";
import { getMentorias } from "../../../../redux/actions/actionMentorias.js";
import LeftMenu from "../../LeftMenu/LeftMenu";

export default function Mentorias() {
  const dispatch = useDispatch();
  const mentorias = useSelector((state) => state.allMentorias);

  useEffect(() => {
    dispatch(getMentorias());
  }, []);

  return (
    <div>
      <div>
        <LeftMenu />
      </div>
      <div className='container-left-n-right'>
        <div className='right-section'>
          <h1>Da tus primeros pasos.</h1>
          <h3>Estas son nuestras mentorias.</h3>
          {mentorias?.data?.map((e, i) => {
            return (
              <div key={i}>
                <Mentoria
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
