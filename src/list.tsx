import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    React.useEffect(() => {
        fetch("https://api.github.com/orgs/lemoncode/members")
        .then(response => response.json())
        .then(json => setMembers(json));
    }
    , []);
  return (
    <>
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
                            <Link to={`/detail/${member.login}`}>See detail</Link>
                        </li>
                    )
                }
           
        </ul>
        </>
  );
};