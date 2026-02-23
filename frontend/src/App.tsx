import { Navbar, FloatingWhatsApp } from './components';
import { Hero, Treatments, Rates, Footer } from './sections';

export default function App() {
  return (
    <div className="relative min-h-screen scroll-smooth bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <Rates />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
