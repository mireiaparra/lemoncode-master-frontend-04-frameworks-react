import React, { useContext } from "react";
import { SearchContext } from "./searchContext";
import { Link } from "react-router-dom";

interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const { search, setSearch } = React.useContext(SearchContext);
    // React.useEffect(() => {
    //     fetch("https://api.github.com/orgs/lemoncode/members")
    //     .then(response => response.json())
    //     .then(json => setMembers(json));
    // }
    // , []);
   const handleSearch = () => {
         fetch(`https://api.github.com/orgs/${search}/members`)
         .then(response => response.json())
         .then(json => setMembers(json));
    }
  return (
    <>
        <h2>List page</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
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