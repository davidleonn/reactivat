import { CheckCircle2 } from 'lucide-react';

const rates = [
  {
    title: 'Primera visita',
    description: 'Avaluació completa, diagnòstic inicial i primer tractament.',
  },
  {
    title: 'Sessió de seguiment',
    description: 'Tractament continuat, teràpia manual i readaptació.',
  },
  {
    title: 'Bons de sessions',
    description: 'Packs de sessions (5 o 10) amb un descompte aplicat. Ideal per a tractaments llargs.',
  },
  {
    title: 'Vals regal',
    description: 'Regala salut. Targetes regal disponibles per a qualsevol tractament.',
  },
];

export function Rates() {
  return (
    <section id="tarifes" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Tarifes i Serveis</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-600"></div>
          <p className="mt-4 text-slate-600">Teràpia personalitzada i transparent. Consulta els nostres preus per a cada necessitat.</p>
        </div>

        <div className="flex flex-col gap-4">
          {rates.map((rate, index) => (
            <div key={index} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md">
              <CheckCircle2 className="mt-1 shrink-0 text-green-500" size={24} />
              <div>
                <h3 className="text-lg font-bold text-slate-900">{rate.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{rate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
