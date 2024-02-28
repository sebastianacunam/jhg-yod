import { json } from 'express';
import { envs } from '../conf/envs.js';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const { NODE_ENV } = envs;

export const setMiddlewareApp = (app) => {
   app.use(json());
   app.use(cookieParser());
   app.use(cors({
      origin: 'http://localhost:5173',
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