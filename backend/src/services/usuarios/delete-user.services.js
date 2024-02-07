import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const delete_user = async (id) => {
    const userId = await Usuario.findOneAndDelete({ _id: id })
    if (!userId) {
        throw new ClientError('User not found', 404);
    }
    return 'User deleted successfully';
};