import { MemberApi } from "./list.api-model";

export const getMembers = (
  organization: string,
  page: number,
  per_page: number
): Promise<{members: MemberApi[], lastPage: number}> =>
  fetch(
    `https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${per_page}`
  ).then((response) => 
  {
    const link = response.headers.get('link');
    const lastElement =  link.split(',').find((item) => item.includes('rel="last"'))
    const lastPage = lastElement ? parseInt(lastElement.match(/page=(\d+).*$/)[1]) : page;
    return response.json().then(members => ({members, lastPage}));
  });
