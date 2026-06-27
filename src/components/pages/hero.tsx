"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { FiMapPin, FiMail, FiUser, FiGlobe } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeInBlur: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const metaItems = [
  {
    label: "Location",
    icon: FiMapPin,
    value: "Delhi, India",
  },
  {
    label: "Email",
    icon: FiMail,
    value: "work.utsavg21@gmail.com",
    href: "mailto:work.utsavg21@gmail.com",
  },
  {
    label: "Pronouns",
    icon: FiUser,
    value: "he/him",
  },
];

const socials = [
  { label: "X", icon: FaXTwitter, href: "https://x.com/0xdevug" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/utsavg05" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/utsav-gupta-3443a0324" },
  { label: "Website", icon: FiGlobe, href: "https://scribely.site" },
  { label: "Email", icon: FiMail, href: "mailto:work.utsavg21@gmail.com" },
];

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-4xl mx-auto flex flex-col px-6 md:px-4 py-8 md:py-10"
    >
      {/* Name + Avatar */}
      <motion.div variants={fadeInBlur} className="flex items-center gap-4 md:gap-5">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-xl border border-border"
        >
          <Image
            src="/pic.jpg"
            width={130}
            height={130}
            alt="Utsav Gupta"
            className="object-cover object-top w-full h-full"
            priority
          />
        </motion.div>

        <div className="flex flex-col">
          <h1 className="text-primary text-3xl md:text-5xl font-bold tracking-tight">
            Utsav Gupta
          </h1>
          <p className="text-muted-foreground text-base md:text-base mt-0.5">
            Full-Stack Developer
          </p>
        </div>
      </motion.div>

      {/* Meta grid */}
      <motion.div
        variants={fadeInBlur}
        className="mt-8 md:mt-10 flex flex-wrap gap-x-12 gap-y-5"
      >
        {metaItems.map(({ label, icon: Icon, value, href }) => (
          <div key={label} className="flex flex-col gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
              {label}
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base text-foreground">
              <Icon className="text-muted-foreground" size={16} />
              {href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {value}
                </Link>
              ) : (
                value
              )}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={fadeInBlur}
        className="mt-8 md:mt-10 text-sm md:text-base leading-7 md:leading-8 text-muted-foreground max-w-5xl"
      >
        I build interactive, scalable web apps with{" "}
        <span className="text-foreground font-medium">TypeScript</span>,{" "}
        <span className="text-foreground font-medium">React</span>,{" "}
        <span className="text-foreground font-medium">Next.js</span>, and{" "}
        <span className="text-foreground font-medium">Tailwind CSS</span>. I
        love building robust full-stack systems, clean APIs, and modern web
        platforms. I also ship mobile apps with{" "}
        <span className="text-foreground font-medium">React Native</span> and{" "}
        <span className="text-foreground font-medium">Expo</span>, obsessing over
        performance and details that make software feel right to use.
      </motion.p>

      {/* Currently building */}
      <motion.div
        variants={fadeInBlur}
        className="mt-7 md:mt-8 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Currently building</span>
        <span className="text-muted-foreground/40">—</span>
        <Link
          href="https://scribely.site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
        >
          Scribely
        </Link>
      </motion.div>

      {/* Socials */}
      <motion.div variants={fadeInBlur} className="mt-6 flex items-center gap-5">
        {socials.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon size={18} />
          </Link>
        ))}
      </motion.div>

      {/* Resume */}
      <motion.div variants={fadeInBlur} className="mt-5 text-sm">
        <Link
          href="https://drive.google.com/file/d/1XaC9Lvxj_MK2DaGNDS6WeZ-vKFbBeMGg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-dotted underline-offset-4 hover:text-primary transition-colors"
        >
          View my resume
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
