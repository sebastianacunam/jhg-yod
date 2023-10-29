import express from 'express';

import { createUser, deleteUser, allUsers, authenticate, confirm } from '../controllers/usuario.js'

const router = express.Router();

router.post('/create', createUser)
router.get('/confirm/:token', confirm)
router.post('/login', authenticate)
router.get('/allusers/', allUsers)
router.delete('/delete/:id', deleteUser)



export default router;