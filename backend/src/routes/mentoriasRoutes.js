import express from "express";

import { getMentorias, findMentoria, createMentoria, editMentoria, deleteMentoria } from "../controllers/mentorias.js";

const router = express.Router();

router.get('/', getMentorias);
router.get('/:id', findMentoria);
router.post('/create', createMentoria);
router.put('/edit/:id', editMentoria);
router.delete('/delete/:id', deleteMentoria);

export default router;