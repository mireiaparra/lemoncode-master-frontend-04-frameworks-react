import React from "react";
import { MemberDetail } from "./detail.vm";
import { Link } from "react-router-dom";
import { routes } from "../../router";

interface Props {
    member: MemberDetail;
}
export const DetailComponent: React.FC<Props> = (props) => {
    const { member } = props;
    return (
    <>
    <h2>Hello from Detail page</h2>
      <div className="detail-container">
          <div>
          <label>Id:</label>
          <span>{member.id}</span>
          </div>
          <div>
          <label>Name:</label>
          <span>{member.name}</span>
          </div>
          <div>
          <label>Company:</label>
          <span>{member.company}</span>
          </div>
          <div>
          <label>Bio:</label>
          <span>{member.bio}</span>
          </div>
      </div>
    <Link to={routes.list}>Back to list page</Link>
  </>
    )
}