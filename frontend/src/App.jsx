import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/assets/scss/app.css";
import { ChakraProvider } from "@chakra-ui/react";
import WithChakra from "./utils/WithChakra";
/* ----------------------------------Common User--------------------------------------------- */
import AuthLayout from "./layouts/AuthLayout";
import Login from "./components/CommonComponents/Login/Login";
import Register from "./components/CommonComponents/Register/Register";
import ConfirmAccount from "./components/CommonComponents/ConfirmAccount/ConfirmAccount";
import ForgotPassword from "./components/CommonComponents/ForgotPassword/ForgotPassword";
import NewPassword from "./components/CommonComponents/NewPassword/NewPassword";

/* ----------------------------------Registered User----------------------------------------- */
import Dashboard from "./components/UserRegisteredComponents/Dashboard/Dashboard";
import Perfil from "./components/UserRegisteredComponents/Perfil/Perfil";
import FormAnuncio from "./components/UserRegisteredComponents/Anuncios/FormAnuncio/FormAnuncio";
import Cursos from "./components/UserRegisteredComponents/Cursos/Cursos/Cursos";
import MisCursos from "./components/UserRegisteredComponents/Cursos/MisCursos/MisCursos";
import VerificationUser from "./components/CommonComponents/VerificationUser/VerificationUser";
import BolsaTrabajo from "./components/CommonComponents/BolsaTrabajo/BolsaTrabajo";
import Mentorias from "./components/UserRegisteredComponents/Mentorias/Mentorias/Mentorias";
import Bootcamps from "./components/UserRegisteredComponents/Bootcamps/Bootcamps/Bootcamps";
import Anuncios from "./components/UserRegisteredComponents/Anuncios/Anuncios/Anuncios";
import Beneficios from "./components/UserRegisteredComponents/Beneficio/Beneficios/Beneficios";

/* ------------------------------------------------------------------------------------------ */

import CursoDetail from "./components/UserRegisteredComponents/Cursos/CursoDetail/CursoDetail";
import CompraExitosa from "./components/UserRegisteredComponents/CompraExitosa/CompraExitosa";
import Checkout from "./components/UserRegisteredComponents/Checkout/Checkout";

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index path='/login' element={<Login />} />
            <Route index path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/confirm/:id' element={<ConfirmAccount />} />
            <Route path='/olvide-password' element={<ForgotPassword />} />
            <Route path='/olvide-password/:token' element={<NewPassword />} />
          </Route>

          <Route path='/' element={<VerificationUser />}>
          <Route path='/dashboard' element={<ChakraProvider><Dashboard /></ChakraProvider>} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/create' element={<FormAnuncio />} />

            <Route path='/beneficios' element={<Beneficios />} />
            <Route path='/cursos' element={<Cursos />} />
            <Route path='/mis-cursos' element={<MisCursos />} />
            <Route path='/detalles/:id' element={<CursoDetail />} />
            <Route path='/bootcamps' element={<Bootcamps />} />
            <Route path='/mentorias' element={<Mentorias />} />
            <Route path='/anuncios' element={<Anuncios />} />
            <Route path='/bolsa-empleo' element={<BolsaTrabajo />} />
            <Route path='/compra-exitosa' element={<CompraExitosa />} />
            <Route path='/checkout/:id' element={<Checkout />} />

          </Route>
        </Routes>
      </Router>

  );
}

export default App;
