import Cursos from "../../models/cursos.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_curso = async (obj) => {
    const { name, description, price } = obj;
    if (!name || !description || !price) throw new ClientError("Missing Data", 400);

    const newCurso = new Cursos({
        name,
        description, 
        price
    });
    const savedCurso = await newCurso.save();

    return savedCurso;
};