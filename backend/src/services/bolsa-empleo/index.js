import { remotiveApi } from './remotive-api.js';
import { jobicyApi } from './jobicy-api.js';

export const allApisConcat = async (query) => {
   const validateQueryRemotive = ['category', 'company_name', 'search'];
   const validateQueryJobicy = ['geo', 'industry', 'tag'];

   const filteredQueryRemotive = Object.fromEntries(
      Object.entries(query).filter(([key]) => validateQueryRemotive.includes(key))
   );
   const filteredQueryJobicy = Object.fromEntries(
      Object.entries(query).filter(([key]) => validateQueryJobicy.includes(key))
   );

   if (filteredQueryRemotive.length > 0) {
      const remotive = await remotiveApi(filteredQueryRemotive);
      const jobicy = await jobicyApi(filteredQueryJobicy);
      const concatApis = await remotive.concat(jobicy);
      return concatApis;

   } else if (filteredQueryJobicy.length > 0) {
      const jobicy = await jobicyApi(filteredQueryJobicy);
      const remotive = await remotiveApi(filteredQueryRemotive);
      const concatApis = await jobicy.concat(remotive);
      return concatApis;

   } else {
      const remotive = await remotiveApi(filteredQueryRemotive);
      const jobicy = await jobicyApi(filteredQueryJobicy);
      const concatApis = await remotive.concat(jobicy);
      return concatApis;
   }

};