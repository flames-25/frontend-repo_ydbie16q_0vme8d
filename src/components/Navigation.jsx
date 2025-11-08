import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-800/60 bg-emerald-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 text-emerald-100">
          <Leaf className="h-5 w-5 text-lime-300" />
          <span className="font-semibold">Rainforest Portfolio</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <button onClick={() => scrollTo('about')} className="text-emerald-200 hover:text-lime-300">Tentang</button>
          <button onClick={() => scrollTo('projects')} className="text-emerald-200 hover:text-lime-300">Portofolio</button>
          <button onClick={() => scrollTo('contact')} className="text-emerald-200 hover:text-lime-300">Kontak</button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-emerald-200">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-emerald-800/60 bg-emerald-950">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            <button onClick={() => scrollTo('about')} className="py-2 text-left text-emerald-200">Tentang</button>
            <button onClick={() => scrollTo('projects')} className="py-2 text-left text-emerald-200">Portofolio</button>
            <button onClick={() => scrollTo('contact')} className="py-2 text-left text-emerald-200">Kontak</button>
          </div>
        </div>
      )}
    </header>
  );
}
