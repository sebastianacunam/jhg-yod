import Cursos from "../../models/cursos.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";

export const comprar_curso = async (cursoId, usuarioId) => {
    const curso = await Cursos.findById(cursoId).populate("_id");
    const usuario = await Usuario.findById(usuarioId);

    const cursoExistente = usuario.cursos.find(curso => curso.id.toString() === cursoId);

    if (!usuario || !curso) throw new ClientError("Usuario o Curso no encontrado", 404);

    if (!cursoExistente) {
        usuario.cursos.push({
            id: cursoId,
            name: curso.name,
            description: curso.description
        });
        await usuario.save();
    } else {
        throw new ClientError("El Usuario ya posee este Curso", 409);
    }

    return usuario;
};