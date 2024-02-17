import express from "express";

import { getAnuncios, createAnuncio, deleteAnuncio, findAnuncio, editAnuncio, getAnunciosByUser } from '../controllers/anuncio.js';
import { asyncCatched } from "../utils/asyncCatched.js";
import checkAuth  from '../middleware/checkAuth.js'

const router = express.Router();

router.get('/', asyncCatched(getAnuncios));
router.get('/user-anuncios', checkAuth, asyncCatched(getAnunciosByUser));
router.get('/:id', asyncCatched(findAnuncio));
router.put('/edit/:id', asyncCatched(editAnuncio));
router.post('/create', checkAuth ,asyncCatched(createAnuncio));
router.delete('/delete/:id', checkAuth ,asyncCatched(deleteAnuncio));

export default router;