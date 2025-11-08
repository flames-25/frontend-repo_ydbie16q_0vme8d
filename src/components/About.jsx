import { Sprout, MapPin, BadgeCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-emerald-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-manrope text-3xl font-bold text-emerald-50 md:text-4xl">Tentang Saya</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-200/80">
            Peramu antarmuka dan penikmat rimba. Saya percaya desain yang baik itu
            seperti ekosistem: seimbang, adaptif, dan berkelanjutan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-800 bg-emerald-900/30 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-800/60 px-3 py-1 text-emerald-50">
              <Sprout className="h-4 w-4" />
              Nilai
            </div>
            <ul className="space-y-2 text-emerald-100/90">
              <li className="flex items-start gap-2"><BadgeCheck className="mt-1 h-4 w-4 text-lime-300"/> Aksesibilitas & performa</li>
              <li className="flex items-start gap-2"><BadgeCheck className="mt-1 h-4 w-4 text-lime-300"/> Desain ramah lingkungan</li>
              <li className="flex items-start gap-2"><BadgeCheck className="mt-1 h-4 w-4 text-lime-300"/> Kolaborasi terbuka</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-800 bg-emerald-900/30 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-800/60 px-3 py-1 text-emerald-50">
              <MapPin className="h-4 w-4" />
              Keahlian
            </div>
            <ul className="space-y-2 text-emerald-100/90">
              <li>React, TypeScript, Tailwind</li>
              <li>Design systems & UX writing</li>
              <li>Performance & SEO</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-800 bg-emerald-900/30 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-800/60 px-3 py-1 text-emerald-50">
              <Sprout className="h-4 w-4" />
              Misi
            </div>
            <p className="text-emerald-100/90">
              Membawa kehangatan hutan ke dunia digital: antarmuka yang damai,
              cepat, dan berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
