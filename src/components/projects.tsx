"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card"; // Acertinity 3D card

const projects = [
  {
    title: "Zync",
    description: "Real-time chat app with instant messaging.",
    image: "/zync_ss.jpg",
    link: "https://zync-1hnm.onrender.com/",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Smriti AI",
    description: "All-in-one learning assistant powered by AI.",
    image: "/smritiAi.jpg",
    link: "https://www.smriti.live/",
    tech: ["Next.js", "TypeScript", "Gemini API", "Supabase"],
  },
  {
    title: "JobSeek",
    description: "MERN job portal with role-based access.",
    image: "/jobseek_ss.jpg",
    link: "https://jobseek-ete7.onrender.com/",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Retro Themed UI",
    description: "Retro-style UI with modern implementation.",
    image: "/retro.jpg",
    link: "https://retro-design-plum.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectPage() {
  return (
    <section
      id="projects"
      className="bg-background min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-8xl text-center font-serif text-primary mb-4">
          Projects
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-7">
          A selection of my featured work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0.5">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="relative group/card bg-card border border-border rounded-xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-shadow">
                {/* Image */}
                <CardItem translateZ="80" className="w-full h-52 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top rounded-lg group-hover/card:shadow-xl"
                    sizes="(min-width:768px) 50vw, 100vw"
                  />
                </CardItem>

                {/* Title + link */}
                <div className="flex justify-between items-center mt-5">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-semibold text-foreground"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    translateZ="40"
                    className="inline-flex items-center justify-center rounded-md p-1.5 bg-accent text-accent-foreground hover:opacity-90 transition"
                  >
                    <ExternalLink size={16} />
                  </CardItem>
                </div>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-muted-foreground text-sm mt-2"
                >
                  {project.description}
                </CardItem>

                {/* Tech stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <CardItem
                      key={i}
                      translateZ="30"
                      className="text-[11px] bg-primary text-primary-foreground px-2 py-0.5 rounded font-medium"
                    >
                      {tech}
                    </CardItem>
                  ))}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
