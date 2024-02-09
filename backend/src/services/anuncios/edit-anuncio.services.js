import Anuncio from "../../models/anuncio.js";
import { ClientError } from "../../utils/errors/index.js";

export const edit_anuncio = async (data, id) => {
    if (id.length === 24) {
        const anuncio = await Anuncio.findByIdAndUpdate(
            { _id: id },
            data,
            { new: true }
        );

        if (!anuncio) {
            throw new ClientError("No existe el Anuncio con ese ID", 404);
        } else {
            return {
                message: "Anuncio Actualizado",
                dataUpdated: anuncio
            };
        };
    };
};