import Link from "next/link";
import { ReactNode } from "react";
import { navLinks } from "../content";

type PageShellProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function PageShell({ children, mainClassName = "" }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-[#fdfbff] text-slate-900">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-100/40 via-sky-50/35 to-violet-100/45 blur-[160px]" />
      <div className="relative">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 text-lg font-semibold text-white">
              WP
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">WebPulse UX</p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-indigo-500">
                Digitale Studio
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-indigo-600">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            className="hidden rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-400/40 transition hover:bg-indigo-500 lg:inline-flex"
            href="/contact"
          >
            Plan een gesprek
          </Link>
        </header>

        <main
          className={`mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-6 ${
            mainClassName ?? ""
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
