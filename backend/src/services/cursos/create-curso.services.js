import Cursos from "../../models/cursos.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_curso = async (obj) => {
    const { name, description } = obj;
    if (!name || !description) throw new ClientError("Missing Data", 400);

    const newCurso = new Cursos({
        name,
        description
    });
    const savedCurso = await newCurso.save();

    return savedCurso;
};