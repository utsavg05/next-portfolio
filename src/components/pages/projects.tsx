"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { SiGithub } from "react-icons/si";
import { featuredProjects } from "@/data/projects";

export default function ProjectPage() {
  return (
    <section
      id="projects"
      className="bg-transparent flex flex-col w-full max-w-4xl mx-auto justify-center py-6 px-4"
    >
      <div className="max-w-4xl md:mx-0 mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-primary">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4 w-full mx-0">
          {featuredProjects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4 py-4">
              <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  quality={95}
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
          ))}
        </div>

        <div className="flex mt-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span className="underline decoration-dotted underline-offset-4 decoration-muted-foreground group-hover:decoration-primary transition-colors">
              View all projects
            </span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
