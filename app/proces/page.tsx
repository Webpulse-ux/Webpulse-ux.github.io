import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { faqItems, procesStappen } from "../content";

export default function ProcesPage() {
  return (
    <PageShell>
      <section className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">Proces</p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Hoe wij werken</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Elk traject is opgebouwd uit heldere fasen. Jij weet exact wanneer Wie zijn wij, proces
          of portfolio klaarstaat voor feedback en wat we van jou nodig hebben.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_25px_60px_rgba(99,102,241,0.35)] transition hover:brightness-110"
            href="/contact"
          >
            Start het proces
          </Link>
          <Link
            className="rounded-full border border-slate-200/80 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
            href="/paketten"
          >
            Bekijk pakketten
          </Link>
        </div>
      </section>

      <section id="proces" className="space-y-8">
        <h2 className="text-3xl font-semibold text-slate-900">De stappen</h2>
        <div className="grid gap-6 lg:grid-cols-4">
          {procesStappen.map((stap) => (
            <div
              key={stap.fase}
              className="h-full rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-[0_15px_45px_rgba(148,163,184,0.25)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                {stap.fase}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{stap.titel}</h3>
              <p className="mt-2 text-sm text-slate-600">{stap.omschrijving}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-8 rounded-[32px] border border-slate-100 bg-white p-10 shadow-[0_20px_60px_rgba(148,163,184,0.25)]">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">FAQ / Veelgestelde vragen</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Alle antwoorden op één plek</h2>
        </div>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.vraag} className="rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-4">
              <p className="text-base font-semibold text-slate-900">{item.vraag}</p>
              <p className="text-sm text-slate-600">{item.antwoord}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
