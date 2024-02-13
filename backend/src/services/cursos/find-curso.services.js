import Cursos from "../../models/cursos.js";
import { ClientError } from "../../utils/errors/index.js";

export const find_curso = async (id) => {
    const cursoId = await Cursos.findById(id);
    if (!cursoId) throw new ClientError("Curso Not Found");

    return cursoId;
};