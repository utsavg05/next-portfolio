import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DockDemo } from "@/components/pages/DockDemo";
import { FloatingDockDemo } from "@/components/pages/FloatingDockDemo";
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/pages/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi, I'm Utsav Gupta 👋",
  description: "Personal website of Utsav Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
          <FloatingDockDemo />
          <DockDemo />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Analytics />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
