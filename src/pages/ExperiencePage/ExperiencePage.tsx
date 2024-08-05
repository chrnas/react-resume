import React from "react";
import "./ExperiencePage.css";
import data from "../../data/experiences.json";
import ExperienceList from "../../components/ExperienceList/ExperienceList";

const ExperiencePage: React.FC = () => {
  return (
    <section
      data-testid="experience-section"
      id="experience"
      className="section"
    >
      <h1 data-testid="experience-section-header" className="section-header">
        Experience
      </h1>
      <ExperienceList experiences={data.experiences} />
    </section>
  );
};

export default ExperiencePage;
