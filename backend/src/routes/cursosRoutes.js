import express from "express";

import { cursos, findCurso, createCurso, deleteCurso, editCurso } from '../controllers/cursos.js';

const router = express.Router();

router.get('/', cursos);
router.post('/create', createCurso);
router.delete('/delete/:id', deleteCurso);
router.get('/:id', findCurso);
router.put('/edit/:id', editCurso);

export default router;