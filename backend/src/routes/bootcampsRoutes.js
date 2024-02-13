import express from "express";

import { getBootcamps, findBootcamp, createBootcamp, deleteBootcamp, editBootcamp } from '../controllers/bootcamps.js';
import { asyncCatched } from "../utils/asyncCatched.js"; 

const router = express.Router();

router.get('/', asyncCatched(getBootcamps));
router.get('/:id', asyncCatched(findBootcamp));
router.post('/create', asyncCatched(createBootcamp));
router.put('/edit/:id', asyncCatched(editBootcamp));
router.delete('/delete/:id', asyncCatched(deleteBootcamp));

export default router;