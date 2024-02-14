import { useState } from 'react'
import { loginUser, resetErrorLoginUser, registroGoogle } from '../../../redux/actions/actionUser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import validateEmail from '../../../middleware/validateEmail'
import validatePassword from '../../../middleware/validatePassword'
import validateLogin from '../../../middleware/validateLogin'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/scss/layout/_formLogin.scss'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"


export default function FormLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const errorEmail = useSelector((state) => state.errorEmail)

  const [errors, setErrors] = useState({})
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  })

  function validate(email, password) {
    let objeto = {}
    if (email === "") objeto = { ...objeto, email: "Campo requerido" }
    else if (validateEmail(email))
      email.length > 40
        ? (objeto = { ...objeto, email: "Longitud inválida" })
        : (objeto = { ...objeto, email: "Formato inválido" })

    if (password === "")
      objeto = { ...objeto, password: "Campo requerido" }
    else if (validatePassword(password))
      objeto = {
        ...objeto,
        password: "Su password debe tener al menos 8 caracteres",
      }
    return objeto
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let val = validate(usuario.email, usuario.password)
        if (Object.keys(val).length === 0) {
            const loginData = await dispatch(loginUser(usuario))
            setUsuario({
                email: '',
                password: '',
            })
            // loginData.payload.token ? navigate("/") : null
            if (errorEmail) {
                e.preventDefault()

            } else {
                dispatch(resetErrorLoginUser())
                loginData.payload.token ? navigate('/dashboard') : null
            }
        } else setErrors(val)
    }


  const handleChange = (e) => {
    e.preventDefault();
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.values(usuario).some((value) => value !== '')) {
      setErrors(validateLogin(usuario));
    }
  }, [usuario]);

  function responseGoogle(el) {
    dispatch(registroGoogle(el))
    setTimeout(function () {
      // window.location.reload(1)
      navigate('/dashboard')
    }, 1500) // After 2,5 secs
  }


  return (
    <div className="bg-form-login">
      <section className="container-form-register">
        <div className="info-register">
          <div className="info-container-login">
            <h4>Login</h4>

          </div>
          <form className="form-register" onSubmit={handleSubmit}>

            <div className='input-group'>
              <input className="input-register" required type="text" id='email' name="email" onChange={handleChange} value={usuario.email} />
              <label className='label-register' htmlFor="name">Email</label>
              {errors.email && <p className='register-form-error'>{errors.email}</p>}
            </div>

            <div className='input-group'>
              <input className="input-register" required type="password" id='password' name="password" onChange={handleChange} value={usuario.password} />
              <label className='label-register' htmlFor="name">Password</label>
              {errors.password1 && <p className='register-form-error'>{errors.password}</p>}
            </div>

            <button className="btn-register">Login</button>
            <div className='box-login-register'>
              <div>
                <p className='info-login-register'>¿Olvidaste tu contraseña? &nbsp;&nbsp;</p>
              </div>
              <div>
                <Link to='/olvide-password'>
                  <p className='info-login-register2'>Reseteala acá</p>
                </Link>
              </div>
            </div>
            <div className='box-login-register'>
              <div>
                <p className='info-login-register'>¿No tienes una cuenta?&nbsp;&nbsp;</p>
              </div>
              <div>
                <Link to='/register'>
                  <p className='info-login-register2'>registrate</p>
                </Link>
              </div>
            </div>
          </form>
          <div>
            <GoogleOAuthProvider clientId={`${import.meta.env.VITE_URL_CLIENT_ID}`} >
              <GoogleLogin login_uri="" onSuccess={responseGoogle} />
            </GoogleOAuthProvider>
          </div>
        </div>
      </section>
    </div>
  )
}