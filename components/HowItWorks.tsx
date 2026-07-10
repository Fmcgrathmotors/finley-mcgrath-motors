import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Tell us the brief",
    body: "Make, model, budget, must-haves. A five-minute call or a two-minute form — whatever suits your day.",
  },
  {
    number: "02",
    title: "We source and negotiate",
    body: "We go to multiple dealers, run the numbers against wholesale, and negotiate the price down — without you setting foot on a lot.",
  },
  {
    number: "03",
    title: "You collect the keys",
    body: "We handle paperwork, trade-in valuation and delivery logistics. You show up once, sign, and drive away.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-bright">
            The process
          </span>
          <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
            How it <span className="italic text-brass-bright">works</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.15}>
              <div className="group h-full rounded-2xl border border-white/8 bg-surface/60 p-7 transition-all duration-300 hover:border-brass/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(201,154,74,0.35)]">
                <span className="font-mono text-4xl font-semibold text-brass/30 transition-colors group-hover:text-brass/50">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-xl text-paper">{step.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
