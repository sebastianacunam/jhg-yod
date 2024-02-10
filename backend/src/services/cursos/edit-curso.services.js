import Cursos from "../../models/cursos.js";
import { ClientError } from "../../utils/errors/index.js";

export const edit_curso = async (data, id) => {
    if (id.length === 24) {
        const curso = await Cursos.findByIdAndUpdate(
            { _id: id },
            data,
            { new: true }
        );

        if (!curso) {
            throw new ClientError("No existe el Curso con ese ID", 404);
        } else {
            return {
                message: "Curso Actualizado",
                dataUpdated: curso
            };
        };
    };
};