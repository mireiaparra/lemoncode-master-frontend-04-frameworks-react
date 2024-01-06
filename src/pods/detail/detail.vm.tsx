export interface MemberDetail {
    id: string;
    login: string;
    name: string;
    company: string;
    bio: string;
}

export const createInitMemberDetail = (): MemberDetail => ({
    id: "",
    login: "",
    name: "",
    company: "",
    bio: "",
});