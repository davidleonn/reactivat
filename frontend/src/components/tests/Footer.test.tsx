import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '../Footer';

describe('Footer Section', () => {
  it('renders the bottom call-to-action', () => {
    render(<Footer />);
    expect(screen.getByText(/Llest per començar la teva recuperació/i)).toBeInTheDocument();
  });

  it('contains the correct WhatsApp booking link in the CTA', () => {
    render(<Footer />);
    const waLink = screen.getByLabelText(/Reserva cita ara per WhatsApp/i);
    expect(waLink).toHaveAttribute('href', 'https://wa.me/34634306713');
  });

  it('shows valid contact information links', () => {
    render(<Footer />);
    expect(screen.getByLabelText(/Trucar al telèfon/i)).toHaveAttribute('href', 'tel:+34634306713');
    expect(screen.getByLabelText(/Enviar un correu/i)).toHaveAttribute('href', 'mailto:info@reactivat.cat');
    expect(screen.getByLabelText(/Ubicació de la clínica a Google Maps/i)).toBeInTheDocument();
  });
});
