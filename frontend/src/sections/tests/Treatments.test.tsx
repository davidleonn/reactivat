import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Treatments } from '../Treatments';

describe('Treatments Section', () => {
  it('renders the section title', () => {
    render(<Treatments />);
    expect(screen.getByText(/Els Nostres Tractaments/i)).toBeInTheDocument();
  });

  it('renders all four treatment categories', () => {
    render(<Treatments />);
    const categories = ['Fisioteràpia Avançada', 'Osteopatia', 'Readaptació Funcional', 'Tecnologia'];
    categories.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
