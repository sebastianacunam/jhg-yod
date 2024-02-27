import "./profile.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { useEffect, useState } from "react";
import { usuarioActual } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
export default function Perfil() {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const dispatch = useDispatch();
  const usuarioAct = useSelector((state) => state.usuarioActual);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? dispatch(usuarioActual()) : dispatch(null);
  }, [dispatch, token]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedName(usuarioAct?.name || "");
    setEditedEmail(usuarioAct?.email || "");
  };
  const handleSubmit = () => {
    setIsEditing(false);
    dispatch()
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
                {usuarioAct?.name}
                <span>Engineer</span>
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
                <input type='checkbox' id='switch' className='input-toggle' />
                Recibir notificaciones por email
                <label htmlFor='switch' className='input-toggle-label'>
                  Toggle
                </label>
              </section>
              <div className='vertical-line'></div>
              <section className='profile-p-second-wrapper'>
                <div className='perfil-edit'>
                  <h6>Mi perfil</h6>
                  <div
                    className='pencil-container'
                    onClick={handleEditClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <BiSolidPencil className='pencil-icon' />
                    {isHovered && (
                      <span className='tooltip'>Editar Perfil</span>
                    )}
                  </div>
                </div>

                {isEditing ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <p>Nombre completo:</p>
                    <input
                      type='text'
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                    <p>Email:</p>
                    <input
                      type='email'
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                ) : (
                  <div>
                    <p>Nombre completo: {usuarioAct?.name}</p>
                    <p>Email: {usuarioAct?.email}</p>
                  </div>
                )}
              </section>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
