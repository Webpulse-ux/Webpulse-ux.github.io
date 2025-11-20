"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Let the browser continue with native submission to Formspree
  };

  return (
    <form className="space-y-4" action="https://formspree.io/f/mldzajvw" method="POST" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Naam"
        name="naam"
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-300"
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-300"
        required
      />
      <textarea
        placeholder="Vertel kort welke pagina's je zoekt..."
        name="bericht"
        className="h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-300"
        required
      />
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_25px_60px_rgba(99,102,241,0.35)] transition hover:brightness-110"
      >
        <span aria-live="polite">{isSubmitting ? "Sending, please don’t close this tab" : "Verstuur briefing"}</span>
      </button>
    </form>
  );
}
