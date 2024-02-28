import { envs } from "../conf/envs.js";
import { ClientError } from "../utils/errors/index.js";
import jwt from 'jsonwebtoken';

export const checkAuthRefreshToken = (req, res, next) => {
   const refreshTokenCookie = req.cookies.refreshToken;
   if (!refreshTokenCookie) {
      throw new ClientError('Token invalido', 401);
   }
   const { id } = jwt.verify(refreshTokenCookie, envs.JWT_REFRESH);

   req.id = id;
   next();
};