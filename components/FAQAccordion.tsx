"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const FAQS = [
  {
    q: "Is it more expensive than going direct to a dealership?",
    a: "No — in almost every case it's cheaper, even after our fee. We negotiate from wholesale pricing and dealer-network access most buyers never see, and our clients save an average of $3,180 versus the original asking price. You'll know our fee upfront before you commit to anything.",
  },
  {
    q: "How fast can you source my car?",
    a: "Most orders are sourced and confirmed within 7–10 days of your brief, depending on the make, model and current factory stock. Popular configurations can move faster; specialised builds may take longer — we'll tell you honestly at the start, not after you've paid a deposit.",
  },
  {
    q: "Do you deal in used or near-new cars?",
    a: "No. We source new vehicles only, plus independent trade-in valuation and small business fleet sourcing. If you're after a used car, we're not the right service for you — but if you're buying new and trading in, that's exactly what we do.",
  },
  {
    q: "What areas do you service?",
    a: "We work across Brisbane and South East Queensland, including Ipswich, Logan, the Gold Coast and the Sunshine Coast. Most of our process happens by phone, text and email, so location within SEQ is rarely a barrier.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass-bright">
            Questions
          </span>
          <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
            Frequently <span className="italic text-brass-bright">asked</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.08}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-surface/60">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-body text-sm font-medium text-paper sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 font-mono text-lg text-brass-bright transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 font-body text-sm leading-relaxed text-slate sm:px-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
