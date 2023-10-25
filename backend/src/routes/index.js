import { Router } from "express";
import anuncio from './anuncioRoutes.js';

const router = Router();

router.use("/anuncios/", anuncio)

export default router;