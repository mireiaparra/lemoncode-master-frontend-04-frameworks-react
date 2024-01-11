import React from "react";
import { ListComponent } from "./list.component";
import { getMembers } from "./list.api";
import { OrganizationContext } from "../../core";

export const ListContainer: React.FC = () => {
    const [members, setMembers] = React.useState([]);
    const { organization, setOrganization } = React.useContext(OrganizationContext);
    const [page, setPage] = React.useState(1);
    const [lastPage, setLastPage] = React.useState(1);

    const search = () => {
        getMembers(organization, page, 10).then(({ members, lastPage }) => {
            setMembers(members);
            setLastPage(lastPage);
          });
    }

    React.useEffect(search
    , [page]);
    return (
        <ListComponent 
        members={members} 
        organization={organization} 
        setOrganization={setOrganization} 
        search={search}
        page={page}
        setPage={setPage}
        lastPage={lastPage}
        />
    );
    
};