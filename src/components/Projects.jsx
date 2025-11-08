import { FolderGit2, Link as LinkIcon, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Canopy UI",
    desc: "Komponen UI ringan dengan tema hijau-hutan, fokus pada aksesibilitas dan performa.",
    tech: ["React", "Tailwind", "Radix"],
    link: "#",
  },
  {
    title: "Rainforest Maps",
    desc: "Eksplorasi peta hutan hujan tropis interaktif untuk edukasi dan konservasi.",
    tech: ["Leaflet", "Next.js", "Vite"],
    link: "#",
  },
  {
    title: "EcoBlog",
    desc: "Platform blog berkelanjutan dengan jejak karbon rendah dan gambar adaptif.",
    tech: ["Astro", "MDX", "Cloudinary"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-emerald-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-manrope text-3xl font-bold text-emerald-50 md:text-4xl">Portofolio</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-200/80">
            Beberapa karya yang tumbuh dari semangat menjelajah dan merawat alam.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-emerald-800 bg-emerald-900/30 p-6 transition hover:bg-emerald-900/50">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/60 px-3 py-1 text-emerald-50">
                  <FolderGit2 className="h-4 w-4" />
                  Proyek
                </div>
                <a href={p.link} className="text-emerald-200 transition hover:text-lime-300" aria-label={`Buka ${p.title}`}>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-lime-300">{p.title}</h3>
              <p className="mt-2 text-emerald-100/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-emerald-700 bg-emerald-900/40 px-3 py-1 text-xs text-emerald-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a href={p.link} className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 hover:text-lime-300">
                  Kunjungi <LinkIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
