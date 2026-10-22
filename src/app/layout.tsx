import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
};

export const metadata: Metadata = {
  title: "Thorfin Dev — Reliable Software for Commerce and Finance",
  description:
    "Thorfin Dev designs and builds ecommerce platforms, payment systems and fintech products for teams that can't afford downtime.",
  keywords: [
    "Thorfin Dev",
    "ecommerce engineering",
    "fintech systems",
    "payment infrastructure",
    "ledgers",
    "KYC",
    "software consultancy",
  ],
  authors: [{ name: "Thorfin Dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
