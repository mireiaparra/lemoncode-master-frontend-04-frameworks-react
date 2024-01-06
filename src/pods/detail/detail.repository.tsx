import { MemberDetail } from "./detail.vm";
import { getMemberDetail as getMemberDetailApi } from "./detail.api";
import { mapMemberFromApiToVm } from "./detail.mapper";

export const getMemberCollection = (
  id: string
): Promise<MemberDetail> => {
  return new Promise<MemberDetail>((resolve) => {
    getMemberDetailApi(id).then((result) => {
      resolve(mapMemberFromApiToVm(result));
    });
  });
};