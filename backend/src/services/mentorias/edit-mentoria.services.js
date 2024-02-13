import Mentorias from "../../models/mentoria.js";
import { ClientError } from "../../utils/errors/index.js";

export const edit_mentoria = async (data, id) => {
    if (id.length === 24) {
        const mentoria = await Mentorias.findByIdAndUpdate(
            { _id: id },
            data,
            { new: true }
        );

        if (!mentoria) {
            throw new ClientError("No existe la Mentoria con ese ID", 404);
        } else {
            return {
                message: "Mentoria Actualizada",
                dataUpdated: mentoria
            };
        };
    };
};