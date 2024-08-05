import React from "react";
import Chip from "../Chip/Chip";
import { Skill } from "../../interfaces/Skill";
import "./EducationListItem.css";
import { Education } from "../../interfaces/Education";

const ExperienceListItem: React.FC<{ education: Education }> = ({
  education,
}) => {
  return (
    <li className="li-education-list">
      <h3>
        <a
          className="a-label-link"
          href={education.program.link}
          target="_blank"
          rel="noreferrer"
        >
          {education.program.name}
        </a>
      </h3>
      <p className="list-text-education">
        <span className="list-text-bold">Location: </span> 
        <a
          className="a-label-link"
          href={education.school.location.link}
          target="_blank"
          rel="noreferrer"
        >
          {education.school.location.name}
        </a>
      </p>
      <p className="list-text-education">
        <span className="list-text-bold">School: </span> 
        <a
          className="a-label-link"
          href={education.school.location.link}
          target="_blank"
          rel="noreferrer"
        >
          {education.school.name}
        </a>
      </p>
      <p className="list-text-education">
        <span className="list-text-bold">Date: </span> 
          {education.startDate}-{education.examDate}
      </p>
      <div>{education.description}</div>
      {education.skills.map((skill: Skill, index: number) => (
        <Chip key={index} name={skill.name} link={skill.link} />
      ))}
    </li>
  );
};

export default ExperienceListItem;
