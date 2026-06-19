"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaGithub, FaLinkedin, FaFolder } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Home,
  Mail,
  Monitor,
  Smartphone,
  PenLine,
} from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "/#",
    },
    {
      title: "Web Apps",
      icon: (
        <Monitor className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "/projects#web-apps",
    },
    {
      title: "Mobile Apps",
      icon: (
        <Smartphone className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "/projects#mobile-apps",
    },
    {
      title: "Blog",
      icon: (
        <PenLine className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "/blog",
    },
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "https://github.com/utsavg05",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "https://www.linkedin.com/in/utsav-gupta-3443a0324e",
    },
    {
      title: "X",
      icon: (
        <FaXTwitter className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "https://x.com/0xdevug",
    },
    {
      title: "Email",
      icon: (
        <Mail className="h-full w-full text-foreground hover:text-primary transition-colors" />
      ),
      href: "mailto:work.utsavg21@gmail.com", // Place your resume inside /public
      download: true,
      target: "_blank",
    },
  ];

  return (
    <div className="fixed bottom-8 right-2 md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-50 w-fit px-4 sm:px-6 md:px-0">
      <FloatingDock
        mobileClassName="hidden"
        items={links}
      />
      {/* <div className="max-w-fit mx-auto backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl px-3 shadow-lg">
        
      </div> */}
    </div>
  );
}
