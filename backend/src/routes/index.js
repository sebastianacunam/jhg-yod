import { Router } from "express";
import anuncio from './anuncioRoutes.js';
import usuario from './usuarioRoutes.js';
import cursos from './cursosRoutes.js';
import bootcamps from './bootcampsRoutes.js';

const router = Router();

router.use("/anuncios/", anuncio)
router.use("/users/", usuario)
router.use("/cursos/", cursos)
router.use("/bootcamps/", bootcamps)


export default router;