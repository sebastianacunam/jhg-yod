import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom'
import '../src/assets/scss/app.css'


/* ----------------------------------Common User--------------------------------------------- */
import AuthLayout from './layouts/AuthLayout'
import Login from './components/CommonComponents/Login/Login'
import Register from './components/CommonComponents/Register/Register'
import ConfirmAccount from './components/CommonComponents/ConfirmAccount/ConfirmAccount'
import ForgotPassword from './components/CommonComponents/ForgotPassword/ForgotPassword'
import NewPassword from './components/CommonComponents/NewPassword/NewPassword'

/* ----------------------------------Registered User----------------------------------------- */
import Dashboard from './components/UserRegisteredComponents/Dashboard/Dashboard'
import Perfil from './components/UserRegisteredComponents/Perfil/Perfil'
import FormAnuncio from './components/UserRegisteredComponents/FormAnuncio/FormAnuncio'
import VerificationUser from './components/CommonComponents/VerificationUser/VerificationUser'

/* ------------------------------------------------------------------------------------------ */


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index path='/login' element={<Login />} />
          <Route index path='/' element={<Login />} />
          {/* <Route index path='/login' element={<Login />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/confirm/:id' element={<ConfirmAccount />} />
          <Route path='/olvide-password' element={<ForgotPassword />} />
          <Route path='/olvide-password/:token' element={<NewPassword />} />
        </Route>

        <Route path='/' element={<VerificationUser />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/create' element={<FormAnuncio/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
