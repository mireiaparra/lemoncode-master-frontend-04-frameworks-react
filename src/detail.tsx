import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity {
    id: string;
    login: string;
    name: string;
    company: string;
    bio: string;
}

const createDefaultMemberDetail = (): MemberDetailEntity => ({
    id: "",
    login: "",
    name: "",
    company: "",
    bio: ""
});

export const DetailPage: React.FC = () => {
    const [memberDetail, setMemberDetail] = React.useState<MemberDetailEntity>(createDefaultMemberDetail());
    const { id } = useParams();
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
        .then(response => response.json())
        .then(json => setMemberDetail(json));
    }
    , []);
  return (
    <>
      <h2>Hello from Detail page</h2>
        <div className="detail-container">
            <div>
            <label>Id:</label>
            <span>{memberDetail.id}</span>
            </div>
            <div>
            <label>Name:</label>
            <span>{memberDetail.name}</span>
            </div>
            <div>
            <label>Company:</label>
            <span>{memberDetail.company}</span>
            </div>
            <div>
            <label>Bio:</label>
            <span>{memberDetail.bio}</span>
            </div>
        </div>
      <Link to="/list">Back to list page</Link>
    </>
  );
};