// import React from 'react'

// const ProjetPage = () => {
//   return (
//     <div className='w-full min-h-screen bg-secondary-foreground max-w-9xl mx-auto flex flex-col gap-4'>
//         <div className=' w-full max-w-8xl mx-auto rounded h-full'>
//             <h1 className='text-center font-serif text-8xl text-primary'>Projects</h1>

//         </div>
//     </div>
//   )
// }

// export default ProjetPage


"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

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
    tech: ["Next.js", "TypeScript", "Gemini API"],
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
  const autoScroll = React.useRef(
    AutoScroll({
      speed: 2, // adjust for slower/faster
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // Duplicate the project list to fake an infinite ticker
  const loopedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="bg-background min-h-screen flex flex-col justify-center py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-8xl text-center font-serif text-primary mb-4">
          Projects
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
          A selection of my featured work.
        </p>

        <Carousel
          className="w-full max-w-6xl mx-auto"
          opts={{
            loop: true,
            align: "start",
            dragFree: true, // so it scrolls freely
          }}
          plugins={[autoScroll.current]}
        >
          <CarouselContent className="-ml-4">
            {loopedProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 lg:basis-1/3">
                <div className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm transition-transform duration-300 hover:shadow-xl">
                  <div className="relative w-full h-52">
                    <Image
                      src={project.image}
                      alt={project.title || "Project image"}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md p-1.5 bg-accent text-accent-foreground hover:opacity-90 transition"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-primary text-primary-foreground px-2 py-0.5 rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

