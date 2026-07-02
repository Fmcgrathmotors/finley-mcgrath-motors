import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

const STATS = [
  {
    value: 3180,
    prefix: "$",
    label: "Average saved vs. asking price",
  },
  {
    value: 4.9,
    suffix: "★",
    decimals: 1,
    label: "Average client rating",
  },
  {
    value: 9,
    suffix: " days",
    label: "Average time to keys",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-paper py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <div className="text-center sm:text-left">
                <div className="font-mono text-4xl font-semibold text-ink sm:text-5xl">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <div className="mt-2 font-body text-sm text-ink/60 sm:text-base">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
