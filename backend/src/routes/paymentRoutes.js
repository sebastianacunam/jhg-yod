import express from "express";

import { createSession } from "../controllers/stripe/payment.js";
import { asyncCatched } from '../utils/asyncCatched.js';

const router = express.Router();

router.post('/create-checkout-session/:id', asyncCatched(createSession));

export default router;