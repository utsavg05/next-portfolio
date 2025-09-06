// "use client";

// import { motion } from "motion/react";
// import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiBootstrap, SiShadcnui, SiFramer, SiExpress, SiMongodb, SiMysql, SiCloudinary, SiC, SiCplusplus, SiVite, SiFirebase } from "react-icons/si";

// const skills = [
//   { name: "React", icon: <FaReact className="text-sky-400" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
//   { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//   { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
//   { name: "ShadCN", icon: <SiShadcnui className="text-pink-500" /> },
//   { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//   { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
//   { name: "Cloudinary", icon: <SiCloudinary className="text-blue-300" /> },
//   { name: "Java", icon: <FaJava className="text-red-500" /> },
//   { name: "C", icon: <SiC className="text-blue-500" /> },
//   { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
//   { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
//   { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
//   { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
//   { name: "Vite", icon: <SiVite className="text-purple-500" /> },
//   { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
// ];

// const loopSkills = [...skills, ...skills]; // Duplicate for smooth infinite scroll

// function InfiniteScrollRow({ reverse = false }: { reverse?: boolean }) {
//   return (
//     <div className="overflow-hidden w-full py-4">
//       <motion.div
//         className="flex gap-4"
//         animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//       >
//         {loopSkills.map((skill, idx) => (
//           <div
//             key={idx}
//             className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-lg shadow-md border border-border hover:scale-105 transition"
//           >
//             {skill.icon}
//             <span className="text-sm font-medium">{skill.name}</span>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default function SkillsSection() {
//   return (
//     <section id="skills" className="bg-background py-20">
//       <h2 className="text-4xl font-bold text-center text-primary mb-10">
//         Skills
//       </h2>
//       <div className="space-y-6">
//         <InfiniteScrollRow />
//         <InfiniteScrollRow reverse />
//       </div>
//     </section>
//   );
// }




"use client";

import * as React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiShadcnui,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCloudinary,
  SiC,
  SiCplusplus,
  SiVite,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "ShadCN", icon: <SiShadcnui className="text-pink-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Cloudinary", icon: <SiCloudinary className="text-blue-300" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
];

export default function SkillsSection() {
  // split into two halves: first half shown in top row, second in bottom row
  const mid = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, mid);
  const secondHalf = skills.slice(mid);

  // duplicated arrays to create smooth continuous marquee
  const firstDup = [...firstHalf, ...firstHalf];
  const secondDup = [...secondHalf, ...secondHalf];

  return (
    <section id="skills" className="w-full py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-5xl sm:text-7xl font-serif mb-10 text-primary">
          Skills
        </h2>

        {/* TOP ROW: firstHalf moving left → right (we animate from -50% → 0) */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 whitespace-nowrap will-change-transform"
            style={{
              // CSS animation applied inline via className below (see style block)
            }}
            aria-hidden={false}
          >
            <div className="marquee marquee--ltr">
              {firstDup.map((skill, i) => (
                <div
                  key={`a-${i}`}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card  border border-border transform transition-all duration-200 hover:scale-105"
                >
                  <span className="text-current">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: secondHalf moving right → left (animate from 0 → -50%) */}
        <div className="relative overflow-hidden mt-6">
          <div className="flex gap-4 whitespace-nowrap will-change-transform">
            <div className="marquee marquee--rtl">
              {secondDup.map((skill, i) => (
                <div
                  key={`b-${i}`}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border transform transition-all duration-200 hover:scale-105"
                >
                  <span className="text-current">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles — uses your theme tokens (bg-card, text-foreground, text-primary, border-border, etc.). */}
      <style jsx>{`
        /* marquee containers (the inner repeated strip) */
        .marquee {
          display: inline-flex;
          gap: 1rem;
          align-items: center;
        }

        /* LTR: move from -50% -> 0 so it appears to scroll left→right visually */
        .marquee--ltr {
          animation: marquee-ltr 20s linear infinite;
        }

        /* RTL: move from 0 -> -50% (opposite direction) */
        .marquee--rtl {
          animation: marquee-rtl 20s linear infinite;
        }

        /* pause when user hovers any item inside the marquee (optional nicety) */
        .marquee--ltr:hover,
        .marquee--rtl:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* make sure inline-flex items don't wrap and keep compact spacing */
        .marquee > * {
          flex: 0 0 auto;
        }

        /* small responsive tweak: reduce pill padding on narrow screens */
        @media (max-width: 640px) {
          .marquee > * {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
