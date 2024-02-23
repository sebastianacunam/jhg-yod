import { allApisConcat } from '../services/bolsa-empleo/index.js';
import { response } from '../utils/response.js';

export const allApis = async ({ query }, res) => {
   const result = await allApisConcat(query);
   response(res, 201, result);
};