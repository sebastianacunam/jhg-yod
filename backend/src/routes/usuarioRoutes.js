import express from 'express';

import { createUser, deleteUser, allUsers, authenticate, confirm } from '../controllers/usuario.js'

const router = express.Router();

router.post('/create', createUser)
router.post('/login', authenticate)
router.get('/confirm/:token', confirm)
router.get('/allusers/', allUsers)



//Admin
router.delete('/delete/:id', deleteUser)



export default router;