import Reveal from "@/components/ui/Reveal";

/* TODO: replace with real client testimonials before launch */
const TESTIMONIALS = [
  {
    name: "Client A.",
    location: "Paddington, QLD",
    quote:
      "Sent one text with the model I wanted and never spoke to a dealership. Picked the car up ten days later for less than I expected to pay.",
    rating: 5,
  },
  {
    name: "Client B.",
    location: "Springfield, QLD",
    quote:
      "Sourced three vehicles for our small business fleet in under three weeks. One invoice, one contact, zero hassle.",
    rating: 5,
  },
  {
    name: "Client C.",
    location: "Robina, QLD",
    quote:
      "They handled my trade-in separately and got me more for it than the dealership first offered. Worth it just for that.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brass" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2.5l2.9 6.4 6.9.7-5.2 4.7 1.5 6.9L12 17.8l-6.1 3.4 1.5-6.9-5.2-4.7 6.9-.7L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          dangerouslySetInnerHTML={{
            __html: "<!-- TODO: replace with real client testimonials before launch -->",
          }}
        />
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-deep">
            Reviews
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            What clients <span className="italic text-brass-deep">say</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.15}>
              <div className="h-full rounded-2xl border border-ink/8 bg-white/60 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Stars count={t.rating} />
                <p className="mt-4 font-body text-sm leading-relaxed text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-ink/10 pt-4">
                  <div className="font-display text-base text-ink">{t.name}</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-ink/50">
                    {t.location}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
