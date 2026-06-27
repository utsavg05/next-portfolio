"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiExpo } from "react-icons/si";
import RotatingText from '../../components/RotatingText';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInBlur: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const techHighlightClass =
    "relative isolate inline-flex items-center gap-1.5 px-1.5 py-0.5 text-sm font-semibold text-primary rounded-[2px] before:content-[''] before:absolute before:left-[-0.2em] before:right-[-0.2em] before:top-[58%] before:-translate-y-1/2 before:h-[0.95em] before:bg-primary/25 dark:before:bg-primary/35 before:rounded-[3px] before:skew-x-[-7deg] before:blur-[0.2px] before:-z-10";

  const techHighlightVariants = [
    "before:left-[-0.28em] before:right-[-0.16em] before:rotate-[-1.8deg]",
    "before:left-[-0.18em] before:right-[-0.26em] before:rotate-[-0.8deg]",
    "before:left-[-0.32em] before:right-[-0.08em] before:rotate-[-1.4deg]",
    "before:left-[-0.12em] before:right-[-0.24em] before:rotate-[-0.6deg]",
    "before:left-[-0.3em] before:right-[-0.12em] before:rotate-[-1.6deg]",
    "before:left-[-0.16em] before:right-[-0.3em] before:rotate-[-0.9deg]",
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full  md:max-w-4xl mx-auto flex flex-col justify-center px-6 md:px-5 py-4 md:pb-16 md:pt-10"
    >
      {/* Name + Avatar Row */}
      <motion.div
        variants={fadeInBlur}
        className="flex items-center gap-4 md:gap-5"
      >
        {/* Profile Image */}
        <motion.div
          variants={imageVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="w-18 h-18 sm:w-22 sm:h-22 md:w-28 md:h-28 flex-shrink-0 overflow-hidden rounded-lg border-2 border-primary/30 shadow-md cursor-crosshair"
        >
          <Image
            src={"/pic.jpg"}
            width={130}
            height={130}
            alt="profile_pic"
            className="object-cover object-top w-full h-full"
            priority
          />
        </motion.div>

        {/* Name + Available Badge */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight">
              Utsav Gupta
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </span>
          </div>
          {/* <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-mono mt-1">
            Full-Stack Developer
          </p> */}

          <RotatingText
            texts={['Full-Stack Developer', 'App Developer', 'Building Saassy Products']}
            mainClassName="font-mono text-md overflow-hidden text-cyan-400 w-fit  py-0.5 mt-1 md:mt-2 justify-center items-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.015}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3500}
          />

          <Link 
            href="https://scribely.site" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm md:text-lg font-mono text-white underline hover:text-primary transition-colors flex items-center gap-1 mt-1"
          >
            Building scribely.site
          </Link>
        </div>

      </motion.div>

      {/* Info Grid */}
      <motion.div
        variants={fadeInBlur}
        className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm md:text-base font-mono text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <span className="text-primary">&lt;/&gt;</span>
          <span>Full-Stack Developer</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">📱</span>
          <span>App Developer</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">📍</span>
          <span>Delhi, India</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✉️</span>
          <Link href="mailto:work.utsavg21@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            work.utsavg21@gmail.com
          </Link>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={fadeInBlur}
        className="mt-6 md:mt-8 h-px w-full bg-border"
      />

      {/* Bio / Hero Line */}
      <motion.p
        variants={fadeInBlur}
        className="mt-6 md:mt-8 dark:text-muted-foreground text-sky-900 text-sm tracking-tighter sm:text-lg md:text-lg md:leading-9 font-mono max-w-4xl"
      >
        I build interactive and scalable web applications using{" "}
        <span className={`${techHighlightClass} ${techHighlightVariants[0]}`}>
          <SiTypescript className="text-blue-500" size={14} />
          TypeScript
        </span>
        ,{" "}
        <span className={`${techHighlightClass} ${techHighlightVariants[1]}`}>
          <SiReact className="text-cyan-400" size={14} />
          React
        </span>
        ,{" "}
        <span className={`${techHighlightClass} ${techHighlightVariants[2]}`}>
          <SiNextdotjs className="dark:text-white text-black" size={14} />
          Next.js
        </span>
        , and{" "}
        <span className={`${techHighlightClass} ${techHighlightVariants[3]}`}>
          <SiTailwindcss className="text-cyan-500" size={14} />
          Tailwind CSS
        </span>
        . I enjoy building robust full-stack systems, scalable APIs, and modern web
        platforms. I also develop mobile apps using{" "}
        <span className={`${techHighlightClass} ${techHighlightVariants[4]}`}>
          <SiReact className="text-cyan-400" size={14} />
          React Native
        </span>{" "}
        and{" "}
        <span className={`${techHighlightClass} ${techHighlightVariants[5]}`}>
          <SiExpo className="dark:text-white text-black" size={14} />
          Expo
        </span>
        , with a strong focus on performance and clean user experiences.
      </motion.p>

      {/* CTA */}
      <motion.div
        variants={fadeInBlur}
        className="flex items-center gap-4 mt-9"
      >
        <Link
          href={"https://drive.google.com/file/d/1XaC9Lvxj_MK2DaGNDS6WeZ-vKFbBeMGg/view?usp=sharing"}
          rel="noopener noreferrer"
          target="_blank"
          className="group relative"
        >
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-primary text-background text-sm md:text-base px-5 py-2 rounded-lg w-fit font-mono transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
          >
            <MdOutlineFileDownload size="20px" className="group-hover:translate-y-0.5 transition-transform duration-200" />
            <span>Resume</span>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;