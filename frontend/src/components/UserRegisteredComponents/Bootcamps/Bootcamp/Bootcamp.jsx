import { NavLink } from "react-router-dom";
import "../../../../assets/scss/layout/_bootcamps.scss";
import LeftMenu from '../../LeftMenu/LeftMenu.jsx'


export default function Bootcamp({ id, name, description, price }) {
  return (
    <div className="container-left-n-right">
        <div className='left-space'></div>
        
        <div className='bg-bootcamp'>
          <div className="oferta-lanzamiento">aprovecha la oferta de lanzamiento</div>
          <div className="bootcamp-off">40% OFF</div>
          <NavLink to={`/detalles/${id}`}>
          <div className='each-curso'>
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
    




      // <div className="card-body">
      //   <ul className="cards">
      //     <li className="cards__item">
      //       <NavLink to={`/detalles/${id}`}>
      //         <div className="card">
      //           <div className="card__image card__image--fence"></div>
      //           <div className="card__content">
      //             <div className="card__title">{name}</div>
      //             <p className="card__text">
      //               This is the shorthand for flex-grow, flex-shrink and
      //               flex-basis combined. The second and third parameters
      //               (flex-shrink and flex-basis) are optional. Default is 0 1
      //               auto.
      //             </p>
      //             <div>
      //              usd: ${price}
      //             </div>
      //             <button className="btn btn--block card__btn">Button</button>
      //           </div>
      //         </div>
      //       </NavLink>
      //     </li>
      //   </ul>
      // </div>
  );
}
