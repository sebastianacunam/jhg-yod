import generateJWT, { generateRefreshToken } from "../../helpers/generateJWT.js";
import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";


export const autenticarUsuario = async ({ email, password }, res) => {

   //Comprobar si existe el usuario
   const usuario = await Usuario.findOne({ email }).select('+password')
   if (!usuario) {
      throw new ClientError('Credenciales inválidas', 401);
   }

   //Comprobar si el usuario está confirmado
   if (!usuario.confirmed) {
      throw new ClientError('El usuario no está confirmado', 401);
   }
   
   //Comprobar su password, previamente hasheada en el modelo Usuario.js
   const validatePassword = await usuario.comprobarPassword(password);
   if (!validatePassword) {
      throw new ClientError('Credenciales inválidas', 401);
   }

   const { token, expiresIn } = generateJWT(usuario._id);
   generateRefreshToken(usuario._id, res);
   return { token, expiresIn }
};