import React from "react";
import { useParams } from "react-router-dom";
import { Member } from "../list/list.vm";
import { MemberDetail, createInitMemberDetail } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { getMemberCollection } from "./detail.repository";

interface Props {
    id: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
    const [member, setMember] = React.useState<MemberDetail>(createInitMemberDetail());
    const { id } = props;
    React.useEffect(() => {
       getMemberCollection(id).then((member) => setMember(member));
    }, []);
    return (
        <DetailComponent member={member}/>
    );
    }
    