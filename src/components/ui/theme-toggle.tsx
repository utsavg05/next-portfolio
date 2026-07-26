"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="h-[1.1rem] w-[1.1rem]" />
      </button>
    );
  }

  return (
    <AnimatedThemeToggler
      aria-label="Toggle theme"
      variant="hexagon"
      duration={600}
      fromCenter
      theme={isDark ? "dark" : "light"}
      onThemeChange={(nextTheme) => setTheme(nextTheme)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&>svg]:h-[1.1rem] [&>svg]:w-[1.1rem]"
    />
  );
}
