import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Utsav Gupta",
  description:
    "A collection of web apps, mobile apps, and everything in between — built by Utsav Gupta.",
  openGraph: {
    title: "All Projects | Utsav Gupta",
    description:
      "A collection of web apps, mobile apps, and everything in between — built by Utsav Gupta.",
    url: "https://www.utsavworks.in/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
