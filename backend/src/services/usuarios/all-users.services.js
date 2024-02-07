import Usuario from "../../models/usuario.js";
import { ClientError } from '../../utils/errors/index.js';


export const all_users = async () => {
   const users = await Usuario.find();
   if (!users.length) {
      throw new ClientError("Users not found", 404);
   }
   return users;
};
