import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DockDemo } from "@/components/pages/DockDemo";
import { FloatingDockDemo } from "@/components/pages/FloatingDockDemo";
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/pages/SmoothScroll";
import ClickSpark from '../components/ui/ClickSpark';
import Particles from "@/components/Particles";
import Galaxy from "@/components/Galaxy";
import DotGrid from "@/components/DotGrid";
import Script from "next/script";
import DotField from "@/components/DotField";
import TopNav from "@/components/pages/TopNav";
import Footer from "@/components/pages/Footer";
import LightRays from "@/components/LightRays";
import SideRays from "@/components/SideRays";
import TextCursor from "@/components/TextCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "utsavworks.in",
  description:
    "Explore the professional portfolio of Utsav, featuring innovative digital solutions, web development projects, and creative design work.",

  verification: {
    google: "HoSogLRKyeKm49rn6z6HAumT6zhV4euFd0yxOm6ZruU",
  },

  openGraph: {
    title: "UtsavWorks - Creative Portfolio & Digital Solutions",
    description:
      "Showcasing high-quality web development and creative projects. Let's build something exceptional together.",
    url: "https://www.utsavworks.in",
    siteName: "UtsavWorks",
    images: [
      {
        url: "https://www.utsavworks.in/og-image.png",
        width: 1307,
        height: 727,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UtsavWorks - Creative Portfolio & Digital Solutions",
    description:
      "Explore a collection of digital excellence and creative development projects at UtsavWorks.",
    images: ["https://www.utsavworks.in/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2ZKXXR7QD2"></Script>
      <Script>
        {
          `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2ZKXXR7QD2');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* <TextCursor
          // text="⚛️"
          text="🛩️"
          spacing={80}
          followMouseDirection
          randomFloat
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
        /> */}
        <div className="fixed inset-0 -z-10">
          {/* <div
            className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          />
          <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" /> */}
          {/* <SideRays
            speed={2.5}
            rayColor1="#EAB308"
            rayColor2="#96c8ff"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          /> */}
          {/* <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          /> */}
          {/* <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
            glowColor="#120F17"
          /> */}
          {/* <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          /> */}
          {/* <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          /> */}
          {/* <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          /> */}
        </div>
        <div className="relative z-10">
          {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
          <ClickSpark
            sparkColor='#fff'
            sparkSize={11}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <TopNav />
            <FloatingDockDemo />
            <DockDemo />
            {/* <SmoothScroll> */}
              {children}
            {/* </SmoothScroll> */}
            {/* <Footer /> */}
          </ClickSpark>
          <Analytics />
          {/* </ThemeProvider> */}
        </div>
      </body>
    </html>
  );
}