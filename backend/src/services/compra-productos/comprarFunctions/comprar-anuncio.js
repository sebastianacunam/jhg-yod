import Anuncio from "../../../models/anuncio.js";
import { ClientError } from "../../../utils/errors/index.js";

export const comprar_anuncio = async (productId, usuario) => {
    const anuncio = await Anuncio.findById(productId).populate("_id");
    const anuncioExistente = usuario.anuncios.find(anuncio => anuncio.id.toString() === productId);

    if (!usuario || !anuncio) throw new ClientError("Usuario o Anuncio no encontrado", 404);

    if (!anuncioExistente) {
        usuario.cursos.push({
            id: productId,
            name: anuncio.name,
            description: anuncio.description
        });
        await usuario.save();
    } else {
        throw new ClientError("El Usuario ya posee este Anuncio", 409);
    }

    return usuario;
};