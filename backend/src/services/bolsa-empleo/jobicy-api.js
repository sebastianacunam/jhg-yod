import { ClientError } from "../../utils/errors/index.js";

export async function jobicyApi(query) {
   const perPage = 50;
   const validParams = ['geo', 'industry', 'tag'];
   const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([key]) => validParams.includes(key))
   );

   const queryString = Object.keys(filteredQuery).length > 0
      ? `&${new URLSearchParams(filteredQuery)}`
      : '';
   const apiUrl = await fetch(`https://jobicy.com/api/v2/remote-jobs?count=${perPage}${queryString}`);
   const response = await apiUrl.json();
   const result = response.jobs.map(e => ({
      id: e.id,
      url: e.url,
      title: e.jobTitle,
      company_name: e.companyName,
      company_logo: e.companyLogo,
      category: e.jobIndustry,
      job_type: e.job_type,
      jobGeo: e.jobGeo,
      publication_date: e.pubDate,
      tags: e.jobSlug,
   }));
   if (!result.length) {
      throw new ClientError('Error al consumir la api', 500);
   }
   return result;
};

