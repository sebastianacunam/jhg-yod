import express from "express";

import { anuncios } from '../controllers/anuncio.js';

const router = express.Router();

router.get('/anuncios', anuncios);
// router.get('/destiny/:id', findDestiny);
// router.post('/create', createDestiny);
// router.delete('/delete/:id', deleteDestiny);
// router.put('/update/:id', updatedDestiny);

export default router;