import { ArrowDown, Github, Linkedin, Mail, Leaf } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-900 to-teal-900">
      {/* Misty rainforest glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />
      </div>

      {/* Decorative leaves */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg className="absolute -left-6 top-8 h-40 w-40 text-lime-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M21 3c-4 0-7 2-9 6-2 4-4 7-9 9 4 2 8 1 12-1 4-2 6-5 6-9V3z"/>
        </svg>
        <svg className="absolute right-6 bottom-10 h-56 w-56 text-emerald-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 22c6-1 10-5 12-12C16 3 19 1 22 2c-1 6-5 10-12 12C3 16 1 19 2 22z"/>
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center text-emerald-50">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-4 py-2 text-sm">
          <Leaf className="h-4 w-4" />
          <span>Jejak di Hutan Hujan Tropis</span>
        </div>
        <h1 className="font-manrope text-4xl font-extrabold leading-tight md:text-6xl">
          Halo, saya <span className="text-lime-300">Penjelajah Kode</span>
        </h1>
        <p className="mt-4 max-w-2xl text-emerald-100/90 md:text-lg">
          Pengembang front-end yang mencintai alam. Saya merancang pengalaman digital yang
          hijau, rapi, dan berdampak — terinspirasi oleh ritme hutan hujan tropis.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => scrollTo('projects')} className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 font-semibold text-emerald-950 shadow-md shadow-emerald-950/20 transition hover:bg-lime-300">
            Lihat Portofolio
            <ArrowDown className="h-4 w-4" />
          </button>
          <button onClick={() => scrollTo('about')} className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-900/40 px-5 py-3 font-semibold text-emerald-50 transition hover:bg-emerald-900/60">
            Tentang Saya
          </button>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a className="rounded-full border border-emerald-300/40 p-2 text-emerald-50 transition hover:bg-emerald-900/50" href="mailto:hello@example.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a className="rounded-full border border-emerald-300/40 p-2 text-emerald-50 transition hover:bg-emerald-900/50" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a className="rounded-full border border-emerald-300/40 p-2 text-emerald-50 transition hover:bg-emerald-900/50" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
