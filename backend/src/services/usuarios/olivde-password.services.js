import { emailOlvidePassword } from "../../helpers/emailjs.js";
import { generateId } from "../../helpers/generateId.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";

export const olvide_password = async (email) => {
   const usuario = await Usuario.findOne({ email });
   if (!usuario) {
      throw new ClientError('Email does not exist', 404);
   }

   usuario.token = generateId();
   await usuario.save();

   await emailOlvidePassword({
      email: usuario.email,
      nombre: usuario.nombre,
      token: usuario.token,
   });

   return { Message: 'We have sent an email with the instructions' };
}