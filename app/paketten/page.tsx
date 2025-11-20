import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { prijsPakketten } from "../content";

export default function PrijzenPage() {
  return (
    <PageShell>
      <section className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">Paketten</p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Samenwerken op jouw tempo</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Kies een pakket dat bij je past: van een gratis homepage-concept tot volledige launch en onderhoud. We maken
          ieder traject op maat en werken transparant met duidelijke stappen en revisies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_25px_60px_rgba(99,102,241,0.35)] transition hover:brightness-110"
            href="#contact"
          >
            Neem contact op
          </Link>
          <Link
            className="rounded-full border border-slate-200/80 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
            href="/proces"
          >
            Bekijk proces
          </Link>
        </div>
      </section>

      <section id="prijzen" className="space-y-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">Pakketten</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Offerte op maat</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {prijsPakketten.map((pakket) => (
            <div
              key={pakket.titel}
              className="flex h-full flex-col rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(148,163,184,0.25)]"
            >
              <p className="text-sm uppercase tracking-[0.08em] text-indigo-500">{pakket.titel}</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{pakket.prijs}</p>
              <p className="mt-2 text-sm text-slate-600">{pakket.uitleg}</p>
              <ul className="mt-4 mb-6 space-y-2 text-sm text-slate-700">
                {pakket.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="mt-auto inline-flex justify-center rounded-full border border-indigo-200 px-6 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                Offerte aanvragen
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="rounded-[40px] border border-indigo-50/80 bg-gradient-to-r from-indigo-100 via-purple-100 to-sky-100 px-8 py-10 text-slate-900 shadow-[0_30px_80px_rgba(148,163,184,0.25)]"
      >
        <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Contact</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-900">
              Klaar voor een multi-page site die vertrouwen geeft?
            </h3>
            <p className="mt-2 text-base text-slate-600">
              Stuur ons een korte briefing of plan direct een gesprek. We reageren zo spoedig mogelijk.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-base font-medium text-slate-800">
            <a
              className="rounded-full border border-indigo-200 px-8 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              href="/contact"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
