import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-emerald-800/60 bg-emerald-950/80">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-emerald-300/70">
          © {new Date().getFullYear()} Penjelajah Kode — Terinspirasi hutan hujan tropis.
        </div>
      </footer>
    </div>
  );
}

export default App;
