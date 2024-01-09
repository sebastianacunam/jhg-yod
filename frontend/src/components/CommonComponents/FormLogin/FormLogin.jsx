import { useState, React } from 'react'
import { loginUser, resetErrorLoginUser } from '../../../redux/actions/actionUser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import validateEmail from '../../../middleware/validateEmail'
import validatePassword from '../../../middleware/validatePassword'

export default function FormLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const errorEmail = useSelector((state) => state.errorEmail)

  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleChangeEmail = (e) => {
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
    })
  
    setErrors({
        ...errors,
        email: '',
    })
  }

  const handleChangePassword = (e) => {
      setUsuario({
          ...usuario,
          [e.target.name]: e.target.value,
      })
      setErrors({
          ...errors,
          password: '',
      })
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  let val = validate(usuario.email, usuario.password)
      if (Object.keys(val).length === 0) {
          const loginData = await dispatch(loginUser(usuario))
          console.log(loginData.payload)
          setUsuario({
              email: '',
              password: '',
          })
          // loginData.payload.token ? navigate("/") : null
          if (errorEmail) {
              e.preventDefault()

          } else {
              dispatch(resetErrorLoginUser())
              loginData.payload.token ? navigate('/') : null
          }
      } else setErrors(val)
  }

  const validate = (email, password) => {
    let objeto = {}
    if (email === '') objeto = { ...objeto, email: 'Campo requerido' }
    else if (validateEmail(email))
        email.length > 40
            ? (objeto = { ...objeto, email: 'Longitud inválida' })
            : (objeto = { ...objeto, email: 'Formato inválido' })

    if (password === '')
        objeto = { ...objeto, password: 'Campo requerido' }
    else if (validatePassword(password))
        objeto = {
            ...objeto,
            password: 'Su password debe tener al menos 8 caracteres',
        }
    return objeto
  }


  return (
    <div>
        <section>
            <form onSubmit={handleSubmit}>
                <h2>login</h2>
                <input type='text' id='email' name='email' onChange={handleChangeEmail} placeholder='Email'/>
                <input type='text' id='password' name='password' onChange={handleChangePassword} placeholder='Password'/>
                <button type='submit'>sign in</button>
            </form>
        </section>

    </div>
  )
}
