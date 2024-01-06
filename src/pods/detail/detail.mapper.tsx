import * as vm from "./detail.vm";
import * as api from "./detail.api-model";

export const mapMemberFromApiToVm = (
  member: api.MemberDetailApi
): vm.MemberDetail => ({
  id: member.id.toString(),
  login: member.login,
  name: member.name,
  company: member.company,
  bio: member.bio,
});