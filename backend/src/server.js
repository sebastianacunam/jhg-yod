import express from 'express';
import router from './routes/index.js';
import { setMiddlewareApp } from './middleware/setMiddlewareApp.js';

export const app = express();

setMiddlewareApp(app);
app.use("/", router);

app.use((err, req, res, next) => {
   res.status(err.statusCode || 500).send({
     error: true,
     message: err.message
   });
 });


