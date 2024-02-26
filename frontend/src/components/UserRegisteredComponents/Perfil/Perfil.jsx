import "./profile.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { useState } from "react";
export default function Perfil() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div>
        <LeftMenu />
      </div>
      <div className='' style={{ marginLeft: "400px" }}>
        <figure className='snip1336'>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
            alt='sample87'
          />
          <figcaption>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}>
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                Hans Down<span>Engineer</span>
              </h2>
              <a href='#' className='info'>
                <BsEnvelopeFill />
                Messages
              </a>
            </div>
            <div className='profile-body-data'>
              <section className='profile-p-wrapper'>
                <h6>Settings</h6>
                <p>
                  Im looking for something that can deliver a 50-pound payload
                  of snow on a small feminine target. Can you suggest something?
                  Hello...?
                </p>
                <input type='checkbox' id='switch' />
                Recibir notificaciones por email
                <label htmlFor='switch'>Toggle</label>
              </section>
              <div className='vertical-line'></div>
              <section className='profile-p-second-wrapper'>
                <div className='perfil-edit'>
                  <h6>Mi perfil</h6>
                  <div
                    className='pencil-container'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <BiSolidPencil className='pencil-icon' />
                    {isHovered && (
                      <span className='tooltip'>Editar Perfil</span>
                    )}
                  </div>
                </div>

                <p>Nombre completo:</p>
                <p>Celular:</p>
                <p>Email:</p>
                <p>Ubicacion:</p>
                <p>Redes sociales:</p>
              </section>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
