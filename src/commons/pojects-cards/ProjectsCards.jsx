import React from "react";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import defaultImage from "../../assets/background/Background.svg";
import "../pojects-cards/projectCards.css";

function ProjectsCards({ project }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.image || defaultImage}
        />
        <CardContent sx={{ background: "black", color: "white" }}>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2">{project.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectsCards;
