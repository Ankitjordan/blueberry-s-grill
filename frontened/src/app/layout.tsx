import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Great_Vibes,
  Inter,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blueberry's Grill | Modern Dining with a Timeless Soul",
  description:
    "Experience elegant plates, warm light, and flavors that linger at Blueberry's Grill.",
  icons: {
    icon: "/favIcon.svg",
  },
};

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { TransitionProvider } from "@/components/transition-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${greatVibes.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white">
        <SmoothScrollProvider>
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
