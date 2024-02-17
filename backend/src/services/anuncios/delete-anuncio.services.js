import Anuncio from "../../models/anuncio.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";

export const delete_anuncio = async (id, idOwner) => {
    const anuncioId = await Anuncio.findOneAndRemove({ _id: id });
    if (!anuncioId) throw new ClientError("Anuncio Not Found", 404);
   
    await Usuario.findByIdAndUpdate(idOwner, {
        $pull: { anuncios: { _id: anuncioId._id }}});

    return {
        message: "Anuncio Eliminado",
        dataDeleted: anuncioId
    };
};