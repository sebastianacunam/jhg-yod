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
  editUser,
  // editarPerfil,

} from "../controllers/usuario.js";
import { asyncCatched } from "../utils/asyncCatched.js";
import { checkAuthRefreshToken } from "../middleware/checkAuthRefreshToken.js";
import { ValidationNuevaPassword, validationLoginBody, validationOlvidePassword, validationRegisterBody } from "../middleware/expressValidator/user/validateUser.js";
import { validationResultExpress } from "../middleware/expressValidator/validationResultExpress.js";
import { isNotEmptyToken, isValidObjectId } from "../middleware/expressValidator/validationId.js";

const router = express.Router();

router.post("/create", validationRegisterBody, validationResultExpress, asyncCatched(createUser)); // Crear Usuario
router.post("/login", validationLoginBody, validationResultExpress, asyncCatched(authenticate)); // Login
router.get("/logout", asyncCatched(logoutUser)); //Logout
router.get("/refresh", checkAuthRefreshToken, refreshToken); //RefreshToken
router.patch("/confirm/:token", isNotEmptyToken('token'), asyncCatched(confirm)); // Confirmar usuario
router.post("/olvide-password", validationOlvidePassword, validationResultExpress, asyncCatched(olvidePassword)); // Olvide Password User
router.patch("/olvide-password/:token", ValidationNuevaPassword, validationResultExpress, isNotEmptyToken('token'), asyncCatched(nuevoPassword)); //modificar y guardar password


router.post("/google", asyncCatched(googleLogin)); // Login Google
router.get("/perfil", checkAuthRefreshToken, asyncCatched(perfil)); //Ingresar al perfil solo si es el usuario
router.get("/actual", checkAuthRefreshToken, asyncCatched(usuario));
router.patch("/perfil/:userId", isValidObjectId('userId'), asyncCatched(editUser));

//Admin
router.delete("/delete/:id", isValidObjectId('id'), asyncCatched(deleteUser)); // Eliminar usuario

//SuperADMIN
router.get("/allusers/", asyncCatched(allUsers)); // Obtener todos los usuarios
router.get("/:id", isValidObjectId('id'), asyncCatched(userById)); // Obtener un usuario

export default router;
