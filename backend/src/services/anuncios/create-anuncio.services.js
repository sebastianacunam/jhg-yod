import Anuncio from "../../models/anuncio.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_anuncio = async (obj) => {
    const { name, description, price, category, deliver_time, location, idOwner } = obj;
    if (!name || !description || !price || !category || !deliver_time || !location) throw new ClientError("Missing Data", 400);


    const newAnuncio = new Anuncio({
        name,
        description,
        price, 
        category,
        deliver_time,
        location,
        owner: idOwner
    });

    const savedAnuncio = await newAnuncio.save();
    

    await Usuario.findByIdAndUpdate(idOwner, {
        $push: { anuncios: newAnuncio},
    });

    
    return savedAnuncio;
};