import React, { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";
import EducationPage from "./pages/EducationPage/EducationPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    switch (sectionId) {
      case "about":
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "experience":
        if (experienceRef.current) {
          experienceRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "education":
        if (educationRef.current) {
          educationRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "project":
        if (projectRef.current) {
          projectRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "contact":
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <NavBar scrollToSection={scrollToSection} />
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={experienceRef}>
        <ExperiencePage />
      </div>
      <div ref={educationRef}>
        <EducationPage />
      </div>
      <div ref={projectRef}>
        <ProjectPage />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </div>
  );
};

export default App;
