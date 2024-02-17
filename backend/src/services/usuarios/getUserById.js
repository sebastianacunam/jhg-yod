import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const getUserById = async (id) => {
    const userId = await Usuario.findById(id)
    console.log(userId, 'a ver qué traez')
    if (!userId) {
        throw new ClientError('User not found', 404);
    }
    return userId;
};