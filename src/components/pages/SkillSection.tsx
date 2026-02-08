// "use client";

// import * as React from "react";
// import {
//   FaReact,
//   FaNodeJs,
//   FaJava,
//   FaGitAlt,
//   FaGithub,
//   FaFigma,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiTypescript,
//   SiJavascript,
//   SiBootstrap,
//   SiShadcnui,
//   SiFramer,
//   SiExpress,
//   SiMongodb,
//   SiMysql,
//   SiCloudinary,
//   SiC,
//   SiCplusplus,
//   SiVite,
//   SiFirebase,
//   SiSupabase,
//   SiDocker
// } from "react-icons/si";
// import { IconCloud } from "../ui/icon-cloud";

// const skills = [
//   { name: "React", icon: <FaReact className="text-sky-400" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
//   { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//   { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
//   { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
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
//   {name: "React Native", icon: <FaReact className="text-sky-400" />},
// ];

// const slugs = [
//   "react",
//   "nextdotjs",
//   "prisma",
//   "drizzle",
//   "tailwindcss",
//   "typescript",
//   "javascript",
//   "supabase",
//   "docker",
//   "html5",
//   "css3",
//   "bootstrap",
//   "shadcnui",
//   "framer",
//   "nodejs",
//   "express",
//   "mongodb",
//   "mysql",
//   "cloudinary",
//   "java",
//   "c",
//   "cplusplus",
//   "git",
//   "github",
//   "figma",
//   "vite",
//   "firebase",
// ]

// export default function SkillsSection() {
//   // split into two halves: first half shown in top row, second in bottom row
//   const mid = Math.ceil(skills.length / 2);
//   const firstHalf = skills.slice(0, mid);
//   const secondHalf = skills.slice(mid);

//   // duplicated arrays to create smooth continuous marquee
//   const firstDup = [...firstHalf, ...firstHalf];
//   const secondDup = [...secondHalf, ...secondHalf];

//   const images = slugs.map(
//     (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
//   )

//   return (
//     <section id="skills" className="w-full py-16 bg-background text-foreground mb-6 max-w-4xl mx-auto">



//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className=" text-3xl sm:text-3xl font-serif mb-10 text-primary">
//           Tools I've used
//         </h2>
//         {/* <div className="relative flex size-full items-center justify-center overflow-hidden md:hidden">
//           <IconCloud images={images} />
//         </div> */}

//         {/* TOP ROW: firstHalf moving left → right (we animate from -50% → 0) */}
//         <div className="relative overflow-hidden ">
//           <div
//             className="flex gap-4 whitespace-nowrap will-change-transform"
//             style={{
//               // CSS animation applied inline via className below (see style block)
//             }}
//             aria-hidden={false}
//           >
//             <div className="marquee marquee--ltr">
//               {firstDup.map((skill, i) => (
//                 <div
//                   key={`a-${i}`}
//                   className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card  border border-border transform transition-all duration-200 hover:scale-105"
//                 >
//                   <span className="text-current">{skill.icon}</span>
//                   <span className="text-sm font-medium">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM ROW: secondHalf moving right → left (animate from 0 → -50%) */}
//         <div className="relative overflow-hidden mt-6 ">
//           <div className="flex gap-4 whitespace-nowrap will-change-transform">
//             <div className="marquee marquee--rtl">
//               {secondDup.map((skill, i) => (
//                 <div
//                   key={`b-${i}`}
//                   className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border transform transition-all duration-200 hover:scale-105"
//                 >
//                   <span className="text-current">{skill.icon}</span>
//                   <span className="text-sm font-medium">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>


//       </div>

//       {/* Styles — uses your theme tokens (bg-card, text-foreground, text-primary, border-border, etc.). */}
//       <style jsx>{`
//         /* marquee containers (the inner repeated strip) */
//         .marquee {
//           display: inline-flex;
//           gap: 1rem;
//           align-items: center;
//         }

//         /* LTR: move from -50% -> 0 so it appears to scroll left→right visually */
//         .marquee--ltr {
//           animation: marquee-ltr 30s linear infinite;
//         }

//         /* RTL: move from 0 -> -50% (opposite direction) */
//         .marquee--rtl {
//           animation: marquee-rtl 24s linear infinite;
//         }

//         /* pause when user hovers any item inside the marquee (optional nicety) */
//         .marquee--ltr:hover,
//         .marquee--rtl:hover {
//           // animation-play-state: paused;
//         }

//         @keyframes marquee-ltr {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }

//         @keyframes marquee-rtl {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         /* make sure inline-flex items don't wrap and keep compact spacing */
//         .marquee > * {
//           flex: 0 0 auto;
//         }

//         /* small responsive tweak: reduce pill padding on narrow screens */
//         @media (max-width: 640px) {
//           .marquee > * {
//             padding-left: 0.75rem;
//             padding-right: 0.75rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }




"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiBootstrap,
  SiShadcnui, SiFramer, SiExpress, SiMongodb, SiMysql, SiCloudinary,
  SiC, SiCplusplus, SiVite, SiFirebase, SiSupabase, SiDocker
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "ShadCN UI", icon: <SiShadcnui className="text-white" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "React Native", icon: <FaReact className="text-sky-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
  {name: "Zustand", icon: <SiVite className="text-purple-500" />},
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
};

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="w-full py-12 px-4 bg-transparent text-foreground mb-6 max-w-4xl mx-auto overflow-hidden"
    >
      <div className="relative">
        
        {/* Header Area */}
        <div className="flex justify-between items-end mb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-3xl font-serif tracking-tight text-primary"
          >
            Skills
          </motion.h2>

          {/* Sketchy "Drag me" hint */}
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className=" sm:flex flex-col items-center gap-1 opacity-40 select-none"
          >
            <span className="text-[10px] font-mono italic">drag me!</span>
            <svg width="30" height="12" viewBox="0 0 40 15" fill="none" className="rotate-12">
              <path d="M1 14C5 10 15 2 39 1" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
              <path d="M35 5L39 1L34 1" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </motion.div>
        </div>

        {/* Draggable Skills Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2.5 justify-start"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              drag
              // These three lines handle the "auto-return" logic
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.7}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(244, 199, 83, 0.08)",
                borderColor: "rgba(244, 199, 83, 0.5)" 
              }}
              className="
                flex items-center gap-2 px-3 py-1.5 
                bg-white/[0.03] dark:bg-white/[0.01]
                border border-dashed border-white/20 
                rounded-lg
                cursor-grab active:cursor-grabbing
                transition-colors duration-200
                select-none
              "
            >
              <span className="text-base sm:text-lg">{skill.icon}</span>
              <span className="text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}