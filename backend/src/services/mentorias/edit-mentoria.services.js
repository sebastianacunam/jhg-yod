import Mentorias from "../../models/mentoria.js";
import { ClientError } from "../../utils/errors/index.js";

export const edit_mentoria = async (data, id) => {
    const { name, description, price } = data;
    const mentoria = await Mentorias.findByIdAndUpdate(
        { _id: id },
        { name, description, price: parseInt(price) },
        { new: true }
    );

    if (!mentoria) {
        throw new ClientError("No existe la Mentoria con ese ID", 404);
    };
    return { Message: "Mentoria Actualizada", dataUpdated: mentoria };

};
