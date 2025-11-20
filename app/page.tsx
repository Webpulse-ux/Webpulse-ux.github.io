import Link from "next/link";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { PageShell } from "./components/PageShell";

export default function Home() {
  return (
    <PageShell>
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100/70 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-indigo-500">
            Wie zijn wij
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-5xl">
              Wij bouwen websites.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Wij, WebPulse UX, bieden services aan voor het aanmaken of vernieuwen van websites. We maken gepersonaliseerde sites voor iedereen.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_25px_60px_rgba(99,102,241,0.35)] transition hover:brightness-110"
              href="/proces"
            >
              GRATIS homepagina
            </Link>
            <Link
              className="rounded-full border border-slate-200/80 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
              href="/contact"
            >
              Plan een kennismaking
            </Link>
          </div>
        </div>
        <BeforeAfterSlider beforeSrc="/Before.webp" afterSrc="/After.webp" />
      </section>

      <section id="waarom-nu" className="space-y-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">Waarom wij</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Duidelijke afspraken</h2>
          <p className="mt-2 text-base text-slate-600">
            We focussen op transparantie, snelheid en een
            risicoloos instapaanbod zodat je precies weet wat je krijgt.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Gratis proef",
              body: "Je ontvangt eerst een volledige homepage-conceptpresentatie. Pas wanneer dat goed voelt, starten we samen.",
            },
            {
              title: "Vaste sprintstructuur",
              body: "Transparante updates. Jij ziet iedere stap, van copy tot componenten.",
            },
            {
              title: "Revisies inbegrepen",
              body: "Twee grote revisierondes en onbeperkte kleine correcties binnen de sprint. Zo blijft alles onder controle.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-slate-100 bg-white p-6 text-left shadow-[0_20px_60px_rgba(148,163,184,0.25)]"
            >
              <p className="text-sm uppercase tracking-[0.1em] text-indigo-500">{item.title}</p>
              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
