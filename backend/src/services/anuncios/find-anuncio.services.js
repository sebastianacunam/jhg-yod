import Anuncio from "../../models/anuncio.js";
import { ClientError } from "../../utils/errors/index.js";

export const find_anuncio = async (id) => {
    const anuncioId = await Anuncio.findById(id);
    if (!anuncioId) throw new ClientError("Anuncio Not Found");

    return anuncioId;
};