import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Inter for clean data, numbers, and UI elements
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Playfair Display for premium, editorial headings
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Astro",
  description: "Professional grade astronomical calculations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans bg-gray-50 text-gray-900 selection:bg-indigo-200" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}