import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '../Hero';

describe('Hero Section', () => {
  it('renders the main SEO heading', () => {
    render(<Hero />);
    const heading = screen.getByText(/FISIOTERÀPIA AVANÇADA/i);
    expect(heading).toBeInTheDocument();
  });

  it('has the correct WhatsApp booking link', () => {
    render(<Hero />);
    const ctaLink = screen.getByRole('link', { name: /Reserva cita ara/i });
    expect(ctaLink).toHaveAttribute('href', 'https://wa.me/34634306713');
  });

  // it('renders the hero image with alt text for SEO', () => {
  //   render(<Hero />);
  //   const img = screen.getByAltText(/Fisioterapeuta professional/i);
  //   expect(img).toBeInTheDocument();
  // });
});
