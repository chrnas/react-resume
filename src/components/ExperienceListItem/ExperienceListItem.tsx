import React from "react";
import Chip from "../Chip/Chip";
import { Skill } from "../../interfaces/Skill";
import { Experience } from "../../interfaces/Experience";
import "./ExperienceListItem.css";
import { CiLocationOn } from "react-icons/ci";

const ExperienceListItem: React.FC<{ experience: Experience }> = ({
  experience
}) => {
  return (
    <li className="li-experience-list">
      <h3>
        {experience.name}
      </h3>
      <p className="list-text-experience">
        <span className="list-text-bold">Company: </span> 
        <a
          className="a-label-link"
          href={experience.company.link}
          target="_blank"
          rel="noreferrer"
        >
          {experience.company.name}
        </a>
      </p>
      <p className="list-text-experience">
        <span className="list-text-bold">Location: </span> 
        <a
          className="a-label-link"
          href={experience.location.link}
          target="_blank"
          rel="noreferrer"
        >
          {experience.location.name}
        </a>
      </p>
      <p className="list-text-experience">
        <span className="list-text-bold">Date: </span> 
          {experience.date}
      </p>
      <div>{experience.description}</div>
      {experience.skills.map((skill: Skill, index:number) => (
        <Chip key={index} name={skill.name} link={skill.link} />
      ))}
    </li>
  );
};

export default ExperienceListItem;
