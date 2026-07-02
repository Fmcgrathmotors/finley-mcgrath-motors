import { site } from "@/lib/site";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-ink/95 backdrop-blur-md shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.5)] sm:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 py-3.5 font-body text-sm font-semibold text-paper"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        Call now
      </a>
      <a
        href="#quote"
        className="flex flex-1 items-center justify-center gap-2 bg-gradient-to-r from-brass-bright to-brass py-3.5 font-body text-sm font-semibold text-ink"
      >
        Get free quote
      </a>
    </div>
  );
}
