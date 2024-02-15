import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftMenu from "../LeftMenu/LeftMenu";
import { getMentorias } from "../../../redux/actions/actionMentorias";
import Mentoria from "../Mentoria/Mentoria";

function Mentorias() {
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
      <div>
        {mentorias?.map((e, i) => (
          <div key={i}>
            <Mentoria id={e._id} name={e.name} description={e.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentorias;
