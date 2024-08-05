import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../pages/ExperiencePage/ExperiencePage';

describe('Experience', () => {
  it('should render Experience component correctly', () => {
    render(<Experience/>);

    expect(screen.getByTestId('experience-section')).toBeInTheDocument();
    expect(screen.getByTestId('experience-section-header')).toBeInTheDocument();
    expect(screen.getByText('Details about my work experience.')).toBeInTheDocument();
  });
});
