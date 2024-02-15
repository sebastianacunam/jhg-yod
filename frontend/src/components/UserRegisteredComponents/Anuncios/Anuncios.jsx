import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Anuncio from "../Anuncio/Anuncio";
import { getAnuncios } from "../../../redux/actions/actionAnuncios";
import LeftMenu from "../LeftMenu/LeftMenu";

function Anuncios() {
  const dispatch = useDispatch();
  const anuncios = useSelector((state) => state.allAnuncios);
  console.log({ anuncios });
  useEffect(() => {
    dispatch(getAnuncios());
  }, []);
  return (
    <div>
      <div>
        {" "}
        <LeftMenu />{" "}
      </div>
      <div>
        <h1>Anuncios.</h1>
        {anuncios?.map((e, i) => {
          return (
            <div key={i}>
              <Anuncio
                id={e?._id}
                name={e?.name}
                description={e?.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Anuncios;
