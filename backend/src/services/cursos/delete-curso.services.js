import Cursos from "../../models/cursos.js";
import { ClientError } from "../../utils/errors/index.js";

export const delete_curso = async (id) => {
    const cursoId = await Cursos.findOneAndDelete({ _id: id });
    if (!cursoId) throw new ClientError("Curso Not Found", 404);

    return {
        message: "Curso Eliminado",
        dataDeleted: cursoId
    };
};