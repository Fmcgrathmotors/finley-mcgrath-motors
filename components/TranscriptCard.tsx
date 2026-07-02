"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

type Message = {
  from: "dealer" | "broker";
  text: string;
  label: string;
};

const MESSAGES: Message[] = [
  { from: "dealer", label: "Dealer · Sales Manager", text: "Best I can do is $42,990 drive-away on that spec." },
  { from: "broker", label: "Finley McGrath Motors", text: "Appreciate it — we're seeing wholesale on this build at $37,800. Let's start at $38,600." },
  { from: "dealer", label: "Dealer · Sales Manager", text: "That's tight on margin. Give me a moment to check with the floor manager." },
  { from: "broker", label: "Finley McGrath Motors", text: "Take your time. Our client isn't in a rush — but $38,600 drive-away is where we land today." },
  { from: "dealer", label: "Dealer · Sales Manager", text: "Alright — we can make $38,600 work if we're settling this week." },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.2,
    },
  },
};

const bubbleVariant = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const summaryVariant = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: MESSAGES.length * 0.6 + 0.4 },
  },
};

export default function TranscriptCard() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full rounded-2xl border border-white/10 bg-surface/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sage animate-subtle-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate">
            Live negotiation
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate/70">2026 Model · SUV</span>
      </div>

      <div className="flex flex-col gap-3.5 px-4 py-5 sm:px-5">
        {MESSAGES.map((msg, i) => (
          <motion.div
            key={i}
            variants={bubbleVariant}
            className={`flex flex-col gap-1 ${msg.from === "broker" ? "items-end" : "items-start"}`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-slate/60 px-1">
              {msg.label}
            </span>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[75%] ${
                msg.from === "broker"
                  ? "rounded-tr-sm bg-gradient-to-br from-brass-bright to-brass text-ink font-medium"
                  : "rounded-tl-sm bg-surface-2 text-paper/90 border border-white/5"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={summaryVariant}
          className="mt-2 rounded-xl border border-sage/25 bg-sage/10 px-4 py-4 sm:px-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-sage">
              Deal closed
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-slate/70 mb-1">
                Final drive-away price
              </div>
              <div className="font-mono text-2xl font-semibold text-paper sm:text-3xl">
                <CountUp value={38600} prefix="$" />
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] uppercase tracking-wide text-slate/70 mb-1">
                Saved vs. first quote
              </div>
              <div className="font-mono text-2xl font-semibold text-sage sm:text-3xl">
                <CountUp value={4390} prefix="$" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
