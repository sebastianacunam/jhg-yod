import express from "express";

import { getMentorias, findMentoria, createMentoria, editMentoria, deleteMentoria } from "../controllers/mentorias.js";
import { asyncCatched } from '../utils/asyncCatched.js';

const router = express.Router();

router.get('/', asyncCatched(getMentorias));
router.get('/:id', asyncCatched(findMentoria));
router.post('/create', asyncCatched(createMentoria));
router.put('/edit/:id', asyncCatched(editMentoria));
router.delete('/delete/:id', asyncCatched(deleteMentoria));

export default router;