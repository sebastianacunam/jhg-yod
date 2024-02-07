import { app } from './src/server.js';
import conectarDB from './src/conf/db.js';
import { envs } from './src/conf/envs.js';

conectarDB();

const { PORT } = envs;

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`)
});