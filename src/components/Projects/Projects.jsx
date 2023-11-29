import React from "react";
import ProjectCards from "../../commons/pojects-cards/ProjectsCards";
import projectsData from "../../utils/projectsData";
import "../Projects/projects.css";

function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((project, i) => (
        <ProjectCards key={i} project={project} />
      ))}
    </div>
  );
}

export default Projects;
