import React from "react";
import "./EducationList.css";
import EducationListItem from "../EducationListItem/EducationListItem";
import { Education } from "../../interfaces/Education";

const EducationList: React.FC<{ educations: Education[] }> = ({
  educations,
}) => {
  return (
      <ul className="ul-education-list">
        {educations.map((education: Education, index: number) => (
          <EducationListItem key={index} education={education} />
        ))}
      </ul>
  );
};

export default EducationList;
