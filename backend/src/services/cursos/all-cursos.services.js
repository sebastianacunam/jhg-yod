import Cursos from "../../models/cursos.js";
import { ClientError } from "../../utils/errors/index.js";

export const all_cursos = async () => {
    const cursos = await Cursos.find();
    if (!cursos.length) throw new ClientError("Cursos not found", 404);

    return cursos;
};