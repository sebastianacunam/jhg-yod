import Stripe from "stripe";;
import { envs } from "../../conf/envs.js";
import { ClientError } from "../../utils/errors/index.js";
import { find_curso } from "../cursos/find-curso.services.js";
import { find_bootcamp } from "../bootcamps/find-bootcamp.services.js";
import { find_mentoria } from "../mentorias/find-mentoria.services.js";
import { find_anuncio } from "../anuncios/find-anuncio.services.js"

const stripe = new Stripe(envs.STRIPE_SECRET_KEY);

export const checkout_stripe = async (id, type) => {

    let product;

    switch (type) {
        case "CURSO":
            product = await find_curso(id);
            break;
    
        case "BOOTCAMP":
            product = await find_bootcamp(id);
            break;
        
        case "MENTORIA":
            product = await find_mentoria(id);
            break;
        
        case "ANUNCIO":
            product = await find_anuncio(id);
            break;
        
        default:
            break;
    };
    if (!product) throw new ClientError("This Product wasn't Found", 404);

    const { name, description } = product;

    const sessionStripe = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: name,
                        description: description,
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

    return sessionStripe.url;
}