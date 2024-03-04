import express from "express";
import { getAnuncios, createAnuncio, deleteAnuncio, findAnuncio, editAnuncio, getAnunciosByUser } from '../controllers/anuncio.js';
import { asyncCatched } from "../utils/asyncCatched.js";
import { checkAuthRefreshToken } from "../middleware/checkAuthRefreshToken.js"
import { isValidObjectId } from "../middleware/expressValidator/validationId.js";
import { validateCreateAnuncio, validateEditAnuncio } from "../middleware/expressValidator/anuncios/validateAnuncios.js";
import { validationResultExpress } from "../middleware/expressValidator/validationResultExpress.js"

const router = express.Router();

router.get('/', asyncCatched(getAnuncios));
router.get('/user-anuncios', checkAuthRefreshToken, asyncCatched(getAnunciosByUser));
router.get('/:id', isValidObjectId("id"), asyncCatched(findAnuncio));
router.put('/edit/:id', isValidObjectId("id"), validateEditAnuncio, validationResultExpress, asyncCatched(editAnuncio));
router.post('/create', checkAuthRefreshToken, validateCreateAnuncio, validationResultExpress, asyncCatched(createAnuncio));
router.delete('/delete/:id', checkAuthRefreshToken, isValidObjectId("id"), asyncCatched(deleteAnuncio));

export default router;