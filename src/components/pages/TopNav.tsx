"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/app/icon.png";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background border-b border-transparent dark:border-transparent">
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
                    ? "text-foreground border-b-3 rounded-l-xs rounded-r-xs border-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
