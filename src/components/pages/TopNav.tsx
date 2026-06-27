"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/app/icon.png";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0A0A0A] ">
      <div className="w-full max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo / Home */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image
            src={logo}
            alt="Home"
            width={39}
            height={35}
            className="rounded-sm"
            priority
          />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm md:text-base font-medium transition-colors pb-0.5",
                  isActive
                    ? "text-white border-b-3 rounded-l-xs rounded-r-xs border-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
