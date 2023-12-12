import express from "express";

import { bootcamps, findBootcamp, createBootcamp, deleteBootcamp, editBootcamp } from '../controllers/bootcamps.js';

const router = express.Router();

router.get('/', bootcamps);
router.post('/create', createBootcamp);
router.delete('/delete/:id', deleteBootcamp);
router.get('/:id', findBootcamp);
router.put('/edit/:id', editBootcamp);

export default router;