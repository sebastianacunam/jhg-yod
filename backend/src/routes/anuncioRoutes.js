import express from "express";

import { anuncios, createAnuncio, deleteAnuncio, findAnuncio, editAnuncio } from '../controllers/anuncio.js';

const router = express.Router();

router.get('/', anuncios);
router.post('/create', createAnuncio);
router.delete('/delete/:id', deleteAnuncio);
router.get('/:id', findAnuncio);
router.put('/edit/:id', editAnuncio);

export default router;