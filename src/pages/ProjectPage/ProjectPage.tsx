import React from "react";
import "./ProjectPage.css";
import data from "../../data/projects.json"
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import { Project } from "../../interfaces/Project";

const ProjectPage: React.FC = () => {
  var projects: Project[] = data.projects;
  return (
    <section data-testid="project-section" id="project" className="section">
      <h1 data-testid="project-section-header" className="section-header">
        Projects
      </h1>
      <ProjectGrid projects={projects} />
    </section>
  );
};

export default ProjectPage;
