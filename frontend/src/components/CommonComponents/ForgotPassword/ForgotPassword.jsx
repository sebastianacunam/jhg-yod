import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setToResetPassword,
  setStateEmail,
} from "../../../redux/actions/actionUser";
import validateEmail from "../../../middleware/validateEmail";
import MenuRegister from "../Menus/MenuRegister/MenuRegister";
import Footer from "../Footer/Footer";
import "../../../assets/scss/layout/_forgotPassword.scss";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const respuesta = useSelector((state) => state.email);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStateEmail());
    };
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      e.target.value.length > 40
        ? setErrors({
            email: "Longitud inválida",
          })
        : setErrors({
            email: "Email inválido",
          });
    } else {
      setErrors({
        email: "",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setErrors({
        email: "Campo requerido",
      });
    } else {
      dispatch(setToResetPassword(email));
      setEmail("");
    }
  };

  return (
    <div className="cont-Forgot-Password">
      <MenuRegister />
      <div className="bg-form-forgot">
        <section className="container-form-forgot">
          <div className="info-forgot-password">
            <div className="info-container">
              <h4>Ingrese su E-mail para recuperar su Contraseña</h4>
            </div>

            <form className="form-forgot-password" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="input-forgot"
                  required
                  name="email"
                  value={email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                />
                <label className="label-forgot" htmlFor="email">
                  E-mail
                </label>
                {errors.email && (
                  <p className="forgot-password-error">{errors.email}</p>
                )}
              </div>
              {respuesta.msg ? (
                <Link to="/login">
                  {" "}
                  <button type="submitForgot">VOLVER</button>{" "}
                </Link>
              ) : (
                <button className="btn-new-password" type="submit">
                  Restablecer Contraseña
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
