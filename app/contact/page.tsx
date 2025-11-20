import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { PageShell } from "../components/PageShell";

const contactOptions = [
  {
    label: "Mail direct",
    detail: "webpulse.ux@gmail.com",
    description: "Stuur ons een korte briefing of vraag en we reageren doorgaans dezelfde werkdag.",
    responseTime: "Binnen 24 uur antwoord",
    href: "mailto:webpulse.ux@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">Contact</p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
          Laat ons weten welke pagina&apos;s je wilt bouwen
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Vul je favoriete kanaal in en we reageren binnen één werkdag met een voorstel voor de
          volgende stappen.
        </p>
      </section>

      <section className="grid gap-6 md:mx-auto md:max-w-2xl">
        {contactOptions.map((option) => (
          <Link
            key={option.label}
            href={option.href}
            className="relative overflow-hidden rounded-[28px] border border-transparent bg-slate-900 p-6 text-left shadow-[0_25px_70px_rgba(79,70,229,0.35)] transition hover:scale-[1.01]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 via-purple-500/70 to-sky-400/70 opacity-70" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.12em] text-white/80">{option.label}</p>
              <p className="mt-4 text-2xl font-semibold text-white">{option.detail}</p>
              <p className="mt-3 text-sm text-white/80">{option.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Open mailapp
                <span aria-hidden="true">→</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">{option.responseTime}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="rounded-[40px] border border-slate-100 bg-white px-8 py-10 shadow-[0_25px_70px_rgba(148,163,184,0.25)]">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">Briefing</p>
            <h2 className="text-3xl font-semibold text-slate-900">Stuur ons je verhaal</h2>
            <p className="text-base text-slate-600">
              Deel in een paar regels wat je nodig hebt. Wij sturen een voorstel terug.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
