"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, Smartphone, PlayCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const mobileApps = [
  {
    title: "Safarnama",
    description: "A destination discovery and booking app.",
    image: "/safarnama_splash.png",
    link: "https://youtube.com/shorts/N6S4_Th7-ko?feature=share",
    repo_url: "https://github.com/utsavg05/travel_app",
    tech: ["React Native", "Expo", "Zustand"],
  },
  // {
  //   title: "Nova Wallet",
  //   description: "Secure cryptocurrency wallet with multi-chain support and biometric auth.",
  //   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500",
  //   link: "#",
  //   repo_url: "https://github.com/utsavkumar/nova-wallet",
  //   tech: ["React Native", "Expo", "Zustand"],
  // },
  // {
  //   title: "ZenSpace",
  //   description: "Mental wellness app featuring guided meditation and sleep sounds.",
  //   image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=500",
  //   link: "#",
  //   repo_url: "https://github.com/utsavkumar/zenspace",
  //   tech: ["Expo", "Redux", "Lottie"],
  // },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function MobileShowcase() {
  return (
    <motion.section
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-transparent flex flex-col w-full max-w-4xl mx-auto justify-center py-16 md:py-24 px-5"
    >
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <Smartphone className="text-primary w-8 h-8" />
          <motion.h2 
            variants={cardRevealVariants}
            className="text-3xl sm:text-4xl font-serif text-primary tracking-tight"
          >
            Mobile Experiences
          </motion.h2>
        </div>

        {/* Mobile App Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {mobileApps.map((app, index) => (
            <motion.div key={index} variants={cardRevealVariants}>
              <CardContainer className="inter-var w-full">
                <CardBody
                  className="
                    relative group/card
                    w-full aspect-[9/16]
                    rounded-[2.5rem]
                    p-3
                    flex flex-col
                    bg-neutral-900/50
                    backdrop-blur-md
                    border-[6px] border-neutral-800/80
                    hover:border-primary/20
                    transition-all duration-500
                    shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]
                    overflow-hidden
                  "
                >
                  {/* "Screen" Content */}
                  <div className="relative w-full h-full overflow-hidden rounded-[1.8rem] bg-neutral-950">
                    
                    {/* App Mockup Image */}
                    <CardItem 
                      translateZ="100" 
                      className="w-full h-full relative"
                    >
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                      />
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    </CardItem>

                    {/* App Details - Positioned like a Mobile UI */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <CardItem translateZ="50" className="flex justify-between items-end mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {app.title}
                          </h3>
                        </div>
                        {/* <a 
                          href={app.link}
                          className="bg-primary/90 hover:bg-primary p-2 rounded-full text-black transition-colors"
                        >
                          <PlayCircle size={20} />
                        </a> */}
                      </CardItem>

                      <CardItem translateZ="40" className="text-xs text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                        {app.description}
                      </CardItem>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {(app.tech || []).map((tech, i) => (
                          <CardItem
                            key={i}
                            translateZ="30"
                            className="text-[9px] bg-white/10 backdrop-blur-md border border-white/10 text-white px-2 py-0.5 rounded-full"
                          >
                            {tech}
                          </CardItem>
                        ))}
                      </div>
                    </div>

                    {/* Fake Notch/Dynamic Island for Realism */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-neutral-800 mr-2" />
                        <div className="w-8 h-1 rounded-full bg-neutral-800" />
                    </div>
                  </div>

                  {/* External Link Button */}
                  {/* <CardItem
                    translateZ="60"
                    className="absolute top-6 right-6 z-40"
                  > */}
                    {/* on hovering the link the user should see the popup box saying live preview */}
                    
                    <div className="flex items-center justify-between mt-2.5 mx-auto w-full px-5">
                    <Link href={app.link} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center font-semibold text-[11px] px-2 py-0.5 gap-1 bg-primary/90 w-fit hover:bg-primary rounded-lg text-black  transition-colors">
                        <p>Live Demo</p>
                        <ExternalLink size={13} />
                    </div>
                    </Link>
                  {/* </CardItem> */}

                  {/* <CardItem
                    translateZ="60"
                    className="absolute top-6 left-7 z-40"
                  > */}
                    <Link href={app.repo_url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center font-semibold text-[11px] px-2 py-0.5 gap-1 bg-primary/90 w-fit hover:bg-primary rounded-lg text-black transition-colors">
                        {/* <FaGithub size={16} /> */}
                        <p>Github</p>
                         <SiGithub />
                    </div>
                    </Link>
                    </div>
                  {/* </CardItem> */}

                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Visual background flair to anchor the mobile theme */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] blur-[120px] -z-10 pointer-events-none" />
    </motion.section>
  );
}







// "use client";

// import * as React from "react";
// import Image from "next/image";
// import { Smartphone, Github, ExternalLink } from "lucide-react";
// import { motion, Variants, AnimatePresence } from "framer-motion";
// import {
//   CardBody,
//   CardContainer,
//   CardItem,
// } from "@/components/ui/3d-card";

// const mobileApps = [
//   {
//     title: "Safarnama",
//     description: "A destination discovery and booking app built for modern travelers.",
//     image: "/safarnama_splash.png",
//     github: "#",
//     demo: "#",
//     tech: ["React Native", "Expo", "Zustand"],
//   },
//   {
//     title: "Nova Wallet",
//     description: "Secure cryptocurrency wallet with multi-chain support and biometric auth.",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500",
//     github: "#",
//     demo: "#",
//     tech: ["Flutter", "Dart", "Web3.js"],
//   },
//   {
//     title: "ZenSpace",
//     description: "Mental wellness app featuring guided meditation and sleep sounds.",
//     image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=500",
//     github: "#",
//     demo: "#",
//     tech: ["Expo", "Redux", "Lottie"],
//   },
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const cardRevealVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.5 }
//   },
// };

// export default function MobileShowcase() {
//   const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

//   return (
//     <motion.section
//       id="projects"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       className="bg-transparent flex flex-col w-full max-w-4xl mx-auto justify-center py-16 md:py-24 px-5"
//     >
//       <div className="w-full">
//         {/* Section Header */}
//         <div className="flex items-center gap-3 mb-12">
//           <Smartphone className="text-primary w-8 h-8" />
//           <h2 className="text-3xl sm:text-4xl font-serif text-primary tracking-tight">
//             Mobile Experiences
//           </h2>
//         </div>

//         {/* Mobile App Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
//           {mobileApps.map((app, index) => (
//             <div 
//               key={index}
//               className="relative flex flex-col items-center"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <motion.div variants={cardRevealVariants} className="w-full">
//                 <CardContainer className="inter-var w-full">
//                   <CardBody
//                     className="
//                       relative group/card
//                       w-full aspect-[9/16]
//                       rounded-[2.5rem]
//                       p-3
//                       flex flex-col
//                       bg-neutral-900/50
//                       backdrop-blur-md
//                       border-[6px] border-neutral-800/80
//                       hover:border-primary/30
//                       transition-all duration-500
//                       shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]
//                       overflow-hidden
//                     "
//                   >
//                     {/* Phone Screen Mockup */}
//                     <div className="relative w-full h-full overflow-hidden rounded-[1.8rem] bg-neutral-950">
//                       <CardItem translateZ="60" className="w-full h-full">
//                         <Image
//                           src={app.image}
//                           alt={app.title}
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                       </CardItem>

//                       {/* Notch */}
//                       <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-center">
//                         <div className="w-1 h-1 rounded-full bg-neutral-800 mr-2" />
//                         <div className="w-8 h-1 rounded-full bg-neutral-800" />
//                       </div>
//                     </div>
//                   </CardBody>
//                 </CardContainer>
//               </motion.div>

//               {/* POPUP PANEL BELOW CARD */}
//               <AnimatePresence>
//                 {hoveredIndex === index && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 10, scale: 1 }}
//                     exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                     className="absolute top-full left-0 right-0 z-50 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl backdrop-blur-xl"
//                   >
//                     <h3 className="text-lg font-bold text-white mb-1">{app.title}</h3>
//                     <p className="text-xs text-gray-400 mb-4 leading-relaxed">
//                       {app.description}
//                     </p>
                    
//                     <div className="flex items-center gap-2">
//                       <a 
//                         href={app.demo}
//                         className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-black text-[10px] font-bold py-2 rounded-lg hover:opacity-90 transition-opacity"
//                       >
//                         <ExternalLink size={12} /> DEMO
//                       </a>
//                       <a 
//                         href={app.github}
//                         className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 border border-white/10 text-white text-[10px] font-bold py-2 rounded-lg hover:bg-white/10 transition-colors"
//                       >
//                         <Github size={12} /> GITHUB
//                       </a>
//                     </div>

//                     {/* Tech tags inside popup */}
//                     <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-white/5">
//                         {app.tech.map((t, i) => (
//                             <span key={i} className="text-[8px] text-primary/70 uppercase tracking-widest font-medium">{t}</span>
//                         ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] blur-[120px] -z-10 pointer-events-none" />
//     </motion.section>
//   );
// }