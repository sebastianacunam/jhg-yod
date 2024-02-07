import { emailRegistro } from '../../helpers/emailjs.js';
import { generateId } from '../../helpers/generateId.js';
import Usuario from '../../models/usuario.js';
import { ClientError } from '../../utils/errors/index.js';

export const register = async (obj) => {
   const userExists = await Usuario.findOne({ email: obj.email });
   if (userExists) {
      throw new ClientError('El correo que intentas utilizar, ya está registrado', 409)
   }
   const user = new Usuario({
      name: obj.name,
      password: obj.password,
      email: obj.email,
      image: { public_id: '', url: '' }
   })
   user.token = generateId() //id hasheado
   const userAlmacenado = await user.save();

   emailRegistro({
      email: user.email,
      name: user.name,
      token: user.token,
   });

   const { name, email } = userAlmacenado;
   return { name, email };
};