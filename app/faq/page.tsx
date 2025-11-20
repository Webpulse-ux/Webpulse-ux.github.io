import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { faqItems } from "../content";

export default function FAQPage() {
  return (
    <PageShell>
      <section className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">FAQ</p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
          Veelgestelde vragen over onze samenwerking
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Geen giswerk: ontdek hoe lang het traject duurt, hoe feedback werkt en wat je van ons mag
          verwachten per pagina.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_25px_60px_rgba(99,102,241,0.35)] transition hover:brightness-110"
            href="/contact"
          >
            Nog een vraag? Neem contact op
          </Link>
          <Link
            className="rounded-full border border-slate-200/80 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
            href="/proces"
          >
            Bekijk ons proces
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        {faqItems.map((item) => (
          <div key={item.vraag} className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_15px_45px_rgba(148,163,184,0.25)]">
            <p className="text-base font-semibold text-slate-900">{item.vraag}</p>
            <p className="mt-2 text-sm text-slate-600">{item.antwoord}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
