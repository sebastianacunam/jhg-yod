import express from "express";

import { getCursos, findCurso, createCurso, deleteCurso, editCurso, comprarCurso } from '../controllers/cursos.js';
import checkAuth from "../middleware/checkAuth.js";
import { asyncCatched } from "../utils/asyncCatched.js"; 

const router = express.Router();

router.get('/', asyncCatched(getCursos));
router.get('/:id', asyncCatched(findCurso)); 
router.post('/create', asyncCatched(createCurso));
router.put('/edit/:id', asyncCatched(editCurso));
router.delete('/delete/:id', asyncCatched(deleteCurso));


//Solo los usuarios registrados, van a poder comprar cursos
router.post('/comprar/:id', checkAuth, asyncCatched(comprarCurso));

export default router;