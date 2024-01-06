import { MemberDetailApi } from "./detail.api-model";

export const getMemberDetail = (id: string): Promise<MemberDetailApi> =>
  fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json()
  );