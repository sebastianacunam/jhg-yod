import { ClientError } from '../../utils/errors/index.js';
import mongoose from 'mongoose';


export const isValidObjectId = (paramName) => {
   return (req, res, next) => {
      const paramValue = req.params[paramName];

      if (!paramValue || !mongoose.Types.ObjectId.isValid(paramValue)) {
         throw new ClientError('ID no válido', 401);
      }

      next();
   };
};

export const isNotEmptyToken = (paramName) => {
   return (req, res, next) => {
      const paramValue = req.params[paramName];

      if (paramValue.length < 5) {
         throw new ClientError('Token invalido', 401);
      }

      next();
   };
};