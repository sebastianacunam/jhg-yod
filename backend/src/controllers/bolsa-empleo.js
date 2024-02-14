import { jobicyApi } from '../services/bolsa-empleo/jobicy-api.js';
import { remotiveApi } from '../services/bolsa-empleo/remotive-api.js';
import { response } from '../utils/response.js';

export const remotive = async ({ query }, res) => {
   // const { page } = query;

   const result = await remotiveApi(query);
   response(res, 201, result);
};

export const jobicy = async ({ query }, res) => {
   const result = await jobicyApi(query);
   response(res, 201, result);
};