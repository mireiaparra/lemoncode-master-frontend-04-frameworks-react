import { MemberApi } from "./list.api-model";

export const getMembers = (organization: string): Promise<MemberApi[]> =>
  fetch(`https://api.github.com/orgs/${organization}/members`).then((response) =>
    response.json()
  );
    