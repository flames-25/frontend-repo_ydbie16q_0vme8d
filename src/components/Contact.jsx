import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-teal-900 to-emerald-900">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-manrope text-3xl font-bold text-emerald-50 md:text-4xl">Kontak</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-200/80">
            Ingin berkolaborasi atau sekadar menyapa? Kirim pesanmu di bawah ini.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-emerald-800 bg-emerald-950/40 p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-emerald-200">Nama</label>
              <input type="text" required placeholder="Namamu" className="w-full rounded-lg border border-emerald-800 bg-emerald-900/40 px-4 py-3 text-emerald-50 outline-none placeholder:text-emerald-300/40 focus:border-lime-400" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-emerald-200">Email</label>
              <input type="email" required placeholder="email@contoh.com" className="w-full rounded-lg border border-emerald-800 bg-emerald-900/40 px-4 py-3 text-emerald-50 outline-none placeholder:text-emerald-300/40 focus:border-lime-400" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-emerald-200">Pesan</label>
              <textarea required rows={5} placeholder="Ceritakan idemu..." className="w-full rounded-lg border border-emerald-800 bg-emerald-900/40 px-4 py-3 text-emerald-50 outline-none placeholder:text-emerald-300/40 focus:border-lime-400" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 font-semibold text-emerald-950 shadow-md shadow-emerald-950/20 transition hover:bg-lime-300">
              <Send className="h-4 w-4" />
              Kirim
            </button>
          </form>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-emerald-200/70">
            <Mail className="h-4 w-4" /> atau email langsung ke hello@example.com
          </p>
        </div>
      </div>
    </section>
  );
}
