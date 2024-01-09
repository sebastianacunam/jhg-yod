import { useState, React} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import swal from 'sweetalert'
import validateEmail from '../../../middleware/validateEmail'
import validatePassword from '../../../middleware/validatePassword'
import { registerUser } from '../../../redux/actions/actionUser'

export default function FromRegister() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [estado, setEstado] = useState({
        email: "",
        name: "",
        password1: "",
    })
    const [state, setEstate] = useState(false)

    const [errores, setErrores] = useState([])

    const handleSubmitR = (e) => {
        e.preventDefault()
    
        if (
          !estado.email ||
          !estado.name ||
          !estado.password1
        )
          setErrores([0, "Hay campos vacíos"])
        else if (estado?.name.length < 3 || estado?.name.length > 10)
          setErrores([1, "El nombre de usuario debe tener entre 3 y 10 caracteres"])
        else if (validateEmail(estado?.email)) setErrores([2, "E-mail inválido"])
        else if (validatePassword(estado?.password1))
          estado?.password1.length < 8
            ? setErrores([3, "Tu password debe tener al menos 8 caracteres"])
            : setErrores([3, "Password inválido"])
        else {
          setErrores([])
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
    }


    return (
        <div>
            <section>
                <form onSubmit={handleSubmitR}>
                    <input 
                        type="text" 
                        name='name'
                        onChange={handleChange} 
                        value={estado?.name}
                        id="name" 
                        placeholder='Nombre'
                        />
                    <input 
                        type="text" 
                        name="email" 
                        onChange={handleChange} 
                        value={estado?.email}
                        id="email" 
                        placeholder='Email'
                        />
                    <input 
                        type="text" 
                        name="password1" 
                        onChange={handleChange} 
                        value={estado?.password1}
                        id="password1" 
                        placeholder='Password'
                    />
                    <button type='submit'>registrarse</button>
                </form>
            </section>
        </div>
    )
}
