"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { site, getOpenStatus } from "@/lib/site";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why a broker", href: "#why-a-broker" },
  { label: "What we source", href: "#what-we-source" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

function subscribeToClock(callback: () => void) {
  const interval = setInterval(callback, 60_000);
  return () => clearInterval(interval);
}

// Ticks once per minute; the actual open/closed label is derived from
// wall-clock time during render, not stored here. Server snapshot is a
// sentinel so we skip rendering the (client-only) status pill until hydrated.
function getClockSnapshot() {
  return Math.floor(Date.now() / 60_000);
}

function getServerClockSnapshot() {
  return -1;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const minuteBucket = useSyncExternalStore(
    subscribeToClock,
    getClockSnapshot,
    getServerClockSnapshot
  );
  const status = minuteBucket === -1 ? null : getOpenStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#" className="flex flex-col leading-tight shrink-0">
          <span className="font-display text-lg font-semibold text-paper sm:text-xl">
            Finley McGrath <span className="italic text-brass-bright">Motors</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate sm:text-[11px]">
            {site.tagline}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-slate transition-colors hover:text-brass-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {status && (
            <span
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide ${
                status.open
                  ? "border-sage/30 bg-sage/10 text-sage"
                  : "border-slate/30 bg-white/5 text-slate"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  status.open ? "bg-sage animate-subtle-pulse" : "bg-slate"
                }`}
              />
              {status.label}
            </span>
          )}
          <Button
            href={site.phoneHref}
            className="!px-3.5 !py-3.5 sm:!px-5 sm:!py-3 sm:text-sm"
            aria-label={`Call ${site.phone}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0">
              <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            <span className="hidden sm:inline">Call {site.phone}</span>
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-4 bg-current transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-4 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-4 bg-current transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-white/5 bg-ink/95 backdrop-blur-md px-5 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm text-slate py-1.5 transition-colors hover:text-brass-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
