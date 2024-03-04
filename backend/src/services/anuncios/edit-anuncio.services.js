import Anuncio from "../../models/anuncio.js";
import { ClientError } from "../../utils/errors/index.js";

export const edit_anuncio = async (data, id) => {
    const { name, description, price, category, deliver_time, location } = data;

    const anuncio = await Anuncio.findByIdAndUpdate(
        { _id: id },
        { name, description, price: parseInt(price), category, deliver_time, location },
        { new: true }
    );

    if (!anuncio) {
        throw new ClientError("No existe el Anuncio con ese ID", 404);
    }
    return {
        Message: "Anuncio Actualizado",
        dataUpdated: anuncio
    };
};