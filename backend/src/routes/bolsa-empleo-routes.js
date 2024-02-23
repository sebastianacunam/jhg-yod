import { Router } from 'express';
import { allApis } from '../controllers/bolsa-empleo.js';
import { asyncCatched } from '../utils/asyncCatched.js';

const router = Router();

//La queryParams que se le puede enviar a la api de remotive para filtrar son: category,company_name,search.
router.get("/remotive", asyncCatched(allApis));

export default router;