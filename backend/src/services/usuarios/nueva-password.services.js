import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const nuevaPassword = async ({ token, password }) => {
   const usuario = await Usuario.findOne({ token });

   if (!usuario) {
      throw new ClientError('User not found', 404);
   };

   usuario.password = password;
   usuario.token = '';

   await usuario.save();

   return 'Contraseña modificada satisfactoriamente';

};