import { Activity, Bone, Dumbbell, Stethoscope } from 'lucide-react';

const treatments = [
  {
    title: 'Fisioteràpia Avançada',
    description: 'Tractaments manuals personalitzats per alleujar el dolor i restaurar la funció muscular i articular.',
    icon: Activity,
  },
  {
    title: 'Osteopatia',
    description: "Enfocament global del cos per tractar l'origen del problema, no només els símptomes.",
    icon: Bone,
  },
  {
    title: 'Readaptació Funcional',
    description: 'Exercici terapèutic per recuperar la força i prevenir futures recaigudes o lesions.',
    icon: Dumbbell,
  },
  {
    title: 'Tecnologia',
    description: 'Ecografia, neuromodulació, tecarteràpia i ones de xoc per accelerar la teva recuperació.',
    icon: Stethoscope,
  },
];

export function Treatments() {
  return (
    <section id="tractaments" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Els Nostres Tractaments</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-slate-800"></div>
        </div>

        {/* 1 column on mobile, 2 columns on tablet/desktop */}
        <div className="grid gap-6 sm:grid-cols-2">
          {treatments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="rounded-lg bg-slate-800 p-3 text-white">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-balance text-slate-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
