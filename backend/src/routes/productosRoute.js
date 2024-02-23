import express from "express";

import { asyncCatched } from '../utils/asyncCatched.js';
import { comprarProducto } from "../controllers/compra-productos/productos.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post('/comprar/:type/:id', checkAuth, asyncCatched(comprarProducto));

export default router;