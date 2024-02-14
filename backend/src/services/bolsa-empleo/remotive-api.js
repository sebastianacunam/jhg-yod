import { ClientError } from "../../utils/errors/index.js";

export async function remotiveApi(query) {
   const perPage = 5;
   const page = query.page || 1;
   const offset = (page - 1) * perPage;
   const queryString = Object.keys(query).length > 0
      ? `&${new URLSearchParams(query)}`
      : '';
   const apiUrl = await fetch(`https://remotive.com/api/remote-jobs?limit=${perPage}&offset=${offset}${queryString}`);
   const response = await apiUrl.json();
   const result = response.jobs.map(e => ({
      id: e.id,
      url: e.url,
      title: e.title,
      company_name: e.company_name,
      company_logo: e.company_logo,
      category: e.category,
      job_type: e.job_type,
   }));
   if (!result.length) {
      throw new ClientError('Error al consumir la api', 500);
   }
   return result;
};