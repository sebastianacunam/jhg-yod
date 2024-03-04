import express from "express";
import { getMentorias, findMentoria, createMentoria, editMentoria, deleteMentoria } from "../controllers/mentorias.js";
import { asyncCatched } from '../utils/asyncCatched.js';
import { validateCreateMentoria, validateEditMentoria } from "../middleware/expressValidator/mentorias/validateMentorias.js";
import { validationResultExpress } from "../middleware/expressValidator/validationResultExpress.js";
import { isValidObjectId } from "../middleware/expressValidator/validationId.js"

const router = express.Router();

router.get('/', asyncCatched(getMentorias));
router.get('/:id', isValidObjectId('id'), asyncCatched(findMentoria));
router.post('/create', validateCreateMentoria, validationResultExpress, asyncCatched(createMentoria));
router.put('/edit/:id', isValidObjectId('id'), validateEditMentoria, validationResultExpress, asyncCatched(editMentoria));
router.delete('/delete/:id', isValidObjectId('id'), asyncCatched(deleteMentoria));

export default router;