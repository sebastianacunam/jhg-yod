import express from "express";

import { asyncCatched } from '../utils/asyncCatched.js';
import { comprarProducto, enviarRecibo } from "../controllers/compra-productos/productos.js";
import { checkAuthRefreshToken } from "../middleware/checkAuthRefreshToken.js";

const router = express.Router();

router.post('/comprar/:type/:productId', checkAuthRefreshToken, asyncCatched(comprarProducto));
router.post('/enviar-recibo', asyncCatched(enviarRecibo))

export default router;