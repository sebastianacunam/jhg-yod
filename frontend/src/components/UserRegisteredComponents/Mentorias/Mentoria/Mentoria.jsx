import { NavLink } from "react-router-dom";
import "../../../../assets/scss/layout/_curso.scss";
export default function Mentoria({ id, name, description }) {
  return (

      <div className="card-body">
        <ul className="cards">
          <li className="cards__item">
            <NavLink to={`/detalles/${id}`}>
              <div className="card">
                <div className="card__image card__image--fence"></div>
                <div className="card__content">
                  <div className="card__title">{name}</div>
                  <p className="card__text">
                    This is the shorthand for flex-grow, flex-shrink and
                    flex-basis combined. The second and third parameters
                    (flex-shrink and flex-basis) are optional. Default is 0 1
                    auto.
                  </p>
                  <button className="btn btn--block card__btn">Button</button>
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
  );
}
