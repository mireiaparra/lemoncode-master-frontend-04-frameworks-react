import React from "react";
import { ListComponent } from "./list.component";
import { getMembers } from "./list.api";
import { OrganizationContext } from "../../core";

export const ListContainer: React.FC = () => {
    const [members, setMembers] = React.useState([]);
    const { organization, setOrganization } = React.useContext(OrganizationContext);

    const search = () => {
        getMembers(organization).then((members) => setMembers((members)));
        }

    React.useEffect(search
    , []);
    return (
        <ListComponent members={members} organization={organization} setOrganization={setOrganization} search={search}/>
    );
    
};