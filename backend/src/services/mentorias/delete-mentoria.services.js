import Mentorias from "../../models/mentoria.js";
import { ClientError } from "../../utils/errors/index.js";

export const delete_mentoria = async (id) => {
    const mentoriaId = await Mentorias.findOneAndDelete({ _id: id });
    if (!mentoriaId) {
        throw new ClientError("Mentoria Not Found", 404);
    }

    return {
        message: "Mentoria Eliminada",
        dataDeleted: mentoriaId
    };
}