import Anuncio from "../../models/anuncio.js";
import { ClientError } from "../../utils/errors/index.js";

export const delete_anuncio = async (id) => {
    const anuncioId = await Anuncio.findOneAndDelete({ _id: id });
    if (!anuncioId) throw new ClientError("Anuncio Not Found", 404);

    return {
        message: "Anuncio Eliminado",
        dataDeleted: anuncioId
    };
};