"use client";

import React, { useState } from "react";
import { GraduationCap, Building2, Calendar, Briefcase, ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ExperiencePage() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const timeline = [
    // {
    //   type: "education",
    //   title: "B.Tech in Information Technology",
    //   place: "Bharati Vidyapeeth's College of Engineering, New Delhi",
    //   duration: "2023 – 2027",
    //   icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    // },
    {
      type: "experience",
      title: "Software Developer Intern",
      place: "WLDD Pvt. Ltd. · Bengaluru, India",
      duration: "August 2026 – Present",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      type: "experience",
      title: "Software Development Intern",
      place: "FoundersCart Pvt. Ltd. · Delhi, India",
      duration: "June – August 2025",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      details: [
        "Designed and developed a CRM-telephony integration platform connecting IVR services with Kylas CRM APIs, enabling automated call tracking and streamlined sales workflows.",
        "Built a Chrome Extension Dialer using DOM injection, allowing sales teams to initiate calls directly from CRM lead profiles with a single click.",
        "Implemented call log synchronization pipelines that process IVR call records, match them with CRM leads, and create call activities automatically.",
        "Integrated Sensibot conversational chat solutions within Kylas CRM, enabling centralized customer interaction management and improved response times.",
        "Delivered scalable integrations across CRM, telephony, and backend systems using REST APIs, event-driven processing, and real-time data synchronization.",
      ],
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
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

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 } 
    },
  };

  return (
    <motion.section
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-6 px-4 bg-transparent text-foreground max-w-4xl mx-auto"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-geist-sans text-primary mb-10 sm:mb-12"
      >
        Work Experience
      </motion.h1>

      {/* Timeline */}
      <div className="relative border-l border-border pl-4 sm:pl-6 space-y-10 sm:space-y-12">
        {/* Animated Line Progress (Optional visual flair) */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-primary origin-top opacity-30"
        />

        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative flex flex-col sm:flex-row sm:items-start sm:gap-6"
          >
            {/* Icon bubble */}
            <motion.span 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute -left-[26px] sm:-left-[38px] z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background border border-border shadow-md"
            >
              {item.icon}
            </motion.span>

            {/* Glass Card */}
            <motion.div
              whileHover={{ 
                y: -5,
                borderColor: "rgba(var(--primary-rgb), 0.4)", // Assumes primary color is defined in RGB for opacity
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3), 0 0 20px -5px rgba(var(--primary-rgb), 0.2)"
              }}
              className="
                relative
                w-full sm:max-w-[560px]
                rounded-lg
                p-4 sm:p-6
                backdrop-blur-xl
                bg-black/[0.03]
                dark:bg-white/[0.01]
                border border-black/10 dark:border-white/10
                transition-colors duration-300
                flex flex-col
                group
              "
            >
              <button
                type="button"
                aria-expanded={Boolean(item.details?.length && expandedExperience === idx)}
                aria-controls={item.details?.length ? `experience-details-${idx}` : undefined}
                disabled={!item.details?.length}
                onClick={() => item.details?.length && setExpandedExperience(expandedExperience === idx ? null : idx)}
                className="flex w-full items-start justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm disabled:cursor-default"
              >
                <span>
                  <span className="block text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="mt-2 flex flex-col gap-1">
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary/70" aria-hidden="true" />
                      {item.place}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/70" aria-hidden="true" />
                      {item.duration}
                    </span>
                  </span>
                </span>
                {item.details?.length ? (
                  <ChevronDown
                    aria-hidden="true"
                    className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${expandedExperience === idx ? "rotate-180" : ""}`}
                  />
                ) : null}
              </button>

              {item.details?.length ? (
                <motion.div
                  id={`experience-details-${idx}`}
                  initial={false}
                  animate={{ height: expandedExperience === idx ? "auto" : 0, opacity: expandedExperience === idx ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                  aria-hidden={expandedExperience !== idx}
                >
                  <motion.ul
                    variants={listVariants}
                    className="list-none mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    {item.details.map((point, i) => (
                      <motion.li key={i} variants={bulletVariants} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ) : null}
              
              {/* Subtle accent glow on bottom of card */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
