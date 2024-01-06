import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "../router";
import { DetailContainer } from "../pods";

export const DetailScene: React.FC = () => {
  const { id } = useParams();
  return (
   <DetailContainer id={id}/>
  );
};