import Mentorias from "../../../models/mentoria.js";
import { ClientError } from "../../../utils/errors/index.js";

export const comprar_mentoria = async (productId, usuario) => {
    const mentoria = await Mentorias.findById(productId).populate("_id");
    const mentoriaExistente = usuario.mentorias.find(mentoria => mentoria.id.toString() === productId);

    if (!usuario || !mentoria) throw new ClientError("Usuario o Mentoria no encontrado", 404);

    if (!mentoriaExistente) {
        usuario.mentorias.push({
            id: productId,
            name: mentoria.name,
            description: mentoria.description
        });
        await usuario.save();
    } else {
        throw new ClientError("El Usuario ya posee esta Mentoria", 409);
    }

    return usuario;
};