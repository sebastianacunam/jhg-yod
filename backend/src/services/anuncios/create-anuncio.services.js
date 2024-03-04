import Anuncio from "../../models/anuncio.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_anuncio = async (obj, idOwner) => {
    const { name, description, price, category, deliver_time, location } = obj;

    const newAnuncio = new Anuncio({
        name,
        description,
        price: parseInt(price),
        category,
        deliver_time,
        location,
        owner: idOwner
    });

    if (!newAnuncio) throw new ClientError("Missing Data", 400);

    const savedAnuncio = await newAnuncio.save();


    await Usuario.findByIdAndUpdate(idOwner, {
        $push: { anuncios: newAnuncio },
    });


    return savedAnuncio;
};