import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34634306713"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none"
      aria-label="Reserva cita per WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
