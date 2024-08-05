import React from "react";
import { Project } from "../../interfaces/Project";
import "./ProjectGridItem.css";
import { Skill } from "../../interfaces/Skill";
import Chip from "../Chip/Chip";

const ProjectGridItem: React.FC<{ project: Project }> = ({ project }) => {
  const forwardToGithub = () => {
    window.open(project.githubLink, '_blank', 'noopener,noreferrer');
  };
  return (
      <div className="grid-item">
        <h3>{project.name}</h3>
        <span onClick={forwardToGithub}>
        <div className="project-grid-container">
          <div className="project-grid-item">
            <img
              className="project-img"
              src={require(`../../images/${project.image}.png`)}
              alt=""
            ></img>
          </div>
          <div className="project-grid-item">
            <p>{project.description}</p>
            {project.skills.map((skill: Skill, index: number) => (
            <Chip key={index} name={skill.name} link={skill.link} />
          ))}
          </div>
        </div>
        </span>
      </div>
  );
};

export default ProjectGridItem;
