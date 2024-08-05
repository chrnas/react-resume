import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '../pages/ProjectPage/ProjectPage';
import '@testing-library/jest-dom'

describe('Project', () => {
    it('should render Project component correctly', () => {
      render(<Project/>);
      
      expect(screen.getByTestId('project-section')).toBeInTheDocument();
      expect(screen.getByTestId('project-section-header')).toBeInTheDocument();
      expect(screen.getByText('Details about some projects i have been involved with.')).toBeInTheDocument();
    });
  });