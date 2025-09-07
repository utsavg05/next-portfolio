// "use client";

// import React from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import {
//     IconHome,
//     IconFolder,
//     IconBrandX,
//     IconBrandGithub,
//     IconBrandLinkedin,
//     IconFileDownload,
// } from "@tabler/icons-react";

// export function FloatingDockDemo() {
//     const links = [
//         {
//             title: "Home",
//             icon: (
//                 <IconHome className="h-full w-full text-foreground hover:text-primary transition-colors" />
//             ),
//             href: "/",
//         },
//         {
//             title: "Projects",
//             icon: (
//                 <IconFolder className="h-full w-full text-foreground hover:text-primary transition-colors" />
//             ),
//             href: "#projects",
//         },
//         {
//             title: "Resume",
//             icon: (
//                 <IconFileDownload className="h-full w-full text-foreground hover:text-primary transition-colors" />
//             ),
//             href: "/Resume_Copy_(7).pdf", // place your resume in /public folder
//             download: true,
//             target: "_blank"
//         },
//         {
//             title: "X",
//             icon: (
//                 <IconBrandX className="h-full w-full text-foreground hover:text-primary transition-colors" />
//             ),
//             href: "https://x.com/0xdevug", // replace with your handle
//         },
//         {
//             title: "GitHub",
//             icon: (
//                 <IconBrandGithub className="h-full w-full text-foreground hover:text-primary transition-colors" />
//             ),
//             href: "https://github.com/utsavg05", // replace
//         },
//         {
//             title: "LinkedIn",
//             icon: (
//                 <IconBrandLinkedin className="h-full w-full text-foreground hover:text-primary transition-colors" />
//             ),
//             href: "https://www.linkedin.com/in/utsav-gupta-3443a0324e", // replace
//         },

//     ];

//     return (
//         <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
//             <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl px-2 shadow-lg">
//                 <FloatingDock mobileClassName="translate-y-20" items={links} />
//             </div>
//         </div>

//     );
// }




"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconFolder,
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileDownload,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "#projects",
    },
    {
      title: "Resume",
      icon: (
        <IconFileDownload className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "/Resume_Copy_(7).pdf", // Place your resume inside /public
      download: true,
      target: "_blank",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "https://x.com/0xdevug",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "https://github.com/utsavg05",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "https://www.linkedin.com/in/utsav-gupta-3443a0324e",
    },
  ];

  return (
    <div className="fixed bottom-8 right-2 md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-50 w-fit px-4 sm:px-6 md:px-0">
      <FloatingDock
        mobileClassName=""
        items={links}
      />
      {/* <div className="max-w-fit mx-auto backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl px-3 shadow-lg">
        
      </div> */}
    </div>
  );
}
