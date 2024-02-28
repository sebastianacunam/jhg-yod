import express from "express";

import { asyncCatched } from '../utils/asyncCatched.js';
import { comprarProducto } from "../controllers/compra-productos/productos.js";
import { checkAuthRefreshToken } from "../middleware/checkAuthRefreshToken.js";

const router = express.Router();

router.post('/comprar/:type/:productId', checkAuthRefreshToken, asyncCatched(comprarProducto));

export default router;