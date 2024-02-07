import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const usuarioActual = async ({ name }) => {
   const user = await Usuario.findOne({ name })
      .select(" -token -confirmed -createdAt -updatedAt -__v ");
   if (!user) {
      throw new ClientError('User not found', 404);
   }
   return user;
};