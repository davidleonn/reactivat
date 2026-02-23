import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacte" className="bg-slate-900 px-4 py-16 text-slate-300 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Massive CTA for the bottom of the page */}
        <div className="mb-16 rounded-2xl bg-slate-800 p-8 shadow-inner sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Llest per començar la teva recuperació?</h2>
          <p className="mt-4 text-slate-400">No esperis més. Escriu-nos per WhatsApp i trobarem el forat perfecte per a tu.</p>
          <a
            href="https://wa.me/34634306713"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reserva cita ara per WhatsApp"
            className="mx-auto mt-8 flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600"
          >
            <MessageCircle size={28} aria-hidden="true" />
            Reserva ara per WhatsApp
          </a>
        </div>

        {/* Contact Info Grid */}
        <div className="grid gap-8 text-left sm:grid-cols-3 sm:text-center">
          {/* Phone */}
          <div className="flex flex-col items-start gap-2 sm:items-center">
            <Phone className="text-blue-500" size={24} aria-hidden="true" />
            <span className="font-semibold text-white">Telèfon / WhatsApp</span>
            <a href="tel:+34634306713" className="transition-colors hover:text-blue-400" aria-label="Trucar al telèfon de la clínica: 634 30 67 13">
              634 30 67 13
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start gap-2 sm:items-center">
            <Mail className="text-blue-500" size={24} aria-hidden="true" />
            <span className="font-semibold text-white">Correu Electrònic</span>
            <a
              href="mailto:info@reactivat.cat"
              className="transition-colors hover:text-blue-400"
              aria-label="Enviar un correu electrònic a info@reactivat.cat"
            >
              info@reactivat.cat
            </a>
          </div>

          {/* Location / Map */}
          <div className="flex flex-col items-start gap-2 sm:items-center">
            <MapPin className="text-blue-500" size={24} aria-hidden="true" />
            <span className="font-semibold text-white">Ubicació</span>
            <span>Castellar del Vallès</span>
            <a
              href="https://maps.google.com/?q=Castellar+del+Valles+Fisioterapia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Obrir la ubicació de la clínica a Google Maps"
              className="mt-1 text-sm font-bold text-blue-500 underline transition-colors hover:text-blue-400"
            >
              Obrir a Google Maps
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} REACTIVA'T Fisioteràpia i Osteopatia. Tots els drets reservats.
        </div>
      </div>
    </footer>
  );
}
