import { Router } from "express";
import anuncio from './anuncioRoutes.js';
import usuario from './usuarioRoutes.js';
import cursos from './cursosRoutes.js';
import bootcamps from './bootcampsRoutes.js';
import mentorias from './mentoriasRoutes.js';
import empleos from './bolsa-empleo-routes.js'
import payment from './paymentRoutes.js';
import productos from './productosRoute.js';

const router = Router();

router.use("/anuncios/", anuncio)
router.use("/users/", usuario)
router.use("/cursos/", cursos)
router.use("/bootcamps/", bootcamps)
router.use("/mentorias/", mentorias)
router.use("/empleos/", empleos)

// STRIPE Route
router.use("/payment/", payment)

// COMPRAR PRODUCTO (Curso, Bootcamp, Mentoria, Anuncio) Route
router.use("/productos/", productos)

export default router;