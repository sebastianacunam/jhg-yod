import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Anuncio from "../Anuncio/Anuncio";
import { getAnuncios } from "../../../../redux/actions/actionAnuncios.js";
import LeftMenu from "../../LeftMenu/LeftMenu.jsx";

function Anuncios() {
  const dispatch = useDispatch();
  const anuncios = useSelector((state) => state.allAnuncios);
  useEffect(() => {
    dispatch(getAnuncios());
  }, []);
  return (
    <div className="container-left-n-right">
        <LeftMenu />
      <div className="right-section">
        <h1>Anuncios.</h1>
        
        <div className="cards-anuncios">
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
    </div>
  );
}

export default Anuncios;
