import { ClientError } from "../../utils/errors/index.js";

export async function remotiveApi(query) {
   const perPage = 200;
   const page = query.page || 1;
   const offset = (page - 1) * perPage;
   const validParams = ['category', 'company_name', 'search'];
   const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([key]) => validParams.includes(key))
   );

   const queryString = Object.keys(filteredQuery).length > 0
      ? `&${new URLSearchParams(filteredQuery)}`
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
      publication_date: e.publication_date,
      tags: e.tags,
   }));
   if (!result.length) {
      throw new ClientError('Error al consumir la api', 500);
   }
   return result;
};