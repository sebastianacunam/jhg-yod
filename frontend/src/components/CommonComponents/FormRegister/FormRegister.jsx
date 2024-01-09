import { useState, React} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import swal from 'sweetalert'
import validateEmail from '../../../middleware/validateEmail'
import validatePassword from '../../../middleware/validatePassword'
import { registerUser } from '../../../redux/actions/actionUser'
import '../../../assets/scss/layout/_formRegister.scss'

export default function FromRegister() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [estado, setEstado] = useState({
        email: "",
        name: "",
        password1: "",
    })
    const [state, setEstate] = useState(false)

    const [errors, setErrors] = useState([])

    const handleSubmitR = (e) => {
        e.preventDefault()
    
        if (
          !estado.email ||
          !estado.name ||
          !estado.password1
        )
          setErrors([0, "Hay campos vacíos"])
        else if (estado?.name.length < 3 || estado?.name.length > 40)
          setErrors([1, "El nombre de usuario debe tener entre 3 y 10 caracteres"])
        else if (validateEmail(estado?.email)) setErrors([2, "E-mail inválido"])
        else if (validatePassword(estado?.password1))
          estado?.password1.length < 8
            ? setErrors([3, "Tu password debe tener al menos 8 caracteres"])
            : setErrors([3, "Password inválido"])
        else {
          setErrors([])
          dispatch(registerUser(estado))
          swal("", "Registrado con éxito, confirma tu email!", "success");
          navigate("/")
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setEstado({
            ...estado,
            [e.target.name]: e.target.value,
        })

        setErrors({
          ...errors,
          name: '',
          email: '',
          password1: ''
      })
        console.log(e.target.value)
    }


    return (
        <div className='bg-form-register'>
            <section className='container-form-register'>
              <div className='info-register'>
                <div className='info-container'>
                  <h4>Registrate</h4>
                  <p>Registrate con tu correo y contraseña</p>
                </div>
                <form className='form-register' onSubmit={handleSubmitR}>
                    <input className='input-register' type="text" name='name' onChange={handleChange} value={estado?.name} id="name" placeholder='Nombre'/>
                    <input className='input-register' type="text" name="email" onChange={handleChange} value={estado?.email} id="email" placeholder='Email'/>
                    <input className='input-register' type="text" name="password1" onChange={handleChange} value={estado?.password1} id="password1" placeholder='Password'/>
                    <button className='btn-register'>registrarse</button>
                </form>
              
              </div>
            </section>
        </div>
    )
}
