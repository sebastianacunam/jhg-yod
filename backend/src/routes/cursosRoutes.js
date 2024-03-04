import express from "express";

import { getCursos, findCurso, createCurso, deleteCurso, editCurso } from '../controllers/cursos.js';
import { asyncCatched } from "../utils/asyncCatched.js";
import { isValidObjectId } from "../middleware/expressValidator/validationId.js"
import { validationResultExpress } from "../middleware/expressValidator/validationResultExpress.js"
import { validateCreateCurso, validateEditCurso } from "../middleware/expressValidator/cursos/validateCursos.js";
const router = express.Router();

router.get('/', asyncCatched(getCursos));
router.get('/:id', isValidObjectId("id"), asyncCatched(findCurso));
router.post('/create', validateCreateCurso, validationResultExpress, asyncCatched(createCurso));
router.put('/edit/:id', isValidObjectId("id"), validateEditCurso, validationResultExpress, asyncCatched(editCurso));
router.delete('/delete/:id', isValidObjectId("id"), asyncCatched(deleteCurso));

export default router;