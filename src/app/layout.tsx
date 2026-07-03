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
import { GridPattern } from "@/components/ui/grid-pattern";
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

const siteUrl = "https://www.utsavworks.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Utsav Gupta | Full Stack Developer",
    template: "%s | Utsav Gupta",
  },
  description:
    "Utsav Gupta is a full stack developer based in India specializing in building SaaS, web apps, mobile apps, AI agents and automations.",
  keywords: [
    "Utsav Gupta",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "React Native Developer",
    "Frontend Developer",
    "Software Engineer",
    "SaaS Developer",
    "AI Agents",
    "Automation",
    "Full Stack Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Utsav Gupta", url: siteUrl }],
  creator: "Utsav Gupta",
  publisher: "Utsav Gupta",
  applicationName: "Utsav Gupta Portfolio",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "HoSogLRKyeKm49rn6z6HAumT6zhV4euFd0yxOm6ZruU",
  },

  openGraph: {
    title: "Utsav Gupta | Full Stack Developer",
    description:
      "Utsav Gupta is a Full-Stack Developer based in India specializing in building SaaS, web apps, mobile apps, AI agents and automations.",
    url: siteUrl,
    siteName: "Utsav Gupta",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1307,
        height: 727,
        alt: "Utsav Gupta — Full Stack Developer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Utsav Gupta | Full Stack Developer",
    description:
      "Utsav Gupta is a Full-Stack Developer based in India specializing in building SaaS, web apps, mobile apps, AI agents and automations.",
    creator: "@0xdevug",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Utsav Gupta",
  url: siteUrl,
  image: `${siteUrl}/pp.jpg`,
  jobTitle: "Full Stack Developer",
  description:
    "Utsav Gupta is a full stack developer based in India specializing in building SaaS, web apps, mobile apps, AI agents and automations.",
  sameAs: [
    "https://github.com/utsavg05",
    "https://www.linkedin.com/in/utsav-gupta-3443a0324e",
    "https://x.com/0xdevug",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "React Native",
    "Web Development",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
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
          <GridPattern
            width={58}
            height={58}
            strokeWidth={0.5}
            className="absolute inset-0 h-full w-full fill-none stroke-black/[0.06] dark:stroke-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
          />
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
              <main className="pt-16">{children}</main>
            {/* </SmoothScroll> */}
            {/* <Footer /> */}
          </ClickSpark>
          <Analytics />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}