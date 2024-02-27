import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const profile = async (id) => {

   const usuario = await Usuario.findById(id)
      .select(" -token -email -confirmed -createdAt -updatedAt -__v");
   if (!usuario) {
      throw new ClientError('User not found', 404);
   }
   return usuario;
};