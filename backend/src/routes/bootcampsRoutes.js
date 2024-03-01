import express from "express";

import { getBootcamps, findBootcamp, createBootcamp, deleteBootcamp, editBootcamp } from '../controllers/bootcamps.js';
import { asyncCatched } from "../utils/asyncCatched.js";
import { isValidObjectId } from "../middleware/expressValidator/validationId.js";
import { validationResultExpress } from "../middleware/expressValidator/validationResultExpress.js";

const router = express.Router();

//---------------Buscar todos los Bootcamps--------//
router.get('/', asyncCatched(getBootcamps));

//---------------Buscar un solo Bootcamp--------//
router.get('/:id', isValidObjectId, asyncCatched(findBootcamp));

//---------------Crear un Bootcamp--------//
router.post('/create', validationResultExpress, asyncCatched(createBootcamp));

//---------------Editar un Bootcamp--------//
router.put('/edit/:id', asyncCatched(editBootcamp));

//---------------Eliminar un Bootcamp--------//
router.delete('/delete/:id', asyncCatched(deleteBootcamp));

export default router;