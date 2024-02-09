import Anuncio from "../../models/anuncio.js";
import { ClientError } from "../../utils/errors/index.js";

export const all_anuncios = async () => {
    const anuncios = await Anuncio.find();
    if (!anuncios.length) throw new ClientError("Anuncios not found", 404);

    return anuncios;
};