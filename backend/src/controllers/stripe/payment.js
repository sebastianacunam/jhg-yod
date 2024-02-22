import { response } from "../../utils/response.js";
import { checkout_stripe } from "../../services/stripe/checkout-stripe.services.js";

/*************************************************************************/
// CHECKOUT SESSION Controller

export const createSession = async ({ params, body }, res) => {
    const { id } = params
    const session = await checkout_stripe(id, body);
    response(res, 200, session);
};

/*************************************************************************/
// SUCCESS Controller

export const successPayment = (req, res) => {
    response(res, 200, "success!");
};

/*************************************************************************/
// CANCEL Controller

export const cancelPayment = (req, res) => {
    response(res, 200, "cancel!");
};