import * as vm from "./list.vm";
import * as api from "./list.api-model";

export const mapMemberFromApiToVm = (
  member: api.MemberApi
): vm.Member => ({
  id: member.id.toString(),
  login: member.login,
  avatar_url: member.avatar_url,
});

export const mapMemberCollectionFromApiToVm = (
  memberCollection: api.MemberApi[]
): vm.Member[] =>
  memberCollection.map((member) => mapMemberFromApiToVm(member));