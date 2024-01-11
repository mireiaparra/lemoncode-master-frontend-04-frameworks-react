import React from "react";
import { MemberDetail } from "./detail.vm";
import { Link } from "react-router-dom";
import { routes } from "../../router";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
    member: MemberDetail;
}
export const DetailComponent: React.FC<Props> = (props) => {
    const { member } = props;
    return (
    <Card sx={{maxWidth: 345, m:2, height: 500}}>
      <CardMedia
      component="img"
      sx={{height: 300}}
      image={member.avatar_url}
      title={member.name}
      />
      <Typography gutterBottom variant="h5" component="div">
          {member.name ?? member.login}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {member.company}
        </Typography>
    <CardActions>
      <Link to={routes.list}>Back to list page</Link>
    </CardActions>
  </Card>
    )
}