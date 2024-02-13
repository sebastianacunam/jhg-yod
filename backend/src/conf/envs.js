import dotenv from 'dotenv';

dotenv.config();

export const envs = {
   PORT: process.env.PORT,
   NODE_ENV: process.env.NODE_ENV,
   MONGO_URI: process.env.MONGO_URI,
   FRONTEND_URL: process.env.FRONTEND_URL,
   JWT_SECRET: process.env.JWT_SECRET,
   EMAIL_USER: process.env.EMAIL_USER,
   EMAIL_PASS: process.env.EMAIL_PASS,
   EMAIL_HOST: process.env.EMAIL_HOST,
   EMAIL_PORT: process.env.EMAIL_PORT,
   EMAIL_SECURE: process.env.EMAIL_SECURE,
   CLIENT_ID: process.env.CLIENT_ID
};