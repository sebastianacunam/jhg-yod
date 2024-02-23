import express from "express";

import { getCursos, findCurso, createCurso, deleteCurso, editCurso } from '../controllers/cursos.js';
import { asyncCatched } from "../utils/asyncCatched.js"; 

const router = express.Router();

router.get('/', asyncCatched(getCursos));
router.get('/:id', asyncCatched(findCurso)); 
router.post('/create', asyncCatched(createCurso));
router.put('/edit/:id', asyncCatched(editCurso));
router.delete('/delete/:id', asyncCatched(deleteCurso));

export default router;