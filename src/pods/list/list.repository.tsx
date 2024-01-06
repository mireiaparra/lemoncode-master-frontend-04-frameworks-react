import { Member } from "./list.vm";
import { getMembers as getMembersApi } from "./list.api";
import { mapMemberCollectionFromApiToVm } from "./list.mapper";

export const getMemberCollection = (): Promise<Member[]> => {
  return new Promise<Member[]>((resolve) => {
    getMembersApi().then((result) => {
      resolve(mapMemberCollectionFromApiToVm(result));
    });
  });
};