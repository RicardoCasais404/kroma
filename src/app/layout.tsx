import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // We define a CSS variable for Tailwind to use later
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kroma | Digital Asset Management",
  description: "High-performance asset management for creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
