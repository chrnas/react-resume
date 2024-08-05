import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

// Your test cases using act
describe("App", () => {
  it("should scroll to About section when About button is clicked", () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<App />);

    const aboutButton = screen.getByTestId("navbar-about-button");
    fireEvent.click(aboutButton);
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("about-section-header")).toBeInTheDocument();
  });

  it("should scroll to Experience section when Experience button is clicked", () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<App />);

    const experienceButton = screen.getByTestId("navbar-experience-button");
    fireEvent.click(experienceButton);
    expect(screen.getByTestId("experience-section")).toBeInTheDocument();
    expect(screen.getByTestId("experience-section-header")).toBeInTheDocument();
  });

  it("should scroll to Education section when Education button is clicked", () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<App />);

    const educationButton = screen.getByTestId("navbar-education-button");
    fireEvent.click(educationButton);

    expect(screen.getByTestId("education-section")).toBeInTheDocument();
    expect(screen.getByTestId("education-section-header")).toBeInTheDocument();
  });

  it("should scroll to Project section when Project button is clicked", () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<App />);

    const projectButton = screen.getByTestId("navbar-project-button");
    fireEvent.click(projectButton);

    expect(screen.getByTestId("project-section")).toBeInTheDocument();
    expect(screen.getByTestId("project-section-header")).toBeInTheDocument();
  });

  it("should scroll to Contact section when Contact button is clicked", () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<App />);

    const contactButton = screen.getByTestId("navbar-contact-button");
    fireEvent.click(contactButton);

    expect(screen.getByTestId("contact-section")).toBeInTheDocument();
    expect(screen.getByTestId("contact-section-header")).toBeInTheDocument();
  });
});
