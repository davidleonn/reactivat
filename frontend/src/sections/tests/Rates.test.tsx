import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Rates } from '../Rates';

describe('Rates Section', () => {
  it('renders the main section heading', () => {
    render(<Rates />);
    expect(screen.getByText(/Tarifes i Serveis/i)).toBeInTheDocument();
  });

  it('renders all specific rate items', () => {
    render(<Rates />);
    const items = ['Primera visita', 'Sessió de seguiment', 'Bons de sessions', 'Vals regal'];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
