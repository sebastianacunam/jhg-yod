import express from 'express';

import checkAuth from '../middleware/checkAuth.js'
import { createUser, deleteUser, allUsers, authenticate, confirm, olvidePassword, comprobarToken, nuevoPassword, usuario, perfil } from '../controllers/usuario.js'

const router = express.Router();

router.post('/create', createUser)
router.post('/login', authenticate)
router.get('/confirm/:token', confirm)
router.post('/olvide-password', olvidePassword)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword); //modificar y guardar password

router.get('/perfil', checkAuth, perfil); //Ingresar al perfil solo si es el usuario
router.get('/actual', checkAuth, usuario);



//Admin
router.delete('/delete/:id', deleteUser)



//SuperADMIN
router.get('/allusers/', allUsers)

export default router;