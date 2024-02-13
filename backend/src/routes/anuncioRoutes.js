import express from "express";

import { getAnuncios, createAnuncio, deleteAnuncio, findAnuncio, editAnuncio } from '../controllers/anuncio.js';
import { asyncCatched } from "../utils/asyncCatched.js";

const router = express.Router();

router.get('/', asyncCatched(getAnuncios));
router.get('/:id', asyncCatched(findAnuncio));
router.post('/create', asyncCatched(createAnuncio));
router.put('/edit/:id', asyncCatched(editAnuncio));
router.delete('/delete/:id', asyncCatched(deleteAnuncio));

export default router;