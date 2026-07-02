import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import MobileStickyBar from "@/components/MobileStickyBar";
import MotionProvider from "@/components/MotionProvider";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.finleymcgrathmotors.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Finley McGrath Motors | Auto Broker Brisbane — We Buy The Car, You Just Drive It",
  description:
    "Independent new-car auto broker in Brisbane & SEQ. We source and negotiate your next new vehicle so you never deal with a dealership. Free, no-obligation quotes.",
  keywords: [
    "auto broker Brisbane",
    "car broker Brisbane",
    "new car buying service",
    "car negotiation service",
    "fleet vehicle sourcing Brisbane",
  ],
  openGraph: {
    title: "Finley McGrath Motors | Auto Broker Brisbane",
    description:
      "We buy the car. You just drive it. Independent new-car broker serving Brisbane & South East Queensland — no dealer pressure, no wasted weekends on lots.",
    url: siteUrl,
    siteName: "Finley McGrath Motors",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Finley McGrath Motors | Auto Broker Brisbane",
    description: "We buy the car. You just drive it. New-car broker for Brisbane & SEQ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink font-body text-slate">
        <MotionProvider>
          {children}
          <MobileStickyBar />
        </MotionProvider>
      </body>
    </html>
  );
}
