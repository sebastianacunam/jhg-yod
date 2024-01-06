import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom"


/* ----------------------------------Common User--------------------------------------------- */
import AuthLayout from "./layouts/AuthLayout"
import Home from "./components/CommonComponents/Home/Home"
import Login from "./components/CommonComponents/Login/Login"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout/>}/>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  )
}

export default App
