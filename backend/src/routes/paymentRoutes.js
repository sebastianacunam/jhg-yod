import express from "express";
import { createSession } from "../controllers/stripe/payment.js";
import { asyncCatched } from '../utils/asyncCatched.js';
import { validateCreatePayment } from "../middleware/expressValidator/payment/validatePayment.js";
import { validationResultExpress } from "../middleware/expressValidator/validationResultExpress.js";
import { isValidObjectId } from "../middleware/expressValidator/validationId.js";

const router = express.Router();

router.post('/create-checkout-session/:id', isValidObjectId("id"), validateCreatePayment, validationResultExpress, asyncCatched(createSession));

export default router;