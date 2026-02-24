
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import CursorDot from "./CursorDot";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akinwale Daniel Oluwagbenga - Portfolio",
  description: "Akinwale Daniel Oluwagbenga is a Senior Software Engineer building backend and platform systems under real production constraints. Specialized in distributed job orchestration, control-plane design, state coordination, and deterministic failure recovery.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-[#0a0a23] via-[#0a0a2a] to-[#1a1a40]`}>
        <CursorDot />
        <div className="flex-1 flex flex-col min-h-screen">
          {children}
        </div>
        <Footer />
        <NavBar />
      </body>
    </html>
  );
}
