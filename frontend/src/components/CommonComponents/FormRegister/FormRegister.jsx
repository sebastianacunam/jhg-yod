import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { registerUser } from '../../../redux/actions/actionUser';
import validateRegister from '../../../middleware/validateRegister';
import { Link } from 'react-router-dom'
import '../../../assets/scss/layout/_formRegister.scss';

export default function FromRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [estado, setEstado] = useState({
    email: '',
    name: '',
    password1: '',
  });

  const handleSubmitR = (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error !== '')) {
      alert('Faltan campos por completar.');
    } else {
      swal('', 'Registrado con éxito, confirma tu email', 'success');
      dispatch(registerUser(estado));
      setEstado({
        email: '',
        name: '',
        password1: '',
      });
      navigate('/login')
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.values(estado).some((value) => value !== '')) {
      setErrors(validateRegister(estado));
    }
  }, [estado]);


  return (
    <div className="bg-form-register">
      <section className="container-form-register">
        <div className="info-register">
          <div className="info-container">
            <h4>Registrate</h4>
            <p>Registrate con tu correo y contraseña</p>
          </div>
          <form className="form-register" onSubmit={handleSubmitR}>
            <div className='input-group'>
              <input className="input-register" required type="text" id='name' name="name" onChange={handleChange} value={estado.name}/>
              <label className='label-register' htmlFor="name">Nombre</label>
              {errors.name && <p className='register-form-error'>{errors.name}</p>}
            </div>
            
            <div className='input-group'>
              <input className="input-register" required type="text" id='email' name="email" onChange={handleChange} value={estado.email}/>
              <label className='label-register' htmlFor="name">Email</label>
              {errors.email && <p className='register-form-error'>{errors.email}</p>}
            </div>

            <div className='input-group'>
              <input className="input-register" required type="text" id='password1' name="password1" onChange={handleChange} value={estado.password1}/>
              <label className='label-register' htmlFor="name">Password</label>
              {errors.password1 && <p className='register-form-error'>{errors.password1}</p>}
            </div>

            <button className="btn-register">Registrarse</button>
            <div className='box-login-register'>
              <div>
              <p className='info-login-register'>¿ya tienes una cuenta?&nbsp;&nbsp;</p> 
              </div>
              <div>
                <Link to='/login'>
                  <p className='info-login-register2'>Logueate</p> 
                </Link>  
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}