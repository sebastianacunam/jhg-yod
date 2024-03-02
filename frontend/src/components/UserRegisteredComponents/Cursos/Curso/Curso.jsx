import { NavLink } from "react-router-dom";
import "../../../../assets/scss/layout/_producto.scss";
export default function Curso({ id, name, description, price }) {
  return (
    <div className="container-left-n-right">
        <div className='left-space'></div>
        
        <div className='bg-producto'>
          <div className="oferta-lanzamiento">aprovecha la oferta de lanzamiento</div>
          <div className="producto-off">40% OFF</div>
          <NavLink to={`/detalles/${id}`}>
          <div className='each-producto'>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <br/>
            <div className='each-price'>
              <h2>{price} USD</h2>
            </div>
          </div>
          </NavLink>
        </div>
    </div>
  );
}
