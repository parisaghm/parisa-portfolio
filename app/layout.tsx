import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "Parisa Ghasemi — Frontend-Focused Full-Stack Engineer",
  },
  description:
    "Frontend-focused full-stack engineer in Helsinki building reliable, accessible web and SaaS products with React, Next.js and TypeScript.",
  openGraph: {
    title: "Parisa Ghasemi — Frontend-Focused Full-Stack Engineer",
    description:
      "Frontend-focused full-stack engineer in Helsinki building reliable, accessible web and SaaS products with React, Next.js and TypeScript.",
  },
  twitter: {
    card: "summary",
    title: "Parisa Ghasemi — Frontend-Focused Full-Stack Engineer",
    description:
      "Frontend-focused full-stack engineer in Helsinki building reliable, accessible web and SaaS products with React, Next.js and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
