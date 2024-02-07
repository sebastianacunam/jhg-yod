import { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const NODE_ENV = process.env.NODE_ENV

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