import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-ink pb-24 pt-14 sm:pb-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span className="font-display text-lg font-semibold text-paper">
              Finley McGrath <span className="italic text-brass-bright">Motors</span>
            </span>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-slate">
              Independent auto broker sourcing and negotiating new vehicles on behalf of
              buyers across Brisbane & South East Queensland. We buy the car — you just
              drive it.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-brass-bright">
              Contact
            </span>
            <div className="mt-3 flex flex-col gap-2 font-body text-sm text-slate">
              <a href={site.phoneHref} className="transition-colors hover:text-brass-bright">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-brass-bright">
                {site.email}
              </a>
              <span>{site.serviceArea}</span>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-brass-bright">
              Hours
            </span>
            <div className="mt-3 flex flex-col gap-1.5 font-mono text-sm text-slate">
              {site.hours.map((h) => (
                <div key={h.day} className="flex gap-3">
                  <span className="w-16 text-slate/70">{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6 font-mono text-xs text-slate/50">
          © {year} Finley McGrath Motors. Auto broker services only — not a licensed
          dealership. ABN available on request.
        </div>
      </div>
    </footer>
  );
}
