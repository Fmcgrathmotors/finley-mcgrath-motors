import Reveal from "@/components/ui/Reveal";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export default function CTABanner() {
  return (
    <section id="quote" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brass-deep via-brass to-brass-bright"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 14px)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
            Ready when you are
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Let&apos;s get you into the <span className="italic">right car</span>, for less.
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink/75 sm:text-base">
            Call now for a same-day chat, or send through a few details and we&apos;ll call you
            back before end of day.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex w-fit items-center gap-2.5 rounded-full bg-ink px-6 py-3 font-mono text-base font-semibold text-brass-bright shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              {site.phone}
            </a>

            <div className="font-mono text-xs uppercase tracking-wide text-ink/70">
              {site.hours.map((h) => (
                <div key={h.day} className="flex gap-2">
                  <span className="w-16">{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
