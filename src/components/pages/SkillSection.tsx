"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt,

} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiBootstrap,
  SiShadcnui, SiFramer, SiExpress, SiMongodb, SiMysql, SiCloudinary,
  SiC, SiCplusplus, SiVite, SiFirebase, SiSupabase, SiDocker,
  SiAwslambda,
  SiNginx,
  SiLinux,
  SiAwsorganizations,
  SiAwsamplify,
  SiPostgresql,
  SiExpo,
  SiPython
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "ShadCN UI", icon: <SiShadcnui className="text-white" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "React Native", icon: <FaReact className="text-sky-400" /> },
  {name: "Expo", icon: <SiExpo className="dark:text-white text-black"  />},
  { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
  {name: "Zustand", icon: <SiVite className="text-purple-500" />},
  {name: "Amazon Web Services", icon: <FaAws size={20} className="" />},
  {name: "Nginx", icon: <SiNginx className="text-green-500" />},
  {name: "Linux", icon: <SiLinux className="" />},
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
            Tools that I've used
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
                border border-dashed border-white/30 
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