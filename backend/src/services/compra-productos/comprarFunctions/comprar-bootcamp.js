import Bootcamp from "../../../models/bootcamp.js";
import { ClientError } from "../../../utils/errors/index.js";

export const comprar_bootcamp = async (productId, usuario) => {
    const bootcamp = await Bootcamp.findById(productId).populate("_id");
    const bootcampExistente = usuario.bootcamps.find(bootcamp => bootcamp.id.toString() === productId);

    if (!usuario || !bootcamp) throw new ClientError("Usuario o Bootcamp no encontrado", 404);

    if (!bootcampExistente) {
        usuario.bootcamps.push({
            id: productId,
            name: bootcamp.name,
            description: bootcamp.description
        });
        await usuario.save();
    } else {
        throw new ClientError("El Usuario ya posee este Bootcamp", 409);
    }

    return usuario;
};