import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  resetPassword,
  setStateEmail,
} from "../../../redux/actions/actionUser.js";
import validatePassword from "../../../middleware/validatePassword";
import MenuRegister from "../Menus/MenuRegister/MenuRegister.jsx";
import Footer from "../Footer/Footer.jsx";
import "../../../assets/scss/layout/_resetPassword.scss";

export default function NewPassword() {
  const params = useParams();
  const respuesta = useSelector((state) => state.email);
  const { token } = params;
  const [estado, setEstado] = useState({
    password: "",
    password2: "",
  });
  const [errores, setErrores] = useState({
    error: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStateEmail());
    };
  }, []);

  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    if (validatePassword(e.target.value)) {
      setErrores({
        ...errores,
        error: "Tu password debe tener al menos 8 caracteres",
      });
    } else {
      setErrores({
        ...errores,
        error: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (estado.password !== estado.password2)
      setErrores({ ...errores, error: "Las contraseñas deben coincidir" });
    else {
      setErrores({ ...errores, error: "" });
      dispatch(
        resetPassword({
          token: token,
          password: estado.password,
        })
      );
    }
  };

  return (
    <div className="cont-New-Password">
      <MenuRegister />
      <div className="bg-form-new">
        <section className="container-form-new">
          <div className="info-new-password">
            <div className="info-container">
              <h4>Restablecer Contraseña</h4>
            </div>
            <form className="form-new-password" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="input-new"
                  required
                  name="password"
                  value={estado.password}
                  onChange={handleChange}
                  id="password"
                  type="password"
                />
                <label className="label-new" htmlFor="password">
                  Contraseña
                </label>
              </div>
              <div className="input-group">
                <input
                  className="input-new"
                  required
                  name="password2"
                  value={estado.password2}
                  onChange={handleChange}
                  id="password"
                  type="password"
                />
                <label className="label-new" htmlFor="password">
                  Repetir Contraseña
                </label>
              </div>
              {respuesta.error ? (
                <p className="new-password-error">{respuesta.error}</p>
              ) : (
                <p className="new-password-error">{respuesta.msg}</p>
              )}
              {errores.error && (
                <p className="new-password-error">{errores.error}</p>
              )}
              {respuesta.msg ? (
                <Link to="/">
                  {" "}
                  <button type="submit">HOME</button>
                </Link>
              ) : (
                <button className="btn-new-password" type="submit">
                  Confirmar Cambio
                </button>
              )}
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
