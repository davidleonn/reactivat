import { useState, useEffect } from 'react';
import { Menu, X, MapPin, MessageCircle, Phone, Mail } from 'lucide-react';

// Custom SVG to bypass the Lucide deprecation error for brand icons
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 z-50 w-full">
      {/* --- TOP INFO BAR (Desktop Only) --- */}
      <div className="hidden bg-slate-900 py-2 text-white md:block">
        <div className="mx-auto flex max-w-7xl justify-end space-x-8 px-12 text-xs font-bold tracking-widest uppercase">
          <a href="mailto:hola@reactivat.cat" className="flex items-center gap-2 transition-colors hover:text-blue-400">
            <Mail size={14} className="text-blue-500" /> hola@reactivat.cat
          </a>
          <a href="tel:+34634306713" className="flex items-center gap-2 transition-colors hover:text-blue-400">
            <Phone size={14} className="text-blue-500" /> +34 634 30 67 13
          </a>
        </div>
      </div>

      <header className="w-full border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-12 md:h-24">
          {/* Logo */}
          <div className="relative z-110 text-2xl font-black tracking-tighter text-slate-900 uppercase md:text-4xl">Reactiva't</div>

          {/* Desktop Menu - Fancy hover effects */}
          <nav
            aria-label="Navegació principal"
            className="hidden space-x-10 text-base font-extrabold tracking-tight text-slate-500 uppercase md:flex"
          >
            {['Tractaments', 'Tarifes', 'Contacte'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="group relative py-2 transition-colors hover:text-slate-900">
                {item}
                <span className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/34634306713"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-blue-500 px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-blue-600 hover:shadow-xl md:inline-flex"
          >
            Reserva cita
          </a>

          {/* Mobile Menu Toggle Button - Fixed with aria-label for tests */}
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Tancar menú' : 'Obrir menú'}
            className="relative z-110 p-2 text-slate-900 transition-transform active:scale-95 md:hidden"
          >
            {isOpen ? <X size={32} aria-hidden="true" /> : <Menu size={32} aria-hidden="true" />}
          </button>
        </div>

        {/* --- FULL SCREEN MOBILE OVERLAY --- */}
        <div
          className={`h-100dvh fixed inset-0 top-0 left-0 z-100 flex w-screen flex-col bg-white transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? 'translate-y-0 opacity-100' : 'invisible -translate-y-full opacity-0'
          }`}
        >
          {/* Header inside menu */}
          <div className="flex h-20 items-center justify-between px-6">
            <div className="text-2xl font-black text-slate-900 uppercase">Reactiva't</div>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <nav aria-label="Navegació mòbil" className="flex w-full flex-col items-center space-y-10">
              {['Tractaments', 'Tarifes', 'Contacte'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="text-4xl font-black text-slate-900 uppercase transition-colors active:text-blue-600"
                >
                  {item}
                </a>
              ))}

              <a
                href="https://wa.me/34634306713"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-6 flex w-full max-w-[320px] items-center justify-center rounded-xl bg-green-500 py-6 text-2xl font-black text-white shadow-lg transition-transform active:scale-95"
              >
                Reserva cita
              </a>
            </nav>
          </div>

          {/* Socials / Contact Bar */}
          <div className="mb-12 flex justify-center space-x-10 pb-6">
            <a href="#" className="rounded-full bg-slate-100 p-5 text-slate-900 transition-transform active:scale-90" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="rounded-full bg-slate-100 p-5 text-slate-900 transition-transform active:scale-90" aria-label="Ubicació">
              <MapPin size={28} aria-hidden="true" />
            </a>
            <a href="#" className="rounded-full bg-slate-100 p-5 text-slate-900 transition-transform active:scale-90" aria-label="WhatsApp">
              <MessageCircle size={28} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
