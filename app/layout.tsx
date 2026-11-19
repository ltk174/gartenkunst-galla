import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { seo } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: "%s · Gartenkunst Galla",
  },
  description: seo.description,
  // Unverbindlicher Designentwurf: nicht indexieren
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: "de_AT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#303C32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de-AT" className={`${cormorant.variable} ${hanken.variable}`}>
      <head>
        {/* Aktiviert Scroll-Animationen nur, wenn JavaScript verfügbar ist */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
