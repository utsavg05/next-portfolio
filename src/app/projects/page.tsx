"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Smartphone, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, Variants } from "motion/react";
import { webProjects, mobileProjects, type Project } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="w-full aspect-[16/10] relative rounded-sm overflow-hidden border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </div>

      <div>
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <span className="text-foreground text-sm">
            {project.tech.join(" / ")}
          </span>
        </div>

        <p className="text-muted-foreground text-md leading-tight tracking-tight mt-1">
          {project.description}
        </p>

        <div className="flex items-center gap-4 mt-3">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-md text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
            Live Preview
          </Link>
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-md text-foreground hover:text-primary transition-colors"
            >
              <SiGithub size={14} />
              Repo Url
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-16 ">
      {/* <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link> */}

      <h1 className="text-4xl sm:text-4xl font-serif text-primary mb-4">
        All Projects
      </h1>
      <p className="text-muted-foreground mb-12 max-w-lg">
        A collection of things I&apos;ve built — web apps, mobile apps, and
        everything in between.
      </p>

      {/* Web Projects */}
      <motion.section
        id="web-apps"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16 scroll-mt-20"
      >
        <div className="flex items-center gap-2 mb-6">
          <Globe className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-serif text-primary">Web Apps</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full">
          {webProjects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mobile Projects */}
      <motion.section
        id="mobile-apps"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="scroll-mt-20"
      >
        <div className="flex items-center gap-2 mb-6">
          <Smartphone className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-serif text-primary">Mobile Apps</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full">
          {mobileProjects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
