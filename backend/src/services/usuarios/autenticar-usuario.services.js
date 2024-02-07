import generateJWT from "../../helpers/generateJWT.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const autenticarUsuario = async ({ email, password }) => {

   //Comprobar si existe el usuario
   const usuario = await Usuario.findOne({ email }).select('+password')
   if (!usuario) {
      throw new ClientError('El usuario no existe', 404);
   }

   //Comprobar si el usuario está confirmado
   if (!usuario.confirmed) {
      throw new ClientError('El usuario no está confirmado', 401);
   }

   //Comprobar su password, previamente hasheada en el modelo Usuario.js
   if (await usuario.comprobarPassword(password)) {
      return {
         _id: usuario._id,
         name: usuario.name,
         email: usuario.email,
         image: usuario.image,
         token: generateJWT(usuario._id), //mandar el id por JWT
      };
   } else {
      throw new ClientError('La contraseña es incorrecta', 401);
   }
};