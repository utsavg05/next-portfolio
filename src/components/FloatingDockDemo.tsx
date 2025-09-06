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
            href: "/",
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
            href: "/resume.pdf", // place your resume in /public folder
            download: true,
        },
        {
            title: "X",
            icon: (
                <IconBrandX className="h-full w-full text-foreground hover:text-primary transition-colors" />
            ),
            href: "https://x.com/0xdevug", // replace with your handle
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-foreground hover:text-primary transition-colors" />
            ),
            href: "https://github.com/utsavg05", // replace
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-foreground hover:text-primary transition-colors" />
            ),
            href: "https://www.linkedin.com/in/utsav-gupta-3443a0324e", // replace
        },

    ];

    return (
        //     <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        //         <div
        //             className="
        //   px-2
        //   rounded-2xl 
        //   shadow-lg 
        //   backdrop-blur-xl 
        //   border border-white/20 
        //   bg-gradient-to-r from-white/15 to-white/5 
        //   dark:from-white/10 dark:to-white/5
        // "
        //         >
        //             <FloatingDock
        //                 mobileClassName="translate-y-20"
        //                 items={links}
        //             />
        //         </div>
        //     </div>

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"> <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl px-2 shadow-lg">
            <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
        </div>

    );
}
