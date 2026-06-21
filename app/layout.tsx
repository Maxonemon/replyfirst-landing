import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ReplyFirst — Stop losing service calls to the shop that answers first",
  description:
    "Your shop misses calls every week. Each one is a $400 service call — or a change-out — that books with the next contractor in the listings. ReplyFirst texts missed callers back in seconds and gets the job on your board. Flat $249/mo. Built for HVAC shops running 2–5 trucks.",
  keywords: [
    "HVAC missed calls",
    "missed call text back",
    "HVAC contractor software",
    "estimate follow-up",
    "HVAC booking",
  ],
  openGraph: {
    title: "ReplyFirst — Every missed call is a $400 service call you gave away",
    description:
      "ReplyFirst texts your missed callers back in seconds, before they dial the next shop. Flat $249/mo, no contract. For HVAC shops running 2–5 trucks.",
    url: SITE_URL,
    siteName: "ReplyFirst",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReplyFirst — missed-call recovery for HVAC shops",
    description:
      "Texts your missed callers back in seconds. Books the job before the guy across town does. $249/mo flat.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0F0E0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable}`}>
      <body>
        <noscript>
          {/* No-JS: show everything, kill the preloader */}
          <style>{`
            .reveal-line > .reveal-inner { transform: none !important; }
            .fade-up { opacity: 1 !important; transform: none !important; }
            #rf-preloader { display: none !important; }
          `}</style>
        </noscript>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
