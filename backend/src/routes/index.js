import { Router } from "express";
import anuncio from './anuncioRoutes.js';

const router = Router();

router.use("/", anuncio)

export default router;