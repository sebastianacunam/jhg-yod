import express from "express";

import { getBootcamps, findBootcamp, createBootcamp, deleteBootcamp, editBootcamp } from '../controllers/bootcamps.js';
import { asyncCatched } from "../utils/asyncCatched.js";
import { isValidObjectId } from "../middleware/expressValidator/validationId.js";
import { validationResultExpress } from "../middleware/expressValidator/validationResultExpress.js";
import { validateCreateBootcamp, validateEditBootcamp } from "../middleware/expressValidator/bootcamps/validateBootcamp.js";

const router = express.Router();

//---------------Buscar todos los Bootcamps--------//
router.get('/', asyncCatched(getBootcamps));

//---------------Buscar un solo Bootcamp--------//
router.get('/:id', isValidObjectId("id"), asyncCatched(findBootcamp));

//---------------Crear un Bootcamp--------//
router.post('/create', validateCreateBootcamp, validationResultExpress, asyncCatched(createBootcamp));

//---------------Editar un Bootcamp--------//
router.patch('/edit/:id', isValidObjectId("id"), validateEditBootcamp, validationResultExpress, asyncCatched(editBootcamp));

//---------------Eliminar un Bootcamp--------//
router.delete('/delete/:id', isValidObjectId("id"), asyncCatched(deleteBootcamp));

export default router;