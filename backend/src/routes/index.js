import { Router } from "express";
import anuncio from './anuncioRoutes.js';
import usuario from './usuarioRoutes.js';

const router = Router();

router.use("/anuncios/", anuncio)
router.use("/users/", usuario)

export default router;