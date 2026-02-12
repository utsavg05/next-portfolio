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
    title: "SnipHUB",
    description: "A platform to share, explore, and manage code snippets with ease.",
    image: "/sniphub_hero.png",
    link: "https://sniphub.utsavworks.in",
    tech: ["Next.Js", "Typescript", "Supabase", "Drizzle ORM"],
  },
  {
    title: "QuickPoll",
    description: "Create and share polls instantly. No sign-up required. See results in real-time.",
    image: "/quick_hero.png",
    link: "https://quickpoll.utsavworks.in/",
    tech: ["Next.Js", "Typescript", "Supabase"],
  },
  {
    title: "Zync",
    description: "Real-time chat app with instant messaging.",
    image: "/zync_ss.jpg",
    // link: "https://zync-1hnm.onrender.com/",
    link: "https://zync-three.vercel.app",
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
    title: "Scribely",
    description: "A UI concept exploring handwritten-style study notes for digital learning.",
    image: "/scribely.png",
    link: "https://scribely-umber.vercel.app/",
    tech: ["Next.Js", "Tailwind CSS"],
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
      className="bg-background flex flex-col w-full max-w-4xl mx-auto justify-center md:py-16 px-4"
    >
      <div className="max-w-4xl md:mx-0 mx-auto ">
        <h2 className="text-3xl sm:text-3xl font-serif text-primary mb-4">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 w-full mx-0">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var w-full md:mx-0">
              <CardBody
                className="
    relative group/card
    rounded-sm
    p-4 sm:p-5 lg:p-4
    flex flex-col

    backdrop-blur-xl
    bg-[rgba(255,255,255,0.02)]

    border border-white/10
    shadow-lg
    hover:shadow-2xl hover:shadow-primary/20
    transition-shadow
  "
              >
                {/* Image */}
                <CardItem translateZ="80" className="w-full h-52 sm:h-60 lg:h-64 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top rounded-sm group-hover/card:shadow-xl"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </CardItem>

                {/* Title + link */}
                <div className="flex justify-between items-center mt-4">
                  <CardItem translateZ="50" className="text-lg sm:text-xl font-semibold text-foreground">
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




// "use client";

// import * as React from "react";
// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import { motion, Variants } from "framer-motion";
// import {
//   CardBody,
//   CardContainer,
//   CardItem,
// } from "@/components/ui/3d-card";

// const projects = [
//   {
//     title: "SnipHUB",
//     description: "A platform to share, explore, and manage code snippets with ease.",
//     image: "/sniphub_hero.png",
//     link: "https://sniphub-three.vercel.app/",
//     tech: ["Next.Js", "Typescript", "Supabase", "Drizzle ORM"],
//   },
//   {
//     title: "Zync",
//     description: "Real-time chat app with instant messaging.",
//     image: "/zync_ss.jpg",
//     link: "https://zync-three.vercel.app",
//     tech: ["MongoDB", "Express", "React", "Node.js"],
//   },
//   {
//     title: "Smriti AI",
//     description: "All-in-one learning assistant powered by AI.",
//     image: "/smritiAi.jpg",
//     link: "https://www.smriti.live/",
//     tech: ["Next.js", "TypeScript", "Gemini API", "Supabase"],
//   },
//   {
//     title: "JobSeek",
//     description: "MERN job portal with role-based access.",
//     image: "/jobseek_ss.jpg",
//     link: "https://jobseek-ete7.onrender.com/",
//     tech: ["MongoDB", "Express", "React", "Node.js"],
//   },
//   {
//     title: "Scribely",
//     description: "A UI concept exploring handwritten-style study notes for digital learning.",
//     image: "/scribely.png",
//     link: "https://scribely-umber.vercel.app/",
//     tech: ["Next.Js", "Tailwind CSS"],
//   },
//   {
//     title: "Retro Themed UI",
//     description: "Retro-style UI with modern implementation.",
//     image: "/retro.jpg",
//     link: "https://retro-design-plum.vercel.app/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// // Animation Variants
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const cardRevealVariants: Variants = {
//   hidden: { 
//     opacity: 0, 
//     y: 30, 
//     filter: "blur(10px)" 
//   },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1], // Premium easing
//     }
//   },
// };

// export default function ProjectPage() {
//   return (
//     <motion.section
//       id="projects"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       className="bg-transparent flex flex-col w-full max-w-4xl mx-auto justify-center py-12 md:py-16 px-5"
//     >
//       <div className="max-w-4xl w-full">
//         {/* Section Header */}
//         <motion.h2 
//           variants={cardRevealVariants}
//           className="text-3xl sm:text-4xl font-serif text-primary mb-8 md:mb-12 tracking-tight"
//         >
//           Featured Projects
//         </motion.h2>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
//           {projects.map((project, index) => (
//             <motion.div key={index} variants={cardRevealVariants}>
//               <CardContainer className="inter-var w-full">
//                 <CardBody
//                   className="
//                     relative group/card
//                     rounded-xl
//                     p-5
//                     flex flex-col
//                     backdrop-blur-md
//                     bg-white/[0.02]
//                     border border-white/10
//                     hover:border-primary/30
//                     transition-all duration-500
//                     shadow-xl
//                   "
//                 >
//                   {/* Image Container with Zoom effect */}
//                   <CardItem 
//                     translateZ="80" 
//                     className="w-full h-52 sm:h-60 relative overflow-hidden rounded-lg"
//                   >
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover object-top transition-transform duration-700 group-hover/card:scale-110"
//                       sizes="(max-width:640px) 100vw, 50vw"
//                     />
//                     {/* Dark overlay that fades out on hover */}
//                     <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500" />
//                   </CardItem>

//                   {/* Title + Link */}
//                   <div className="flex justify-between items-center mt-5">
//                     <CardItem 
//                       translateZ="50" 
//                       className="text-xl font-bold text-white group-hover/card:text-primary transition-colors duration-300"
//                     >
//                       {project.title}
//                     </CardItem>
                    
//                     <CardItem
//                       as="a"
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       translateZ="60"
//                       className="inline-flex items-center justify-center rounded-full p-2 bg-white/5 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-inner"
//                     >
//                       <ExternalLink size={18} />
//                     </CardItem>
//                   </div>

//                   {/* Description */}
//                   <CardItem
//                     as="p"
//                     translateZ="40"
//                     className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-2"
//                   >
//                     {project.description}
//                   </CardItem>

//                   {/* Tech stack - Pill style */}
//                   <div className="mt-5 flex flex-wrap gap-1.5">
//                     {project.tech.map((tech, i) => (
//                       <CardItem
//                         key={i}
//                         translateZ="30"
//                         className="text-[10px] uppercase tracking-wider bg-white/[0.05] border border-white/10 text-gray-300 px-2.5 py-1 rounded-full font-mono group-hover/card:border-primary/20 transition-colors"
//                       >
//                         {tech}
//                       </CardItem>
//                     ))}
//                   </div>

//                   {/* Subtle Accent Glow (Bottom) */}
//                   <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
//                 </CardBody>
//               </CardContainer>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }