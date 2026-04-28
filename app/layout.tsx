import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Uno — Travel Design Argentina",
  description:
    "No vendemos destinos. Diseñamos experiencias. Casa Uno cura viajes extraordinarios por Argentina para agencias boutique y operadores premium de todo el mundo.",
  keywords: [
    "viajes Argentina",
    "travel design Argentina",
    "turismo boutique Argentina",
    "viajes curados Patagonia",
    "Buenos Aires",
    "Mendoza vino",
    "agencia premium Argentina",
  ],
  openGraph: {
    title: "Casa Uno — Travel Design Argentina",
    description: "No vendemos destinos. Diseñamos experiencias.",
    type: "website",
    locale: "es_AR",
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
      lang="es"
      className={`${cormorant.variable} ${inter.variable} theme-dark`}
    >
      <body className="min-h-screen antialiased">
        <div className="grain-texture" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
