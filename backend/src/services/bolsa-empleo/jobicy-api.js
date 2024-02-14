import { ClientError } from "../../utils/errors/index.js";

export async function jobicyApi(query) {
   const perPage = 20;
   const queryString = Object.keys(query).length > 0
      ? `&${new URLSearchParams(query)}`
      : '';
   const apiUrl = await fetch(`https://jobicy.com/api/v2/remote-jobs?count=${perPage}${queryString}`);
   const response = await apiUrl.json();
   const result = response.jobs.map(e => ({
      id: e.id,
      url: e.url,
      title: e.jobTitle,
      company_name: e.companyName,
      company_logo: e.companyLogo,
      jobIndustry: e.jobIndustry,
      job_type: e.job_type,
   }));
   if (!result.length) {
      throw new ClientError('Error al consumir la api', 500);
   }
   return result;
};

