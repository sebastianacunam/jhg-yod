<<<<<<< HEAD
import express from 'express';
import checkAuth from '../middleware/checkAuth.js'
import { createUser, deleteUser, allUsers, authenticate, confirm, olvidePassword, nuevoPassword, usuario, perfil, googleLogin } from '../controllers/usuario.js'
import { asyncCatched } from '../utils/asyncCatched.js';

const router = express.Router();


router.post('/google', asyncCatched(googleLogin));
router.post('/create', asyncCatched(createUser));
router.post('/login', asyncCatched(authenticate));
router.get('/confirm/:token', asyncCatched(confirm));
router.post('/olvide-password', asyncCatched(olvidePassword));
router.patch('/olvide-password/:token', asyncCatched(nuevoPassword)); //modificar y guardar password

router.get('/perfil', checkAuth, asyncCatched(perfil)); //Ingresar al perfil solo si es el usuario
router.get('/actual', checkAuth, asyncCatched(usuario));

=======
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
  editarPerfil,
} from "../controllers/usuario.js";
import { asyncCatched } from "../utils/asyncCatched.js";

const router = express.Router();

router.post("/create", asyncCatched(createUser));
router.post("/login", asyncCatched(authenticate));
router.get("/confirm/:token", asyncCatched(confirm));
router.post("/olvide-password", asyncCatched(olvidePassword));
router.patch("/olvide-password/:token", asyncCatched(nuevoPassword)); //modificar y guardar password
>>>>>>> 08c2a3e3dffa05409e963c988463c2fb50593812

router.get("/perfil", checkAuth, asyncCatched(perfil)); //Ingresar al perfil solo si es el usuario
router.get("/actual", checkAuth, asyncCatched(usuario));
router.patch("/perfil/:userId", checkAuth, asyncCatched(editarPerfil));

//Admin
router.delete("/delete/:id", asyncCatched(deleteUser));

//SuperADMIN
router.get("/allusers/", asyncCatched(allUsers));

export default router;
