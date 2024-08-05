import React from "react";
import "./Chip.css";
import { Skill } from "../../interfaces/Skill";

const Chip: React.FC<Skill> = ({ name, link }) => {
  return (
    <div className="chip">
      <a href={link} target="_blank" rel="noreferrer">
        <span className="chip-label">{name}</span>
      </a>
    </div>
  );
};

export default Chip;
