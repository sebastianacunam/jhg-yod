import Anuncio from "../../models/anuncio.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";

export const all_anuncios_by_user = async (idOwner) => {
    
    const anuncios = await Anuncio.find({owner: idOwner});
    if (!anuncios.length) throw new ClientError("Anuncios not found", 404);

    return anuncios;
};