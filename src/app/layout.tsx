import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Smart Gardening",
    template: "%s | Smart Gardening",
  },

  description:
    "Research-based gardening guides that help home gardeners grow healthier plants, avoid common mistakes, and harvest bigger harvests.",

  keywords: [
    "gardening ebook",
    "gardening guide",
    "vegetable gardening",
    "home gardening",
    "organic gardening",
    "gardening tips",
    "beginner gardening",
    "smart gardening",
  ],

  authors: [
    {
      name: "Smart Gardening",
    },
  ],

  creator: "Smart Gardening",

  openGraph: {
    title: "Smart Gardening",
    description:
      "Research-based gardening guides for healthier plants and bigger harvests.",
    siteName: "Smart Gardening",
    type: "website",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
