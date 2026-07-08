import Reveal from "@/components/ui/Reveal";

type Row = {
  label: string;
  dealership: string;
  broker: string;
};

const ROWS: Row[] = [
  { label: "Who negotiates the price", dealership: "Their rep", broker: "Your advocate" },
  { label: "Access to wholesale & auction stock", dealership: "—", broker: "Yes" },
  { label: "Time you spend on lots", dealership: "Hours", broker: "Zero" },
  { label: "Trade-in valued independently", dealership: "—", broker: "Yes" },
  { label: "Paperwork & finance handled", dealership: "You do it", broker: "We do it" },
  { label: "Who they're paid to protect", dealership: "The dealership", broker: "You" },
];

export default function ComparisonLedger() {
  return (
    <section id="why-a-broker" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-bright">
            The itemized truth
          </span>
          <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
            Why use a <span className="italic text-brass-bright">broker</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm text-slate sm:text-base">
            Laid out like a receipt, because that&apos;s exactly what this comparison is about.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-surface/70 p-1 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)]">
            <div className="rounded-xl border border-dashed border-white/10 p-6 sm:p-8">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 gap-y-1 items-center border-b border-dashed border-white/15 pb-4 sm:gap-x-8">
                <span className="font-mono text-[11px] uppercase tracking-wide text-slate/60">
                  Line item
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-slate/60 text-right">
                  Dealership
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-brass-bright text-right">
                  Finley McGrath
                </span>
              </div>

              {ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1fr_auto_auto] items-center gap-x-4 py-3.5 sm:gap-x-8 ${
                    i !== ROWS.length - 1 ? "border-b border-dashed border-white/10" : ""
                  }`}
                >
                  <span className="font-body text-sm text-paper/90 sm:text-base">{row.label}</span>
                  <span className="font-mono text-sm text-slate/50 text-right whitespace-nowrap">
                    {row.dealership}
                  </span>
                  <span className="font-mono text-sm font-medium text-brass-bright text-right whitespace-nowrap flex items-center justify-end gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path
                        d="M3 8.5L6.2 12L13 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {row.broker}
                  </span>
                </div>
              ))}

              <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
                <span className="font-mono text-xs uppercase tracking-wide text-slate/60">
                  Total cost to you
                </span>
                <span className="font-mono text-sm text-sage">$0 — we&apos;re paid by the dealer</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
