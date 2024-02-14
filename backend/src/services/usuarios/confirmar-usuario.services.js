import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const confirmUsuario = async (token) => {
   const usuarioConfirmar = await Usuario.findOne({ token });

   if (!usuarioConfirmar) {
      throw new ClientError('Token de confirmación inválido', 401);
   }
   usuarioConfirmar.confirmed = true;
   usuarioConfirmar.token = '';
   await usuarioConfirmar.save();
   return { message: '¡¡¡Usuario confirmado satisfactoriamente!!!' };
};