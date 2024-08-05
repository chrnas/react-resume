import React from "react";
import "./NavBar.css";
import { NavBarProps } from "../../interfaces/NavBarProps";

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  return (
    <nav data-testid="navbar-section" className="navbar">
      <ul>
        <li>
          <button
            data-testid="navbar-about-button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            data-testid="navbar-experience-button"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            data-testid="navbar-education-button"
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>
        </li>
        <li>
          <button
            data-testid="navbar-project-button"
            onClick={() => scrollToSection("project")}
          >
            Project
          </button>
        </li>
        <li>
          <button
            data-testid="navbar-contact-button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
