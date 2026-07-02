import Reveal from "@/components/ui/Reveal";

const SERVICES = [
  {
    tag: "01",
    title: "New vehicles",
    body: "Any make, any model, straight from the factory pipeline. We shortlist, negotiate and lock in your build across every brand on the market.",
  },
  {
    tag: "02",
    title: "Trade-in handling",
    body: "Your current car is valued independently — not lowballed to pad a dealership's margin on the new one. We separate the two deals on purpose.",
  },
  {
    tag: "03",
    title: "Fleet & business",
    body: "Sourcing multiple vehicles for a small business? We manage the whole panel — consistent pricing, staggered delivery, one invoice trail.",
  },
];

export default function ServiceCards() {
  return (
    <section id="what-we-source" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-bright">
            What we source
          </span>
          <h2 className="mt-3 max-w-lg font-display text-3xl text-paper sm:text-4xl">
            New vehicles, sourced <span className="italic text-brass-bright">properly</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-surface to-surface-2 p-8 transition-all duration-300 hover:border-brass/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(201,154,74,0.4)]">
                <div
                  aria-hidden
                  className="absolute -right-6 -top-6 font-display text-8xl font-semibold text-white/[0.03] transition-colors group-hover:text-brass/[0.06]"
                >
                  {service.tag}
                </div>
                <span className="relative font-mono text-xs uppercase tracking-widest text-brass/60">
                  {service.tag}
                </span>
                <h3 className="relative mt-4 font-display text-2xl text-paper">
                  {service.title}
                </h3>
                <p className="relative mt-3 font-body text-sm leading-relaxed text-slate">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
