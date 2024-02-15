import express from "express";

import { createSession, successPayment, cancelPayment } from "../controllers/stripe/payment.js";
import { asyncCatched } from '../utils/asyncCatched.js';

const router = express.Router();

router.post('/create-checkout-session/:id', asyncCatched(createSession));
router.get('/success', successPayment);
router.get('/cancel', cancelPayment);

export default router;