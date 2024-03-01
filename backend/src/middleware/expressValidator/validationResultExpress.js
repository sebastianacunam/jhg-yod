import { validationResult } from "express-validator";
import { ClientError } from "../../utils/errors/index.js";

export const validationResultExpress = (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      throw new ClientError(errors.errors.map(err => err.msg), 401);
   }
   next();
};