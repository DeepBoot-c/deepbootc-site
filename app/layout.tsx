import type { Metadata, Viewport } from "next";
import { Archivo, Geist } from "next/font/google";
import "./scrollcraft.css";
import "./globals.css";
import Providers from "@/components/Providers";

// Archivo (met breedte-as) voor koppen: nautische signalering. Geist voor lopende tekst.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deepbootc.com"),
  title: "DeepBoot.C · Websites en AI-automatisering voor ondernemers",
  description:
    "Wij bouwen websites voor kleine ondernemers en AI-hulpjes die terugkerend werk overnemen. Uit Nederland, persoonlijk en zonder gedoe.",
  openGraph: {
    title: "DeepBoot.C · Websites en AI-automatisering",
    description: "Wij bouwen wat boven water komt. En wat eronder het werk doet.",
    url: "https://www.deepbootc.com",
    siteName: "DeepBoot.C",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/logo.png", width: 1408, height: 768, alt: "DeepBoot.C" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#E4EAEF",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${archivo.variable} ${geist.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
