import Cursos from "../../../models/cursos.js";
import { ClientError } from "../../../utils/errors/index.js";

export const comprar_curso = async (productId, usuario) => {
    const curso = await Cursos.findById(productId).populate("_id");
    const cursoExistente = usuario.cursos.find(curso => curso.id.toString() === productId);

    if (!usuario || !curso) throw new ClientError("Usuario o Curso no encontrado", 404);

    if (!cursoExistente) {
        usuario.cursos.push({
            id: productId,
            name: curso.name,
            description: curso.description
        });
        await usuario.save();
    } else {
        throw new ClientError("El Usuario ya posee este Curso", 409);
    }

    return usuario;
};