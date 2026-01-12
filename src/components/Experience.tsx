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



"use client";

import { GraduationCap, Building2, Calendar, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const timeline = [
    {
      type: "education",
      title: "B.Tech in Information Technology",
      place: "Bharati Vidyapeeth's College of Engineering, New Delhi",
      duration: "2023 – 2027",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
    },
    {
      type: "experience",
      title: "Software Development Intern",
      place: "FoundersCart Pvt. Ltd.",
      duration: "June – July 2025",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      details: [
        "Integrated IVR system with CRM platforms for call automation.",
        "Built a Chrome Extension softphone widget for click-to-call inside CRM.",
        "Developed backend APIs for syncing call logs with CRM systems.",
        "Worked on AI-powered assistant integration for smarter workflows.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-16 px-4 bg-background text-foreground mb-6 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl sm:text-3xl font-serif text-primary mb-10 sm:mb-12">
        My Journey
      </h1>

      {/* Timeline */}
      <div className="relative border-l border-border pl-4 sm:pl-6 space-y-10 sm:space-y-12">
        {timeline.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col sm:flex-row sm:items-start sm:gap-6"
          >
            {/* Icon bubble */}
            <span className="absolute -left-[26px] sm:-left-[38px] flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background border border-border shadow-md">
              {item.icon}
            </span>

            {/* Glass Card */}
            <div
              className="
                relative
                w-full sm:max-w-[560px]

                rounded-sm
                p-4 sm:p-6

                backdrop-blur-xl
                bg-[rgba(255,255,255,0.02)]
                border border-white/10

                shadow-sm
                hover:shadow-2xl hover:shadow-primary/20
                transition-shadow

                flex flex-col
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <Building2 className="w-4 h-4" />
                {item.place}
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4" />
                {item.duration}
              </p>

              {item.details && (
                <ul className="list-disc pl-4 sm:pl-5 mt-4 space-y-1 text-xs sm:text-sm text-muted-foreground">
                  {item.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
