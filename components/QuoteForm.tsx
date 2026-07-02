"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      vehicle: (form.elements.namedItem("vehicle") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong. Please call us instead.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ink/15 bg-white/70 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sage/20 text-sage">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12l5.5 5.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-ink">Request received</h3>
        <p className="mt-2 font-body text-sm text-ink/70">
          We&apos;ll be in touch shortly. Need it sooner? Call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink/15 bg-white/70 p-6 sm:p-8" noValidate>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-ink/60">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-ink/20 bg-white px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
            placeholder="Jordan Lee"
          />
        </div>

        <div>
          <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wide text-ink/60">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg border border-ink/20 bg-white px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
            placeholder="0400 000 000"
          />
        </div>

        <div>
          <label htmlFor="vehicle" className="font-mono text-xs uppercase tracking-wide text-ink/60">
            What car are you after?
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            required
            minLength={2}
            className="mt-1.5 w-full rounded-lg border border-ink/20 bg-white px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
            placeholder="e.g. Toyota RAV4 Cruiser Hybrid"
          />
        </div>

        {status === "error" && (
          <p role="alert" className="font-body text-sm text-red-700">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending…" : "Request my free quote"}
        </button>
      </div>
    </form>
  );
}
