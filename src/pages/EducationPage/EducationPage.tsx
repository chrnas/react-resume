import React from "react";
import "./EducationPage.css";
import EducationList from "../../components/EducationList/EducationList";
import data from "../../data/educations.json";

const EducationPage: React.FC = () => {
  return (
    <section data-testid="education-section" id="eduaction">
      <h1 data-testid="education-section-header" className="section-header">
        Education
      </h1>
      <EducationList educations={data.educations}></EducationList>
    </section>
  );
};

export default EducationPage;
