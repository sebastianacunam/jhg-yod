import { Router } from 'express';
import { jobicy, remotive } from '../controllers/bolsa-empleo.js';
import { asyncCatched } from '../utils/asyncCatched.js';

const router = Router();

//La queryParams que se le puede enviar a la api de remotive para filtrar son: category,company_name,search.
router.get("/remotive", asyncCatched(remotive));

//La queryParams que se le puede enviar a la api de jobicy para filtrar son: geo, industry, tag.
router.get("/jobicy", asyncCatched(jobicy));

export default router;