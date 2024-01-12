import express from 'express';

import { createUser, deleteUser, allUsers, authenticate, confirm, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/usuario.js'

const router = express.Router();

router.post('/create', createUser)
router.post('/login', authenticate)
router.get('/confirm/:token', confirm)
router.post('/olvide-password', olvidePassword)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword); //modificar y guardar password



//Admin
router.delete('/delete/:id', deleteUser)



//SuperADMIN
router.get('/allusers/', allUsers)

export default router;