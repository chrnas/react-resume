import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../pages/ContactPage/ContactPage';

describe('Contact', () => {
  it('should render Contact component correctly', () => {
    render(<Contact/>);

    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section-header')).toBeInTheDocument();
    expect(screen.getByText('Get in touch with me.')).toBeInTheDocument();
  });
});

