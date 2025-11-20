import Image from "next/image";
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
        <header className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/Logo.png"
              alt="WebPulse UX logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-2xl object-contain"
              priority
            />
            <div>
              <p className="text-lg font-semibold tracking-tight">WebPulse UX</p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-indigo-500">
                Digitale Studio
              </p>
            </div>
          </div>
          <nav className="flex w-full flex-wrap items-center gap-4 text-sm font-medium text-slate-600 sm:w-auto sm:justify-end lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-indigo-600">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-400/40 transition hover:bg-indigo-500 sm:w-auto"
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
