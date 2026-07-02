import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "brass" | "outline" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-bright";

const variants: Record<string, string> = {
  brass:
    "bg-gradient-to-b from-brass-bright to-brass text-ink shadow-[0_4px_20px_-4px_rgba(201,154,74,0.5)] hover:shadow-[0_8px_28px_-4px_rgba(224,178,104,0.65)] hover:-translate-y-0.5",
  outline:
    "border border-brass/40 text-paper hover:border-brass-bright hover:bg-brass/10 hover:-translate-y-0.5",
  ghost: "text-paper hover:text-brass-bright",
};

export default function Button({
  href,
  children,
  variant = "brass",
  className = "",
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
