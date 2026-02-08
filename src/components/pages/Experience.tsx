// "use client";
// import { GraduationCap, Building2, Calendar, Briefcase } from "lucide-react";

// export default function ExperiencePage() {
//   const timeline = [
//     {
//       type: "education",
//       title: "B.Tech in Information Technology",
//       place: "Bharati Vidyapeeth's College of Engineering, New Delhi",
//       duration: "2023 – 2027",
//       icon: <GraduationCap className="w-6 h-6 text-primary" />,
//     },
//     {
//       type: "experience",
//       title: "Software Development Intern",
//       place: "FoundersCart Pvt. Ltd.",
//       duration: "June – July 2025",
//       icon: <Briefcase className="w-6 h-6 text-primary" />,
//       details: [
//         "Integrated IVR system with CRM platforms for call automation.",
//         "Built a Chrome Extension softphone widget for click-to-call inside CRM.",
//         "Developed backend APIs for syncing call logs with CRM systems.",
//         "Worked on AI-powered assistant integration for smarter workflows.",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="w-full py-16 px-4 bg-background text-foreground mb-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl sm:text-3xl font-serif text-primary mb-10 sm:mb-12">
//         My Journey
//       </h1>

//       <div className="relative border-l border-border pl-4 sm:pl-6 space-y-10 sm:space-y-12">
//         {timeline.map((item, idx) => (
//           <div key={idx} className="relative flex flex-col sm:flex-row sm:items-start sm:gap-6">
//             {/* Icon bubble */}
//             <span className="absolute -left-[26px] sm:-left-[38px] flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-card border border-border shadow-md">
//               {item.icon}
//             </span>

//             {/* Card */}
//             {/* <div className="bg-card/50 border border-border rounded-sm sm:rounded-sm p-4 sm:p-6 shadow-sm hover:shadow-md transition w-fit">
//               <h3 className="text-lg sm:text-xl font-semibold text-foreground">
//                 {item.title}
//               </h3>
//               <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
//                 <Building2 className="w-4 h-4" /> {item.place}
//               </p>
//               <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
//                 <Calendar className="w-4 h-4" /> {item.duration}
//               </p>

//               {item.details && (
//                 <ul className="list-disc pl-4 sm:pl-5 mt-3 space-y-1 text-xs sm:text-sm text-muted-foreground">
//                   {item.details.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               )}
//             </div> */}
//             <div
//               className="
//     relative
//     h-full
//     w-full

//     rounded-sm
//     p-4 sm:p-6

//     backdrop-blur-xl
//     bg-[rgba(255,255,255,0.02)]
//     border border-white/10

//     shadow-sm
//     hover:shadow-2xl hover:shadow-primary/20
//     transition-shadow

//     flex flex-col
//   "
//             >
//               <h3 className="text-lg sm:text-xl font-semibold text-foreground">
//                 {item.title}
//               </h3>

//               <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
//                 <Building2 className="w-4 h-4" /> {item.place}
//               </p>

//               <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
//                 <Calendar className="w-4 h-4" /> {item.duration}
//               </p>

//               {item.details && (
//                 <ul className="list-disc pl-4 sm:pl-5 mt-3 space-y-1 text-xs sm:text-sm text-muted-foreground">
//                   {item.details.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client";

// import { GraduationCap, Building2, Calendar, Briefcase } from "lucide-react";

// export default function ExperiencePage() {
//   const timeline = [
//     {
//       type: "education",
//       title: "B.Tech in Information Technology",
//       place: "Bharati Vidyapeeth's College of Engineering, New Delhi",
//       duration: "2023 – 2027",
//       icon: <GraduationCap className="w-6 h-6 text-primary" />,
//     },
//     {
//       type: "experience",
//       title: "Software Development Intern",
//       place: "FoundersCart Pvt. Ltd.",
//       duration: "June – July 2025",
//       icon: <Briefcase className="w-6 h-6 text-primary" />,
//       details: [
//         "Integrated IVR system with CRM platforms for call automation.",
//         "Built a Chrome Extension softphone widget for click-to-call inside CRM.",
//         "Developed backend APIs for syncing call logs with CRM systems.",
//         "Worked on AI-powered assistant integration for smarter workflows.",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="w-full py-16 px-4 bg-background text-foreground mb-6 max-w-4xl mx-auto"
//     >
//       <h1 className="text-3xl sm:text-3xl font-serif text-primary mb-10 sm:mb-12">
//         My Journey
//       </h1>

//       {/* Timeline */}
//       <div className="relative border-l border-border pl-4 sm:pl-6 space-y-10 sm:space-y-12">
//         {timeline.map((item, idx) => (
//           <div
//             key={idx}
//             className="relative flex flex-col sm:flex-row sm:items-start sm:gap-6"
//           >
//             {/* Icon bubble */}
//             <span className="absolute -left-[26px] sm:-left-[38px] flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background border border-border shadow-md">
//               {item.icon}
//             </span>

//             {/* Glass Card */}
//             <div
//               className="
//                 relative
//                 w-full sm:max-w-[560px]

//                 rounded-sm
//                 p-4 sm:p-6

//                 backdrop-blur-xl
//                 bg-[rgba(255,255,255,0.02)]
//                 border border-white/10

//                 shadow-sm
//                 hover:shadow-2xl hover:shadow-primary/20
//                 transition-shadow

//                 flex flex-col
//               "
//             >
//               <h3 className="text-lg sm:text-xl font-semibold text-foreground">
//                 {item.title}
//               </h3>

//               <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
//                 <Building2 className="w-4 h-4" />
//                 {item.place}
//               </p>

//               <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
//                 <Calendar className="w-4 h-4" />
//                 {item.duration}
//               </p>

//               {item.details && (
//                 <ul className="list-disc pl-4 sm:pl-5 mt-4 space-y-1 text-xs sm:text-sm text-muted-foreground">
//                   {item.details.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import { GraduationCap, Building2, Calendar, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ExperiencePage() {
  const timeline = [
    {
      type: "education",
      title: "B.Tech in Information Technology",
      place: "Bharati Vidyapeeth's College of Engineering, New Delhi",
      duration: "2023 – 2027",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    },
    {
      type: "experience",
      title: "Software Development Intern",
      place: "FoundersCart Pvt. Ltd.",
      duration: "June – July 2025",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      details: [
        "Integrated IVR system with CRM platforms for call automation.",
        "Built a Chrome Extension softphone widget for click-to-call inside CRM.",
        "Developed backend APIs for syncing call logs with CRM systems.",
        "Worked on AI-powered assistant integration for smarter workflows.",
      ],
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 } 
    },
  };

  return (
    <motion.section
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-16 px-4 bg-background text-foreground mb-6 max-w-4xl mx-auto"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-3xl sm:text-3xl font-serif text-primary mb-10 sm:mb-12"
      >
        My Journey
      </motion.h1>

      {/* Timeline */}
      <div className="relative border-l border-border pl-4 sm:pl-6 space-y-10 sm:space-y-12">
        {/* Animated Line Progress (Optional visual flair) */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-primary origin-top opacity-30"
        />

        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative flex flex-col sm:flex-row sm:items-start sm:gap-6"
          >
            {/* Icon bubble */}
            <motion.span 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute -left-[26px] sm:-left-[38px] z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background border border-border shadow-md"
            >
              {item.icon}
            </motion.span>

            {/* Glass Card */}
            <motion.div
              whileHover={{ 
                y: -5,
                borderColor: "rgba(var(--primary-rgb), 0.4)", // Assumes primary color is defined in RGB for opacity
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3), 0 0 20px -5px rgba(var(--primary-rgb), 0.2)"
              }}
              className="
                relative
                w-full sm:max-w-[560px]
                rounded-lg
                p-4 sm:p-6
                backdrop-blur-xl
                bg-white/[0.03]
                dark:bg-white/[0.01]
                border border-white/10
                transition-colors duration-300
                flex flex-col
                group
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              <div className="flex flex-col gap-1 mt-2">
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary/70" />
                  {item.place}
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary/70" />
                  {item.duration}
                </p>
              </div>

              {item.details && (
                <motion.ul 
                  variants={listVariants}
                  className="list-none mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground"
                >
                  {item.details.map((point, i) => (
                    <motion.li 
                      key={i} 
                      variants={bulletVariants}
                      className="flex gap-3"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
              
              {/* Subtle accent glow on bottom of card */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}