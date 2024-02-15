import Stripe from "stripe";;
import { envs } from "../../conf/envs.js";
import { ClientError } from "../../utils/errors/index.js";

const stripe = new Stripe(envs.STRIPE_SECRET_KEY);

export const checkout_stripe = async () => {
    const sessionStripe = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Curso 1',
                        description: 'curso 1 description',
                    },
                    currency: 'ars',
                    unit_amount: 100000,
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3001/payment/success',
        cancel_url: 'http://localhost:3001/payment/cancel'
    });

    if (!sessionStripe) throw new ClientError("Error Stripe Payment", 400);

    return sessionStripe;
}