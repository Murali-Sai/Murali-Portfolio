import type { Metadata } from "next";
import { Hanken_Grotesk, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://murali-portfolio-omega.vercel.app"),
  title: `${profile.name} | ${profile.title}`,
  description: `${profile.name} · ${profile.tagline}. ${profile.org}.`,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM",
    "RAG",
    "Multi-Agent Systems",
    "LangChain",
    "Generative AI",
    profile.name,
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    url: "/",
    siteName: `${profile.name} | ${profile.title}`,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} | ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <div aria-hidden className="grain pointer-events-none fixed inset-0 -z-10" />
        {children}
      </body>
    </html>
  );
}
