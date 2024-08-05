import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/AboutPage/AboutPage';
import '@testing-library/jest-dom'

describe('About', () => {
    it('should render About component correctly', () => {
      render(<About/>);
      
      expect(screen.getByTestId('about-section')).toBeInTheDocument();
      expect(screen.getByTestId('about-section-header')).toBeInTheDocument();
      expect(screen.getByText('Learn more about me.')).toBeInTheDocument();
    });
  });
  
