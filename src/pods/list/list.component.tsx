import React from 'react';
import { Member } from './list.vm';
import { Link } from 'react-router-dom';
import { routes } from '../../router';
import { Organization } from '../../core';

interface Props {
    members: Member[];
    organization: string;
    setOrganization: (organization: string) => void;
    search: () => void;
}

export const ListComponent:React.FC<Props> = (props) => {
    const { members, organization, setOrganization, search } = props;
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrganization(event.target.value);
    }

    const handleSearchClick = () => {
        search();
    }

    return (
        <>
            <h2>List page</h2>
            <input type="text" value={organization} onChange={handleSearch}/>
            <button onClick={handleSearchClick}>Search</button>
          <div className="list-header-container">
            <span className="list-header">Avatar</span>
            <span className="list-header">Id</span>
            <span className="list-header">Name</span>
            </div>
            <ul>
                    {
                        members.map(member =>
                            <li key={member.id} className="list-user-list-container">
                                <img src={member.avatar_url}/>
                                <span>{member.id}</span>
                                <span>{member.login}</span>
                                <Link to={routes.detail(member.login)}>See detail</Link>
                            </li>
                        )
                    }
               
            </ul>
            </>
      );
}