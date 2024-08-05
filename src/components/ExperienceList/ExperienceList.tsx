import React from "react";
import { Experience } from "../../interfaces/Experience";
import ExperienceListItem from "../ExperienceListItem/ExperienceListItem";
import "./ExperienceList.css";

const ExperienceList: React.FC<{ experiences: Experience[] }> = ({
  experiences,
}) => {
  return (
    <ul className="ul-education-list">
      {experiences.map((experience: Experience,index:number) => (
        <ExperienceListItem experience={experience} key={index} />
      ))}
    </ul>
  );
};

export default ExperienceList;
