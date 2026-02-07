"use client";

import Link from "next/link";
import React from "react";
import {
  Home,
  Mail,
  Monitor,
  Smartphone,
} from "lucide-react"; // ✅ switched to lucide-react
import { FaGithub, FaLinkedin, FaFolder } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

const DATA = {
  navbar: [
    { href: "/#", icon: Home, label: "Home" },
    { href: "/#projects", icon: Monitor, label: "Web Apps" },
    { href: "/mobile-apps", icon: Smartphone, label: "Mobile Apps" },
  ],
  social: [
    { name: "GitHub", url: "https://github.com/utsavg05", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/utsav-gupta-3443a0324", icon: FaLinkedin },
    { name: "X", url: "https://x.com/0xdevug", icon: FaXTwitter }, // Lucide uses Twitter instead of X
    { name: "Email", url: "mailto:utsav.gp1204@gmail.com", icon: Mail },
  ],
};

export function DockDemo() {
  return (
    // <div className="fixed bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-50 w-fit py-0 px-2">
    //   <TooltipProvider>
    //     <Dock
    //       direction="middle"
    //       className={cn(
    //         "rounded-4xl relative mx-auto flex items-center px-3",
    //         "bg-background dark:bg-background",
    //         "[box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.08),0_12px_24px_rgba(0,0,0,.08)]",
    //         "dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
    //       )}
    //     >
    //       {DATA.navbar.map((item) => (
    //         <DockIcon key={item.label}>
    //           <Tooltip>
    //             <TooltipTrigger asChild>
    //               <Link
    //                 href={item.href}
    //                 aria-label={item.label}
    //                 className={cn(
    //                   buttonVariants({ variant: "ghost", size: "icon" }),
    //                   "size-12 rounded-full hover:bg-muted/40 transition"
    //                 )}
    //               >
    //                 <item.icon className="size-5 text-foreground" strokeWidth={2} />
    //               </Link>
    //             </TooltipTrigger>
    //             <TooltipContent side="top">
    //               <p>{item.label}</p>
    //             </TooltipContent>
    //           </Tooltip>
    //         </DockIcon>
    //       ))}

    //       <Separator orientation="vertical" className="h-full" />

    //       {DATA.social.map((social) => (
    //         <DockIcon key={social.name}>
    //           <Tooltip>
    //             <TooltipTrigger asChild>
    //               <Link
    //                 href={social.url}
    //                 aria-label={social.name}
    //                 target="_blank"
    //                 className={cn(
    //                   buttonVariants({ variant: "ghost", size: "icon" }),
    //                   "size-12 rounded-full hover:bg-muted/40 transition"
    //                 )}
    //               >
    //                 <social.icon className="size-5 text-foreground" strokeWidth={2} />
    //               </Link>
    //             </TooltipTrigger>
    //             <TooltipContent side="top">
    //               <p>{social.name}</p>
    //             </TooltipContent>
    //           </Tooltip>
    //         </DockIcon>
    //       ))}

    //       <Separator orientation="vertical" className="h-full" />

    //       <DockIcon>
    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <ModeToggle />
    //           </TooltipTrigger>
    //           <TooltipContent side="top">
    //             <p>Theme</p>
    //           </TooltipContent>
    //         </Tooltip>
    //       </DockIcon>
    //     </Dock>
    //   </TooltipProvider>
    // </div>

    <div className="md:hidden fixed bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 z-50 inline-flex px-2">
  <TooltipProvider>
    <Dock
      direction="middle"
      className={cn(
        "rounded-4xl relative flex items-center px-3",
        "bg-background dark:bg-background",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.08),0_12px_24px_rgba(0,0,0,.08)]",
        "dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      {DATA.navbar.map((item) => (
        <DockIcon key={item.label}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                aria-label={item.label}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full hover:bg-muted/40 transition"
                )}
              >
                <item.icon className="size-5 text-foreground" strokeWidth={2} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}

      {/* <Separator orientation="vertical" className="h-full" /> */}

      {DATA.social.map((social) => (
        <DockIcon key={social.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={social.url}
                aria-label={social.name}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full hover:bg-muted/40 transition"
                )}
              >
                <social.icon className="size-5 text-foreground" strokeWidth={2} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}

      {/* <Separator orientation="vertical" className="h-full" />
      <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
               </TooltipTrigger>
               <TooltipContent side="top">
                 <p>Theme</p>
               </TooltipContent>
             </Tooltip>
           </DockIcon> */}

      
    </Dock>
  </TooltipProvider>
</div>

  );
}
