import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Instrument_Sans } from "next/font/google";
import "./scrollcraft.css";
import "./globals.css";
import Providers from "@/components/Providers";

// Source Serif 4 (met optische grootte) voor koppen: rustig en klassiek. Instrument Sans voor lopende tekst.
const serif = Source_Serif_4({ subsets: ["latin"], axes: ["opsz"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deepbootc.com"),
  title: "DeepBoot.C · Websites en AI-automatisering voor ondernemers",
  description:
    "Wij bouwen websites voor kleine ondernemers en AI-hulpjes die terugkerend werk overnemen. Uit Nederland, persoonlijk en zonder gedoe.",
  openGraph: {
    title: "DeepBoot.C · Websites en AI-automatisering",
    description: "Websites en AI die voor uw bedrijf werken.",
    url: "https://www.deepbootc.com",
    siteName: "DeepBoot.C",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/logo.png", width: 1408, height: 768, alt: "DeepBoot.C" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F3F4F2",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
