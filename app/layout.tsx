import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  JetBrains_Mono,
  Manrope,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "Parisa Ghasemi",
  },
  description:
    "Full-Stack Developer building beautiful digital products with code, design, and AI.",
  openGraph: {
    title: "Parisa Ghasemi",
    description:
      "Full-Stack Developer building beautiful digital products with code, design, and AI.",
  },
  twitter: {
    card: "summary",
    title: "Parisa Ghasemi",
    description:
      "Full-Stack Developer building beautiful digital products with code, design, and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
