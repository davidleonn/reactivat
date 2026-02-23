import { CalendarCheck, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      aria-label="Introducció"
      className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-slate-900 px-6 text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Clínica Reactiva't" // Matches your failing test exactly
          className="h-full w-full object-cover opacity-30 grayscale-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 via-transparent to-slate-900/60" />
      </div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8">
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-xs font-black tracking-[0.2em] text-white uppercase backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
          Clínica de Fisioteràpia Avançada
        </div>

        <h1 className="text-5xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-7xl lg:text-8xl">
          FISIOTERÀPIA <br className="hidden lg:block" />
          <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">I OSTEOPATIA</span>
        </h1>

        <p className="max-w-2xl text-xl leading-relaxed font-light text-balance text-slate-300 md:text-2xl">
          Tecnologia d'avantguarda i un enfocament integral per a la teva salut a <span className="font-bold text-white">Castellar del Vallès</span>.
        </p>

        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/34634306713"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-green-500 px-10 py-5 text-xl font-black text-white shadow-2xl transition-all hover:scale-105 hover:bg-green-600"
          >
            <CalendarCheck size={28} aria-hidden="true" />
            RESERVA CITA ARA
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <ChevronDown size={32} className="text-white/40" aria-hidden="true" />
      </div>
    </section>
  );
}
