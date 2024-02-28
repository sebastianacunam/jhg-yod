import express from "express";
import {
  createUser,
  deleteUser,
  allUsers,
  authenticate,
  confirm,
  olvidePassword,
  nuevoPassword,
  usuario,
  perfil,
  googleLogin,
  userById,
  refreshToken,
  logoutUser,
  // editarPerfil,

} from "../controllers/usuario.js";
import { asyncCatched } from "../utils/asyncCatched.js";
import { checkAuthRefreshToken } from "../middleware/checkAuthRefreshToken.js";

const router = express.Router();

router.post("/create", asyncCatched(createUser)); // Crear Usuario
router.post("/login", asyncCatched(authenticate)); // Login
router.get("/logout", asyncCatched(logoutUser)); //Logout
router.get("/refresh", checkAuthRefreshToken, refreshToken); //RefreshToken
router.patch("/confirm/:token", asyncCatched(confirm)); // Confirmar usuario
router.post("/olvide-password", asyncCatched(olvidePassword)); // Olvide Password User
router.patch("/olvide-password/:token", asyncCatched(nuevoPassword)); //modificar y guardar password


router.post("/google", asyncCatched(googleLogin)); // Login Google
router.get("/perfil", checkAuthRefreshToken, asyncCatched(perfil)); //Ingresar al perfil solo si es el usuario
router.get("/actual", checkAuthRefreshToken, asyncCatched(usuario));
// router.patch("/perfil/:userId", checkAuth, asyncCatched(editarPerfil));

//Admin
router.delete("/delete/:id", asyncCatched(deleteUser)); // Eliminar usuario

//SuperADMIN
router.get("/allusers/", asyncCatched(allUsers)); // Obtener todos los usuarios
router.get("/:id", asyncCatched(userById)); // Obtener un usuario

export default router;
