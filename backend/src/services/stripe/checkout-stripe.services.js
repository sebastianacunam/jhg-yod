import Stripe from "stripe";;
import { envs } from "../../conf/envs.js";
import { ClientError } from "../../utils/errors/index.js";
import { find_curso } from "../cursos/find-curso.services.js";
import { find_bootcamp } from "../bootcamps/find-bootcamp.services.js";
import { find_mentoria } from "../mentorias/find-mentoria.services.js";
import { find_anuncio } from "../anuncios/find-anuncio.services.js"

const stripe = new Stripe(envs.STRIPE_SECRET_KEY);

export const checkout_stripe = async (id, body) => {

    const { type, price, pm, description } = body;

    if (!type) throw new ClientError("Missing Data", 400);

    let product;
    let formatPrice = price*100;

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

    const sessionStripe = await stripe.paymentIntents.create({
        amount: formatPrice,
        currency: "usd",
        payment_method: pm,
        description: description,
        return_url: "http://localhost:5173/compra-exitosa",
        confirm: true
    });
    if (!sessionStripe) throw new ClientError("Error Stripe Payment", 400);

    return sessionStripe;
}