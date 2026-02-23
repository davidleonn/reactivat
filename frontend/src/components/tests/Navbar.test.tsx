import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '../Navbar';

describe('Navbar Component', () => {
  it("renders the clinic name Reactiva't", () => {
    render(<Navbar />);
    expect(screen.getAllByText(/REACTIVA'T/i)[0]).toBeInTheDocument();
  });

  it('displays contact info in the top bar', () => {
    render(<Navbar />);
    expect(screen.getByText(/634 30 67 13/i)).toBeInTheDocument();
    expect(screen.getByText(/hola@reactivat.cat/i)).toBeInTheDocument();
  });

  it('opens mobile menu on hamburger click', () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText(/Obrir menú/i);
    fireEvent.click(toggleButton);

    // In the new full-screen menu, we check for the text
    const mobileLinks = screen.getAllByText(/Tractaments/i);
    expect(mobileLinks.length).toBeGreaterThan(1);
  });
});
