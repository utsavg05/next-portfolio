"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Me" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-4xl mx-auto px-6 pt-6">
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
                  : "text-white"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
