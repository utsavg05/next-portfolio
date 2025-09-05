"use client";

import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiBootstrap, SiShadcnui, SiFramer, SiExpress, SiMongodb, SiMysql, SiCloudinary, SiC, SiCplusplus, SiVite, SiFirebase } from "react-icons/si";

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
  // { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
];

const loopSkills = [...skills, ...skills]; // Duplicate for smooth infinite scroll

function InfiniteScrollRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-x-hidden w-full py-4">
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {loopSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-lg shadow-md border border-border hover:scale-105 transition"
          >
            {skill.icon}
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">
        Skills
      </h2>
      <div className="space-y-6">
        <InfiniteScrollRow />
        <InfiniteScrollRow reverse />
      </div>
    </section>
  );
}
