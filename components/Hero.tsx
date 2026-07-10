"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import TranscriptCard from "@/components/TranscriptCard";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(201,154,74,0.14) 0%, transparent 60%), radial-gradient(50% 40% at 10% 10%, rgba(124,171,142,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-brass-bright">
            Auto Broker, not a dealership
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
            Save time. Save money.{" "}
            <span className="italic text-brass-bright">Buy smarter.</span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-slate sm:text-lg">
            Finley McGrath Motors sources and negotiates your next new vehicle on your
            behalf — so you never sit across a desk from a dealership salesperson again.
            One brief, one point of contact, one number: the best price.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={site.phoneHref}>Call {site.phone}</Button>
            <Button href="#quote" variant="outline">
              Request a callback
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wide text-slate/70">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-brass" /> No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-brass" /> No dealer pressure
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-brass" /> Usually sourced in 7–10 days
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <TranscriptCard />
        </motion.div>
      </div>
    </section>
  );
}
