"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const experiences = [
  {
    company: "WLDD",
    role: "Software Development Engineer Intern",
    mobileRole: "SDE Intern",
    duration: "August 2026 – Present",
    mobileDuration: "Aug 26 – Present",
    location: "Bengaluru, India",
    mobileLocation: "Bengaluru, IN",
    current: true,
    details: [
      "Contributing to the development of Meme’d and Solo, WLDD’s in-house platforms for creator campaign management, finance, and operations, building production-ready features using React, Next.js, Express.js, and MongoDB.",
      "Developed and enhanced REST APIs and backend workflows across both platforms, improving creator onboarding, social account validation, post submission workflows, campaign activity tracking, and internal finance operations.",
      "Implemented a responsive website revamp from Figma designs, developing reusable UI components and complex responsive layouts across desktop, tablet, and mobile for the Meme’d creator and brand experience.",
    ],
  },
  {
    company: "FoundersCart",
    role: "Software Developer Intern",
    mobileRole: "Software Developer Intern",
    duration: "June 2025 – August 2025",
    mobileDuration: "Jun 25 – Aug 25",
    location: "Delhi, India",
    mobileLocation: "Delhi, IN",
    current: false,
    details: [
      "Designed and developed a CRM-telephony integration platform connecting IVR services with Kylas CRM APIs, enabling automated call tracking and streamlined sales workflows.",
      "Built a Chrome Extension Dialer using DOM injection, allowing sales teams to initiate calls directly from CRM lead profiles with a single click.",
      "Implemented call log synchronization pipelines that process IVR call records, match them with CRM leads, and create call activities automatically.",
      "Integrated Sensibot conversational chat solutions within Kylas CRM, enabling centralized customer interaction management and improved response times.",
      "Delivered scalable integrations across CRM, telephony, and backend systems using REST APIs, event-driven processing, and real-time data synchronization.",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ExperiencePage() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  return (
    <motion.section
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mx-auto w-full max-w-4xl bg-transparent px-4 py-6 text-foreground"
    >
      <motion.h2
        variants={itemVariants}
        className="mb-4 text-xl font-semibold tracking-tight sm:mb-7 sm:text-3xl"
      >
        Experience
      </motion.h2>

      <div>
        {experiences.map((item, idx) => {
          const isExpanded = expandedExperience === idx;
          const detailsId = `experience-details-${idx}`;

          return (
            <motion.article
              key={item.company}
              variants={itemVariants}
              className="group py-3 first:pt-0 sm:py-5"
            >
              <div className="relative flex items-start justify-between gap-2 sm:gap-4">
                <button
                  type="button"
                  aria-label={`${isExpanded ? "Hide" : "Show"} work details for ${item.company}`}
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  onClick={() => setExpandedExperience(isExpanded ? null : idx)}
                  className="absolute inset-0 z-10 w-full rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:hidden"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="text-base font-semibold tracking-tight sm:text-xl">
                      {item.company}
                    </h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-500/10 px-2 py-1 text-[10px] font-medium leading-none text-black dark:text-white sm:text-xs">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Working
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label={`${isExpanded ? "Hide" : "Show"} work details for ${item.company}`}
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      onClick={() => setExpandedExperience(isExpanded ? null : idx)}
                      className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground opacity-0 transition hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:inline-flex sm:group-hover:opacity-60 sm:focus-visible:opacity-100"
                    >
                      <ChevronRight
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-base">
                    <span className="sm:hidden">{item.mobileRole}</span>
                    <span className="hidden sm:inline">{item.role}</span>
                  </p>
                </div>

                <div className="shrink-0 text-right text-xs leading-snug text-muted-foreground sm:text-base">
                  <p><span className="sm:hidden">{item.mobileDuration}</span><span className="hidden sm:inline">{item.duration}</span></p>
                  <p className="mt-1"><span className="sm:hidden">{item.mobileLocation}</span><span className="hidden sm:inline">{item.location}</span></p>
                </div>
              </div>

              <motion.div
                id={detailsId}
                initial={false}
                animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
                aria-hidden={!isExpanded}
              >
                <div className="mt-5 border-t border-border/70 pt-5">
                  <h4 className="text-sm font-semibold sm:text-base">What I&apos;ve done</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
