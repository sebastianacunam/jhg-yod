import Anuncio from "../../models/anuncio.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_anuncio = async (obj) => {
    const { name, description } = obj;
    if (!name || !description) throw new ClientError("Missing Data", 400);

    const newAnuncio = new Anuncio({
        name,
        description
    });
    const savedAnuncio = await newAnuncio.save();

    return savedAnuncio;
};