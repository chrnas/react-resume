import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar', () => {
  it('should render all navigation buttons', () => {
    render(<NavBar scrollToSection={() => {}} />);

    expect(screen.getByTestId('navbar-about-button')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-experience-button')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-education-button')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-project-button')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-contact-button')).toBeInTheDocument();
  });

  it('should call scrollToSection when About button is clicked', () => {
    const mockScrollToSection = jest.fn();
    render(<NavBar scrollToSection={mockScrollToSection} />);

    const aboutButton = screen.getByTestId('navbar-about-button');
    fireEvent.click(aboutButton);

    expect(mockScrollToSection).toHaveBeenCalledWith('about');
  });

  it('should call scrollToSection when Experience button is clicked', () => {
    const mockScrollToSection = jest.fn();
    render(<NavBar scrollToSection={mockScrollToSection} />);

    const experienceButton = screen.getByTestId('navbar-experience-button');
    fireEvent.click(experienceButton);

    expect(mockScrollToSection).toHaveBeenCalledWith('experience');
  });

  it('should call scrollToSection when Education button is clicked', () => {
    const mockScrollToSection = jest.fn();
    render(<NavBar scrollToSection={mockScrollToSection} />);

    const educationButoon = screen.getByTestId('navbar-education-button');
    fireEvent.click(educationButoon);

    expect(mockScrollToSection).toHaveBeenCalledWith('education');
  });

  it('should call scrollToSection when Project button is clicked', () => {
    const mockScrollToSection = jest.fn();
    render(<NavBar scrollToSection={mockScrollToSection} />);

    const projectButton = screen.getByTestId('navbar-project-button');
    fireEvent.click(projectButton);

    expect(mockScrollToSection).toHaveBeenCalledWith('project');
  });

  it('should call scrollToSection when Contact button is clicked', () => {
    const mockScrollToSection = jest.fn();
    render(<NavBar scrollToSection={mockScrollToSection} />);

    const contactButton = screen.getByTestId('navbar-contact-button');
    fireEvent.click(contactButton);

    expect(mockScrollToSection).toHaveBeenCalledWith('contact');
  });
});
