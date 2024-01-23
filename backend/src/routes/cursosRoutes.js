import express from "express";

import { cursos, findCurso, createCurso, deleteCurso, editCurso, comprarCurso } from '../controllers/cursos.js';
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get('/', cursos);
router.post('/create', createCurso);
router.delete('/delete/:id', deleteCurso);
router.get('/:id', findCurso); 
router.put('/edit/:id', editCurso);


//Solo los usuarios registrados, van a poder comprar cursos
router.post('/comprar/:id', checkAuth, comprarCurso)

export default router;