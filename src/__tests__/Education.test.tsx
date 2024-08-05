import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from '../pages/EducationPage/EducationPage';
import '@testing-library/jest-dom'

describe('Education', () => {
    it('should render Education component correctly', () => {
      render(<Education/>);
      
      expect(screen.getByTestId('education-section')).toBeInTheDocument();
      expect(screen.getByTestId('education-section-header')).toBeInTheDocument();
      expect(screen.getByText('Details about my education.')).toBeInTheDocument();
    });
  });