import Mentorias from '../../models/mentoria.js';
import { ClientError } from '../../utils/errors/index.js';

export const all_mentorias = async () => {
   const mentorias = await Mentorias.find();
   if (!mentorias.length) throw new ClientError("Mentorias not found", 404);
   
   return mentorias;
};