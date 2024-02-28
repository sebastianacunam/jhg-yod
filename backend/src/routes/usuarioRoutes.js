import express from "express";
import checkAuth from "../middleware/checkAuth.js";
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

router.post("/create", asyncCatched(createUser));
router.post("/login", asyncCatched(authenticate));
router.get("/logout", logoutUser);
router.get("/refresh", checkAuthRefreshToken, refreshToken);
router.patch("/confirm/:token", asyncCatched(confirm));
router.post("/olvide-password", asyncCatched(olvidePassword));
router.patch("/olvide-password/:token", asyncCatched(nuevoPassword)); //modificar y guardar password


router.post("/google", asyncCatched(googleLogin));
router.get("/perfil", checkAuthRefreshToken, asyncCatched(perfil)); //Ingresar al perfil solo si es el usuario
router.get("/actual", checkAuthRefreshToken, asyncCatched(usuario));
// router.patch("/perfil/:userId", checkAuth, asyncCatched(editarPerfil));

//Admin
router.delete("/delete/:id", asyncCatched(deleteUser));

//SuperADMIN
router.get("/allusers/", asyncCatched(allUsers));
router.get("/:id", asyncCatched(userById));

export default router;
