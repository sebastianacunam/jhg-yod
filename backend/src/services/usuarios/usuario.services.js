import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const usuarioActual = async (id) => {
   const user = await Usuario.findById(id)
      .select(" -token -confirmed -createdAt -updatedAt -__v ");
   if (!user) {
      throw new ClientError('User not found', 404);
   }
   return user;
};