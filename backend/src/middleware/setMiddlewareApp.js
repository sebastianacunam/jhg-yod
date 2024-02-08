import { json } from 'express';
import { envs } from '../conf/envs.js';
import cors from 'cors';
import morgan from 'morgan';
const { NODE_ENV } = envs;

export const setMiddlewareApp = (app) => {
   app.use(json());
   app.use(cors({
      origin: '*',
      credentials: true,
      allowedHeaders: [
         'Origin',
         'X-Requested-With',
         'Content-Type',
         'Accept',
         'authorization',
      ],
   }));
   NODE_ENV === "development" && app.use(morgan("dev"));
};